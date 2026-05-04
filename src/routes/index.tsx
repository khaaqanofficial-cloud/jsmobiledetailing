import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";

import heroImg from "@/assets/hero-santafe.png";
import f350Side from "@/assets/portfolio-f350-side.png";
import f350Front from "@/assets/portfolio-f350-front.png";
import peterbilt from "@/assets/portfolio-peterbilt.png";
import santafe from "@/assets/hero-santafe.png";
import svcInterior from "@/assets/svc-interior.jpg";
import svcCeramic from "@/assets/svc-ceramic.jpg";
import svcPower from "@/assets/svc-power.jpg";
import svcSofa from "@/assets/svc-sofa.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JS Mobile Car Shampoo & Detailing — Allentown, PA | (484) 764-3361" },
      { name: "description", content: "Pro mobile detailing in Allentown, PA. Cars, trucks, semis, sofas & homes. We come to you. Same-day quotes." },
      { property: "og:title", content: "JS Mobile Car Shampoo & Detailing — Allentown, PA" },
      { property: "og:description", content: "Pro-grade mobile detailing at your driveway. Cars, trucks, semis, sofas & homes." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const PHONE = "(484) 764-3361";
const TEL = "tel:14847643361";
const SMS = "sms:14847643361";

const services = [
  { name: "Full Detail", icon: "✦" },
  { name: "Interior Shampoo", icon: "🧴", bg: svcInterior },
  { name: "Hand Wash & Wax", icon: "✺" },
  { name: "Paint Correction", icon: "◉" },
  { name: "Ceramic Coating", icon: "◈", bg: svcCeramic },
  { name: "Power Washing", icon: "⚡", bg: svcPower },
  { name: "Sofa & Upholstery", icon: "▤", bg: svcSofa },
  { name: "Commercial Vehicles", icon: "▶" },
];

const reviews = [
  { name: "Marisol Delgado", text: "Excellent service, very punctual, and responsible. He uses professional products. I don't regret getting my car detailed by him." },
  { name: "Wilson Velazquez", text: "JS Mobile Car Shampoo & Detailing services are second to none! Detailed, efficient, and meticulous. We've used them for car detailing, power washing our entire home including windows, cement patio and walkway, and sofa cleaning. Highly recommend!" },
  { name: "Hector Rodriguez Jr", text: "They do a great job detailing cars and much more! Highly recommend for your detailing needs. Super grateful for their amazing work!" },
];

const steps = [
  { n: "01", t: "BOOK", d: "Call, text, or fill the form. Fast response." },
  { n: "02", t: "WE COME TO YOU", d: "Driveway, parking lot, job site — we bring everything." },
  { n: "03", t: "WE DETAIL", d: "Pro-grade products, top to bottom." },
  { n: "04", t: "DRIVE OFF PROUD", d: "Showroom finish. Pay on completion." },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-app/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="JS Mobile Car Shampoo & Detailing" className="h-9 w-auto" />
        </a>
        <a href={TEL} className="bg-accent-blue text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-glow">
          📞 CALL NOW
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img src={heroImg} alt="Freshly detailed Hyundai Santa Fe" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 via-transparent to-[#080C14]/40" />

      {/* stamp */}
      <div className="absolute top-20 right-4 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-accent-blue/60 flex items-center justify-center text-center text-[9px] tracking-widest font-bold rotate-12">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
          <defs><path id="circ" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" /></defs>
          <text fill="#2A7FFF" fontSize="9" letterSpacing="2" fontFamily="Bebas Neue">
            <textPath href="#circ">LICENSED & INSURED · ALLENTOWN PA · </textPath>
          </text>
        </svg>
        <span className="font-display text-2xl text-accent-blue">JS</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 w-full">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest bg-white/5 border border-border px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          SERVING ALLENTOWN, PA & SURROUNDING AREAS
        </span>
        <h1 className="mt-5 font-display text-5xl sm:text-7xl leading-[0.95] tracking-tight">
          PROFESSIONAL <span className="text-accent-blue">MOBILE</span> DETAILING.<br />
          WE COME TO YOU.
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80">
          Cars, trucks, semis, sofas, and homes — pro-grade results at your driveway.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a href={TEL} className="bg-accent-blue text-white font-bold tracking-wide px-6 py-4 rounded-xl text-center shadow-glow">
            📞 CALL NOW
          </a>
          <a href="#book" className="border border-white/30 text-white font-bold tracking-wide px-6 py-4 rounded-xl text-center hover:bg-white/5">
            📅 BOOK ONLINE
          </a>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/70 font-medium">
          <span>⭐ <b className="text-white">5.0 RATED</b></span>
          <span>✓ FULLY MOBILE</span>
          <span>✓ SAME-DAY QUOTES</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-5">
      <div className="mx-auto max-w-6xl">
        <p className="text-accent-blue font-bold tracking-widest text-xs">WHAT WE DO</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2">SERVICES BUILT DIFFERENT</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {services.map((s) => (
            <div key={s.name} className="relative overflow-hidden rounded-xl border border-border bg-surface aspect-square sm:aspect-[4/3] p-4 sm:p-5 flex flex-col justify-end">
              {s.bg && (
                <>
                  <img src={s.bg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/70 to-transparent" />
                </>
              )}
              <div className="relative">
                <div className="text-accent-blue text-2xl sm:text-3xl mb-2">{s.icon}</div>
                <div className="font-display text-lg sm:text-2xl leading-tight">{s.name.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="py-20 px-5 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-3xl">
        <p className="text-accent-blue font-bold tracking-widest text-xs">DRAG TO COMPARE</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2 mb-8">THE JS DIFFERENCE</h2>
        <BeforeAfter />
      </div>
    </section>
  );
}

function Portfolio() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = [
    { src: f350Front, label: "FULL DETAIL — FORD F-350 LIFTED", wide: true },
    { src: f350Side, label: "EXTERIOR DETAIL — FORD F-350" },
    { src: santafe, label: "FULL DETAIL — HYUNDAI SANTA FE" },
    { src: peterbilt, label: "COMMERCIAL DETAIL — PETERBILT SEMI", wide: true },
  ];
  return (
    <section id="portfolio" className="py-20 px-5">
      <div className="mx-auto max-w-6xl">
        <p className="text-accent-blue font-bold tracking-widest text-xs">PORTFOLIO</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2">RIDES & MORE WE'VE TRANSFORMED</h2>
        <p className="text-white/70 mt-3 max-w-xl">From daily drivers to lifted trucks to 18-wheelers — no job too big.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {items.map((it) => (
            <button
              key={it.label}
              onClick={() => setLightbox(it.src)}
              className={`group relative overflow-hidden rounded-xl border border-border ${it.wide ? "col-span-2" : ""}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" className={`w-full ${it.wide ? "aspect-[16/9]" : "aspect-square"} object-cover transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-left text-[11px] sm:text-xs font-bold tracking-widest text-accent-blue">
                {it.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <img src={lightbox} alt="" className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-accent-blue font-bold tracking-widest text-xs">5.0 · VERIFIED REVIEWS</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2">WHAT CLIENTS SAY</h2>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 pb-4">
        {reviews.map((r) => (
          <div key={r.name} className="snap-start shrink-0 w-[85%] sm:w-[420px] bg-surface border border-border rounded-2xl p-6">
            <div className="text-accent-blue text-lg">★★★★★</div>
            <p className="mt-3 text-white/90 leading-relaxed text-sm">"{r.text}"</p>
            <p className="mt-4 font-display tracking-wider text-accent-blue">{r.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-20 px-5">
      <div className="mx-auto max-w-6xl">
        <p className="text-accent-blue font-bold tracking-widest text-xs">PROCESS</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2 mb-8">HOW IT WORKS</h2>
        
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {steps.map((s) => (
            <div key={s.n} className="border border-border bg-surface rounded-xl p-5">
              <div className="font-display text-4xl text-accent-blue">{s.n}</div>
              <div className="font-display text-xl mt-1">{s.t}</div>
              <p className="text-white/70 text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="py-20 px-5 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-2xl">
        <p className="text-accent-blue font-bold tracking-widest text-xs">RESERVE</p>
        <h2 className="font-display text-4xl sm:text-6xl mt-2">BOOK YOUR DETAIL</h2>
        <p className="text-white/70 mt-3">Same-day quotes available.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a href={TEL} className="bg-accent-blue text-white font-bold px-5 py-4 rounded-xl text-center shadow-glow">
            📞 {PHONE}
          </a>
          <a href={SMS} className="border border-white/30 text-white font-bold px-5 py-4 rounded-xl text-center">
            💬 TEXT FOR QUICK QUOTES
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-8 grid gap-3"
        >
          <input required placeholder="Full Name" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
          <div className="grid sm:grid-cols-2 gap-3">
            <input required type="tel" placeholder="Phone" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
            <input type="email" placeholder="Email" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
          </div>
          <input placeholder="Vehicle Type (e.g. Ford F-150)" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
          <select required defaultValue="" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm">
            <option value="" disabled>Service Needed</option>
            {services.map((s) => <option key={s.name}>{s.name}</option>)}
          </select>
          <input type="date" className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
          <textarea placeholder="Additional Notes" rows={3} className="bg-surface border border-border rounded-lg px-4 py-3 text-sm" />
          <button type="submit" className="bg-accent-blue text-white font-display tracking-widest text-lg px-5 py-4 rounded-xl shadow-glow">
            {sent ? "✓ REQUEST SENT" : "RESERVE MY DETAIL"}
          </button>
          <p className="text-center text-white/60 text-sm">Or call/text: <a href={TEL} className="text-accent-blue font-bold">{PHONE}</a></p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-5 border-t border-border">
      <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="JS Mobile Car Shampoo & Detailing" className="h-12 w-auto" />
          <p className="text-white/60 text-sm mt-3">Pro-grade mobile detailing serving Allentown, PA & surrounding areas.</p>
        </div>
        <div>
          <p className="font-display tracking-widest text-accent-blue text-sm">EXPLORE</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#book">Book Now</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-widest text-accent-blue text-sm">CONTACT</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>1627 Hanover Ave</li>
            <li>Allentown, PA 18109</li>
            <li><a href={TEL} className="text-white font-bold">{PHONE}</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/40">© {new Date().getFullYear()} JS Mobile Car Shampoo & Detailing LLC</p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-app text-white">
      <Header />
      <Hero />
      <Services />
      <Difference />
      <Portfolio />
      <Reviews />
      <HowItWorks />
      <Booking />
      <Footer />
    </main>
  );
}
