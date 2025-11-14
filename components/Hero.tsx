// components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 text-center">
      <p className="text-sm uppercase tracking-[0.25em] mb-4">
        Digital Luxe Goddess
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Turn Your Expertise into a High-Value, Evergreen Digital Brand
      </h1>
      <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
        Done-for-you funnels, content systems, and digital products designed
        to help coaches, creators, and service providers consistently hit
        $10K+ months without burning out.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="#offers"
          className="px-6 py-3 rounded-full text-sm font-semibold bg-black text-white"
        >
          View Goddess Offers
        </a>
        <a
          href="#testimonials"
          className="px-6 py-3 rounded-full text-sm font-semibold border border-black"
        >
          See Client Wins
        </a>
      </div>
    </section>
  );
}

