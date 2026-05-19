"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   Global CSS  (copy to globals.css if needed)
───────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

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

  @keyframes achFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  @keyframes achPulse {
    0%,100% { transform: scale(1);   opacity: .7; }
    50%      { transform: scale(1.6); opacity: 0;  }
  }

  @keyframes achSpin {
    from { stroke-dashoffset: var(--dash-full); }
    to   { stroke-dashoffset: var(--dash-end);  }
  }

  @keyframes achCountUp {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
`;

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const STATS = [
  {
    label:      "Happy Clients",
    value:      10000,
    display:    "10K",
    suffix:     "+",
    ringColor:  "var(--primary)",
    ringPct:    88,
    Icon:       IconUsers,
    iconColor:  "var(--primary)",
    delay:      0,
  },
  {
    label:      "Properties Sold",
    value:      1200,
    display:    "1.2K",
    suffix:     "+",
    ringColor:  "var(--secondary-light)",
    ringPct:    74,
    Icon:       IconHome,
    iconColor:  "var(--secondary-light)",
    delay:      100,
  },
  {
    label:      "Cities Covered",
    value:      25,
    display:    "25",
    suffix:     "+",
    ringColor:  "var(--accent)",
    ringPct:    60,
    Icon:       IconMap,
    iconColor:  "var(--accent)",
    delay:      200,
  },
  {
    label:      "Years Experience",
    value:      12,
    display:    "12",
    suffix:     "+",
    ringColor:  "var(--primary-dark)",
    ringPct:    92,
    Icon:       IconAward,
    iconColor:  "var(--primary-dark)",
    delay:      300,
  },
];

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function Achievements() {
  const sectionRef   = useRef(null);
  const [visible, setVisible] = useState(false);

  /* inject global CSS once */
  useEffect(() => {
    const id = "ach-global-css";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  /* trigger animations when section scrolls into view */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={s.section}>

      {/* Decorative rings */}
      {DECO_RINGS.map((r, i) => (
        <div key={i} aria-hidden style={{ ...s.decoRing, ...r }} />
      ))}

      {/* Ambient glow */}
      <div aria-hidden style={s.glowTop} />
      <div aria-hidden style={s.glowBottom} />

      {/* Noise */}
      <div aria-hidden style={s.noise} />

      <div style={s.inner}>

        {/* ── Heading ── */}
        <div style={{
          ...s.headingWrap,
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div style={s.badge}>
            <span style={s.badgeDot}>
              <span style={s.badgePing} />
            </span>
            <span style={s.badgeText}>Our Success</span>
          </div>

          <h2 style={s.heading}>
            Our&nbsp;
            <em style={s.headingEm}>Achievements</em>
          </h2>

          <p style={s.subtitle}>
            Built with trust, luxury, innovation &amp; long-term value
          </p>

          {/* Decorative divider */}
          <div style={s.divider} aria-hidden>
            <span style={s.dividerLine} />
            <span style={s.dividerDiamond} />
            <span style={s.dividerLine} />
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div style={s.grid}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} visible={visible} />
          ))}
        </div>

        {/* ── Bottom tagline ── */}
        <div style={{
          ...s.tagline,
          opacity:   visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <span style={s.taglineLine} />
          <span style={s.taglineText}>Trusted by thousands across India</span>
          <span style={s.taglineLine} />
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Stat Card
───────────────────────────────────────── */
function StatCard({ stat, visible }) {
  const { label, value, display, suffix, ringColor, ringPct, Icon, iconColor, delay } = stat;
  const [hov, setHov]     = useState(false);
  const [count, setCount] = useState(0);
  const rafRef            = useRef(null);

  /* count-up when visible */
  useEffect(() => {
    if (!visible) return;
    const start     = performance.now();
    const duration  = 2200;
    const easeOut   = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    const timeout = setTimeout(
      () => { rafRef.current = requestAnimationFrame(tick); },
      delay
    );

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, value, delay]);

  /* svg ring math */
  const R    = 42;
  const CIRC = 2 * Math.PI * R;
  const gap  = CIRC * (1 - ringPct / 100);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...s.card,
        borderColor: hov ? "rgba(245,158,11,0.28)" : "var(--border)",
        boxShadow:   hov
          ? "0 24px 56px rgba(245,158,11,0.15), var(--shadow-md)"
          : "var(--shadow-sm)",
        transform:   hov ? "translateY(-8px)" : "translateY(0)",
        opacity:     visible ? 1 : 0,
        transition:  "transform 0.38s cubic-bezier(0.23,1,0.32,1), box-shadow 0.38s ease, border-color 0.38s ease, opacity 0.6s ease",
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {/* Hover glow */}
      <div aria-hidden style={{ ...s.cardGlow, opacity: hov ? 1 : 0 }} />

      {/* Top: ring + icon */}
      <div style={s.ringWrap} aria-hidden>
        {/* track */}
        <svg width={96} height={96} style={{ overflow: "visible" }}>
          <circle cx={48} cy={48} r={R}
            fill="none"
            stroke="rgba(15,23,42,0.06)"
            strokeWidth={5}
          />
          {/* progress ring */}
          <circle cx={48} cy={48} r={R}
            fill="none"
            stroke={ringColor}
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray={`${CIRC - gap} ${gap}`}
            strokeDashoffset={CIRC / 4}
            style={{
              transition: visible
                ? `stroke-dasharray 1.4s cubic-bezier(0.23,1,0.32,1) ${delay + 200}ms`
                : "none",
            }}
          />
        </svg>
        {/* icon in center */}
        <div style={{ ...s.ringIcon, color: iconColor }}>
          <Icon />
        </div>
      </div>

      {/* Number */}
      <div style={s.numberRow}>
        <span style={s.number}>
          {value >= 1000
            ? count >= 1000
              ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K`
              : count
            : count}
        </span>
        <span style={{ ...s.suffix, color: ringColor }}>{suffix}</span>
      </div>

      {/* Animated underline */}
      <div aria-hidden style={{
        ...s.cardLine,
        width: hov ? 64 : 40,
        background: `linear-gradient(90deg, ${ringColor}, transparent)`,
      }} />

      {/* Label */}
      <p style={s.label}>{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────
   SVG Icons
───────────────────────────────────────── */
function IconUsers() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function IconHome() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function IconMap() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  );
}
function IconAward() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

