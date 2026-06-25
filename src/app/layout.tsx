import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Alberto Sosa",
  description: "Portfolio personal de Alberto Sosa, desarrollador web y diseñador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
