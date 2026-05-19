import api from "./baseurlapi";

export const createSellerProperty = async (payload) => {
  try {
    const response = await api.post(
      "/sellerproperties",
      payload
    );

    const data = response.data;

    if (!data.status) {
      throw new Error(
        data.message || "Something went wrong"
      );
    }

    return data;
  } catch (error) {
    console.log("API ERROR:", error);

    // Backend error
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          "Server Error"
      );
    }

    // Network error
    throw new Error(
      error.message || "Network Error"
    );
  }
};