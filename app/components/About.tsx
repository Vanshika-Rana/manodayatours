/* ==========================================
   About Section
   Warm, inviting text with image gallery
   ========================================== */

import Image from "next/image";

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
        <p className="text-right section-label mb-16">About Us</p>

        {/* Main Content */}
        <div className="max-w-5xl">
        <h2 className="font-(family-name:--font-playfair) text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
  Thoughtfully planned journeys{" "}
  <span className="text-secondary">across Uttarakhand</span>{" "}
  <span className="text-(--warm-gray-400)">
    led by local expertise and years of on-ground experience.
  </span>
</h2>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Large Image */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/About/about-img1.jpg"
                alt="Sacred Temple in Uttarakhand"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-(--secondary)/60 to-transparent" />
             
            </div>

            {/* Small Images Stack */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[140px] md:h-[190px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/About/about-img2.jpg"
                  alt="Himalayan Mountains"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative h-[140px] md:h-[190px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/About/about-img3.jpg"
                  alt="Sacred River"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative h-[140px] md:h-[190px] rounded-2xl overflow-hidden col-span-2 group">
                <Image
                  src="/images/About/about-img4.jpg"
                  alt="Mountain Valley"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-(--warm-gray-600) text-lg leading-relaxed">
  Our team is made up of <strong className="text-(--warm-gray-800)">Uttarakhand locals </strong> 
  with deep knowledge of the region, its routes, seasons, and pilgrimage traditions. 
  We focus on planning journeys that are practical, respectful, and well-paced for all age groups.
</p>

<p className="text-(--warm-gray-600) text-lg leading-relaxed">
  From the Kedarnath valley and Char Dham circuit to Panch Kedar, local temples, and guided treks, 
  we handle every detail with care - from transport and stays to on-ground assistance - 
  so travelers can focus on the journey itself.
</p>
        </div>

        {/* Statistics */}
        <div className="mt-16 pt-12 border-t border-(--warm-gray-200)">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="font-(family-name:--font-playfair) text-5xl md:text-6xl text-(--primary-dark) mb-3">
                  {stat.value}
                </p>
                <p className="text-(--warm-gray-500)">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
