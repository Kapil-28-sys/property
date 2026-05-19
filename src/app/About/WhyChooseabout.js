"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Inline global styles (paste into globals.css if preferred) ─── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..500&display=swap');

  :root {
    --primary: #f59e0b;
    --primary-dark: #d97706;
    --primary-light: #fbbf24;
    --secondary: #0f3d91;
    --secondary-dark: #082f73;
    --secondary-light: #2563eb;
    --accent: #3fa34d;
    --accent-light: #6ccf79;
    --background: #f8fafc;
    --white: #ffffff;
    --text: #0f172a;
    --text-light: #64748b;
    --border: #e2e8f0;
    --shadow-sm: 0 4px 14px rgba(0,0,0,0.06);
    --shadow-md: 0 14px 40px rgba(0,0,0,0.10);
    --radius: 18px;
    --transition: all 0.38s cubic-bezier(0.23,1,0.32,1);
  }

  @keyframes wycPulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50%       { transform: scale(1.6); opacity: 0; }
  }

  @keyframes wycFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes wycProgressFill {
    from { width: 0%; }
    to   { width: 72%; }
  }
`;

/* ─── Data ─── */
const FEATURES = [
  {
    id: "01",
    title: ["Luxury", "Design"],
    desc: "Elegant interiors with timeless aesthetics crafted for premium modern living.",
    Icon: IconCrown,
  },
  {
    id: "02",
    title: ["Premium", "Quality"],
    desc: "Exceptional craftsmanship and refined materials built for lasting excellence.",
    Icon: IconGem,
  },
  {
    id: "03",
    title: ["Modern", "Spaces"],
    desc: "Emotion-driven architecture blended with comfort and contemporary innovation.",
    Icon: IconBuilding,
  },
];

const STATS = [
  { num: "320", suffix: "+", label: "Projects Delivered", accentClass: "wyc-accent-gold" },
  { num: "98",  suffix: "%", label: "Client Satisfaction", accentClass: "wyc-accent-blue" },
  { num: "16",  suffix: "k", label: "Sq. Ft. Designed",   accentClass: "wyc-accent-green" },
];

/* ─── Main Component ─── */
export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);

  /* Inject global CSS once */
  useEffect(() => {
    const id = "wyc-global-css";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <section style={s.section}>
      {/* Noise overlay */}
      <div aria-hidden style={s.noise} />

      {/* Glows */}
      <div aria-hidden style={s.glowTop} />
      <div aria-hidden style={s.glowBlue} />

      {/* Decorative rings */}
      {RINGS.map((r, i) => <div key={i} aria-hidden style={{ ...s.ring, ...r }} />)}

      <div style={s.inner}>
        {/* ── Header ── */}
        <div style={s.header}>
          <div style={{ maxWidth: 520 }}>
            <Badge />
            <h2 style={s.heading}>
              Crafted For
              <em style={s.headingEm}>Luxury Living</em>
            </h2>
            <p style={s.subtext}>
              Sophisticated architecture, elegant interiors, and premium
              experiences — designed for the way you want to live.
            </p>
          </div>

          <ExperienceCard />
        </div>

        {/* ── Stats strip ── */}
        <div style={s.statsGrid}>
          {STATS.map((stat, i) => (
            <StatCell key={i} {...stat} />
          ))}
        </div>

        {/* ── Feature cards ── */}
        <div style={s.cardsGrid}>
          {FEATURES.map((item, i) => (
            <FeatureCard
              key={i}
              item={item}
              index={i}
              active={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Badge ─── */
function Badge() {
  return (
    <div style={s.badge}>
      <span style={s.badgeDot}>
        <span style={s.badgePing} />
      </span>
      <span style={s.badgeText}>Why Choose Us</span>
    </div>
  );
}

/* ─── Experience Card ─── */
function ExperienceCard() {
  const [hov, setHov] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (barRef.current) barRef.current.style.width = "72%";
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...s.expCard,
        borderColor: hov ? "rgba(245,158,11,0.30)" : "var(--border)",
        boxShadow: hov ? "0 20px 60px rgba(245,158,11,0.16)" : "var(--shadow-md)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div aria-hidden style={s.expCardSheen} />
      <p style={s.expLabel}>Years of Excellence</p>
      <p style={s.expNum}>
        10<span style={{ color: "var(--primary)", fontStyle: "italic", fontWeight: 400 }}>+</span>
      </p>
      <p style={s.expSub}>Delivering premium spaces since 2014</p>
      <div style={s.progressTrack} aria-hidden>
        <div
          ref={barRef}
          style={{
            height: "100%",
            width: "0%",
            background: "linear-gradient(90deg, var(--primary), var(--primary-light))",
            borderRadius: 999,
            transition: "width 1.2s cubic-bezier(0.23,1,0.32,1)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Stat Cell ─── */
function StatCell({ num, suffix, label, accentClass }) {
  const [hov, setHov] = useState(false);
  const accentColor =
    accentClass === "wyc-accent-gold"  ? "var(--primary)" :
    accentClass === "wyc-accent-blue"  ? "var(--secondary-light)" :
    "var(--accent)";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...s.statCell,
        background: hov ? "var(--white)" : "rgba(255,255,255,0.88)",
      }}
    >
      <div style={s.statNum}>
        {num}
        <em style={{ color: accentColor, fontStyle: "italic", fontWeight: 400 }}>{suffix}</em>
      </div>
      <div style={s.statLabel}>{label}</div>
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ item, index, active, onEnter, onLeave }) {
  const { Icon } = item;
  return (
    <article
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        ...s.card,
        borderColor: active ? "rgba(245,158,11,0.25)" : "var(--border)",
        boxShadow: active ? "0 24px 64px rgba(245,158,11,0.14)" : "var(--shadow-sm)",
        transform: active ? "translateY(-7px)" : "translateY(0)",
        animationDelay: `${index * 90}ms`,
      }}
    >
      {/* Subtle grid texture */}
      <div aria-hidden style={s.cardGrid} />

      {/* Hover glow */}
      <div aria-hidden style={{ ...s.cardGlow, opacity: active ? 1 : 0 }} />

      {/* Top row: icon + id */}
      <div style={s.cardTop}>
        <div
          style={{
            ...s.iconWrap,
            boxShadow: active
              ? "0 12px 36px rgba(245,158,11,0.40)"
              : "0 8px 28px rgba(245,158,11,0.25)",
            transform: active ? "scale(1.09)" : "scale(1)",
          }}
        >
          <Icon />
        </div>
        <span
          aria-hidden
          style={{
            ...s.cardId,
            color: active ? "rgba(245,158,11,0.13)" : "rgba(15,23,42,0.05)",
          }}
        >
          {item.id}
        </span>
      </div>

      {/* Title */}
      <h3 style={s.cardTitle}>
        {item.title[0]}
        <em style={s.cardTitleEm}>{item.title[1]}</em>
      </h3>

      {/* Desc */}
      <p style={s.cardDesc}>{item.desc}</p>

      {/* Animated line */}
      <div aria-hidden style={s.cardLine}>
        <span style={s.lineDot} />
        <span
          style={{
            ...s.lineBar,
            width: active ? 118 : 64,
          }}
        />
      </div>
    </article>
  );
}

/* ─── SVG Icons ─── */
function IconCrown() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="var(--secondary-dark)" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 20h20" />
      <path d="m4 20 2-8 6 4 6-4 2 8" />
      <path d="M12 4 8 8 4 6l2 6h12l2-6-4 2z" />
    </svg>
  );
}
function IconGem() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="var(--secondary-dark)" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
      stroke="var(--secondary-dark)" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x={3} y={3} width={18} height={18} rx={2} />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

/* ─── Decorative rings data ─── */
const RINGS = [
  { top: 36,  left: 20,  width: 190, height: 190, borderRadius: 28, transform: "rotate(14deg)",  borderColor: "rgba(245,158,11,0.10)" },
  { top: 96,  left: 96,  width: 88,  height: 88,  borderRadius: 22, transform: "rotate(14deg)",  borderColor: "rgba(15,61,145,0.09)" },
  { top: 20,  right: 36, width: 220, height: 220, borderRadius: 44, transform: "rotate(-14deg)", borderColor: "rgba(245,158,11,0.08)" },
  { bottom: 30, left: 50, width: 260, height: 260, borderRadius: 52, transform: "rotate(18deg)", borderColor: "rgba(15,23,42,0.04)" },
];

/* ─── Styles object ─── */
const s = {
  section: {
    position: "relative",
    overflow: "hidden",
    background: "var(--background)",
    padding: "5rem 2rem 4.5rem",
    fontFamily: "'DM Sans', sans-serif",
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    pointerEvents: "none",
    zIndex: 0,
  },
  glowTop: {
    position: "absolute",
    top: -120,
    left: "50%",
    transform: "translateX(-50%)",
    width: 600,
    height: 300,
    background: "radial-gradient(ellipse, rgba(245,158,11,0.13) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  glowBlue: {
    position: "absolute",
    bottom: -60,
    right: -80,
    width: 340,
    height: 340,
    background: "radial-gradient(ellipse, rgba(15,61,145,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  ring: {
    position: "absolute",
    border: "1px solid",
    pointerEvents: "none",
    zIndex: 0,
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1100,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "2.5rem",
    marginBottom: "3.5rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "6px 16px 6px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.9)",
    border: "1px solid var(--border)",
    boxShadow: "var(--shadow-sm)",
    marginBottom: "1.4rem",
    position: "relative",
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--primary)",
    flexShrink: 0,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badgePing: {
    position: "absolute",
    inset: -4,
    borderRadius: "50%",
    border: "1.5px solid rgba(245,158,11,0.38)",
    animation: "wycPulse 2s ease-in-out infinite",
  },
  badgeText: {
    fontSize: 10,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "var(--text-light)",
    fontWeight: 500,
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
    fontWeight: 700,
    lineHeight: 0.93,
    letterSpacing: "-0.02em",
    color: "var(--text)",
    display: "flex",
    flexDirection: "column",
    gap: "0.1em",
    margin: 0,
  },
  headingEm: {
    fontStyle: "italic",
    fontWeight: 600,
    color: "var(--primary)",
  },
  subtext: {
    marginTop: "1.2rem",
    fontSize: 14.5,
    lineHeight: 1.75,
    color: "var(--text-light)",
    maxWidth: 400,
    fontWeight: 300,
  },
  /* experience card */
  expCard: {
    background: "rgba(255,255,255,0.92)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: "2rem 2.2rem",
    minWidth: 220,
    boxShadow: "var(--shadow-md)",
    backdropFilter: "blur(18px)",
    position: "relative",
    overflow: "hidden",
    flexShrink: 0,
    transition: "var(--transition)",
    cursor: "default",
  },
  expCardSheen: {
    position: "absolute",
    top: 0, right: 0,
    width: 120, height: 120,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)",
    pointerEvents: "none",
  },
  expLabel: {
    fontSize: 9.5,
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: "var(--text-light)",
    fontWeight: 500,
    margin: 0,
  },
  expNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4.5rem",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.05em",
    color: "var(--text)",
    margin: "0.2rem 0 0.1rem",
  },
  expSub: {
    fontSize: 12.5,
    color: "var(--text-light)",
    margin: "0.25rem 0 0",
  },
  progressTrack: {
    marginTop: "1.2rem",
    height: 2,
    background: "rgba(0,0,0,0.07)",
    borderRadius: 999,
    overflow: "hidden",
  },
  /* stats */
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 1,
    background: "var(--border)",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: "3rem",
    boxShadow: "var(--shadow-sm)",
  },
  statCell: {
    background: "rgba(255,255,255,0.88)",
    padding: "1.2rem 1.5rem",
    textAlign: "center",
    backdropFilter: "blur(12px)",
    transition: "var(--transition)",
    cursor: "default",
  },
  statNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    fontWeight: 700,
    color: "var(--text)",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--text-light)",
    marginTop: "0.3rem",
    fontWeight: 400,
  },
  /* cards */
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.1rem",
  },
  card: {
    background: "rgba(255,255,255,0.88)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: "2.2rem 2rem",
    position: "relative",
    overflow: "hidden",
    cursor: "default",
    backdropFilter: "blur(18px)",
    boxShadow: "var(--shadow-sm)",
    transition: "var(--transition)",
    animation: "wycFadeUp 0.65s both",
  },
  cardGrid: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: `
      linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
    `,
    backgroundSize: "26px 26px",
  },
  cardGlow: {
    position: "absolute",
    top: -60, right: -60,
    width: 200, height: 200,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245,158,11,0.14), transparent 70%)",
    transition: "opacity 0.5s ease",
    pointerEvents: "none",
  },
  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "2rem",
    position: "relative",
    zIndex: 2,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 18,
    background: "linear-gradient(135deg, var(--primary-light), var(--primary))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "var(--transition)",
  },
  cardId: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "4.5rem",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.06em",
    transition: "color 0.35s ease",
    userSelect: "none",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: "-0.03em",
    color: "var(--text)",
    display: "flex",
    flexDirection: "column",
    gap: "0.05em",
    margin: 0,
    position: "relative",
    zIndex: 2,
  },
  cardTitleEm: {
    fontStyle: "italic",
    fontWeight: 600,
    color: "var(--primary)",
  },
  cardDesc: {
    fontSize: 13.5,
    lineHeight: 1.72,
    color: "var(--text-light)",
    marginTop: "0.9rem",
    fontWeight: 300,
    position: "relative",
    zIndex: 2,
  },
  cardLine: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: "1.8rem",
    position: "relative",
    zIndex: 2,
  },
  lineDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "var(--primary)",
    flexShrink: 0,
  },
  lineBar: {
    display: "block",
    height: 1,
    background: "linear-gradient(90deg, var(--primary), transparent)",
    transition: "width 0.5s cubic-bezier(0.23,1,0.32,1)",
  },
};