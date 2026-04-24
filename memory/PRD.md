# QuantumTree Tech LLP — Marketing / Portfolio Website

## Original Problem Statement
User (founder of QuantumTree Tech LLP, India) asked Emergent to build a sample portfolio/marketing website for their software-services startup. The company provides dedicated software engineers to software companies outside India; foreign clients can technically interview the engineers before hiring.

## User Choices
- Company name: QuantumTree Tech LLP
- Business model: Dedicated software engineers to foreign (non-India) software companies
- USP: Foreign client can conduct their own technical interview before hiring
- Design vibe: Minimal & elegant (light theme, clean typography)
- No extra sections beyond defaults
- No contact-form backend (email link only, static)

## Architecture
- Frontend-only (no backend changes). Pure React + Tailwind.
- Single-page marketing site `/app/frontend/src/pages/Landing.jsx`
- Global styles in `/app/frontend/src/index.css` (Outfit + Inter fonts, custom Klein-blue accent `#002FA7`, dark USP banner)
- Design system per `/app/design_guidelines.json` — Swiss / High-Contrast archetype

## What's Been Implemented (2026-01)
- Fixed, glass-blur navigation bar with sticky scroll state
- Hero with bold display heading, Klein-blue USP accent, dual CTAs, trust bullets
- 4-column stats strip (80+ engineers, 14 countries, 96% match, 24h SLA)
- USP banner (dark inverted section): "Interview every engineer before you hire them" + 3 pillars
- Services section — 6-card asymmetric bento grid (Web, Mobile, AI, Cloud, Design, QA) with tech stacks
- "How it works" 4-step process (brief → shortlist → interview → onboard)
- Portfolio — 4 case studies with imagery and metrics
- About — founder portrait + trust signals (Founded / Engagement / IP)
- Trusted-by marquee of global cities
- 3-up testimonials grid with large quote marks
- Contact section with email CTA + "what to include in first email" checklist
- Dark footer with nav, contact and copyright
- All interactive elements have `data-testid` attributes
- Mobile hamburger nav for < lg screens

## Core Requirements (static)
- B2B lead generation for international software companies
- Authority / professionalism tone
- Highlight interview-before-hire USP prominently
- Clean, minimal light theme with sharp edges (rounded-none)
- Fast loading (image lazy-load, no heavy JS libs added)

## User Personas
- Engineering leaders / CTOs at US, EU, UK, ANZ software companies looking to augment their team with vetted offshore talent
- Founders of Series A/B SaaS companies who previously had poor offshore experiences

## Prioritized Backlog
- P1: Working contact form with inquiry storage + admin dashboard
- P1: Case study detail pages
- P2: Blog / insights section
- P2: Engineer profile showcase (anonymised) with available stack filters
- P2: Calendly / scheduling integration
- P3: Multi-language (ES, DE, FR) variants for EU markets
- P3: SEO meta + sitemap + OG images
- P3: Analytics dashboard (GA4 / PostHog events)

## Next Action Items
1. Ship contact form + inquiry DB (MongoDB)
2. Wire up real calendar scheduling for "interview slot"
3. Replace placeholder case study metrics with real client data once available
4. Add real engineer testimonial video section
