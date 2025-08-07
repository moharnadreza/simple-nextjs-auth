import { type ApiResponse, type User } from "@/types";
import { api } from "./client";

const userApi = {
  fetchRandomUser: async (): Promise<User> => {
    try {
      const response = await api.get<ApiResponse<User>>(
        "/api/?results=1&nat=us"
      );

      if (!response.results || response.results.length === 0) {
        throw new Error("No user data received");
      }

      return response.results[0];
    } catch (error) {
      console.error("Error fetching random user:", error);
      throw new Error("Failed to authenticate user");
    }
  },
};

export { userApi };
