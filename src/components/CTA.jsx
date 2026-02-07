// src/components/CTASection.jsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-amber-700 text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get in Touch With Us Today
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Need a custom firearm, precision part, or defense equipment? Our experts are ready to assist you.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-zinc-800 transition"
      >
        Request a Quote
      </Link>
    </section>
  );
}
