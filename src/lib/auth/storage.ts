import { type User } from "@/types";

const STORAGE_KEY = "auth_user" as const;

class AuthStorage {
  private isClient = typeof window !== "undefined";

  setUser(user: User): void {
    if (!this.isClient) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Failed to save user to storage:", error);
    }
  }

  getUser(): User | null {
    if (!this.isClient) return null;

    try {
      const userData = localStorage.getItem(STORAGE_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Failed to get user from storage:", error);
      return null;
    }
  }

  removeUser(): void {
    if (!this.isClient) return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to remove user from storage:", error);
    }
  }
}

export const authStorage = new AuthStorage();
