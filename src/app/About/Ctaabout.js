"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   Global CSS (copy to globals.css if needed)
───────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  :root {
    --primary:        #f59e0b;
    --primary-dark:   #d97706;
    --primary-light:  #fbbf24;
    --secondary:      #0f3d91;
    --secondary-dark: #082f73;
    --secondary-light:#2563eb;
    --accent:         #3fa34d;
    --accent-light:   #6ccf79;
    --background:     #f8fafc;
    --white:          #ffffff;
    --text:           #0f172a;
    --text-light:     #64748b;
    --border:         #e2e8f0;
    --shadow-sm:  0 4px 14px rgba(0,0,0,0.06);
    --shadow-md:  0 14px 40px rgba(0,0,0,0.10);
    --radius:     18px;
    --transition: all 0.38s cubic-bezier(0.23,1,0.32,1);
    --font-heading: 'Playfair Display', Georgia, serif;
    --font-body:    'DM Sans', sans-serif;
  }

  @keyframes ctaPulse {
    0%,100% { transform: scale(1);   opacity: .7; }
    50%      { transform: scale(1.6); opacity: 0;  }
  }

  @keyframes ctaFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  @keyframes ctaFloat {
    0%,100% { transform: translateY(0px) rotate(var(--rot,0deg)); }
    50%      { transform: translateY(-8px) rotate(var(--rot,0deg)); }
  }

  @keyframes ctaShimmer {
    from { transform: translateX(-140%); }
    to   { transform: translateX(140%);  }
  }

  @keyframes ctaOrbit {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

/* ─────────────────────────────────────────
   Floating feature pills data
───────────────────────────────────────── */
const PILLS = [
  { label: "Zero Brokerage",     icon: IconTag,    color: "var(--primary)",        top: "12%",  left: "3%",   rot: "-4deg",  delay: "0s"    },
  { label: "Legal Assistance",   icon: IconShield, color: "var(--secondary-light)", top: "62%", left: "2%",   rot: "3deg",   delay: "0.4s"  },
  { label: "Premium Locations",  icon: IconMap,    color: "var(--accent)",          top: "14%", right: "3%",  rot: "4deg",   delay: "0.8s"  },
  { label: "Expert Guidance",    icon: IconStar,   color: "var(--primary-dark)",    top: "60%", right: "2%",  rot: "-3deg",  delay: "1.2s"  },
];

/* ─────────────────────────────────────────
   Trust logos / mini stats row
───────────────────────────────────────── */
const TRUST = [
  { num: "10K+",  label: "Clients" },
  { num: "1.2K+", label: "Properties" },
  { num: "25+",   label: "Cities" },
  { num: "12+",   label: "Years" },
];

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function CTASection() {
  const sectionRef = useRef(null);
  const [visible,  setVisible]  = useState(false);
  const [btnHov,   setBtnHov]   = useState(false);
  const [outHov,   setOutHov]   = useState(false);

  /* inject global CSS once */
  useEffect(() => {
    const id = "cta-global-css";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  /* scroll-triggered visibility */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={s.section}>

      {/* Noise */}
      <div aria-hidden style={s.noise} />

      {/* Glows */}
      <div aria-hidden style={s.glowTop}    />
      <div aria-hidden style={s.glowLeft}   />
      <div aria-hidden style={s.glowRight}  />

      {/* Deco rings */}
      {DECO_RINGS.map((r, i) => (
        <div key={i} aria-hidden style={{ ...s.decoRing, ...r }} />
      ))}

      <div style={s.outer}>

        {/* ── Card ── */}
        <div style={{
          ...s.card,
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>

          {/* Card inner shimmer layer */}
          <div aria-hidden style={s.cardShimmer} />

          {/* Floating pills — absolute inside card */}
          {PILLS.map((pill, i) => (
            <FloatingPill key={i} {...pill} visible={visible} />
          ))}

          {/* ── Inner content ── */}
          <div style={s.content}>

            {/* Badge */}
            <div style={s.badge}>
              <span style={s.badgeDot}>
                <span style={s.badgePing} />
              </span>
              <span style={s.badgeText}>Premium Properties · Rajasthan</span>
            </div>

            {/* Heading */}
            <h2 style={s.heading}>
              Find Your
              <br />
              <em style={s.headingEm}>Dream Property</em>
            </h2>

            {/* Subheading */}
            <p style={s.sub}>
              in <strong style={{ color: "var(--secondary-light)", fontWeight: 600 }}>Rajasthan</strong>
            </p>

            {/* Description */}
            <p style={s.desc}>
              Explore luxury homes, premium villas, and investment opportunities
              crafted for modern lifestyles and timeless living.
            </p>

            {/* Trust strip */}
            <div style={s.trustRow}>
              {TRUST.map((t, i) => (
                <div key={i} style={s.trustItem}>
                  <span style={s.trustNum}>{t.num}</span>
                  <span style={s.trustLabel}>{t.label}</span>
                  {i < TRUST.length - 1 && <span aria-hidden style={s.trustDivider} />}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={s.btnRow}>
              {/* Primary CTA */}
              <button
                onMouseEnter={() => setBtnHov(true)}
                onMouseLeave={() => setBtnHov(false)}
                style={{
                  ...s.btnPrimary,
                  transform:  btnHov ? "translateY(-3px) scale(1.025)" : "translateY(0) scale(1)",
                  boxShadow:  btnHov
                    ? "0 22px 48px rgba(245,158,11,0.36)"
                    : "0 14px 34px rgba(245,158,11,0.22)",
                }}
              >
                {/* shimmer sweep */}
                <span aria-hidden style={{
                  ...s.btnShimmer,
                  animation: btnHov ? "ctaShimmer 0.7s ease forwards" : "none",
                }} />
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                  <IconArrow />
                  Get Started Now
                </span>
              </button>

              {/* Secondary / outline CTA */}
              <button
                onMouseEnter={() => setOutHov(true)}
                onMouseLeave={() => setOutHov(false)}
                style={{
                  ...s.btnOutline,
                  background:  outHov ? "rgba(15,61,145,0.06)" : "rgba(255,255,255,0.7)",
                  borderColor: outHov ? "var(--secondary-light)" : "var(--border)",
                  color:       outHov ? "var(--secondary-light)" : "var(--text-light)",
                  transform:   outHov ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <IconPhone />
                  Talk to an Expert
                </span>
              </button>
            </div>

            {/* Fine-print trust line */}
            <p style={s.finePrint}>
              ✦ No spam · Free consultation · Trusted since 2012
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Floating Pill
───────────────────────────────────────── */
function FloatingPill({ label, icon: Icon, color, top, left, right, rot, delay, visible }) {
  return (
    <div
      aria-hidden
      style={{
        position:       "absolute",
        top,
        ...(left  ? { left  } : {}),
        ...(right ? { right } : {}),
        display:        "flex",
        alignItems:     "center",
        gap:            7,
        padding:        "9px 14px",
        borderRadius:   999,
        background:     "rgba(255,255,255,0.92)",
        border:         "1px solid var(--border)",
        boxShadow:      "var(--shadow-sm)",
        backdropFilter: "blur(14px)",
        fontSize:       12,
        fontWeight:     500,
        color:          "var(--text)",
        whiteSpace:     "nowrap",
        zIndex:         10,
        opacity:        visible ? 1 : 0,
        transition:     `opacity 0.6s ease ${delay}`,
        "--rot":        rot,
        animation:      visible ? `ctaFloat 4s ease-in-out infinite ${delay}` : "none",
      }}
    >
      <span style={{ color, display: "flex" }}><Icon size={14} /></span>
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────
   SVG Icons
───────────────────────────────────────── */
function IconTag({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
}
function IconShield({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function IconMap({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconStar({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.22 6.22l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

/* ─────────────────────────────────────────
   Decorative rings
───────────────────────────────────────── */
const DECO_RINGS = [
  { top: 20,    left: 16,   width: 160, height: 160, borderRadius: 32, transform: "rotate(14deg)",  borderColor: "rgba(245,158,11,0.09)"  },
  { top: 70,    left: 68,   width: 72,  height: 72,  borderRadius: 16, transform: "rotate(14deg)",  borderColor: "rgba(15,61,145,0.08)"   },
  { top: 14,    right: 20,  width: 190, height: 190, borderRadius: 40, transform: "rotate(-14deg)", borderColor: "rgba(245,158,11,0.07)"  },
  { bottom: 20, left: 32,   width: 220, height: 220, borderRadius: 48, transform: "rotate(18deg)",  borderColor: "rgba(15,23,42,0.04)"   },
  { bottom: 50, right: 50,  width: 110, height: 110, borderRadius: 22, transform: "rotate(-10deg)", borderColor: "rgba(63,163,77,0.07)"  },
];

/* ─────────────────────────────────────────
   Styles
───────────────────────────────────────── */
const s = {
  section: {
    position:   "relative",
    overflow:   "hidden",
    background: "var(--background)",
    padding:    "5.5rem 2rem 5.5rem",
    fontFamily: "var(--font-body)",
  },
  noise: {
    position:   "absolute",
    inset:      0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
    pointerEvents: "none",
    zIndex:     0,
  },
  glowTop: {
    position:   "absolute",
    top:        -140,
    left:       "50%",
    transform:  "translateX(-50%)",
    width:      700,
    height:     380,
    background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex:     0,
  },
  glowLeft: {
    position:   "absolute",
    top:        "30%",
    left:       -100,
    width:      340,
    height:     340,
    background: "radial-gradient(ellipse, rgba(15,61,145,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex:     0,
  },
  glowRight: {
    position:   "absolute",
    bottom:     -60,
    right:      -80,
    width:      380,
    height:     380,
    background: "radial-gradient(ellipse, rgba(63,163,77,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex:     0,
  },
  decoRing: {
    position:      "absolute",
    border:        "1px solid",
    pointerEvents: "none",
    zIndex:        0,
  },
  outer: {
    position:  "relative",
    zIndex:    2,
    maxWidth:  900,
    margin:    "0 auto",
  },
  /* card */
  card: {
    position:       "relative",
    overflow:       "hidden",
    borderRadius:   "calc(var(--radius) + 14px)",
    border:         "1px solid var(--border)",
    background:     "rgba(255,255,255,0.84)",
    backdropFilter: "blur(24px)",
    boxShadow:      "var(--shadow-md), 0 0 0 1px rgba(245,158,11,0.06)",
    padding:        "5rem 3rem",
  },
  cardShimmer: {
    position:   "absolute",
    inset:      0,
    background: "linear-gradient(120deg, transparent 0%, rgba(245,158,11,0.07) 40%, rgba(15,61,145,0.05) 100%)",
    pointerEvents: "none",
  },
  /* content */
  content: {
    position:   "relative",
    zIndex:     5,
    textAlign:  "center",
    maxWidth:   620,
    margin:     "0 auto",
  },
  /* badge */
  badge: {
    display:        "inline-flex",
    alignItems:     "center",
    gap:            9,
    padding:        "6px 18px 6px 12px",
    borderRadius:   999,
    border:         "1px solid var(--border)",
    background:     "rgba(255,255,255,0.88)",
    backdropFilter: "blur(14px)",
    boxShadow:      "var(--shadow-sm)",
    marginBottom:   "1.6rem",
  },
  badgeDot: {
    width:        7,
    height:       7,
    borderRadius: "50%",
    background:   "var(--primary)",
    flexShrink:   0,
    position:     "relative",
    display:      "flex",
    alignItems:   "center",
    justifyContent: "center",
  },
  badgePing: {
    position:     "absolute",
    inset:        -4,
    borderRadius: "50%",
    border:       "1.5px solid rgba(245,158,11,0.4)",
    animation:    "ctaPulse 2s ease-in-out infinite",
  },
  badgeText: {
    fontSize:      10,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color:         "var(--primary-dark)",
    fontWeight:    600,
  },
  /* heading */
  heading: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "clamp(2.8rem, 5.5vw, 5rem)",
    fontWeight:    700,
    lineHeight:    1.02,
    letterSpacing: "-0.03em",
    color:         "var(--text)",
    margin:        0,
  },
  headingEm: {
    fontStyle:  "italic",
    fontWeight: 600,
    color:      "var(--primary)",
  },
  sub: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "clamp(1.4rem, 2.5vw, 2rem)",
    fontWeight:    400,
    fontStyle:     "italic",
    color:         "var(--text-light)",
    marginTop:     "0.3rem",
    letterSpacing: "-0.01em",
  },
  desc: {
    marginTop:  "1.4rem",
    color:      "var(--text-light)",
    fontSize:   15,
    lineHeight: 1.85,
    fontWeight: 300,
  },
  /* trust strip */
  trustRow: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    flexWrap:       "wrap",
    gap:            0,
    marginTop:      "2rem",
    padding:        "1.2rem 1.8rem",
    borderRadius:   14,
    border:         "1px solid var(--border)",
    background:     "rgba(248,250,252,0.8)",
    backdropFilter: "blur(10px)",
  },
  trustItem: {
    display:        "flex",
    alignItems:     "center",
    gap:            8,
    padding:        "0 1.2rem",
    position:       "relative",
  },
  trustNum: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "1.35rem",
    fontWeight:    700,
    color:         "var(--text)",
    letterSpacing: "-0.03em",
    lineHeight:    1,
  },
  trustLabel: {
    fontSize:   11.5,
    color:      "var(--text-light)",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  trustDivider: {
    position:     "absolute",
    right:        0,
    top:          "10%",
    height:       "80%",
    width:        1,
    background:   "var(--border)",
    borderRadius: 999,
  },
  /* buttons */
  btnRow: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    flexWrap:       "wrap",
    gap:            12,
    marginTop:      "2rem",
  },
  btnPrimary: {
    position:       "relative",
    overflow:       "hidden",
    padding:        "1rem 2.2rem",
    borderRadius:   999,
    border:         "none",
    background:     "linear-gradient(135deg, var(--primary-light), var(--primary), var(--primary-dark))",
    backgroundSize: "200% 100%",
    color:          "var(--white)",
    fontFamily:     "var(--font-body)",
    fontSize:       15,
    fontWeight:     600,
    letterSpacing:  "0.02em",
    cursor:         "pointer",
    transition:     "var(--transition)",
    display:        "flex",
    alignItems:     "center",
  },
  btnShimmer: {
    position:   "absolute",
    inset:      0,
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.26), transparent)",
    zIndex:     0,
  },
  btnOutline: {
    padding:        "1rem 2.2rem",
    borderRadius:   999,
    border:         "1px solid var(--border)",
    background:     "rgba(255,255,255,0.7)",
    color:          "var(--text-light)",
    fontFamily:     "var(--font-body)",
    fontSize:       15,
    fontWeight:     500,
    cursor:         "pointer",
    backdropFilter: "blur(12px)",
    transition:     "var(--transition)",
    display:        "flex",
    alignItems:     "center",
  },
  /* fine print */
  finePrint: {
    marginTop:     "1.4rem",
    fontSize:      12,
    color:         "var(--text-light)",
    fontWeight:    300,
    letterSpacing: "0.04em",
    opacity:       0.75,
  },
};