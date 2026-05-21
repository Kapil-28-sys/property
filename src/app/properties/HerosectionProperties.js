"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function PropertiesHeroSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost      { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.6s ease 0.25s both; }
        .fade-up-3 { animation: fadeUp 0.6s ease 0.4s both; }
        .fade-up-4 { animation: fadeUp 0.6s ease 0.55s both; }

        .hero-bg {
          background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          transition: transform 8s ease;
        }

        .hero-btn-primary {
          background: var(--primary);
          color: var(--white);
          box-shadow: var(--shadow-md);
          border: none;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          padding: 14px 36px;
          border-radius: 100px;
          transition: var(--transition);
        }
        .hero-btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 18px 50px rgba(245,158,11,0.35);
        }

        .hero-btn-secondary {
          background: rgba(255,255,255,0.7);
          color: var(--secondary);
          border: 1px solid var(--border);
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          padding: 14px 36px;
          border-radius: 100px;
          backdrop-filter: blur(12px);
          transition: var(--transition);
        }
        .hero-btn-secondary:hover {
          background: var(--secondary);
          color: var(--white);
          border-color: var(--secondary);
          transform: translateY(-2px);
        }

        .hero-stat-card {
          background: rgba(255,255,255,0.75);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          backdrop-filter: blur(14px);
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: var(--shadow-sm);
        }

        .hero-stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          line-height: 1;
          color: var(--primary);
        }

        .hero-stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{ height: "92vh", background: "var(--background)" }}
      >

        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute inset-0 hero-bg" />

        {/* ===== OVERLAYS ===== */}
        <div className="absolute inset-0" style={{ background: "rgba(248,250,252,0.45)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(248,250,252,0.97) 0%, rgba(248,250,252,0.75) 45%, rgba(248,250,252,0.3) 100%)",
          }}
        />

        {/* ===== SUBTLE GRID OVERLAY ===== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.18,
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 h-full flex items-center">
          <div
            className="w-full px-6 lg:px-16"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >

            {/* ===== BADGE ===== */}
            <div className="fade-up-1 inline-flex items-center gap-2 mb-8">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-jost"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.8)",
                  color: "var(--secondary)",
                  boxShadow: "var(--shadow-sm)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Building2 size={15} />
                Premium Properties Collection
              </div>
            </div>

            {/* ===== HEADING ===== */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-cormorant fade-up-2"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 7rem)",
                fontWeight: 600,
                lineHeight: 0.92,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Discover
              <span
                className="block italic"
                style={{ color: "var(--primary)" }}
              >
                Luxury Living
              </span>
            </motion.h1>

            {/* ===== DESCRIPTION ===== */}
            <p
              className="font-jost fade-up-3"
              style={{
                fontSize: "1.05rem",
                marginTop: "28px",
                maxWidth: "520px",
                lineHeight: 1.85,
                color: "var(--text-light)",
              }}
            >
              Explore exceptional residences, premium apartments, modern villas,
              and commercial spaces crafted for elevated lifestyles and smart investments.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-wrap gap-4 mt-10 fade-up-4">
              <button className="hero-btn-primary">Explore Properties</button>
              <button className="hero-btn-secondary">Contact Us</button>
            </div>

     

          </div>
        </div>

        {/* ===== BOTTOM FADE ===== */}
        <div
          className="absolute bottom-0 left-0 w-full h-36 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />

      </section>
    </>
  );
}