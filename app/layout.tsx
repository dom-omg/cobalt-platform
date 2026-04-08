import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COBALT — Formal Proof Security Scanner",
  description:
    "COBALT finds critical vulnerabilities in C/C++ with Z3 formal verification — mathematical proof, not heuristics. Trusted by security researchers who found bugs in wolfSSL, Mozilla NSS, FreeRTOS, and NASA.",
  keywords: [
    "formal verification",
    "static analysis",
    "vulnerability scanner",
    "Z3 solver",
    "supply chain security",
    "CVE",
    "CWE-190",
    "integer overflow",
  ],
  openGraph: {
    title: "COBALT — Formal Proof Security Scanner",
    description:
      "The only security scanner that proves vulnerabilities exist — or proves they don't. Mathematical certainty, not heuristics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#04060f] text-[#e8eeff]">
        {children}
      </body>
    </html>
  );
}
