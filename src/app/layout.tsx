import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pálenica Spišská Belá",
  description:
    "V našom liehovare ponúkame destiláciu Vášho kvasu vo veľkosti od 100l s možnosťou poskytnutia upravenej vody na riedenie destilátu.",
  keywords: ["pálenica Spisšká Belá", "pálenica", "Spisšká Belá", "destilát"],
  openGraph: {
    title: "Pálenia Spišská Belá",
    description:
      "V našom liehovare ponúkame destiláciu Vášho kvasu vo veľkosti od 100l",
    images: [
      {
        url: "/skuska_new.jpg",
        alt: "Pálenica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <GoogleAnalyticsScript />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
