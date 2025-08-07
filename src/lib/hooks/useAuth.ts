"use client";

import { authStorage } from "@/lib";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { mutate } from "swr";

const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auth state on mount
  useEffect(() => {
    (() => {
      try {
        const storedUser = authStorage.getUser();

        if (storedUser) setUser(storedUser);
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const persistUser = useCallback((userData: User) => {
    try {
      authStorage.setUser(userData);
      setUser(userData);
    } catch (error) {
      console.error("Persist user error:", error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      authStorage.removeUser();
      setUser(null);

      // Clear SWR cache
      await mutate(() => true, undefined, false);

      redirectToAuth();
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [router]);

  // Navigation helpers
  const redirectToAuth = useCallback(() => {
    router.push("/auth");
  }, [router]);

  const redirectToDashboard = useCallback(() => {
    router.push("/");
  }, [router]);

  // Auth state
  const isAuthenticated = !!user;

  return {
    // State
    user,
    isAuthenticated,
    isLoading,

    // Actions
    persistUser,
    logout,

    // Navigation
    redirectToAuth,
    redirectToDashboard,
  };
};

export { useAuth };
