"use client";

export default function AboutHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--background)",
        fontFamily: "'Outfit', sans-serif",
        color: "var(--text)",
      }}
    >
      {/* ── Google Fonts + Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.02); }
          to   { transform: scale(1.10); }
        }
        @keyframes pingGold {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.6); opacity: 0;   }
        }
        @keyframes glowBreath {
          0%,100% { opacity: 0.55; }
          50%     { opacity: 1;    }
        }
        @keyframes glowBreathRev {
          0%,100% { opacity: 0.7; }
          50%     { opacity: 0.3; }
        }
        @keyframes scrollDot {
          0%,100% { opacity: 0.35; transform: translateY(0);  }
          50%     { opacity: 1;    transform: translateY(7px); }
        }
        @keyframes lineExpand {
          from { width: 0; }
          to   { width: 65px; }
        }

        .ah-animate { opacity: 0; animation: fadeUp 1s ease forwards; }
        .ah-d1 { animation-delay: 0.08s; }
        .ah-d2 { animation-delay: 0.20s; }
        .ah-d3 { animation-delay: 0.32s; }
        .ah-d4 { animation-delay: 0.44s; }
        .ah-d5 { animation-delay: 0.56s; }
        .ah-d6 { animation-delay: 0.70s; }
        .ah-d7 { animation-delay: 0.85s; }

        .ah-bg-zoom  { animation: slowZoom 20s ease-in-out infinite alternate; }
        .ah-glow-a   { animation: glowBreath    5s ease-in-out infinite; }
        .ah-glow-b   { animation: glowBreathRev 7s ease-in-out infinite; }
        .ah-scroll-dot { animation: scrollDot 2.2s ease-in-out infinite; }

        .ah-divider {
          margin-top: 24px;
          height: 2px;
          background: linear-gradient(to right, var(--primary), transparent);
          border-radius: 99px;
          animation: lineExpand 1.2s ease forwards 0.5s;
          width: 0;
        }

        /* Primary button fill sweep */
        .ah-btn-primary {
          position: relative;
          overflow: hidden;
          padding: 15px 34px;
          border-radius: 99px;
          border: 1.5px solid var(--primary);
          background: transparent;
          color: var(--primary);
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          transition: all .45s cubic-bezier(.4,0,.2,1);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ah-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--primary);
          transform: translateX(-101%);
          transition: transform .45s cubic-bezier(.4,0,.2,1);
        }
        .ah-btn-primary:hover::before { transform: translateX(0); }
        .ah-btn-primary:hover         { color: #fff; box-shadow: var(--shadow-md); }
        .ah-btn-primary span          { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; }

        /* Play button */
        .ah-play-fill {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: var(--primary);
          transform: scale(0);
          transition: transform .4s cubic-bezier(.4,0,.2,1);
        }
        .ah-play-wrap:hover .ah-play-fill      { transform: scale(1); }
        .ah-play-wrap:hover .ah-play-triangle  { border-color: transparent transparent transparent #fff; }

        /* Feature card hover */
        .ah-feat-card {
          background: rgba(255,255,255,.70);
          backdrop-filter: blur(18px);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px 20px;
          box-shadow: var(--shadow-sm);
          transition: all .3s ease;
          cursor: default;
        }
        .ah-feat-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(245,158,11,.25);
        }

        @media (max-width: 860px) {
          .ah-right-col  { display: none !important; }
          .ah-vert-text  { display: none !important; }
          .ah-inner      { grid-template-columns: 1fr !important; padding: 80px 24px 100px !important; }
        }
      `}</style>

      {/* ── Decorative glow orbs ── */}
      <div
        className="ah-glow-a"
        style={{
          position: "absolute", top: 0, left: 0,
          width: 320, height: 320, borderRadius: "50%",
          background: "rgba(245,158,11,.18)",
          filter: "blur(110px)", pointerEvents: "none",
        }}
      />
      <div
        className="ah-glow-b"
        style={{
          position: "absolute", bottom: 0, right: 0,
          width: 280, height: 280, borderRadius: "50%",
          background: "rgba(37,99,235,.14)",
          filter: "blur(100px)", pointerEvents: "none",
        }}
      />

      {/* ── Background image ── */}
      <div
        className="ah-bg-zoom"
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* ── Overlays ── */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(248,250,252,.82)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,var(--background) 0%,rgba(248,250,252,.55) 50%,transparent 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 88% 88%,rgba(245,158,11,.22),transparent 50%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 12% 12%,rgba(15,61,145,.14),transparent 48%)" }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(15,23,42,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.035) 1px,transparent 1px)",
        backgroundSize: "68px 68px",
      }} />

      {/* ── Decorative rings ── */}
      {[
        { top: 40,  right: 60,  bottom: "auto", left: "auto", width: 220, height: 220, rotate: "18deg",  color: "rgba(245,158,11,.12)" },
        { bottom: 60, left: 40, top: "auto",  right: "auto", width: 300, height: 300, rotate: "-15deg", color: "rgba(15,61,145,.10)"  },
        { top: 120, right: 180, bottom: "auto", left: "auto", width: 100, height: 100, rotate: "0deg",   color: "rgba(245,158,11,.08)" },
      ].map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: r.top, right: r.right, bottom: r.bottom, left: r.left,
            width: r.width, height: r.height,
            borderRadius: "50%",
            border: `1px solid ${r.color}`,
            transform: `rotate(${r.rotate})`,
          }}
        />
      ))}

      {/* ── Vertical text ── */}
      <div
        className="ah-vert-text"
        style={{
          position: "absolute", right: 52, top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontSize: 9, letterSpacing: ".45em", textTransform: "uppercase",
          color: "var(--text-light)", opacity: .55, whiteSpace: "nowrap",
        }}
      >
        Luxury Architecture Studio · Est. 2004
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="ah-animate ah-d7"
        style={{
          position: "absolute", bottom: 38, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}
      >
        <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom,var(--primary),transparent)", position: "relative", overflow: "hidden" }}>
          <div
            className="ah-scroll-dot"
            style={{
              width: 4, height: 4, borderRadius: "50%",
              background: "var(--primary)",
              position: "absolute", top: 0, left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <span style={{ fontSize: 9, letterSpacing: ".38em", textTransform: "uppercase", color: "var(--text-light)", opacity: .6 }}>Scroll</span>
      </div>

      {/* ── Main content ── */}
      <div style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div
          className="ah-inner"
          style={{
            maxWidth: 1200, margin: "0 auto", padding: "0 56px", width: "100%",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
          }}
        >

          {/* ════ LEFT COLUMN ════ */}
          <div>

            {/* Badge */}
            <div className="ah-animate ah-d1">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "10px 22px", borderRadius: 99,
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(14px)",
                marginBottom: 32,
                boxShadow: "var(--shadow-sm)",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", width: 14, height: 14, borderRadius: "50%",
                  background: "rgba(245,158,11,.28)",
                  animation: "pingGold 2s ease-out infinite",
                }} />
                <div style={{
                  position: "relative", width: 7, height: 7, borderRadius: "50%",
                  background: "var(--primary)",
                  boxShadow: "0 0 10px rgba(245,158,11,.55)",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 10, letterSpacing: ".38em", textTransform: "uppercase", color: "var(--text-light)", fontWeight: 500 }}>
                  Luxury Architecture Studio
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="ah-animate ah-d2">
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(62px,7.5vw,108px)",
                lineHeight: .92, letterSpacing: "-.03em", margin: 0,
              }}>
                <span style={{ display: "block", fontWeight: 300, color: "var(--text)" }}>Building</span>
                <span style={{ display: "block", fontStyle: "italic", fontWeight: 300, color: "rgba(15,61,145,.7)" }}>Timeless</span>
                <span style={{ display: "block", fontWeight: 600, color: "var(--primary)" }}>Experiences</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="ah-animate ah-d3">
              <div className="ah-divider" />
            </div>

            {/* Description */}
            <div className="ah-animate ah-d4">
              <p style={{
                marginTop: 24, fontSize: 15, lineHeight: 1.85,
                color: "var(--text-light)", maxWidth: 420,
                fontWeight: 300, letterSpacing: ".01em",
              }}>
                We craft premium spaces with emotional architecture,
                refined interiors, and modern luxury aesthetics that
                create unforgettable living experiences.
              </p>
            </div>

            {/* CTA row */}
            <div className="ah-animate ah-d5">
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>

                {/* Primary button */}
                <button className="ah-btn-primary">
                  <span>
                    Explore Company
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Play button */}
                <button
                  className="ah-play-wrap"
                  style={{ display: "flex", alignItems: "center", gap: 16, background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                  <div style={{
                    position: "relative", width: 56, height: 56, borderRadius: "50%",
                    border: "1.5px solid var(--border)",
                    background: "rgba(255,255,255,.85)",
                    backdropFilter: "blur(14px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", boxShadow: "var(--shadow-sm)", flexShrink: 0,
                  }}>
                    <div className="ah-play-fill" />
                    <div
                      className="ah-play-triangle"
                      style={{
                        position: "relative", zIndex: 1,
                        width: 0, height: 0, borderStyle: "solid",
                        borderWidth: "7px 0 7px 13px",
                        borderColor: "transparent transparent transparent var(--text)",
                        marginLeft: 3,
                        transition: "border-color .35s",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-light)" }}>Watch</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: "var(--text)" }}>Our Story</span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div className="ah-right-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Stats card */}
            <div className="ah-animate ah-d3">
              <div style={{
                background: "rgba(255,255,255,.70)", backdropFilter: "blur(20px)",
                border: "1px solid var(--border)", borderRadius: "var(--radius)",
                padding: "28px 32px", boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  {[
                    { num: "24", unit: "+", label: "Years Active" },
                    { num: "380", unit: "+", label: "Projects Done" },
                    { num: "18", unit: "×", label: "Awards Won" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "12px 20px", textAlign: "center",
                        borderRight: i < 2 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 38, fontWeight: 600,
                        color: "var(--primary)", lineHeight: 1, letterSpacing: "-.02em",
                      }}>
                        {s.num}
                        <span style={{ fontSize: 18, fontWeight: 300, color: "var(--primary-dark)" }}>{s.unit}</span>
                      </div>
                      <div style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--text-light)", marginTop: 6 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="ah-animate ah-d4">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "🏛",  iconBg: "rgba(245,158,11,.12)", title: "Architectural Design",  desc: "Signature structures that blend grandeur with livability."      },
                  { icon: "🪟",  iconBg: "rgba(15,61,145,.08)",  title: "Interior Styling",      desc: "Spaces curated to evoke emotion and refined comfort."           },
                  { icon: "🌿",  iconBg: "rgba(63,163,77,.10)",  title: "Landscape & Garden",    desc: "Outdoor environments designed as natural extensions."           },
                  { icon: "✦",   iconBg: "rgba(8,47,115,.08)",   title: "Bespoke Consulting",    desc: "End-to-end guidance from brief to final handover."             },
                ].map((f, i) => (
                  <div key={i} className="ah-feat-card">
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: f.iconBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 14, fontSize: 18,
                    }}>
                      {f.icon}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>{f.title}</div>
                    <div style={{ fontSize: 11.5, lineHeight: 1.65, color: "var(--text-light)", fontWeight: 300 }}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Award ribbon */}
            <div className="ah-animate ah-d5">
              <div style={{
                background: "linear-gradient(135deg,rgba(15,61,145,.06),rgba(245,158,11,.06))",
                border: "1px solid var(--border)", borderRadius: 16,
                padding: "18px 24px",
                display: "flex", alignItems: "center", gap: 16,
                backdropFilter: "blur(12px)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(245,158,11,.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>
                  🏆
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>
                    Architectural Excellence Award 2024
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-light)", marginTop: 3, letterSpacing: ".03em" }}>
                    Asia Pacific Design Council · Top 3 Firms Globally
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* ════ end right column ════ */}

        </div>
      </div>
    </section>
  );
}