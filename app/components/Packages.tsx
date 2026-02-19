/* ==========================================
   Packages Section
   Warm, inviting package cards
   ========================================== */

import Image from "next/image";

const packages = [
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    duration: "9N / 10D",
    image: "/images/Packages/chardham.jpg",
    description: "The complete spiritual circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath. The ultimate pilgrimage.",
    startingPrice: "35,300",
    featured: true,
  },
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    duration: "3N / 4D",
    image: "/images/Packages/kedarnath.jpg",
    description: "Seek divine blessings of Lord Shiva at one of the holiest Jyotirlinga temples amidst the Himalayas.",
    startingPrice: "12,800",
  },
  {
    id: "badrinath",
    name: "Badrinath Yatra",
    duration: "3N / 4D",
    image: "/images/Packages/badrinath",
    description: "Visit the sacred abode of Lord Vishnu and experience divine peace at Mana Village and Tapt Kund.",
    startingPrice: "15,200",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section bg-[var(--cream)]">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-center section-label mb-8">Sacred Pilgrimages</p>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl leading-tight text-[var(--warm-gray-900)]">
              Choose Your{" "}
              <span className="text-[var(--primary-dark)]">Divine Journey</span>
            </h2>
            <p className="mt-4 text-[var(--warm-gray-500)]">
              Each yatra is thoughtfully designed for your comfort, safety, and spiritual fulfillment.
            </p>
          </div>
          <a href="#all-packages" className="btn-outline">
            View All Packages
          </a>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Do Dham Feature Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-[var(--warm-gray-200)] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary-dark)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Most Balanced Journey
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[var(--warm-gray-900)] mb-4">
                Do Dham Yatra
              </h3>
              <p className="text-[var(--warm-gray-500)] mb-2">Kedarnath & Badrinath • 5 Nights / 6 Days</p>
              <p className="text-[var(--warm-gray-600)] mb-6 leading-relaxed">
                Visit the two most revered shrines of Lord Shiva and Lord Vishnu in a single journey. 
                Perfect for pilgrims seeking blessings of both sacred temples with moderate travel time.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-sm text-[var(--warm-gray-500)]">Starting from</span>
                <span className="text-3xl font-bold text-[var(--secondary)]">₹22,700</span>
                <span className="text-[var(--warm-gray-400)]">/person</span>
              </div>
              <a
                href="https://wa.me/917310554723?text=Namaste!%20I%20am%20interested%20in%20Do%20Dham%20Yatra%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Enquire Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Packages/kedar-badri.jpg"
                alt="Do Dham Yatra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/40 to-transparent" />
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
  image: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
}) {
  const whatsappMessage = encodeURIComponent(
    `Namaste! I am interested in the ${name} (${duration}). Please share details.`
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[var(--warm-gray-200)] hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-[220px] md:h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/60 via-transparent to-transparent" />
        
        {featured && (
          <div className="absolute top-4 left-4 bg-[var(--primary)] text-[var(--warm-gray-900)] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Most Popular
          </div>
        )}
        
        {/* Duration badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-[var(--warm-gray-800)] text-sm font-semibold px-3 py-1.5 rounded-full">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--warm-gray-900)] mb-2">
          {name}
        </h3>
        <p className="text-[var(--warm-gray-500)] text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-[var(--warm-gray-100)]">
          <div>
            <p className="text-xs text-[var(--warm-gray-400)]">Starting from</p>
            <p className="text-xl font-bold text-[var(--secondary)]">
              ₹{startingPrice}<span className="text-sm font-normal text-[var(--warm-gray-400)]">/person</span>
            </p>
          </div>
          <a
            href={`https://wa.me/917310554723?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors group-hover:scale-110"
          >
            <svg className="w-5 h-5 text-[var(--warm-gray-900)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
