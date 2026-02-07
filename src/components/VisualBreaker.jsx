// src/components/VisualBreaker.jsx
import React from "react";
import Image from "next/image";

export default function VisualBreaker({ imageSrc, title, subtitle }) {
  return (
    <section className="relative w-full h-72 md:h-96 my-12">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-md md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
