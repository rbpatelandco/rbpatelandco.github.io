import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  ShieldCheck,
  Check,
  Quote,
  Mail,
  MapPin,
  Menu,
  X,
  Globe2,
  Users,
  Clock,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Web Application Engineering",
    desc: "Production-grade React, Next.js, Node.js and Python back-ends engineered for scale, maintainability and measurable throughput.",
    span: "md:col-span-7",
    stack: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native iOS, Android and cross-platform apps with React Native and Flutter.",
    span: "md:col-span-5",
    stack: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    icon: Cpu,
    title: "AI & Data Engineering",
    desc: "LLM pipelines, RAG systems, vector stores and ML integrations wired into your existing product surface.",
    span: "md:col-span-5",
    stack: ["OpenAI", "LangChain", "Vector DB", "PyTorch"],
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & SRE",
    desc: "AWS, GCP, Azure infrastructure as code, CI/CD pipelines, Kubernetes orchestration and observability stacks.",
    span: "md:col-span-7",
    stack: ["AWS", "GCP", "Terraform", "Kubernetes", "Docker"],
  },
  {
    icon: Palette,
    title: "Product Design & UI Engineering",
    desc: "Design systems, pixel-accurate component libraries and interaction layers.",
    span: "md:col-span-6",
    stack: ["Figma", "Tailwind", "Shadcn"],
  },
  {
    icon: ShieldCheck,
    title: "QA & Test Automation",
    desc: "End-to-end test suites, performance benchmarks and release-gate automation.",
    span: "md:col-span-6",
    stack: ["Playwright", "Cypress", "Jest", "k6"],
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Share your requirement",
    desc: "Send role description, tech stack, seniority and time-zone overlap needed. We respond within 24 hours.",
  },
  {
    n: "02",
    title: "Receive curated profiles",
    desc: "Within 48–72 hours we send a shortlist of pre-vetted engineers matched to your brief.",
  },
  {
    n: "03",
    title: "Interview directly",
    desc: "You run your own technical interview — live coding, system design, culture fit. No compromise.",
  },
  {
    n: "04",
    title: "Onboard in days",
    desc: "Engineer joins your tooling, stand-ups and sprints as a dedicated, full-time extension of your team.",
  },
];

const PORTFOLIO = [
  {
    tag: "SaaS Platform",
    title: "Multi-tenant billing engine for a US fintech",
    desc: "Rebuilt a legacy Rails billing system into a Python micro-service stack handling 9M+ invoices/month with sub-200ms p99.",
    img: "https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVycyUyMG9mZmljZSUyMGNvbGxhYm9yYXRpbmd8ZW58MHx8fHwxNzc3MDEyNzQxfDA&ixlib=rb-4.1.0&q=85",
    meta: "6 engineers · 14 months",
  },
  {
    tag: "AI Product",
    title: "RAG-powered support copilot for a European SaaS",
    desc: "Shipped a production LLM assistant over a 240k-document knowledge base, cutting first-response time by 64%.",
    img: "https://images.unsplash.com/photo-1564130539941-dc281d306a05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHdoaXRlJTIwZ2VvbWV0cmljJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3NzAxMjc1NHww&ixlib=rb-4.1.0&q=85",
    meta: "3 engineers · 7 months",
  },
  {
    tag: "Mobile App",
    title: "Cross-platform fleet operations app — Australia",
    desc: "React Native app and Node.js backend for real-time vehicle telemetry across 1,200+ units nationwide.",
    img: "https://images.unsplash.com/photo-1770816305998-57eec25ac2d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHdoaXRlJTIwZ2VvbWV0cmljJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3NzAxMjc1NHww&ixlib=rb-4.1.0&q=85",
    meta: "4 engineers · 9 months",
  },
  {
    tag: "Platform Modernisation",
    title: "Monolith-to-microservices migration — UK scale-up",
    desc: "Strangler-pattern migration of a 400k-LOC PHP monolith to a Go/Node service mesh on GKE.",
    img: "https://images.pexels.com/photos/19805885/pexels-photo-19805885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    meta: "8 engineers · 18 months",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We interviewed three of their engineers and hired two the same week. A year in, they outperform the average on our own US engineering team. QuantumTree has changed how we think about offshore hiring.",
    name: "Head of Engineering",
    role: "Series B SaaS · San Francisco",
  },
  {
    quote:
      "The vetting is genuine. No inflated résumés, no bait-and-switch. What you interview is what you get — and they work in our time zone without complaint.",
    name: "CTO",
    role: "Fintech · London",
  },
  {
    quote:
      "Three dedicated engineers became an indistinguishable part of our product team within a month. Code reviews, Slack banter, on-call — all of it.",
    name: "VP Product",
    role: "Healthtech · Berlin",
  },
];

