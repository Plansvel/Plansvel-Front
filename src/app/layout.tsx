import { Poppins } from "next/font/google";

import { Footer, Header } from "@/components";
import { cn } from "@/lib/utils";
import AppProvider from "@/providers/AppProvider";

import type { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plansvel.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "bg-background")}>
        <AppProvider>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
