import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UserManagement - Streamline User Management Like Never Before",
  description: "The complete platform for managing users across all your systems. Automate workflows, enhance security, and gain powerful insights. Transform your user management from a burden into a competitive advantage.",
  keywords: "user management, user administration, access control, user onboarding, user analytics, identity management, user management platform, user management software",
  openGraph: {
    title: "UserManagement - Streamline User Management Like Never Before",
    description: "The complete platform for managing users across all your systems. Automate workflows, enhance security, and gain powerful insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