/* ─────────────────────────────────────────
   Decorative ring data
───────────────────────────────────────── */
const DECO_RINGS = [
  { top: 24,  left: 16,  width: 180, height: 180, borderRadius: 36, transform: "rotate(14deg)",  borderColor: "rgba(245,158,11,0.09)"  },
  { top: 80,  left: 80,  width: 80,  height: 80,  borderRadius: 18, transform: "rotate(14deg)",  borderColor: "rgba(15,61,145,0.08)"   },
  { top: 16,  right: 24, width: 210, height: 210, borderRadius: 44, transform: "rotate(-14deg)", borderColor: "rgba(245,158,11,0.07)"  },
  { bottom: 24, left: 40, width: 240, height: 240, borderRadius: 50, transform: "rotate(18deg)", borderColor: "rgba(15,23,42,0.04)"   },
  { bottom: 60, right: 60, width: 120, height: 120, borderRadius: 24, transform: "rotate(-10deg)", borderColor: "rgba(63,163,77,0.08)" },
];

/* ─────────────────────────────────────────
   Styles
───────────────────────────────────────── */
const s = {
  section: {
    position:   "relative",
    overflow:   "hidden",
    background: "var(--background)",
    padding:    "5.5rem 2rem 5rem",
    fontFamily: "var(--font-body)",
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
    pointerEvents: "none",
    zIndex: 0,
  },
  glowTop: {
    position:  "absolute",
    top:       -140,
    left:      "50%",
    transform: "translateX(-50%)",
    width:     700,
    height:    380,
    background: "radial-gradient(ellipse, rgba(245,158,11,0.11) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  glowBottom: {
    position:  "absolute",
    bottom:    -100,
    right:     -60,
    width:     440,
    height:    440,
    background: "radial-gradient(ellipse, rgba(15,61,145,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  decoRing: {
    position:      "absolute",
    border:        "1px solid",
    pointerEvents: "none",
    zIndex:        0,
  },
  inner: {
    position:  "relative",
    zIndex:    2,
    maxWidth:  1100,
    margin:    "0 auto",
  },
  /* heading */
  headingWrap: {
    textAlign:    "center",
    marginBottom: "3.5rem",
  },
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
    marginBottom:   "1.4rem",
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
    animation:    "achPulse 2s ease-in-out infinite",
  },
  badgeText: {
    fontSize:      10,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color:         "var(--primary-dark)",
    fontWeight:    600,
  },
  heading: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "clamp(2.6rem,5vw,4.4rem)",
    fontWeight:    700,
    lineHeight:    1,
    letterSpacing: "-0.025em",
    color:         "var(--text)",
    margin:        0,
  },
  headingEm: {
    fontStyle:  "italic",
    fontWeight: 600,
    color:      "var(--primary)",
  },
  subtitle: {
    color:      "var(--text-light)",
    fontSize:   15,
    marginTop:  "0.9rem",
    lineHeight: 1.8,
    fontWeight: 300,
  },
  divider: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            12,
    marginTop:      "1.6rem",
  },
  dividerLine: {
    display:      "block",
    width:        60,
    height:       1,
    background:   "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)",
    borderRadius: 999,
  },
  dividerDiamond: {
    display:      "block",
    width:        7,
    height:       7,
    background:   "var(--primary)",
    borderRadius: 1,
    transform:    "rotate(45deg)",
    flexShrink:   0,
  },
  /* grid */
  grid: {
    display:             "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap:                 "1.2rem",
    marginBottom:        "3rem",
  },
  /* card */
  card: {
    position:       "relative",
    overflow:       "hidden",
    borderRadius:   "var(--radius)",
    border:         "1px solid var(--border)",
    background:     "rgba(255,255,255,0.88)",
    backdropFilter: "blur(18px)",
    padding:        "2.2rem 1.8rem 1.8rem",
    textAlign:      "center",
    cursor:         "default",
  },
  cardGlow: {
    position:      "absolute",
    top:           -70,
    right:         -70,
    width:         200,
    height:        200,
    borderRadius:  "50%",
    background:    "radial-gradient(circle, rgba(245,158,11,0.14), transparent 70%)",
    transition:    "opacity 0.5s ease",
    pointerEvents: "none",
  },
  /* ring */
  ringWrap: {
    position:        "relative",
    width:           96,
    height:          96,
    margin:          "0 auto 1.2rem",
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "center",
  },
  ringIcon: {
    position: "absolute",
    inset:    0,
    display:  "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  /* number */
  numberRow: {
    display:     "flex",
    alignItems:  "baseline",
    justifyContent: "center",
    gap:         3,
    marginBottom: "0.4rem",
  },
  number: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "clamp(2rem, 3.5vw, 3rem)",
    fontWeight:    700,
    lineHeight:    1,
    letterSpacing: "-0.04em",
    color:         "var(--text)",
  },
  suffix: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "1.6rem",
    fontWeight:    400,
    fontStyle:     "italic",
    lineHeight:    1,
    letterSpacing: "-0.02em",
  },
  cardLine: {
    height:       2,
    margin:       "0.8rem auto 0.9rem",
    borderRadius: 999,
    transition:   "width 0.4s ease",
  },
  label: {
    color:      "var(--text-light)",
    fontSize:   13.5,
    fontWeight: 400,
    lineHeight: 1.6,
    margin:     0,
    letterSpacing: "0.01em",
  },
  /* tagline */
  tagline: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            16,
  },
  taglineLine: {
    display:      "block",
    height:       1,
    width:        80,
    background:   "linear-gradient(90deg, transparent, var(--border))",
    borderRadius: 999,
  },
  taglineText: {
    fontSize:      12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color:         "var(--text-light)",
    fontWeight:    400,
  },
};