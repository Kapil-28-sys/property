import api from "./baseurlapi";

export async function submitBuyerEnquiry(formData, property) {
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    budget: property.price.replace(/[₹,\s]/g, ""),
    status: "verified",
    propertyId: String(property.propertyId),
  };

  console.log("📤 Payload:", payload);
  console.log("📡 Base URL:", api.defaults.baseURL);

  try {
    const response = await api.post("/buyers", payload);
    console.log("✅ Success:", response.status, response.data);
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      console.error("❌ Server Error:", err.response.status, err.response.data);
      return {
        success: false,
        error:
          err.response.data?.message ||
          err.response.data?.error ||
          `Server error: ${err.response.status}`,
      };
    } else if (err.request) {
      console.error("❌ No response (CORS/Network):", err.message);
      return {
        success: false,
        error: "Server se response nahi aaya. Check console for details.",
      };
    } else {
      console.error("❌ Request error:", err.message);
      return { success: false, error: err.message };
    }
  }
}