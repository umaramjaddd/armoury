// src/components/ContactSection.jsx
import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-80 md:h-[500px]  overflow-hidden shadow-lg">
        <Image
          src="/contact.png" // replace with your image path
          alt="Armoury"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Form & Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col gap-1">
        <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 ">
          Get in Touch
        </h2>
        <p className="text-zinc-700 ">
          Have questions or want to place a custom order? Fill out the form below or reach us directly through our contact channels.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-zinc-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="border border-zinc-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-zinc-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-amber-700 text-white font-semibold  hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 flex flex-col gap-2 text-zinc-700">
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/1234567890" className="text-amber-700">+92 123 456 7890</a></p>
          <p><strong>Email:</strong> <a href="mailto:support@arshadarmoury.com" className="text-amber-700">support@arshadarmoury.com</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/arshadarmoury" target="_blank" rel="noopener noreferrer" className="text-amber-700">@arshadarmoury</a></p>
        </div>
      </div>
    </section>
  )
}
