"use client";

import { PageWrapper } from "@/components";
import { Button, Loading } from "@/components/ui";
import { useAuth } from "@/lib/hooks/useAuth";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.scss";

const DashboardPage = () => {
  const { isAuthenticated, logout, user, redirectToAuth, isLoading } =
    useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) redirectToAuth();
  }, [isAuthenticated, redirectToAuth, isLoading]);

  const handleLogout = async () => await logout();

  if (isLoading)
    return (
      <PageWrapper>
        <Loading />
      </PageWrapper>
    );

  if (!user) return null;

  return (
    <PageWrapper title="Hello!">
      <div className={styles.dashboardContainer}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              width={128}
              height={128}
              src={user.picture.large}
              alt="Profile"
              unoptimized
            />
          </div>

          <span className={styles.username}>{user.login.username}</span>

          <h2 className={styles.name}>
            {user.name.first} {user.name.last}
          </h2>

          <span className={styles.location}>
            {user.location.city}, {user.location.state}
          </span>
        </div>

        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </PageWrapper>
  );
};

export default DashboardPage;
