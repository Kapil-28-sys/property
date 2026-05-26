export async function submitBuyerEnquiry(formData, property) {
  // Convert "₹85,00,000" → "85 lakh" for readability
  const rawAmount = property.price.replace(/[₹,\s]/g, ""); // "8500000"
  const inLakh = Math.round(parseInt(rawAmount) / 100000);
  const budgetStr = `${inLakh} lakh`;

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    budget: budgetStr,
    propertyId: Number(property.propertyId),
    status: "verified",
    counslerid: null,
    counselerroleid: null,
    remarks: formData.message?.trim() || null,
    assign_status: null,
    agentid: null,
    agentroleid: null,
  };

  try {
    const response = await fetch(
      "https://propertybackend.concentics.in/api/buyer-details-add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        success: false,
        error:
          data?.message ||
          data?.error ||
          `Server error: ${response.status}`,
      };
    }

    // API returns { status: true, message: "...", data: {...} }
    if (data?.status === false) {
      return { success: false, error: data.message || "Submission failed." };
    }

    return { success: true, data: data?.data };
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