const STATS = [
  { value: "80+", label: "Engineers on bench" },
  { value: "14", label: "Countries served" },
  { value: "96%", label: "Interview-to-hire match" },
  { value: "24h", label: "First response SLA" },
];

// --- Header ---
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2 font-display font-black text-xl tracking-tighter text-zinc-900"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#002FA7]" />
          QuantumTree
          <span className="text-zinc-400 font-medium text-sm tracking-normal ml-1">
            Tech LLP
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="header-cta-button"
          className="hidden lg:inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 text-sm font-semibold tracking-wide hover:bg-[#002FA7] transition-colors duration-200"
        >
          Hire engineers <ArrowUpRight className="w-4 h-4" />
        </a>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 text-zinc-900"
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-white border-t border-zinc-200"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-zinc-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-3 text-sm font-semibold"
            >
              Hire engineers <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Hero ---
const Hero = () => (
  <section
    id="top"
    data-testid="hero-section"
    className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden"
  >
    <div
      className="absolute inset-0 -z-10 opacity-80"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1770816305998-57eec25ac2d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHdoaXRlJTIwZ2VvbWV0cmljJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3NzAxMjc1NHww&ixlib=rb-4.1.0&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/40" />

    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="max-w-4xl">
        <p
          data-testid="hero-overline"
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#002FA7] mb-8 fade-up"
        >
          QuantumTree Tech LLP · India
        </p>
        <h1
          data-testid="hero-heading"
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] text-zinc-900 fade-up fade-up-delay-1"
        >
          Dedicated engineers
          <br />
          for global
          <br />
          <span className="text-[#002FA7]">software companies.</span>
        </h1>
        <p
          data-testid="hero-subheading"
          className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-600 leading-relaxed fade-up fade-up-delay-2"
        >
          We place pre-vetted, full-time software engineers inside product teams at software
          companies across the US, EU, UK and ANZ — and you interview every candidate before you
          hire.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 fade-up fade-up-delay-3">
          <a
            href="#contact"
            data-testid="hero-primary-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#002FA7] text-white px-8 py-4 font-bold tracking-wide hover:bg-[#00207A] transition-colors duration-200"
          >
            Request engineers <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how"
            data-testid="hero-secondary-cta"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-300 px-8 py-4 font-bold tracking-wide hover:bg-zinc-50 transition-colors duration-200"
          >
            How it works
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500 fade-up fade-up-delay-4">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#002FA7]" /> Interview before you hire
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#002FA7]" /> Overlapping time zones
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#002FA7]" /> NDA & IP protected
          </span>
        </div>
      </div>
    </div>
  </section>
);

