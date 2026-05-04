import { useEffect, useRef, useState } from "react";

import beforeImg from "@/assets/before-interior.jpg";
import afterImg from "@/assets/after-interior.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => { if (dragging.current) move(e.clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border select-none touch-none cursor-ew-resize"
      onPointerDown={(e) => { dragging.current = true; move(e.clientX); }}
    >
      <img src={afterImg} alt="After detail" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={beforeImg} alt="Before detail" className="absolute inset-0 h-full w-auto max-w-none object-cover" style={{ width: `${(100 / pos) * 100}%` }} draggable={false} />
      </div>
      <span className="absolute top-3 left-3 text-[11px] font-bold tracking-widest bg-black/70 text-white px-2 py-1 rounded">BEFORE</span>
      <span className="absolute top-3 right-3 text-[11px] font-bold tracking-widest bg-accent-blue text-white px-2 py-1 rounded">AFTER</span>
      <div className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none" style={{ left: `${pos}%` }} />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-glow flex items-center justify-center"
        style={{ left: `${pos}%` }}
      >
        <span className="text-accent-blue font-bold text-lg">⇆</span>
      </div>
    </div>
  );
}
