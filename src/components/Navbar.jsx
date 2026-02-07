"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { apppName } from "@/constants/appName.";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg h-[90px]" : "bg-black h-[90px]"}
      text-white py-2 px-4 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-16 h-16">
            <Image
              src="/logo.png"
              alt="Arshad Armoury Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-heading text-xl tracking-widest">{apppName.toUpperCase()}</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-amber-500" : "text-white hover:text-amber-500"}`}
          >
            Home
          </Link>
        
          <Link
            href="/about"
            className={`${pathname === "/about" ? "text-amber-500" : "text-white hover:text-amber-500"}`}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className={`${pathname === "/faq" ? "text-amber-500" : "text-white hover:text-amber-500"}`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "text-amber-500" : "text-white hover:text-amber-500"}`}
          >
            Contact
          </Link>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://www.facebook.com/" target="_blank">
            <Icon icon="logos:facebook" width="28" height="28" className="hover:opacity-80 transition" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Icon icon="skill-icons:instagram" width="28" height="28" className="hover:opacity-80 transition" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md z-[60]"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-[90px] left-0 w-full bg-black/95 backdrop-blur-md z-40
        flex flex-col items-center space-y-6 py-8 transition-all duration-300
        ${menuOpen ? "block animate-fade-in-down" : "hidden"}`}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`${pathname === "/" ? "text-amber-500" : "text-white hover:text-amber-500"} text-sm`}
        >
          Home
        </Link>
      
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className={`${pathname === "/about" ? "text-amber-500" : "text-white hover:text-amber-500"} text-sm`}
        >
          About Us
        </Link>
        <Link
          href="/faq"
          onClick={() => setMenuOpen(false)}
          className={`${pathname === "/faq" ? "text-amber-500" : "text-white hover:text-amber-500"} text-sm`}
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className={`${pathname === "/contact" ? "text-amber-500" : "text-white hover:text-amber-500"} text-sm`}
        >
          Contact
        </Link>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 pt-4">
          <Link href="https://www.facebook.com/" target="_blank">
            <Icon icon="logos:facebook" width="30" height="30" className="hover:opacity-80 transition" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Icon icon="skill-icons:instagram" width="30" height="30" className="hover:opacity-80 transition" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
