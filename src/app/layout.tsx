import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My journal  App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="bg-[url('/bg.jpg')] opacity-50 -z-10 fixed inset-0" />
          <Header />

          {/* routelar almashganda ushbu joydan egallaydi */}
          <main className="min-h-screen">{children}</main>

          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="mx-auto px-4 text-center text-gray-900">
              Made by{" "}
              <a href="https://github.com/rustammdev" target="_blank">
                rustammdev
              </a>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