// --- Stats / Trust Bar ---
const Stats = () => (
  <section data-testid="stats-section" className="border-y border-zinc-200 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          data-testid={`stat-${i}`}
          className={`p-8 md:p-12 ${
            i !== 0 ? "md:border-l border-zinc-200" : ""
          } ${i % 2 !== 0 ? "border-l border-zinc-200 md:border-l" : ""} ${
            i >= 2 ? "border-t border-zinc-200 md:border-t-0" : ""
          }`}
        >
          <div className="font-display text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
            {s.value}
          </div>
          <div className="mt-2 text-sm text-zinc-500 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

// --- USP Banner (inverted) ---
const UspBanner = () => (
  <section
    id="interview"
    data-testid="usp-banner"
    className="bg-[#18181B] text-white"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
        Our promise
      </p>
      <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
        Interview every engineer <br className="hidden md:block" />
        <span className="text-[#6E8EFB]">before you hire them.</span>
      </h2>
      <p className="mt-8 max-w-2xl text-lg text-zinc-300 leading-relaxed">
        Every candidate we put forward goes through your own technical interview — live coding,
        system design, culture fit, whatever your bar is. You only sign when it meets your
        standard. That is the whole product.
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
        {[
          {
            icon: Users,
            title: "You set the bar",
            desc: "Your interview loop, your rubric, your decision. We never pressure a hire.",
          },
          {
            icon: Clock,
            title: "Replace anytime",
            desc: "If the fit breaks in the first 30 days, we swap the engineer — no invoice, no friction.",
          },
          {
            icon: Globe2,
            title: "Time-zone honest",
            desc: "We staff engineers with real, sustained overlap with your working hours.",
          },
        ].map((f) => (
          <div key={f.title} className="bg-[#18181B] p-8">
            <f.icon className="w-6 h-6 text-[#6E8EFB]" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
              {f.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Services ---
const Services = () => (
  <section
    id="services"
    data-testid="services-section"
    className="py-24 md:py-32"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
            Services
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900">
            Full-stack software
            <br />
            engineering, end to end.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-end">
          <p className="text-lg text-zinc-600 leading-relaxed">
            Our engineers embed inside your team and ship production code from day one. Every
            discipline, every stack, one accountable partner.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              data-testid={`service-card-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={`col-span-1 ${s.span} bg-white border border-zinc-200 p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between">
                <Icon
                  className="w-7 h-7 text-zinc-900 group-hover:text-[#002FA7] transition-colors"
                  strokeWidth={1.5}
                />
                <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#002FA7] transition-colors" />
              </div>
              <h3 className="mt-10 font-display text-2xl font-bold tracking-tight text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium tracking-wide text-zinc-500 border border-zinc-200 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// --- How it works ---
const HowItWorks = () => (
  <section
    id="how"
    data-testid="how-it-works-section"
    className="py-24 md:py-32 bg-white border-y border-zinc-200"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          How it works
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900">
          From brief to onboarded <br />
          engineer in under two weeks.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-200">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.n}
            data-testid={`process-step-${step.n}`}
            className="bg-white p-8 md:p-10"
          >
            <div className="font-display text-5xl font-black tracking-tighter text-[#002FA7]">
              {step.n}
            </div>
            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-zinc-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Portfolio ---
const Portfolio = () => (
  <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
            Selected work
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900">
            Work shipped with <br /> software companies worldwide.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PORTFOLIO.map((p, i) => (
          <article
            key={p.title}
            data-testid={`portfolio-item-${i}`}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[16/11] bg-zinc-100">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
              <span>{p.tag}</span>
              <span className="w-8 h-px bg-zinc-300" />
              <span className="text-zinc-400 normal-case tracking-normal font-medium">
                {p.meta}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 group-hover:text-[#002FA7] transition-colors">
              {p.title}
            </h3>
            <p className="mt-3 text-zinc-600 leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// --- About ---
const About = () => (
  <section
    id="about"
    data-testid="about-section"
    className="py-24 md:py-32 bg-white border-y border-zinc-200"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
          <img
            src="https://images.pexels.com/photos/19805885/pexels-photo-19805885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Senior engineer at QuantumTree Tech"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7 md:pl-8 flex flex-col justify-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          About QuantumTree
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900">
          A quiet, engineering-first firm built for product teams.
        </h2>
        <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
          QuantumTree Tech LLP was founded to solve one specific problem for international software
          companies: getting access to serious, full-time engineering talent without the résumé
          inflation, bench rotation and opaque billing that define traditional offshore firms.
        </p>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          We vet engineers ourselves, we let you run your own interview, and we bill only for work
          that ships. Every engagement is governed by an NDA and clear IP assignment. That is all.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {[
            { k: "Founded", v: "India" },
            { k: "Engagement", v: "Dedicated, full-time" },
            { k: "IP", v: "100% client-owned" },
          ].map((item) => (
            <div key={item.k} className="bg-white p-6">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                {item.k}
              </div>
              <div className="mt-2 font-display font-bold text-zinc-900 tracking-tight">
                {item.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Trusted Marquee ---
const TrustedBy = () => {
  const regions = [
    "San Francisco",
    "New York",
    "London",
    "Berlin",
    "Amsterdam",
    "Sydney",
    "Toronto",
    "Singapore",
    "Dubai",
    "Stockholm",
  ];
  const track = [...regions, ...regions];
  return (
    <section data-testid="trusted-by-section" className="py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Teams we serve across
        </p>
      </div>
      <div className="relative">
        <div className="flex marquee-track whitespace-nowrap">
          {track.map((r, i) => (
            <div
              key={`${r}-${i}`}
              className="flex items-center gap-6 px-10 font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-400"
            >
              <span>{r}</span>
              <span className="w-2 h-2 bg-[#002FA7]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
const Testimonials = () => (
  <section
    id="testimonials"
    data-testid="testimonials-section"
    className="py-24 md:py-32 bg-white border-y border-zinc-200"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Testimonials
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900">
          What engineering leaders say.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            data-testid={`testimonial-${i}`}
            className="bg-white p-8 md:p-10 flex flex-col"
          >
            <Quote className="w-8 h-8 text-[#002FA7]" strokeWidth={1.5} />
            <p className="mt-6 text-zinc-800 leading-relaxed text-lg">{t.quote}</p>
            <div className="mt-10 pt-6 border-t border-zinc-200">
              <div className="font-display font-bold text-zinc-900 tracking-tight">
                {t.name}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact ---
const Contact = () => (
  <section id="contact" data-testid="contact-section" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Contact
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900">
          Tell us what <br /> you need to build.
        </h2>
        <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-md">
          Share the role, stack and time-zone overlap you need. We reply within 24 hours with a
          shortlist and scheduling.
        </p>

        <div className="mt-14 space-y-6">
          <a
            href="mailto:hello@quantumtreetech.com"
            data-testid="contact-email-link"
            className="group flex items-center gap-4 text-zinc-900 hover:text-[#002FA7] transition-colors"
          >
            <div className="w-12 h-12 border border-zinc-300 flex items-center justify-center group-hover:border-[#002FA7] transition-colors">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                Email
              </div>
              <div className="font-display font-bold tracking-tight">
                hello@quantumtreetech.com
              </div>
            </div>
          </a>
          <div className="flex items-center gap-4 text-zinc-900">
            <div className="w-12 h-12 border border-zinc-300 flex items-center justify-center">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                Headquartered in
              </div>
              <div className="font-display font-bold tracking-tight">India · Serving globally</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <div className="bg-[#18181B] text-white p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight">
            A typical first email includes
          </h3>
          <ul className="mt-8 space-y-5">
            {[
              "Role title and seniority (e.g. Senior Backend Engineer)",
              "Primary stack and adjacent technologies",
              "Time-zone overlap required with your team",
              "Engagement length (3, 6, 12+ months)",
              "Any domain constraints — fintech, health, etc.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-zinc-300">
                <Check className="w-5 h-5 text-[#6E8EFB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@quantumtreetech.com?subject=Engineer%20request%20%E2%80%94%20QuantumTree"
            data-testid="contact-primary-cta"
            className="mt-12 inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 font-bold tracking-wide hover:bg-zinc-100 transition-colors duration-200"
          >
            Start the conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer data-testid="site-footer" className="bg-[#18181B] text-zinc-400">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="flex items-center gap-2 font-display font-black text-2xl tracking-tighter text-white">
          <span className="inline-block w-2.5 h-2.5 bg-[#6E8EFB]" />
          QuantumTree
          <span className="text-zinc-500 font-medium text-sm tracking-normal ml-1">Tech LLP</span>
        </div>
        <p className="mt-6 max-w-md text-sm leading-relaxed">
          Dedicated software engineers for global product teams. Vetted by us, interviewed by you,
          hired on your terms.
        </p>
      </div>

      <div className="md:col-span-3">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
          Company
        </div>
        <ul className="mt-6 space-y-3 text-sm">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Work</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500">
          Get in touch
        </div>
        <ul className="mt-6 space-y-3 text-sm">
          <li>
            <a
              href="mailto:hello@quantumtreetech.com"
              className="hover:text-white transition-colors"
            >
              hello@quantumtreetech.com
            </a>
          </li>
          <li>India · Serving US, EU, UK, ANZ</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} QuantumTree Tech LLP. All rights reserved.</span>
        <span>Engineered in India for the world.</span>
      </div>
    </div>
  </footer>
);

// --- Page ---
const Landing = () => (
  <div className="bg-[#FAFAFA] text-zinc-900 min-h-screen">
    <Header />
    <main>
      <Hero />
      <Stats />
      <UspBanner />
      <Services />
      <HowItWorks />
      <Portfolio />
      <About />
      <TrustedBy />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Landing;
