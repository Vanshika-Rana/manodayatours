/* ==========================================
   Packages Section
   Warm, inviting package cards
   ========================================== */

import Image, { StaticImageData } from "next/image";
import chardhamImg from "@/public/images/Packages/chardham.jpg";
import kedarnathImg from "@/public/images/Packages/kedarnath.jpg";
import badrinathImg from "@/public/images/Packages/badrinath.jpg";
import kedarBadriImg from "@/public/images/Packages/kedar-badri.jpg";

const packages = [
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    duration: "9N / 10D",
    image: chardhamImg,
    description: "The complete spiritual circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath. The ultimate pilgrimage.",
    startingPrice: "35,300",
    featured: true,
  },
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    duration: "3N / 4D",
    image: kedarnathImg,
    description: "Seek divine blessings of Lord Shiva at one of the holiest Jyotirlinga temples amidst the Himalayas.",
    startingPrice: "12,800",
  },
  {
    id: "badrinath",
    name: "Badrinath Yatra",
    duration: "3N / 4D",
    image: badrinathImg,
    description: "Visit the sacred abode of Lord Vishnu and experience divine peace at Mana Village and Tapt Kund.",
    startingPrice: "15,200",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section bg-(--cream)">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-center section-label mb-6 sm:mb-8">Sacred Pilgrimages</p>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <h2 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl md:text-4xl leading-tight text-(--warm-gray-900)">
              Choose Your{" "}
              <span className="text-(--primary-dark)">Divine Journey</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-(--warm-gray-500) text-sm sm:text-base">
              Each yatra is thoughtfully designed for your comfort, safety, and spiritual fulfillment.
            </p>
          </div>
          <a href="#all-packages" className="btn-outline text-sm sm:text-base self-start md:self-auto">
            View All Packages
          </a>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Do Dham Feature Section */}
        <div className="mt-10 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-(--warm-gray-200) shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-(--primary)/10 text-(--primary-dark) px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Most Balanced Journey
              </span>
              <h3 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl md:text-4xl text-(--warm-gray-900) mb-3 sm:mb-4">
                Do Dham Yatra
              </h3>
              <p className="text-(--warm-gray-500) text-sm sm:text-base mb-2">Kedarnath & Badrinath • 5 Nights / 6 Days</p>
              <p className="text-(--warm-gray-600) text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                Visit the two most revered shrines of Lord Shiva and Lord Vishnu in a single journey. 
                Perfect for pilgrims seeking blessings of both sacred temples with moderate travel time.
              </p>
              <div className="flex items-baseline gap-2 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm text-(--warm-gray-500)">Starting from</span>
                <span className="text-2xl sm:text-3xl font-bold text-secondary">₹22,700</span>
                <span className="text-(--warm-gray-400) text-sm">/person</span>
              </div>
              <a
                href="https://wa.me/917310554723?text=Namaste!%20I%20am%20interested%20in%20Do%20Dham%20Yatra%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base"
              >
                Enquire Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-[220px] sm:h-[280px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={kedarBadriImg}
                alt="Do Dham Yatra"
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--secondary)/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({ 
  name, 
  duration, 
  image, 
  description, 
  startingPrice,
  featured 
}: {
  name: string;
  duration: string;
  image: StaticImageData;
  description: string;
  startingPrice: string;
  featured?: boolean;
}) {
  const whatsappMessage = encodeURIComponent(
    `Namaste! I am interested in the ${name} (${duration}). Please share details.`
  );

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-(--warm-gray-200) hover:border-primary hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-[200px] sm:h-[220px] md:h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--secondary)/60 via-transparent to-transparent" />
        
        {featured && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-(--warm-gray-900) text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Most Popular
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-sm text-(--warm-gray-800) text-xs sm:text-sm font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="font-(family-name:--font-playfair) text-lg sm:text-xl text-(--warm-gray-900) mb-2">
          {name}
        </h3>
        <p className="text-(--warm-gray-500) text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-(--warm-gray-100)">
          <div>
            <p className="text-xs text-(--warm-gray-400)">Starting from</p>
            <p className="text-lg sm:text-xl font-bold text-secondary">
              ₹{startingPrice}<span className="text-xs sm:text-sm font-normal text-(--warm-gray-400)">/person</span>
            </p>
          </div>
          <a
            href={`https://wa.me/917310554723?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-(--primary-dark) transition-colors group-hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-(--warm-gray-900)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
