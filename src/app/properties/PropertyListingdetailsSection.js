"use client";

import { useState } from "react";
import { submitBuyerEnquiry } from "../../servicesapi/buyerformapi";

export default function PropertyDetailsPage() {
  const property = {
    title: "Luxury Villa in Goa",
    location: "Goa, India",
    price: "₹85,00,000",
    description:
      "Experience premium luxury living with this modern villa featuring spacious interiors, ocean views, private garden, swimming pool, and elegant architecture.",

    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    ],

    details: {
      type: "Villa",
      area: "4,500 sqft",
      bedrooms: "4 Bedrooms",
      bathrooms: "3 Bathrooms",
      parking: "2 Parking",
      furnishing: "Fully Furnished",
      facing: "Sea View",
      status: "Available",
    },

    propertyId: "12",
  };

  const [currentImage, setCurrentImage] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const result = await submitBuyerEnquiry(formData, property);

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error || "Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap");

        .font-heading {
          font-family: "Cormorant Garamond", serif;
        }

        .font-body {
          font-family: "Jost", sans-serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>

      <section className="bg-[#f8f5ef] min-h-screen font-body">
        {/* HERO SECTION */}
        <div className="relative w-full h-[90vh] overflow-hidden">
          <img
            src={property.images[currentImage]}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* CONTENT */}
          <div className="absolute bottom-16 left-0 w-full px-4 md:px-10 lg:px-16 z-10">
            <div className="max-w-7xl mx-auto">
              <p className="uppercase tracking-[4px] text-white text-sm mb-4">
                Premium Property
              </p>
              <h1 className="text-5xl md:text-7xl text-white font-heading mb-5 leading-none">
                {property.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <p className="text-white text-lg">{property.location}</p>
                <div className="w-[1px] h-6 bg-white/40"></div>
                <p className="text-2xl text-white font-semibold">
                  {property.price}
                </p>
              </div>
            </div>
          </div>

          {/* SLIDER BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white text-2xl hover:bg-white hover:text-black transition-all"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white text-2xl hover:bg-white hover:text-black transition-all"
          >
            →
          </button>

          {/* THUMBNAILS */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            {property.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-20 rounded-2xl overflow-hidden border-2 ${
                  currentImage === index
                    ? "border-white scale-105"
                    : "border-transparent opacity-70"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="grid lg:grid-cols-[1.7fr_0.9fr] gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-10 fade-up">
              {/* ABOUT */}
              <div className="bg-white rounded-[32px] p-8 border border-[#e5ded2]">
                <p className="uppercase tracking-[4px] text-sm text-black mb-3">
                  About Property
                </p>
                <h2 className="text-5xl font-heading text-black mb-6">
                  Modern Luxury Living Experience
                </h2>
                <p className="text-black/70 leading-[2] text-lg">
                  {property.description}
                </p>
              </div>

              {/* PROPERTY DETAILS */}
              <div className="bg-white rounded-[32px] p-8 border border-[#e5ded2]">
                <h3 className="text-4xl font-heading mb-8 text-black">
                  Property Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(property.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="border border-[#ebe4d8] rounded-2xl p-5"
                    >
                      <p className="text-sm uppercase tracking-[2px] text-black/50 mb-2">
                        {key}
                      </p>
                      <p className="text-lg font-medium text-black">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="bg-white rounded-[32px] p-8 border border-[#e5ded2]">
                <h3 className="text-4xl font-heading mb-8 text-black">
                  Features & Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {[
                    "Swimming Pool",
                    "Private Garden",
                    "Gym Area",
                    "Smart Home",
                    "Sea Facing",
                    "Kids Play Area",
                    "Modern Kitchen",
                    "Security System",
                    "Luxury Interiors",
                  ].map((feature, index) => (
                    <div key={index} className="bg-[#f8f5ef] rounded-2xl p-5">
                      <p className="text-black font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - BUYER FORM */}
            <div className="fade-up">
              <div className="bg-white rounded-[32px] p-8 border border-[#e5ded2] sticky top-10">
                <h3 className="text-4xl font-heading text-black mb-2">
                  Interested?
                </h3>
                <p className="text-black/60 mb-8">
                  Fill the form and our agent will contact you shortly.
                </p>

                {/* SUCCESS STATE */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-5 rounded-2xl bg-green-50 border border-green-200 text-green-700">
                    <p className="font-semibold mb-1">Enquiry Submitted! ✓</p>
                    <p className="text-sm">
                      Our agent will contact you soon.
                    </p>
                  </div>
                )}

                {/* ERROR STATE */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-600">
                    <p className="font-semibold mb-1">Submission Failed</p>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="text-sm text-black/70 mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-[#ddd] outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-black/70 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-[#ddd] outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-black/70 mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-[#ddd] outline-none focus:border-black bg-[#fafafa]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-black/70 mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I am interested in this property..."
                      className="w-full p-5 rounded-2xl border border-[#ddd] outline-none focus:border-black bg-[#fafafa] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full h-14 rounded-2xl bg-black text-white text-sm font-medium hover:bg-[#2a2a2a] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>
                </div>

                {/* QUICK INFO */}
                <div className="mt-10 pt-8 border-t border-[#ece6da] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Price</span>
                    <span className="font-semibold text-black">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Type</span>
                    <span className="font-semibold text-black">Villa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Status</span>
                    <span className="font-semibold text-green-600">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}