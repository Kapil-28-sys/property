"use client";

import { useState, useRef, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle, ImagePlus, X, MapPin, Home, User, FileText, UserPlus } from "lucide-react";
import { Country, State, City } from "country-state-city";
import { createSellerProperty } from "../../servicesapi/sellerformapi";
import { registerClient } from "../../servicesapi/userapi"; // ← imported here

/* ══════════════════════════════════════════════
   REGISTER MODAL
══════════════════════════════════════════════ */
function RegisterModal({ onSuccess }) {
  const [fields, setFields] = useState({ name: "", email: "", mobileno: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (key) => (e) => setFields((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // ✅ Using registerClient from userapi.js — no hardcoded URL here
      const json = await registerClient(fields);
      if (!json.status) throw new Error(json.message || "Registration failed");
      onSuccess(json);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={M.overlay}>
      <div style={M.modal}>
        <div style={M.header}>
          <div style={M.iconWrap}><UserPlus size={22} color="#c8a45a" /></div>
          <div>
            <h2 style={M.title}>Create Your Account</h2>
            <p style={M.sub}>Register to list your property on our platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={M.form}>
          <div style={M.field}>
            <label style={M.label}>Full Name <span style={{ color: "#c8a45a" }}>*</span></label>
            <input style={M.input} placeholder="John Doe" value={fields.name} onChange={set("name")} required />
          </div>
          <div style={M.field}>
            <label style={M.label}>Email Address <span style={{ color: "#c8a45a" }}>*</span></label>
            <input style={M.input} type="email" placeholder="john@email.com" value={fields.email} onChange={set("email")} required />
          </div>
          <div style={M.field}>
            <label style={M.label}>Mobile Number <span style={{ color: "#c8a45a" }}>*</span></label>
            <input style={M.input} placeholder="9876543210" value={fields.mobileno} onChange={set("mobileno")} required maxLength={10} />
          </div>
          <div style={M.field}>
            <label style={M.label}>Password <span style={{ color: "#c8a45a" }}>*</span></label>
            <input style={M.input} type="password" placeholder="Create a password" value={fields.password} onChange={set("password")} required minLength={6} />
          </div>

          {error && (
            <div style={M.error}>
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" disabled={loading} style={{ ...M.btn, opacity: loading ? 0.75 : 1 }}>
            {loading && <Loader2 size={16} style={{ animation: "spin .8s linear infinite" }} />}
            {loading ? "Creating Account…" : "Register & Continue →"}
          </button>

          <p style={M.note}>
            Your details are used to manage your listing. By registering, you agree to our terms.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}

const M = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(10,10,26,0.65)",
    backdropFilter: "blur(6px)", zIndex: 1000,
    display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
  },
  modal: {
    background: "#fff", borderRadius: 24, padding: "36px 32px 32px",
    width: "100%", maxWidth: 440, boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
    border: "1px solid #e8e7e2", animation: "modalIn .35s cubic-bezier(.34,1.56,.64,1) both",
  },
  header: { display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 28 },
  iconWrap: {
    width: 48, height: 48, borderRadius: 14,
    background: "rgba(200,164,90,0.1)", border: "1.5px solid rgba(200,164,90,0.25)",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700,
    color: "#1a1a2e", letterSpacing: "-0.01em", lineHeight: 1.2,
  },
  sub: { color: "#8e8fa8", fontSize: 13, marginTop: 4 },
  form: { display: "flex", flexDirection: "column", gap: 16 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "#6b6c80",
  },
  input: {
    height: 46, padding: "0 16px", border: "1.5px solid #e4e3de",
    borderRadius: 12, background: "#faf9f7", fontSize: 14.5,
    fontFamily: "'DM Sans', sans-serif", color: "#1a1a2e",
    outline: "none", transition: "border-color .2s, box-shadow .2s",
  },
  error: {
    display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
    background: "#fff1f2", border: "1px solid #fecdd3", borderRadius: 10,
    color: "#be123c", fontSize: 13, fontWeight: 500,
  },
  btn: {
    height: 50, border: "none", borderRadius: 14,
    background: "linear-gradient(135deg, #b8862e, #c8a45a, #d4b06a)",
    color: "#fff", fontSize: 14.5, fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    boxShadow: "0 6px 24px rgba(200,164,90,0.4)", marginTop: 4,
  },
  note: { fontSize: 11.5, color: "#a0a1b5", textAlign: "center", lineHeight: 1.6 },
};

/* ══════════════════════════════════════════════
   MAIN SELLER FORM
══════════════════════════════════════════════ */
export default function SellerForm() {

  const [fields, setFields] = useState({
    name: "", phone: "", email: "",
    area: "", pincode: "", address: "",
    propertyType: "", furnishedType: "",
    bedrooms: "", bathrooms: "", areaSize: "",
    areaUnit: "", price: "", description: "",
  });

  const [imgs, setImgs]         = useState([]);
  const [previews, setPreviews] = useState([]);

  const [countries, setCountries]             = useState([]);
  const [states, setStates]                   = useState([]);
  const [cities, setCities]                   = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState]     = useState("");
  const [selectedCity, setSelectedCity]       = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [formState, setFormState] = useState({ loading: false, status: null, msg: "" });
  const [activeSection, setActiveSection]     = useState(0);

  // ── Registration state ──
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [clientData, setClientData]     = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    setCountries(Country.getAllCountries());
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  useEffect(() => {
    return () => previews.forEach((url) => URL.revokeObjectURL(url));
  }, [previews]);

  const requireRegistration = () => {
    if (!isRegistered) {
      setShowRegModal(true);
      return true;
    }
    return false;
  };

  const handleRegistrationSuccess = (json) => {
    setClientData(json);
    setIsRegistered(true);
    setShowRegModal(false);
    setFields((prev) => ({
      ...prev,
      name:  json.client?.name     || prev.name,
      email: json.client?.email    || prev.email,
      phone: json.client?.mobileno || prev.phone,
    }));
  };

  const handleCountryChange = (e) => {
    if (requireRegistration()) return;
    const code = e.target.value;
    setSelectedCountry(code);
    setSelectedState(""); setSelectedCity("");
    setStates(State.getStatesOfCountry(code));
    setCities([]);
  };

  const handleStateChange = (e) => {
    if (requireRegistration()) return;
    const code = e.target.value;
    setSelectedState(code);
    setSelectedCity("");
    setCities(City.getCitiesOfState(selectedCountry, code));
  };

  const handleImageChange = (e) => {
    if (requireRegistration()) return;
    const newFiles = Array.from(e.target.files);
    previews.forEach((url) => URL.revokeObjectURL(url));
    setImgs(newFiles);
    setPreviews(newFiles.map((f) => URL.createObjectURL(f)));
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(previews[index]);
    setImgs((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const detectLocation = () => {
    if (requireRegistration()) return;
    if (!navigator.geolocation) { alert("Geolocation not supported."); return; }
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const addr = data.address || {};
          setFields((prev) => ({
            ...prev,
            pincode: addr.postcode || prev.pincode,
            area:    addr.suburb || addr.neighbourhood || prev.area,
          }));
          const detectedState = addr.state || "";
          const matchedState  = states.find((s) => s.name.toLowerCase().includes(detectedState.toLowerCase()));
          if (matchedState) {
            setSelectedState(matchedState.isoCode);
            const cityList = City.getCitiesOfState(selectedCountry, matchedState.isoCode);
            setCities(cityList);
            const detectedCity = addr.city || addr.town || addr.village || "";
            const matchedCity  = cityList.find((c) => c.name.toLowerCase().includes(detectedCity.toLowerCase()));
            if (matchedCity) setSelectedCity(matchedCity.name);
          }
        } catch (err) {
          console.error("Location fetch error:", err);
        } finally {
          setLoadingLocation(false);
        }
      },
      () => { setLoadingLocation(false); alert("Location permission denied."); }
    );
  };

  const uploadImagesToServer = async () => {
    if (imgs.length === 0) return [];
    const fd = new FormData();
    imgs.forEach((file) => fd.append("images", file));
    const res  = await fetch("/api/upload", { method: "POST", body: fd });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json.error || `Image upload failed (${res.status})`);
    return json.urls;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!isRegistered) { setShowRegModal(true); return; }
    setFormState({ loading: true, status: null, msg: "" });
    try {
      const imageUrls         = await uploadImagesToServer();
      const selectedStateName = states.find((s) => s.isoCode === selectedState)?.name || selectedState || "";
      const expectedPrice     = parseFloat(fields.price?.replace(/,/g, "") || 0);

      const payload = {
        fullname:      fields.name,
        phone:         fields.phone,
        email:         fields.email,
        state:         selectedStateName,
        city:          selectedCity,
        area:          fields.area,
        address:       fields.address,
        pincode:       fields.pincode,
        propertyType:  fields.propertyType,
        description:   fields.description,
        bedrooms:      Number(fields.bedrooms)  || 0,
        bathrooms:     Number(fields.bathrooms) || 0,
        areaSize:      Number(fields.areaSize)  || 0,
        areaUnit:      fields.areaUnit,
        furnishedType: fields.furnishedType,
        expectedPrice,
        adminPrice:    0,
        finalPrice:    expectedPrice,
        Active:        "Active",
        image:         imageUrls,
        clientId:      clientData?.client?.id,
      };

      const json = await createSellerProperty(payload);
      setFormState({
        loading: false, status: "ok",
        msg: `Listed successfully! · Seller #${json.seller?.id ?? "—"} · Property #${json.property?.id ?? "—"}`,
      });

      // Reset form
      setFields({ name:"", phone:"", email:"", area:"", pincode:"", address:"", propertyType:"", furnishedType:"", bedrooms:"", bathrooms:"", areaSize:"", areaUnit:"", price:"", description:"" });
      previews.forEach((url) => URL.revokeObjectURL(url));
      setImgs([]); setPreviews([]);
      setSelectedCountry("IN"); setSelectedState(""); setSelectedCity("");
      setStates(State.getStatesOfCountry("IN")); setCities([]);
      setActiveSection(0);

    } catch (err) {
      setFormState({ loading: false, status: "err", msg: err?.message || "Something went wrong." });
    }
  };

  const setWithGuard = (key) => (e) => {
    if (requireRegistration()) return;
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const sections = [
    { label: "Contact",  icon: <User size={15} /> },
    { label: "Location", icon: <MapPin size={15} /> },
    { label: "Property", icon: <Home size={15} /> },
    { label: "Media",    icon: <FileText size={15} /> },
  ];

  return (
    <div style={S.page}>
      {showRegModal && <RegisterModal onSuccess={handleRegistrationSuccess} />}

      <div style={S.bgGrid} aria-hidden="true" />
      <div style={S.container}>

        <header style={S.header}>
          <div style={S.pill}><span style={S.pillDot} />Property Listing Portal</div>
          <h1 style={S.h1}>List Your <span style={S.accent}>Property</span></h1>
          <p style={S.sub}>Complete the form below to publish your listing instantly</p>
          {isRegistered && clientData && (
            <div style={S.userBadge}>
              <CheckCircle2 size={14} color="#15803d" />
              <span>Registered as <strong>{clientData.client?.name}</strong></span>
            </div>
          )}
        </header>

        <nav style={S.nav} aria-label="Form sections">
          {sections.map((s, i) => (
            <button key={i} type="button"
              onClick={() => { if (!requireRegistration()) setActiveSection(i); }}
              style={{ ...S.navBtn, ...(activeSection === i ? S.navBtnActive : {}) }}>
              {s.icon}<span>{s.label}</span>
              {activeSection === i && <span style={S.navPip} />}
            </button>
          ))}
        </nav>

        <div style={S.card}>
          {!isRegistered && (
            <div style={S.regHint} onClick={() => setShowRegModal(true)}>
              <UserPlus size={16} color="#c8a45a" />
              <span>Click any field to register and start your listing</span>
            </div>
          )}

          <form ref={formRef} onSubmit={submit}>

            {/* ══ SECTION 0: Contact ══ */}
            <Section show={activeSection === 0} title="Contact Information">
              <Field label="Full Name" required>
                <input style={S.input} placeholder="John Doe" value={fields.name}
                  onFocus={requireRegistration} onChange={setWithGuard("name")} required />
              </Field>
              <Field label="Phone Number" required>
                <input style={S.input} placeholder="+91 98765 43210" value={fields.phone}
                  onFocus={requireRegistration} onChange={setWithGuard("phone")} required />
              </Field>
              <Field label="Email Address" span required>
                <input style={S.input} type="email" placeholder="john@email.com" value={fields.email}
                  onFocus={requireRegistration} onChange={setWithGuard("email")} required />
              </Field>
              <NavFooter onNext={() => { if (!requireRegistration()) setActiveSection(1); }} />
            </Section>

            {/* ══ SECTION 1: Location ══ */}
            <Section show={activeSection === 1} title="Location Details">
              <Field label="Country">
                <select style={S.input} value={selectedCountry}
                  onFocus={requireRegistration} onChange={handleCountryChange}>
                  {countries.map((c) => <option key={c.isoCode} value={c.isoCode}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="State">
                <select style={S.input} value={selectedState}
                  onFocus={requireRegistration} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {states.map((s) => <option key={s.isoCode} value={s.isoCode}>{s.name}</option>)}
                </select>
              </Field>
              <Field label="City">
                <select style={S.input} value={selectedCity}
                  onFocus={requireRegistration}
                  onChange={(e) => { if (!requireRegistration()) setSelectedCity(e.target.value); }}>
                  <option value="">Select City</option>
                  {cities.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="Area / Locality">
                <input style={S.input} placeholder="Sector 17, MG Road…" value={fields.area}
                  onFocus={requireRegistration} onChange={setWithGuard("area")} />
              </Field>
              <Field label="Pincode">
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input style={{ ...S.input, paddingRight: 130 }} placeholder="110001" value={fields.pincode}
                    onFocus={requireRegistration} onChange={setWithGuard("pincode")} />
                  <button type="button" onClick={detectLocation} disabled={loadingLocation} style={S.geoBtn}>
                    {loadingLocation ? <Loader2 size={12} style={{ animation: "spin .8s linear infinite" }} /> : "📍"}
                    {loadingLocation ? " Detecting…" : " Detect"}
                  </button>
                </div>
              </Field>
              <Field label="Full Address" span>
                <textarea style={S.textarea} rows={2} placeholder="House No., Street, Landmark…" value={fields.address}
                  onFocus={requireRegistration} onChange={setWithGuard("address")} />
              </Field>
              <NavFooter onBack={() => setActiveSection(0)} onNext={() => { if (!requireRegistration()) setActiveSection(2); }} />
            </Section>

            {/* ══ SECTION 2: Property ══ */}
            <Section show={activeSection === 2} title="Property Details">
              <Field label="Property Type" required>
                <select style={S.input} value={fields.propertyType}
                  onFocus={requireRegistration} onChange={setWithGuard("propertyType")} required>
                  <option value="">Select type</option>
                  {["Apartment","Villa","Plot","Commercial"].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </Field>
              <Field label="Furnished Status">
                <select style={S.input} value={fields.furnishedType}
                  onFocus={requireRegistration} onChange={setWithGuard("furnishedType")}>
                  <option value="">Select status</option>
                  {["Furnished","Semi Furnished","Unfurnished"].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </Field>
              <Field label="Bedrooms">
                <input style={S.input} type="number" min="0" placeholder="3" value={fields.bedrooms}
                  onFocus={requireRegistration} onChange={setWithGuard("bedrooms")} />
              </Field>
              <Field label="Bathrooms">
                <input style={S.input} type="number" min="0" placeholder="2" value={fields.bathrooms}
                  onFocus={requireRegistration} onChange={setWithGuard("bathrooms")} />
              </Field>
              <Field label="Area Size">
                <input style={S.input} type="number" min="0" placeholder="1200" value={fields.areaSize}
                  onFocus={requireRegistration} onChange={setWithGuard("areaSize")} />
              </Field>
              <Field label="Area Unit">
                <select style={S.input} value={fields.areaUnit}
                  onFocus={requireRegistration} onChange={setWithGuard("areaUnit")}>
                  <option value="">Select unit</option>
                  {["sqft","gaj","bigha","acre"].map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </Field>
              <Field label="Expected Price (₹)" required>
                <div style={S.priceWrap}>
                  <span style={S.pricePrefix}>₹</span>
                  <input style={{ ...S.input, paddingLeft: 36 }} placeholder="45,00,000" value={fields.price}
                    onFocus={requireRegistration} onChange={setWithGuard("price")} required />
                </div>
              </Field>
              <NavFooter onBack={() => setActiveSection(1)} onNext={() => { if (!requireRegistration()) setActiveSection(3); }} />
            </Section>

            {/* ══ SECTION 3: Media ══ */}
            <Section show={activeSection === 3} title="Description & Images">
              <Field label="Property Description" span>
                <textarea style={{ ...S.textarea, minHeight: 100 }} rows={4}
                  placeholder="Highlight key features, nearby schools, metro, amenities…"
                  value={fields.description}
                  onFocus={requireRegistration} onChange={setWithGuard("description")} />
              </Field>

              <Field label="Property Images" span>
                <label style={S.dropzone} onClick={(e) => { if (requireRegistration()) e.preventDefault(); }}>
                  <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                    style={{ display: "none" }} onChange={handleImageChange} />
                  <ImagePlus size={28} color="#c8a45a" />
                  <strong style={{ marginTop: 8, color: "#1a1a2e" }}>Drop images here or click to browse</strong>
                  <span style={{ fontSize: 12, color: "#8e8fa8", marginTop: 4 }}>JPEG · PNG · WebP · Max 10 MB each</span>
                </label>
                {imgs.length > 0 && (
                  <div style={S.previewGrid}>
                    {imgs.map((file, i) => (
                      <div key={i} style={S.thumb}>
                        <img src={previews[i]} alt={file.name} style={S.thumbImg} />
                        <button type="button" onClick={() => removeImage(i)} style={S.removeBtn} title="Remove">
                          <X size={12} />
                        </button>
                        <span style={S.thumbName}>{file.name.length > 16 ? `${file.name.slice(0,14)}…` : file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Field>

              {formState.status && (
                <div style={{ ...S.status, ...(formState.status === "ok" ? S.statusOk : S.statusErr), gridColumn: "1/-1" }}>
                  {formState.status === "ok" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{formState.msg}</span>
                </div>
              )}

              <div style={{ gridColumn: "1/-1", display: "flex", gap: 12, marginTop: 4 }}>
                <button type="button" onClick={() => setActiveSection(2)} style={S.backBtn}>← Back</button>
                <button type="submit" disabled={formState.loading}
                  style={{ ...S.submitBtn, opacity: formState.loading ? 0.75 : 1, cursor: formState.loading ? "not-allowed" : "pointer", flex: 1 }}>
                  {formState.loading && <Loader2 size={18} style={{ animation: "spin .8s linear infinite" }} />}
                  {formState.loading ? "Uploading & Publishing…" : "Publish Listing →"}
                </button>
              </div>
            </Section>

          </form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        input:focus, textarea:focus, select:focus { outline: none; box-shadow: 0 0 0 2px rgba(200,164,90,0.35); border-color: #c8a45a !important; }
        input::placeholder, textarea::placeholder { color: #b0b1c3; }
        select option { color: #1a1a2e; }
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function Section({ show, title, children }) {
  if (!show) return null;
  return (
    <div style={{ animation: "fadeUp .3s ease" }}>
      <div style={S.sectionTitle}>
        <span style={S.sectionTitleText}>{title}</span>
        <div style={S.sectionLine} />
      </div>
      <div className="form-grid" style={S.formGrid}>{children}</div>
    </div>
  );
}

function Field({ label, children, span, required }) {
  return (
    <div style={{ ...(span ? { gridColumn: "1/-1" } : {}) }}>
      <label style={S.label}>{label}{required && <span style={{ color: "#c8a45a", marginLeft: 3 }}>*</span>}</label>
      <div style={S.fieldWrap}>{children}</div>
    </div>
  );
}

function NavFooter({ onBack, onNext }) {
  return (
    <div style={{ gridColumn: "1/-1", display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 4 }}>
      {onBack && <button type="button" onClick={onBack} style={S.backBtn}>← Back</button>}
      {onNext && <button type="button" onClick={onNext} style={S.nextBtn}>Continue →</button>}
    </div>
  );
}

const S = {
  page: { fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#f5f4f0", position: "relative", display: "flex", justifyContent: "center", padding: "60px 20px 80px", overflow: "hidden" },
  bgGrid: { position: "fixed", inset: 0, backgroundImage: `linear-gradient(rgba(200,164,90,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,90,0.07) 1px, transparent 1px)`, backgroundSize: "48px 48px", pointerEvents: "none", zIndex: 0 },
  container: { width: "100%", maxWidth: 780, position: "relative", zIndex: 1 },
  header: { textAlign: "center", marginBottom: 32 },
  pill: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,164,90,0.12)", border: "1px solid rgba(200,164,90,0.3)", borderRadius: 100, padding: "5px 18px", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9a7535", marginBottom: 20 },
  pillDot: { width: 6, height: 6, borderRadius: "50%", background: "#c8a45a", display: "inline-block" },
  h1: { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 6vw, 54px)", fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 12 },
  accent: { color: "#c8a45a", fontStyle: "italic" },
  sub: { color: "#6b6c80", fontSize: 14.5, lineHeight: 1.6 },
  userBadge: { display: "inline-flex", alignItems: "center", gap: 7, marginTop: 12, padding: "6px 16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 100, fontSize: 13, color: "#15803d" },
  nav: { display: "flex", background: "#fff", borderRadius: 18, padding: 6, marginBottom: 20, gap: 4, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid #e8e7e2" },
  navBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 8px", border: "none", borderRadius: 13, background: "transparent", color: "#9a9ab0", fontSize: 13, fontWeight: 500, fontFamily: "inherit", cursor: "pointer", position: "relative", transition: "all .2s" },
  navBtnActive: { background: "#1a1a2e", color: "#fff", fontWeight: 600, boxShadow: "0 4px 14px rgba(26,26,46,0.22)" },
  navPip: { position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#c8a45a" },
  card: { background: "#fff", border: "1px solid #e8e7e2", borderRadius: 28, padding: "40px 40px 36px", boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.9) inset", position: "relative" },
  regHint: { display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "rgba(200,164,90,0.07)", border: "1px solid rgba(200,164,90,0.2)", borderRadius: 12, marginBottom: 20, fontSize: 13, color: "#9a7535", fontWeight: 500, cursor: "pointer" },
  sectionTitle: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24 },
  sectionTitleText: { fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: "#1a1a2e", whiteSpace: "nowrap", letterSpacing: "-0.01em" },
  sectionLine: { flex: 1, height: 1, background: "linear-gradient(to right, #e8e7e2, transparent)" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" },
  label: { display: "block", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b6c80", marginBottom: 7 },
  fieldWrap: { position: "relative" },
  input: { width: "100%", height: 48, padding: "0 16px", border: "1.5px solid #e4e3de", borderRadius: 12, background: "#faf9f7", fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", color: "#1a1a2e", appearance: "none", transition: "border-color .2s, box-shadow .2s" },
  textarea: { width: "100%", padding: "13px 16px", border: "1.5px solid #e4e3de", borderRadius: 12, background: "#faf9f7", fontSize: 14.5, fontFamily: "'DM Sans', sans-serif", color: "#1a1a2e", resize: "vertical", lineHeight: 1.6, transition: "border-color .2s, box-shadow .2s" },
  priceWrap: { position: "relative", display: "flex", alignItems: "center" },
  pricePrefix: { position: "absolute", left: 14, fontSize: 15, fontWeight: 600, color: "#c8a45a", pointerEvents: "none", zIndex: 1 },
  geoBtn: { position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", height: 32, padding: "0 12px", border: "1.5px solid #e4e3de", borderRadius: 9, background: "#fff", fontSize: 12, fontWeight: 600, fontFamily: "inherit", color: "#4a4b5e", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap" },
  dropzone: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed #d8d6ce", borderRadius: 16, padding: "32px 20px", background: "#faf9f7", textAlign: "center", cursor: "pointer", gap: 4, fontSize: 14 },
  previewGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: 10, marginTop: 14 },
  thumb: { position: "relative", aspectRatio: "1", borderRadius: 12, overflow: "hidden", border: "1.5px solid #e4e3de" },
  thumbImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  removeBtn: { position: "absolute", top: 5, right: 5, width: 22, height: 22, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.92)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" },
  thumbName: { position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", color: "#fff", fontSize: 9, padding: "10px 5px 5px", textAlign: "center", lineHeight: 1.3 },
  status: { padding: "14px 18px", borderRadius: 14, display: "flex", alignItems: "center", gap: 10, fontWeight: 500, fontSize: 14, border: "1px solid" },
  statusOk:  { background: "#f0fdf4", borderColor: "#bbf7d0", color: "#15803d" },
  statusErr: { background: "#fff1f2", borderColor: "#fecdd3", color: "#be123c" },
  backBtn: { height: 50, padding: "0 24px", border: "1.5px solid #e4e3de", borderRadius: 14, background: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "inherit", color: "#4a4b5e", cursor: "pointer" },
  nextBtn: { height: 50, padding: "0 32px", border: "none", borderRadius: 14, background: "#1a1a2e", color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" },
  submitBtn: { height: 54, border: "none", borderRadius: 14, background: "linear-gradient(135deg, #b8862e, #c8a45a, #d4b06a)", color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 6px 24px rgba(200,164,90,0.4)", letterSpacing: "0.02em" },
};