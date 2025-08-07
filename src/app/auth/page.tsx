"use client";

import { Loading, LoginForm, PageWrapper } from "@/components";
import { useAuth } from "@/lib/hooks/useAuth";
import { useEffect } from "react";

const AuthPage = () => {
  const { isAuthenticated, redirectToDashboard, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) redirectToDashboard();
  }, [isAuthenticated, redirectToDashboard, isLoading]);

  if (isLoading)
    return (
      <PageWrapper>
        <Loading />
      </PageWrapper>
    );

  if (isAuthenticated) return null;

  return (
    <PageWrapper title="Welcome Back!">
      <LoginForm />
    </PageWrapper>
  );
};

export default AuthPage;
