/* ==========================================
   About Section
   Warm, inviting text with image gallery
   ========================================== */

import Image from "next/image";
import aboutImg1 from "@/public/images/About/about-img1.jpg";
import aboutImg2 from "@/public/images/About/about-img2.jpg";
import aboutImg3 from "@/public/images/About/about-img3.jpg";
import aboutImg4 from "@/public/images/About/about-img4.jpg";

export default function About() {
  const stats = [
    { value: "95%", label: "of travelers recommend us to friends and family" },
    { value: "100+", label: "unique itineraries crafted each year" },
    { value: "4.5/5", label: "average rating from happy pilgrims" },
  ];

  return (
    <section id="about" className="section bg-(--off-white)">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-right section-label mb-10 md:mb-16">About Us</p>

        {/* Main Content */}
        <div className="max-w-5xl">
          <h2 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Thoughtfully planned journeys{" "}
            <span className="text-secondary">across Uttarakhand</span>{" "}
            <span className="text-(--warm-gray-400)">
              led by local expertise and years of on-ground experience.
            </span>
          </h2>
        </div>

        {/* Image Gallery */}
        <div className="mt-10 md:mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Large Image */}
            <div className="relative h-[220px] sm:h-[280px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group">
              <Image
                src={aboutImg1}
                alt="Sacred Temple in Uttarakhand"
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--secondary)/60 to-transparent" />
            </div>

            {/* Small Images Stack */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-[120px] sm:h-[140px] md:h-[190px] rounded-xl sm:rounded-2xl overflow-hidden group">
                <Image
                  src={aboutImg2}
                  alt="Himalayan Mountains"
                  fill
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={75}
                />
              </div>
              <div className="relative h-[120px] sm:h-[140px] md:h-[190px] rounded-xl sm:rounded-2xl overflow-hidden group">
                <Image
                  src={aboutImg3}
                  alt="Sacred River"
                  fill
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={75}
                />
              </div>
              <div className="relative h-[120px] sm:h-[140px] md:h-[190px] rounded-xl sm:rounded-2xl overflow-hidden col-span-2 group">
                <Image
                  src={aboutImg4}
                  alt="Mountain Valley"
                  fill
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <p className="text-(--warm-gray-600) text-base md:text-lg leading-relaxed">
            Our team is made up of <strong className="text-(--warm-gray-800)">Uttarakhand locals </strong> 
            with deep knowledge of the region, its routes, seasons, and pilgrimage traditions. 
            We focus on planning journeys that are practical, respectful, and well-paced for all age groups.
          </p>
          <p className="text-(--warm-gray-600) text-base md:text-lg leading-relaxed">
            From the Kedarnath valley and Char Dham circuit to Panch Kedar, local temples, and guided treks, 
            we handle every detail with care, from transport and stays to on-ground assistance, 
            so travelers can focus on the journey itself.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-(--warm-gray-200)">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="font-(family-name:--font-playfair) text-4xl sm:text-5xl md:text-6xl text-(--primary-dark) mb-2 sm:mb-3">
                  {stat.value}
                </p>
                <p className="text-(--warm-gray-500) text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
