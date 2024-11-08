import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home rental",
  description: "Feel like Staying in home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
