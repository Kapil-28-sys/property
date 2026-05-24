import api from "./baseurlapi";

 
export const registerClient = async ({ name, email, mobileno, password }) => {
  try {
    const { data } = await api.post("/clients", {
      name,
      email,
      mobileno,
      password,
      status: "active",
    });
    return data;
  } catch (err) {
    // Log the full validation error from the API
    if (err.response) {
      console.error("❌ API Error Status:", err.response.status);
      console.error("❌ API Error Data:",   err.response.data);
    }
    // Re-throw a readable message from the API if available
    const apiMessage =
      err.response?.data?.message ||
      err.response?.data?.error   ||
      Object.values(err.response?.data?.errors || {}).flat().join(", ") ||
      err.message;
    throw new Error(apiMessage);
  }
};