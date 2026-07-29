import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-plasma.jpg";
import plasmaImg from "../assets/service-plasma.jpg";
import weldImg from "../assets/service-welding.jpg";
import powderImg from "../assets/service-powder.jpg";
import gateImg from "../assets/work-gate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thor Fabrication | Custom Metalwork, CNC Plasma & Powder Coating" },
      { name: "description", content: "Design, cut, weld, finish — under one roof. Custom gates, railings, brackets, signage and ornamental steelwork from a one-stop fabrication shop." },
      { property: "og:title", content: "Thor Fabrication | Built Strong. Engineered Right." },
      { property: "og:description", content: "Custom CNC plasma cutting, metal fabrication, and in-house powder coating." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Plasma cutter throwing sparks" width={1920} height={1280} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-[0.15]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-4 py-2 mb-8">
              <span className="h-2 w-2 bg-primary animate-pulse" />
              <span className="font-display text-xs tracking-[0.25em] text-primary">CUSTOM METAL FABRICATION</span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-foreground">
              Built Strong.<br/>
              <span className="text-primary">Engineered Right.</span><br/>
              <span className="text-stroke">Made to Last.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Precision CNC plasma cutting, hands-on welding, and in-house powder coating —
              from custom gates and railings to brackets, signage and ornamental steelwork. One shop. No subcontracting.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display tracking-widest text-primary-foreground hover:brightness-110 transition cut-corner">
                Request a Quote
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 border border-border bg-card/60 backdrop-blur px-8 py-4 font-display tracking-widest text-foreground hover:bg-card transition cut-corner">
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-primary mb-3">/ WHAT WE DO</div>
              <h2 className="font-display text-5xl md:text-6xl text-foreground max-w-2xl">Three capabilities. <span className="text-primary">One shop.</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Most shops outsource finishing. We don't. Everything from digital design to a coated, ready-to-install piece happens under our roof.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { img: plasmaImg, num: "01", title: "CNC Plasma Cutting", desc: "Precision cuts on sheet and plate steel, aluminum, and other metals from your DXF/DWG files — or ours." },
              { img: weldImg, num: "02", title: "Custom Fabrication", desc: "Design-build and welding for gates, railings, brackets, flower stands, furniture and ornamental steelwork." },
              { img: powderImg, num: "03", title: "Powder Coating", desc: "In-house prep and finishing in your choice of color and texture — durable, weather-tough, made to last." },
            ].map((s) => (
              <div key={s.num} className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300 cut-corner">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-primary text-2xl">{s.num}</span>
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SPLIT */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 -z-10" />
            <img src={gateImg} alt="Ornamental wrought iron gate at sunset" loading="lazy" width={1200} height={900} className="w-full object-cover cut-corner" />
          </div>
          <div>
            <div className="font-display text-xs tracking-[0.3em] text-primary mb-3">/ THE THOR DIFFERENCE</div>
            <h2 className="font-display text-5xl text-foreground leading-tight">From a digital file to a <span className="text-primary">finished piece.</span></h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              When a job is split across three vendors, lead times stretch and quality drifts. We control every stage — design, cut, weld, blast, coat — so your piece arrives on time and built to spec.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Tight tolerances and repeatable parts",
                "No subcontracting — faster turnaround",
                "Custom designs welcome — bring a sketch or a file",
                "Finished in your color, ready to install",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-10 inline-flex items-center gap-2 font-display tracking-widest text-primary hover:gap-4 transition-all">
              Explore Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="font-display text-xs tracking-[0.3em] text-primary mb-3">/ WHO WE BUILD FOR</div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">From driveways to job sites.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Homeowners", d: "Custom gates, railings, fencing and ornamental pieces." },
              { t: "Contractors", d: "Structural brackets, stairs, railings and architectural components." },
              { t: "Other Shops", d: "Cutting and powder coating as a standalone subcontracted service." },
              { t: "Small Business", d: "Custom signage, fixtures and branded metal décor." },
            ].map((c) => (
              <div key={c.t} className="bg-card border border-border p-8 hover:border-primary transition group cut-corner">
                <div className="h-1 w-12 bg-primary mb-6 group-hover:w-20 transition-all" />
                <h3 className="font-display text-xl text-foreground mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl relative overflow-hidden cut-corner">
          <div className="bg-diagonal absolute inset-0 opacity-50" />
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 p-12 md:p-20 cut-corner">
            <div className="max-w-3xl">
              <h2 className="font-display text-5xl md:text-6xl text-primary-foreground leading-tight">Got a project? <br/>Let's build it.</h2>
              <p className="mt-6 text-primary-foreground/90 text-lg max-w-xl">
                Send a sketch, a file, or a description. We'll quote it quickly and tell you exactly when it'll be ready.
              </p>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-display tracking-widest hover:bg-foreground hover:text-background transition cut-corner">
                Start a Quote <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
