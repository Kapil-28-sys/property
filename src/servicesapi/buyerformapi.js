export async function submitBuyerEnquiry(formData, property) {
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    budget: property.price.replace(/[₹,\s]/g, ""),
    status: "verified",
    propertyId: String(property.propertyId),
  };

  try {
    const response = await fetch("https://your-api-url.com/buyers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data?.message || data?.error || `Server error: ${response.status}`,
      };
    }

    return { success: true, data };
  } catch (err) {
    if (err instanceof TypeError && err.message.includes("fetch")) {
      return {
        success: false,
        error: "Server se response nahi aaya. Check console for details.",
      };
    }
    return { success: false, error: err.message };
  }
}