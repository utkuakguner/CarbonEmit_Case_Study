import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { getLocale, getMessages } from 'next-intl/server';

import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarbonEmit Case Study",
  description: "CarbonEmit Case Study",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = async ({ children }) => {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
             <div className="min-h-screen flex">
              {children}
            </div>
         </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout