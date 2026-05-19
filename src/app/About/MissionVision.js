"use client";

import { useState } from "react";

/* ─── Inline SVG icons (no external dep needed) ─── */
function IconTarget({ color = "#fff" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconEye({ color = "#fff" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconArrow({ stroke = "var(--primary)" }) {
  return (
    <svg width="13" height="13" viewBox="0 0 11 11" fill="none"
      stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 10L10 1M10 1H3M10 1V8" />
    </svg>
  );
}

export default function MissionVision() {
  const [mHov, setMHov] = useState(false);
  const [vHov, setVHov] = useState(false);
  const [mArrow, setMArrow] = useState(false);
  const [vArrow, setVArrow] = useState(false);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--background)", padding: "5rem 0 5.5rem" }}>

      {/* ── Fonts + Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes mvFadeUp  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mvPing    { 0%{transform:scale(1);opacity:.75} 100%{transform:scale(2.5);opacity:0} }
        @keyframes mvLine    { from{width:0} to{width:56px} }
        @keyframes mvShimmer { 0%{left:-80%} 100%{left:130%} }
        @keyframes mvFloat   { 0%,100%{transform:translateY(0);opacity:.4} 50%{transform:translateY(-6px);opacity:1} }

        .mv-fu1{opacity:0;animation:mvFadeUp .7s ease .05s both}
        .mv-fu2{opacity:0;animation:mvFadeUp .7s ease .15s both}
        .mv-fu3{opacity:0;animation:mvFadeUp .75s ease .25s both}
        .mv-fu4{opacity:0;animation:mvFadeUp .75s ease .38s both}

        .mv-ping{position:absolute;width:13px;height:13px;border-radius:50%;background:rgba(245,158,11,.27);animation:mvPing 2s ease-out infinite}

        .mv-line-gold{height:2px;border-radius:99px;background:linear-gradient(to right,var(--primary),transparent);animation:mvLine 1.1s ease .6s forwards;width:0;margin-top:1.5rem}
        .mv-line-white{height:2px;border-radius:99px;background:linear-gradient(to right,var(--primary-light),transparent);animation:mvLine 1.1s ease .7s forwards;width:0;margin-top:1.5rem}

        .mv-shimmer::after{
          content:'';
          position:absolute;top:0;height:100%;width:55%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
          transform:skewX(-14deg);
          left:-80%;opacity:0;transition:opacity .1s;
        }
        .mv-shimmer:hover::after{opacity:1;animation:mvShimmer 1.5s cubic-bezier(.23,1,.32,1) forwards}

        .mv-float1{animation:mvFloat 3s ease-in-out infinite}
        .mv-float2{animation:mvFloat 3s ease-in-out .5s infinite}
        .mv-float3{animation:mvFloat 3s ease-in-out 1s infinite}

        .mv-grid-light{
          position:absolute;inset:0;pointer-events:none;
          background-image:linear-gradient(rgba(15,23,42,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.045) 1px,transparent 1px);
          background-size:38px 38px;
          transform:perspective(800px) rotateX(52deg) scale(2.1);
          transform-origin:top;
        }
        .mv-grid-dark{
          position:absolute;inset:0;pointer-events:none;
          background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);
          background-size:38px 38px;
          transform:perspective(800px) rotateX(52deg) scale(2.1);
          transform-origin:top;
        }

        .mv-pill-navy{font-size:11px;letter-spacing:.04em;font-family:'Outfit',sans-serif;font-weight:400;padding:6px 14px;border-radius:99px;background:rgba(15,61,145,.08);color:var(--secondary)}
        .mv-pill-gold{font-size:11px;letter-spacing:.04em;font-family:'Outfit',sans-serif;font-weight:400;padding:6px 14px;border-radius:99px;background:rgba(245,158,11,.12);color:var(--primary-dark)}
        .mv-pill-white{font-size:11px;letter-spacing:.04em;font-family:'Outfit',sans-serif;font-weight:400;padding:6px 14px;border-radius:99px;background:rgba(255,255,255,.14);color:rgba(255,255,255,.82);border:1px solid rgba(255,255,255,.15)}

        @media(max-width:780px){
          .mv-grid{grid-template-columns:1fr!important}
          .mv-connector{display:none!important}
          .mv-bottom-stats{display:none!important}
        }
      `}</style>

      {/* ── Ambient glows ── */}
      <div aria-hidden style={{ position:"absolute", pointerEvents:"none", top:-80, left:"50%", transform:"translateX(-50%)", width:800, height:420, background:"rgba(245,158,11,.09)", filter:"blur(160px)", borderRadius:"50%" }} />
      <div aria-hidden style={{ position:"absolute", pointerEvents:"none", bottom:-60, left:"10%", width:400, height:300, background:"rgba(15,61,145,.07)", filter:"blur(130px)", borderRadius:"50%" }} />

      {/* ── Decorative rings ── */}
      {[
        { top:32,  left:18,    width:210, height:210, borderRadius:"50%",  border:"1px solid rgba(245,158,11,.11)", transform:"rotate(15deg)"  },
        { top:70,  right:28,   width:170, height:170, borderRadius:40,     border:"1px solid rgba(37,99,235,.09)",  transform:"rotate(-11deg)" },
        { bottom:28, right:18, width:280, height:280, borderRadius:60,     border:"1px solid rgba(245,158,11,.07)", transform:"rotate(9deg)"   },
        { bottom:24, left:50,  width:240, height:240, borderRadius:"50%",  border:"1px solid rgba(15,23,42,.05)",   transform:"rotate(20deg)"  },
      ].map((s, i) => (
        <div key={i} aria-hidden style={{ position:"absolute", pointerEvents:"none", ...s }} />
      ))}

      {/* ── Floating dots ── */}
      <div aria-hidden style={{ position:"absolute", top:"18%", left:"8%", pointerEvents:"none" }}>
        <div className="mv-float1" style={{ width:5, height:5, borderRadius:"50%", background:"var(--primary)", opacity:.35 }} />
      </div>
      <div aria-hidden style={{ position:"absolute", top:"55%", right:"7%", pointerEvents:"none" }}>
        <div className="mv-float2" style={{ width:4, height:4, borderRadius:"50%", background:"var(--secondary-light)", opacity:.3 }} />
      </div>
      <div aria-hidden style={{ position:"absolute", bottom:"22%", left:"14%", pointerEvents:"none" }}>
        <div className="mv-float3" style={{ width:6, height:6, borderRadius:"50%", background:"var(--primary-light)", opacity:.25 }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position:"relative", zIndex:10, maxWidth:1160, margin:"0 auto", padding:"0 2rem" }}>

        {/* Header */}
        <div className="mv-fu1" style={{ textAlign:"center", maxWidth:680, margin:"0 auto 4rem" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"9px 22px", borderRadius:99, border:"1px solid var(--border)", background:"rgba(255,255,255,.86)", backdropFilter:"blur(16px)", boxShadow:"var(--shadow-sm)", position:"relative", marginBottom:"2rem" }}>
            <div className="mv-ping" />
            <div style={{ position:"relative", width:7, height:7, borderRadius:"50%", background:"var(--primary)", boxShadow:"0 0 10px rgba(245,158,11,.55)", flexShrink:0 }} />
            <span style={{ fontSize:10, letterSpacing:".38em", textTransform:"uppercase", color:"var(--text-light)", fontWeight:500 }}>Mission &amp; Vision</span>
          </div>

          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.8rem,5.5vw,5rem)", lineHeight:.92, letterSpacing:"-.035em", color:"var(--text)", fontWeight:300 }}>
            Crafted For<br />
            <em style={{ fontStyle:"italic", fontWeight:600, color:"var(--primary)" }}>Timeless Impact</em>
          </h2>

          <p style={{ marginTop:"1.4rem", fontSize:15, lineHeight:1.8, color:"var(--text-light)", fontWeight:300, maxWidth:480, marginLeft:"auto", marginRight:"auto" }}>
            Every structure we create is rooted in purpose — a careful balance of vision and mission that drives extraordinary outcomes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mv-grid" style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"center" }}>

          {/* ── MISSION CARD ── */}
          <div
            className="mv-fu3 mv-shimmer"
            onMouseEnter={() => setMHov(true)}
            onMouseLeave={() => setMHov(false)}
            style={{
              position:"relative", overflow:"hidden",
              borderRadius:"var(--radius)",
              border: mHov ? "1px solid rgba(245,158,11,.28)" : "1px solid var(--border)",
              background:"rgba(255,255,255,.93)",
              backdropFilter:"blur(22px)",
              padding:"2.6rem 2.5rem",
              boxShadow: mHov ? "0 28px 80px rgba(245,158,11,.14)" : "var(--shadow-md)",
              transform: mHov ? "translateY(-8px)" : "translateY(0)",
              transition:"var(--transition)",
              cursor:"default",
            }}
          >
            <div className="mv-grid-light" />
            <div aria-hidden style={{ position:"absolute", top:-80, right:-50, width:280, height:280, borderRadius:"50%", background:"rgba(245,158,11,.1)", filter:"blur(90px)", pointerEvents:"none", opacity: mHov ? 1 : 0, transition:".6s" }} />

            <div style={{ position:"relative", zIndex:1 }}>
              {/* Icon row */}
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
                <div style={{ width:58, height:58, borderRadius:16, background:"linear-gradient(135deg,var(--secondary),var(--secondary-dark))", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 28px rgba(15,61,145,.28)" }}>
                  <IconTarget />
                </div>
                <span style={{ fontSize:10, letterSpacing:".35em", textTransform:"uppercase", color:"var(--text-light)", fontWeight:500, paddingTop:4 }}>Our Mission</span>
              </div>

              <div className="mv-line-gold" />

              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,2.8rem)", fontWeight:600, lineHeight:.95, color:"var(--text)", marginTop:"1.6rem", letterSpacing:"-.025em" }}>
                Elegant{" "}
                <em style={{ fontStyle:"italic", fontWeight:300, color:"var(--primary)" }}>Experiences</em>
              </h3>

              <p style={{ marginTop:"1.2rem", fontSize:14.5, lineHeight:1.82, color:"var(--text-light)", fontWeight:300 }}>
                Creating sophisticated living experiences through refined architecture, emotional storytelling, and timeless luxury aesthetics that stand beyond trends.
              </p>

              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginTop:"2rem" }}>
                <span className="mv-pill-navy">Architecture</span>
                <span className="mv-pill-gold">Luxury Design</span>
                <span className="mv-pill-navy">Storytelling</span>
              </div>

              {/* Footer stats */}
              <div style={{ marginTop:"2rem", paddingTop:"1.5rem", borderTop:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", gap:18 }}>
                  <div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:"var(--primary)", lineHeight:1 }}>
                      380<span style={{ fontSize:14, fontWeight:300, color:"var(--primary-dark)" }}>+</span>
                    </div>
                    <div style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"var(--text-light)", marginTop:3 }}>Projects</div>
                  </div>
                  <div style={{ width:1, background:"var(--border)" }} />
                  <div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:"var(--secondary)", lineHeight:1 }}>
                      24<span style={{ fontSize:14, fontWeight:300, color:"var(--secondary-light)" }}>yr</span>
                    </div>
                    <div style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"var(--text-light)", marginTop:3 }}>Experience</div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setMArrow(true)}
                  onMouseLeave={() => setMArrow(false)}
                  style={{ width:38, height:38, borderRadius:"50%", border:"1.5px solid var(--primary)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"var(--transition)", background: mArrow ? "var(--primary)" : "transparent" }}
                >
                  <IconArrow stroke={mArrow ? "#fff" : "var(--primary)"} />
                </div>
              </div>
            </div>
          </div>

          {/* ── CONNECTOR ── */}
          <div className="mv-connector mv-fu2" style={{ padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
              <div style={{ width:1, height:40, background:"linear-gradient(to bottom,transparent,var(--border))" }} />
              <div style={{ width:52, height:52, borderRadius:"50%", background:"rgba(255,255,255,.9)", border:"1.5px solid var(--border)", backdropFilter:"blur(10px)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"var(--shadow-sm)", fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:"var(--primary)", fontStyle:"italic", fontWeight:600 }}>
                &amp;
              </div>
              <div style={{ width:1, height:40, background:"linear-gradient(to bottom,var(--border),transparent)" }} />
            </div>
          </div>

          {/* ── VISION CARD ── */}
          <div
            className="mv-fu4 mv-shimmer"
            onMouseEnter={() => setVHov(true)}
            onMouseLeave={() => setVHov(false)}
            style={{
              position:"relative", overflow:"hidden",
              borderRadius:"var(--radius)",
              border:"1px solid rgba(245,158,11,.18)",
              background:"linear-gradient(148deg,var(--secondary-dark) 0%,var(--secondary) 100%)",
              padding:"2.6rem 2.5rem",
              boxShadow: vHov ? "0 28px 80px rgba(15,61,145,.32)" : "var(--shadow-md)",
              transform: vHov ? "translateY(-8px)" : "translateY(0)",
              transition:"var(--transition)",
              cursor:"default",
            }}
          >
            <div className="mv-grid-dark" />
            <div aria-hidden style={{ position:"absolute", bottom:-80, left:-50, width:320, height:320, borderRadius:"50%", background:"rgba(245,158,11,.18)", filter:"blur(120px)", pointerEvents:"none" }} />
            <div aria-hidden style={{ position:"absolute", top:-40, right:-30, width:180, height:180, borderRadius:"50%", background:"rgba(37,99,235,.15)", filter:"blur(70px)", pointerEvents:"none" }} />

            <div style={{ position:"relative", zIndex:1 }}>
              {/* Icon row */}
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
                <div style={{ width:58, height:58, borderRadius:16, background:"var(--primary)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 28px rgba(245,158,11,.38)" }}>
                  <IconEye color="var(--secondary-dark)" />
                </div>
                <span style={{ fontSize:10, letterSpacing:".35em", textTransform:"uppercase", color:"rgba(255,255,255,.5)", fontWeight:500, paddingTop:4 }}>Our Vision</span>
              </div>

              <div className="mv-line-white" />

              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,3.5vw,2.8rem)", fontWeight:600, lineHeight:.95, color:"#fff", marginTop:"1.6rem", letterSpacing:"-.025em" }}>
                Future{" "}
                <em style={{ fontStyle:"italic", fontWeight:300, color:"var(--primary-light)" }}>Luxury</em>
              </h3>

              <p style={{ marginTop:"1.2rem", fontSize:14.5, lineHeight:1.82, color:"rgba(255,255,255,.7)", fontWeight:300 }}>
                Redefining modern architecture with emotionally connected spaces that inspire innovation and globally admired luxury living for generations to come.
              </p>

              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginTop:"2rem" }}>
                <span className="mv-pill-white">Innovation</span>
                <span className="mv-pill-white">Global Vision</span>
                <span className="mv-pill-white">Future Living</span>
              </div>

              {/* Footer stats */}
              <div style={{ marginTop:"2rem", paddingTop:"1.5rem", borderTop:"1px solid rgba(255,255,255,.12)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", gap:18 }}>
                  <div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:"var(--primary-light)", lineHeight:1 }}>
                      18<span style={{ fontSize:14, fontWeight:300, color:"rgba(251,191,36,.7)" }}>×</span>
                    </div>
                    <div style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", marginTop:3 }}>Awards</div>
                  </div>
                  <div style={{ width:1, background:"rgba(255,255,255,.12)" }} />
                  <div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:600, color:"#fff", lineHeight:1 }}>
                      42<span style={{ fontSize:14, fontWeight:300, color:"rgba(255,255,255,.55)" }}>+</span>
                    </div>
                    <div style={{ fontSize:10, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", marginTop:3 }}>Countries</div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setVArrow(true)}
                  onMouseLeave={() => setVArrow(false)}
                  style={{ width:38, height:38, borderRadius:"50%", border:"1.5px solid var(--primary-light)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", transition:"var(--transition)", background: vArrow ? "var(--primary)" : "transparent" }}
                >
                  <IconArrow stroke={vArrow ? "var(--secondary-dark)" : "var(--primary-light)"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom quote band ── */}
        <div className="mv-fu4" style={{ marginTop:"2rem", borderRadius:"var(--radius)", border:"1px solid var(--border)", background:"rgba(255,255,255,.7)", backdropFilter:"blur(18px)", padding:"1.5rem 2.2rem", display:"flex", alignItems:"center", gap:"2rem", boxShadow:"var(--shadow-sm)", flexWrap:"wrap" }}>
          <div style={{ flex:1, minWidth:220 }}>
            <div style={{ fontSize:10, letterSpacing:".32em", textTransform:"uppercase", color:"var(--text-light)", fontWeight:500, marginBottom:6 }}>Our North Star</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontStyle:"italic", color:"var(--text)", fontWeight:300, lineHeight:1.4 }}>
              "To build not just spaces, but legacies — where beauty and purpose coexist in perfect harmony."
            </p>
          </div>
          <div className="mv-bottom-stats" style={{ display:"flex", gap:28, flexShrink:0, alignItems:"center" }}>
            {[
              { num:"98", unit:"%", label:"Client Satisfaction", color:"var(--primary)"   },
              { num:"3",  unit:"×", label:"Global Recognition",  color:"var(--secondary)" },
              { num:"A+", unit:"",  label:"Design Rating",       color:"var(--accent)"    },
            ].map((s, i) => (
              <div key={i} style={{ display:"contents" }}>
                {i > 0 && <div style={{ width:1, height:44, background:"var(--border)" }} />}
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:600, color:s.color, lineHeight:1 }}>
                    {s.num}<span style={{ fontSize:"1rem", fontWeight:300 }}>{s.unit}</span>
                  </div>
                  <div style={{ fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--text-light)", marginTop:4 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}