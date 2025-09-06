import { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google'
import Providers from "./providers";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "POS",
  description: "POS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-gray-200`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
