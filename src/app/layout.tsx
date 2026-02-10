import type { Metadata } from "next";
import Footer from "../app/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Didymus UI",
  description:
    "AI-powered live voice-to-voice translation system for church services",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900" suppressHydrationWarning>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
