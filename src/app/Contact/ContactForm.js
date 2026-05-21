"use client";

export default function ContactSection() {
  const infoItems = [
    {
      label: "Email",
      value: "support@yourdomain.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 98765 43210",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Rajasthan, India",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ];

  const socialPaths = [
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    "M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z",
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  ];

  // ✅ No TypeScript type annotation — plain JS
  const fieldLabel = (text) => (
    <label
      style={{
        display: "block",
        fontFamily: "'Jost', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--text-light)",
        marginBottom: "7px",
      }}
    >
      {text}
    </label>
  );

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--background)", padding: "96px 0" }}
    >

      {/* ===== FONTS ===== */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        .cs-h { font-family: 'Cormorant Garamond', serif; }
        .cs-b { font-family: 'Jost', sans-serif; }

        @keyframes csFade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cs-f1 { animation: csFade 0.6s ease 0.05s both; }
        .cs-f2 { animation: csFade 0.6s ease 0.18s both; }
        .cs-f3 { animation: csFade 0.6s ease 0.30s both; }

        .cs-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .cs-info-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
          border-color: var(--primary);
        }

        .cs-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary) 22%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-input {
          width: 100%;
          box-sizing: border-box;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 15px;
          font-family: 'Jost', sans-serif;
          font-size: 0.88rem;
          color: var(--text);
          outline: none;
          transition: var(--transition);
        }
        .cs-input::placeholder { color: var(--text-light); opacity: 0.7; }
        .cs-input:focus {
          border-color: var(--primary);
          background: var(--white);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 10%, transparent);
        }

        .cs-submit {
          width: 100%;
          background: var(--secondary);
          color: var(--white);
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .cs-submit:hover {
          background: var(--secondary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(15,61,145,0.25);
        }

        .cs-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
          flex-shrink: 0;
        }
        .cs-social-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
        }
        .cs-social-btn:hover svg { fill: var(--white); }
      `}</style>

      {/* ===== BG TEXTURE ===== */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        opacity: 0.35,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        opacity: 0.06,
      }} />

      {/* ===== MAIN CONTAINER ===== */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* ===== SECTION HEADER ===== */}
        <div className="cs-f1" style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="cs-b" style={{
            fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--primary)", marginBottom: "12px",
          }}>
            Get In Touch
          </p>
          <h2 className="cs-h" style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 600,
            lineHeight: 1.1, color: "var(--text)", letterSpacing: "-0.01em",
            marginBottom: "14px",
          }}>
            Let's Connect &{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>Collaborate</span>
          </h2>
          <div style={{
            width: "48px", height: "3px", borderRadius: "2px",
            background: "var(--primary)", margin: "0 auto 18px",
          }} />
          <p className="cs-b" style={{
            color: "var(--text-light)", fontSize: "0.98rem",
            lineHeight: 1.85, maxWidth: "480px", margin: "0 auto",
          }}>
            We're always open to conversations, ideas, and opportunities.
            Reach out and we'll respond within 24 hours.
          </p>
        </div>

        {/* ===== TWO-COLUMN LAYOUT ===== */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "32px",
          alignItems: "start",
        }}>

          {/* ===== LEFT — INFO ===== */}
          <div className="cs-f2" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {infoItems.map(({ label, value, icon }) => (
              <div key={label} className="cs-info-card">
                <div className="cs-icon-wrap">{icon}</div>
                <div>
                  <p className="cs-b" style={{
                    fontSize: "0.68rem", fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--text-light)", marginBottom: "3px",
                  }}>
                    {label}
                  </p>
                  <p className="cs-h" style={{
                    fontSize: "1.1rem", fontWeight: 600,
                    color: "var(--primary-dark)", lineHeight: 1.2,
                  }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Working hours */}
            <div className="cs-info-card" style={{ flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
              <p className="cs-b" style={{
                fontSize: "0.68rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--text-light)",
              }}>
                Working Hours
              </p>
              {[
                { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                { day: "Saturday",  time: "10:00 AM – 5:00 PM" },
                { day: "Sunday",    time: "Closed" },
              ].map(({ day, time }) => (
                <div key={day} style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", width: "100%",
                  borderBottom: "1px solid var(--border)", paddingBottom: "8px",
                }}>
                  <span className="cs-b" style={{ fontSize: "0.85rem", color: "var(--text)" }}>{day}</span>
                  <span className="cs-b" style={{
                    fontSize: "0.82rem",
                    color: time === "Closed" ? "var(--text-light)" : "var(--primary-dark)",
                    fontWeight: 500,
                  }}>{time}</span>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "4px" }}>
              <span className="cs-b" style={{
                fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-light)", whiteSpace: "nowrap",
              }}>
                Follow us
              </span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              {socialPaths.map((path, i) => (
                <button key={i} className="cs-social-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--text-light)">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>

          </div>

          {/* ===== RIGHT — FORM ===== */}
          <div className="cs-f3" style={{
            background: "var(--white)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "36px",
            boxShadow: "var(--shadow-md)",
          }}>

            <div style={{ marginBottom: "26px" }}>
              <p className="cs-b" style={{
                fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--primary)", marginBottom: "8px",
              }}>
                Message Us
              </p>
              <h3 className="cs-h" style={{
                fontSize: "2rem", fontWeight: 600,
                color: "var(--text)", lineHeight: 1.15, marginBottom: "6px",
              }}>
                Send a Message
              </h3>
              <p className="cs-b" style={{ color: "var(--text-light)", fontSize: "0.86rem" }}>
                Fill the form below and we'll be in touch shortly.
              </p>
            </div>

            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  {fieldLabel("Full Name")}
                  <input type="text" placeholder="John Doe" className="cs-input" />
                </div>
                <div>
                  {fieldLabel("Email")}
                  <input type="email" placeholder="john@email.com" className="cs-input" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  {fieldLabel("Phone")}
                  <input type="tel" placeholder="+91 00000 00000" className="cs-input" />
                </div>
                <div>
                  {fieldLabel("Subject")}
                  <input type="text" placeholder="Property Enquiry" className="cs-input" />
                </div>
              </div>

              <div>
                {fieldLabel("Message")}
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="cs-input"
                  style={{ resize: "none", lineHeight: "1.7" }}
                />
              </div>

              <button type="submit" className="cs-submit" style={{ marginTop: "4px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}