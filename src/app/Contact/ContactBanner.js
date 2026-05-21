"use client";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}
    >

      {/* ===== FONTS ===== */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        .ch-heading { font-family: 'Cormorant Garamond', serif; }
        .ch-body    { font-family: 'Jost', sans-serif; }

        @keyframes chFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ch-f1 { animation: chFadeUp 0.65s ease 0.05s both; }
        .ch-f2 { animation: chFadeUp 0.65s ease 0.18s both; }
        .ch-f3 { animation: chFadeUp 0.65s ease 0.30s both; }
        .ch-f4 { animation: chFadeUp 0.65s ease 0.42s both; }
        .ch-f5 { animation: chFadeUp 0.65s ease 0.54s both; }

        /* ---- Buttons ---- */
        .ch-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          padding: 13px 34px;
          border-radius: 100px;
          cursor: pointer;
          border: none;
          transition: var(--transition);
          text-decoration: none;
        }
        .ch-btn-primary {
          background: var(--primary);
          color: var(--white);
          box-shadow: 0 8px 28px rgba(245,158,11,0.38);
        }
        .ch-btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(245,158,11,0.45);
        }
        .ch-btn-ghost {
          background: rgba(255,255,255,0.08);
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.35) !important;
          backdrop-filter: blur(8px);
        }
        .ch-btn-ghost:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.65) !important;
          transform: translateY(-2px);
        }

        /* ---- Info pill ---- */
        .ch-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.04em;
        }
        .ch-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--primary);
        }

        /* ---- Stat card ---- */
        .ch-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
          padding: 18px 24px;
          border-radius: var(--radius);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(12px);
          min-width: 130px;
        }
        .ch-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.1rem;
          font-weight: 600;
          line-height: 1;
          color: var(--primary);
        }
        .ch-stat-lbl {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }

        /* ---- Contact info row ---- */
        .ch-info-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.72);
        }
        .ch-info-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.20);
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ---- Vertical divider ---- */
        .ch-vdivider {
          width: 1px;
          background: rgba(255,255,255,0.18);
          align-self: stretch;
        }
      `}</style>

      {/* ===== BG IMAGE ===== */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          transform: "scale(1.04)",
        }}
      />

      {/* ===== OVERLAYS ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(8,47,115,0.92) 0%, rgba(15,61,145,0.78) 40%, rgba(0,0,0,0.60) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ===== DECORATIVE CIRCLE ===== */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-120px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "1px solid rgba(245,158,11,0.12)",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div
        className="relative z-10 w-full py-20 px-6 lg:px-16"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "48px",
            alignItems: "center",
          }}
        >

          {/* ===== LEFT — MAIN CONTENT ===== */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* Status pill */}
            <div className="ch-f1" style={{ marginBottom: "24px" }}>
              <span className="ch-pill">
                <span className="ch-pill-dot" />
                We respond within 24 hours
              </span>
            </div>

            {/* Label */}
            <p
              className="ch-body ch-f2"
              style={{
                color: "var(--primary)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              Contact Us
            </p>

            {/* Heading */}
            <h2
              className="ch-heading ch-f3"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                fontWeight: 600,
                lineHeight: 1.06,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                marginBottom: "22px",
              }}
            >
              Let's Build Something
              <br />
              <span
                className="italic"
                style={{ color: "var(--primary-light)" }}
              >
                Together
              </span>
            </h2>

            {/* Accent line */}
            <div
              className="ch-f3"
              style={{
                width: "52px",
                height: "3px",
                borderRadius: "2px",
                background: "var(--primary)",
                marginBottom: "22px",
              }}
            />

            {/* Description */}
            <p
              className="ch-body ch-f4"
              style={{
                color: "rgba(255,255,255,0.68)",
                fontSize: "1rem",
                lineHeight: 1.9,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Have a question, project idea, or just want to connect?
              We're here to help you every step of the way. Reach out
              and our team will get back to you as soon as possible.
            </p>

            {/* Buttons */}
            <div
              className="ch-f4"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}
            >
              <button className="ch-btn ch-btn-primary">Get in Touch</button>
              <button className="ch-btn ch-btn-ghost">Learn More</button>
            </div>

            {/* Contact info */}
            <div
              className="ch-f5"
              style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}
            >
              <div className="ch-info-row">
                <span className="ch-info-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                hello@premiumrealty.com
              </div>
              <div className="ch-info-row">
                <span className="ch-info-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
                  </svg>
                </span>
                +91 98765 43210
              </div>
            </div>

          </div>

          {/* ===== RIGHT — STAT CARDS ===== */}
          <div
            className="ch-f5"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              alignItems: "flex-end",
            }}
          >
            {[
              { val: "1,200+", lbl: "Properties Listed" },
              { val: "98%",    lbl: "Client Satisfaction" },
              { val: "15 Yrs", lbl: "Market Experience" },
              { val: "50+",    lbl: "Expert Agents" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="ch-stat">
                <span className="ch-stat-val">{val}</span>
                <span className="ch-stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== BOTTOM FADE ===== */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />

    </section>
  );
}