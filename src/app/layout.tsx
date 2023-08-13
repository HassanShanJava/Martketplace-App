import { Navbar, Footer } from "@/components/sections";
import "./globals.css";
import { Sora } from "next/font/google";
import Providers from "@/components/utils/Providers";

import { ClerkProvider, auth } from "@clerk/nextjs";

const sora = Sora({ subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce shopping App",
};

export default function RootLayout({ children }: { children: any }) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <Navbar userId={userId as string} />
          <main className={sora.className}>{children}</main>
          <Footer />
        </html>
      </Providers>
    </ClerkProvider>
  );
}
