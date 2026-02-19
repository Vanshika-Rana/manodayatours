/* ==========================================
   Hero Section
   Full-width with warm, inviting feel
   All text in warm off-white/cream for readability
   ========================================== */

import Image from "next/image";
import heroImg from "@/public/images/Hero/hero-img.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[560px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Majestic Himalayan Mountains in Uttarakhand"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1510]/60 via-[#1a1510]/50 to-[#1a1510]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></span>
          <span className="text-(--off-white)">Discover Uttarakhand</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-(family-name:--font-playfair) text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.15] sm:leading-[1.1] mb-5 md:mb-8">
          <span className="text-(--off-white)">Your Uttarakhand Yatra,</span>
          <br />
          <span className="text-primary">Thoughtfully</span>
          <span className="text-(--off-white)"> Planned</span>
        </h1>

        {/* Subtext */}
        <p className="text-(--cream) text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 sm:px-0">
          Char Dham and Panch Kedar pilgrimages, Himalayan treks, Valley of Flowers, and more. All handled with local expertise and personal care.
        </p>

        {/* CTA Button */}
        <a
          href="#packages"
          className="inline-flex items-center gap-2 bg-primary text-[#1a1510] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-(--primary-light) transition-all hover:-translate-y-1 shadow-lg shadow-(--primary)/30"
        >
          Explore Our Journeys
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-(--cream) text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-(--cream)/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-(--cream) rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#1a1510]/95 to-transparent pt-16 pb-6 md:pt-20 md:pb-8 px-5 sm:px-6">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-center text-(--warm-gray-300) text-xs sm:text-sm hidden md:block leading-relaxed">
            Guiding pilgrims and travelers across Uttarakhand with over 20 years of local experience.
          </p>
        </div>
      </div>
    </section>
  );
}
