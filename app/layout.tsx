import type { Metadata } from "next";
import { Montserrat, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rohit Juyal",
  description: "Rohit Juyal's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${pressStart2P.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-2xl mx-auto p-6 min-h-screen flex flex-col">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
