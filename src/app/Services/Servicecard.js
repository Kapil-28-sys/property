"use client";

import { Home, TrendingUp, HandCoins } from "lucide-react";

export default function BuyerSellerSection() {
  const cards = [
    {
      icon: <Home size={22} color="var(--primary)" />,
      title: "Buy Property",
      desc: "Find your dream home with verified listings, expert guidance, and a hassle-free buying experience.",
    },
    {
      icon: <TrendingUp size={22} color="var(--primary)" />,
      title: "Sell Property",
      desc: "List your property easily and get the best market value with our trusted buyer network.",
    },
    {
      icon: <HandCoins size={22} color="var(--primary)" />,
      title: "Invest",
      desc: "Discover high-return property investments curated by real estate experts.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500&display=swap');

        .bs-heading { font-family: 'Cormorant Garamond', serif; }
        .bs-body    { font-family: 'Jost', sans-serif; }

        @keyframes bsFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .bs-fade-up {
          animation: bsFadeUp 0.9s ease forwards;
        }

        .bs-section {
          position: relative;
          width: 100%;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 96px 24px;
          overflow: hidden;
          background: var(--background);
        }

        .bs-inner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .bs-title-block {
          text-align: center;
          margin-bottom: 56px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bs-title-block h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.75rem);
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text);
          line-height: 1.15;
        }

        .bs-title-block p {
          font-family: 'Jost', sans-serif;
          margin-top: 16px;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-light);
          max-width: 560px;
          text-align: center;
        }

        .bs-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          justify-items: center;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .bs-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        .bs-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 28px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bs-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-8px);
        }

        .bs-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bs-icon-wrap {
          flex-shrink: 0;
          padding: 9px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--primary) 12%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bs-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.85rem;
          font-weight: 600;
          color: var(--text);
          line-height: 1.2;
        }

        .bs-card p {
          font-family: 'Jost', sans-serif;
          font-size: 0.97rem;
          line-height: 1.8;
          color: var(--text-light);
        }
      `}</style>

      <section className="bs-section bs-body">

        {/* ===== BACKGROUND ===== */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              opacity: 0.18,
            }}
          />
        </div>

        <div className="bs-inner">

          {/* ===== TITLE ===== */}
          <div className="bs-title-block bs-fade-up">
            <h2>Property Services</h2>
            <p>
              We help you buy, sell & invest in premium real estate with
              trust, speed, and transparency.
            </p>
          </div>

          {/* ===== CARDS ===== */}
          <div className="bs-grid bs-fade-up">
            {cards.map(({ icon, title, desc }) => (
              <div key={title} className="bs-card">
                <div className="bs-card-header">
                  <div className="bs-icon-wrap">{icon}</div>
                  <h3>{title}</h3>
                </div>
                <p>{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}