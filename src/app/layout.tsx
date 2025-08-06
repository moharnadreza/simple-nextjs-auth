import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "SimpleAuth - Minimal Next.js Auth",
  description:
    "A clean and efficient auth flow built with Next.js, SCSS modules, and zero clutter.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
