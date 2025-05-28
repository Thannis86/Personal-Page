import type { Metadata } from "next";
import "./globals.css";

// Radix
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Nav Bar
import NavBar from "@/components/navbar/navbar";
import "../components/navbar/navbar.css";

export const metadata: Metadata = {
  title: "My Page",
  description: "Cameron Burchnall's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="ruby">
          <NavBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
