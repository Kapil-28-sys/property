"use client";

export function ContactMap() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--background)", padding: "80px 0" }}
    >
      {/* ===== FONTS ===== */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        .cm-h {
          font-family: 'Cormorant Garamond', serif;
        }

        .cm-b {
          font-family: 'Jost', sans-serif;
        }

        @keyframes cmFade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cm-f1 {
          animation: cmFade 0.6s ease 0.05s both;
        }

        .cm-f2 {
          animation: cmFade 0.6s ease 0.2s both;
        }

        .cm-map-wrapper {
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          position: relative;
          background: var(--white);
        }

        .cm-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 100px;
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          border: 1px solid
            color-mix(in srgb, var(--primary) 25%, transparent);
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-dark);
          margin-bottom: 14px;
        }

        .cm-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .cm-info-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 18px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          flex: 1;
          min-width: 160px;
        }

        .cm-info-pill:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .cm-pill-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          border: 1px solid
            color-mix(in srgb, var(--primary) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cm-map-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 768px) {
          .cm-map-top {
            flex-direction: column;
            gap: 14px;
            align-items: flex-start !important;
          }
        }
      `}</style>

      {/* ===== BG TEXTURE ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          opacity: 0.35,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.06,
        }}
      />

      {/* ===== CONTAINER ===== */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ===== HEADER ===== */}
        <div
          className="cm-f1"
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <span className="cm-badge">
            <span className="cm-badge-dot" />
            Our Location
          </span>

          <h2
            className="cm-h"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "var(--text)",
              letterSpacing: "-0.01em",
              marginBottom: "14px",
            }}
          >
            Find Us on{" "}
            <span
              className="italic"
              style={{ color: "var(--primary)" }}
            >
              Google Maps
            </span>
          </h2>

          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "var(--primary)",
              margin: "0 auto 16px",
            }}
          />

          <p
            className="cm-b"
            style={{
              color: "var(--text-light)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            Visit our office for meetings, site tours, and property
            consultations.
          </p>
        </div>

        {/* ===== INFO PILLS ===== */}
        <div
          className="cm-f1"
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "24px",
            justifyContent: "center",
          }}
        >
          {[
            {
              label: "Address",
              value: "Rajasthan, India",
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
            },
            {
              label: "Working Hours",
              value: "Mon – Sat, 9AM – 7PM",
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
            },
            {
              label: "Phone",
              value: "+91 98765 43210",
              icon: (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
                </svg>
              ),
            },
          ].map(({ label, value, icon }) => (
            <div key={label} className="cm-info-pill">
              <div className="cm-pill-icon">{icon}</div>

              <div>
                <p
                  className="cm-b"
                  style={{
                    fontSize: "0.67rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-light)",
                    marginBottom: "2px",
                  }}
                >
                  {label}
                </p>

                <p
                  className="cm-h"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MAP ===== */}
        <div className="cm-f2 cm-map-wrapper">
          {/* ===== TOP BAR ===== */}
          <div
            className="cm-map-top"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              background: "var(--white)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 6px var(--accent-light)",
                }}
              />

              <span
                className="cm-b"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "0.04em",
                }}
              >
                Rajasthan, India
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Rajasthan,India"
              target="_blank"
              rel="noopener noreferrer"
              className="cm-b cm-map-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--primary-dark)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "100px",
                border:
                  "1px solid color-mix(in srgb, var(--primary) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--primary) 8%, transparent)",
                transition: "var(--transition)",
              }}
            >
              Open in Maps

              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* ===== GOOGLE MAP ===== */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4807349640394!2d75.86498607542314!3d26.912433976664734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b2d6c8f2e7%3A0x2a7c1a3c7c9c9f0!2sRajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="420"
            style={{
              border: 0,
              display: "block",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}