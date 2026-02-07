// src/components/AboutSection.jsx
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/logo.png" // replace with your image path
            alt="Arshad Armoury"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 mb-4">
          About Arshad Armoury
        </h2>
        <p className="text-zinc-700 text-lg md:text-xl mb-6">
          Arshad Armoury is dedicated to crafting premium leather goods and armour that combine tradition, craftsmanship, and style. Every piece is meticulously designed and handmade to ensure durability and elegance.
        </p>
        <p className="text-zinc-700 text-lg md:text-xl mb-6">
          Our mission is to preserve the art of fine leatherwork and armour making while delivering products that our customers can cherish for years to come.
        </p>
      </div>
    </section>
  )
}
