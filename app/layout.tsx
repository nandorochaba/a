import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Premium Video Editor & Designer Portfolio",
  description:
    "I Turn Ideas Into Powerful Visual Content. Video editing, design, and content strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body
        className="bg-background text-foreground antialiased selection:bg-accent selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
