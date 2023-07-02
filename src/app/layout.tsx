import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// title for all pages
export const metadata = {
  title: "Dine Market",
  description: "Dine Market",
};

import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="px-8">{children}</main>
      </body>
    </html>
  );
}
