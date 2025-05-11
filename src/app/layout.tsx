import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cash Cleaner Simulator: Clean, Sort, & Stack Your Way to Riches (2025)",
  description: "The official fan hub for Cash Cleaner Simulator! Dive into the satisfying world of money laundering, discover game features, latest news, tips, and get your copy on Steam.",
  keywords: "cash cleaner simulator, simulation game, indie game, money laundering, physics game, job simulator, singleplayer, Forklift Interactive",
  openGraph: {
    title: "Cash Cleaner Simulator - Official Hub for the Ultimate Money Cleaning Experience (2025)",
    description: "Welcome to the official community hub for Cash Cleaner Simulator! Get the latest news, learn about gameplay mechanics, tools of the trade, and connect with other cleaners.",
    url: "https://cashcleanerSimulator.org/index.html",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@CashCleanerGame",
    title: "Cash Cleaner Simulator - Clean Up Your Act!",
    description: "Your official source for all things Cash Cleaner Simulator. News, gameplay info, and community!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=G-R7H1F1T1KP" 
        />
        <Script 
          id="gtag-init" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R7H1F1T1KP');
            `
          }}
        />
      </head>
      <body className={`antialiased bg-slate-100 text-slate-800 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
