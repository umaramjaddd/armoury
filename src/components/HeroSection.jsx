// src/components/HeroSection.jsx
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="relative h-[80vh] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/sweeping-aerial-view-longforgotten-iron-600nw-2711319959.jpg')" }}
    >
      {/* Hero Content */}
      <div className="text-center px-6 bg-white     p-8">
        <h1 className="font-heading text-4xl md:text-5xl text-zinc-900 mb-4">
          Arshad Armoury
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl mb-6">
          Forging premium leather goods and armour with unmatched craftsmanship.
        </p>

        <Link href="/contact">
          <button className="px-6 py-3 bg-amber-700 text-white font-semibold  hover:bg-amber-400 transition">
            Contact
          </button>
        </Link>
      </div>

      {/* Optional subtle gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </section>
  )
}
