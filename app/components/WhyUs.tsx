/* ==========================================
   Why Travel With Us Section
   Trust-building feature cards
   ========================================== */

const features = [
  {
    id: "01",
    title: "Local Expertise",
    description: "We're from Uttarakhand. We know the routes, the temples, and the terrain firsthand.",
    icon: "🏔️",
  },
  {
    id: "02",
    title: "Expert Hill Drivers",
    description: "Our drivers have decades of experience on mountain roads. Careful, reliable, and familiar with every turn.",
    icon: "🚗",
  },
  {
    id: "03",
    title: "Personalized Care",
    description: "We adjust every trip to match your pace and preferences, especially for seniors and families.",
    icon: "❤️",
  },
  {
    id: "04",
    title: "Honest Pricing",
    description: "No hidden charges. What we quote is what you pay, clear and upfront.",
    icon: "✓",
  },
];

export default function WhyUs() {
  return (
    <section className="section bg-(--off-white)">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-right section-label mb-6 sm:mb-8">Why Families Trust Us</p>

        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h2 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl md:text-4xl leading-tight text-(--warm-gray-900)">
            Your pilgrimage deserves{" "}
            <span className="text-(--primary-dark)">care and expertise</span>{" "}
            <span className="text-(--warm-gray-400)">that only locals can provide.</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-(--warm-gray-200) transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="p-4 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] flex flex-col">
                <span className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-(--primary-dark) group-hover:text-primary">
                  {feature.id}
                </span>
                <span className="text-2xl sm:text-3xl mb-3 sm:mb-4">{feature.icon}</span>
                <h3 className="font-(family-name:--font-playfair) text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-(--warm-gray-900)">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed mt-auto text-(--warm-gray-500)">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Points Row */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-12 border-t border-(--warm-gray-200)">
          <TrustPoint 
            icon={<ShieldIcon />} 
            title="Govt. Compliant" 
            subtitle="Following all guidelines"
          />
          <TrustPoint 
            icon={<HeartIcon />} 
            title="Senior Friendly" 
            subtitle="Extra care assured"
          />
          <TrustPoint 
            icon={<PhoneIcon />} 
            title="24/7 Support" 
            subtitle="Always available"
          />
          <TrustPoint 
            icon={<StarIcon />} 
            title="5000+ Pilgrims" 
            subtitle="Happy travelers"
          />
        </div>
      </div>
    </section>
  );
}

function TrustPoint({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-(--warm-gray-200)">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-(--primary)/10 flex items-center justify-center text-(--primary-dark) mb-2 sm:mb-3">
        {icon}
      </div>
      <p className="font-semibold text-(--warm-gray-800) text-xs sm:text-sm md:text-base">{title}</p>
      <p className="text-xs sm:text-sm text-(--warm-gray-400) hidden sm:block">{subtitle}</p>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}
