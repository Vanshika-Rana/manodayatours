/* ==========================================
   Hero Section
   Full-width with warm, inviting feel
   All text in warm off-white/cream for readability
   ========================================== */

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero/hero-img.jpg"
          alt="Majestic Himalayan Mountains in Uttarakhand"
          fill
          className="object-cover"
          priority
        />
        {/* Dark warm overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1510]/60 via-[#1a1510]/50 to-[#1a1510]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-8">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-(--off-white)">Discover Uttarakhand</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-(family-name:--font-playfair) text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8">
          <span className="text-(--off-white)">Your Uttarakhand Yatra,</span>
          <br />
          <span className="text-primary">Thoughtfully</span>
          <span className="text-(--off-white)"> Planned</span>
        </h1>

        {/* Subtext */}
        <p className="text-(--cream) text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Char Dham and Panch Kedar pilgrimages, Himalayan treks, Valley of Flowers, and more - all handled with local expertise and personal care.
        </p>

        {/* CTA Button */}
        <a
          href="#packages"
          className="inline-flex items-center gap-2 bg-primary text-[#1a1510] px-8 py-4 rounded-full font-semibold text-lg hover:bg-(--primary-light) transition-all hover:-translate-y-1 shadow-lg shadow-(--primary)/30"
        >
          Explore Our Journeys
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-(--cream) text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-(--cream)/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-(--cream) rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#1a1510]/95 to-transparent pt-20 pb-8 px-6">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-center text-(--warm-gray-300) text-sm hidden lg:block leading-relaxed">
            Guiding pilgrims and travelers across Uttarakhand with over 20 years of local experience.
          </p>
        </div>
      </div>
    </section>
  );
}
