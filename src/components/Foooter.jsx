// src/components/Footer.jsx
import Link from "next/link"
import { categories } from "@/constants/categories"
import { subCategories } from "@/constants/subcategories"
import { apppName } from "@/constants/appName."
import Image from "next/image"
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-16 px-6 py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Branding */}
        <div>
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Arshad Armoury Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="font-heading text-xl tracking-widest ml-2">
                {apppName.toUpperCase()}
              </h1>
            </div>
          </Link>
          <p className="text-sm text-zinc-500 mt-3">
            Arshad Armoury is a manufacturer and exporter of high-quality firearms, defense equipment, and precision parts. We are part of a family business with over 200 years of experience in the sporting arms and defense industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-700 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-700 transition">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-700 transition">Contact</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-amber-700 transition">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Categories + Subcategories */}
        <div>
          <h3 className="font-semibold text-white mb-3">Our Products</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/categories/${cat.id}`}
                  className="hover:text-amber-700 transition font-medium"
                >
                  {cat.name}
                </Link>
                <ul className=" mt-1 space-y-1 text-zinc-400 text-sm max-h-48 overflow-y-auto">
                  {subCategories
                    .filter((sub) => sub.categoryId === cat.id)
                    .map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={`/categories/${cat.id}?sub=${sub.id}`}
                          className="hover:text-amber-700 transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>
             <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="text-amber-700" /> <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-amber-700" /> <span>info@arshadarmoury.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook className="text-amber-700" /> <Link href="https://facebook.com" className="hover:text-amber-700 transition">Facebook</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-amber-700" /> <Link href="https://instagram.com" className="hover:text-amber-700 transition">Instagram</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-amber-700" /> <Link href="https://twitter.com" className="hover:text-amber-700 transition">Twitter</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-xs text-zinc-500 border-t border-zinc-800 pt-4">
        © {new Date().getFullYear()} Arshad Armoury — Forged in Steel. Bound by Legacy.
      </div>
    </footer>
  )
}
