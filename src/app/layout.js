import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Foooter";
import ReduxProvider from "../Redux/ReduxProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-zinc-900 text-white min-h-screen">
        <ReduxProvider>
          <Navbar />
          <main className="mt-[90px]">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
