/* ==========================================
   Inclusions Section
   Clear, reassuring inclusions list
   ========================================== */

export default function Inclusions() {
  const inclusions = [
    { icon: "🚗", text: "Dedicated vehicle with experienced hill driver" },
    { icon: "⛽", text: "Fuel, driver allowance, toll taxes & state permits" },
    { icon: "🏨", text: "Hotel accommodation (sharing basis) with breakfast & dinner" },
    { icon: "📍", text: "Pickup & drop as per itinerary" },
    { icon: "🙏", text: "Assistance during Pooja/Darshan at temples" },
    { icon: "📋", text: "Complete Yatra Registration handling" },
    { icon: "🐴", text: "Help to arrange Pony/Palki at Yamunotri & Kedarnath" },
    { icon: "📞", text: "24/7 on-call support throughout your journey" },
  ];

  const exclusions = [
    "Helicopter / Pony / Palki charges",
    "Monument or sightseeing entry fees",
    "Personal expenses & tips",
    "Travel insurance",
  ];

  return (
    <section className="section bg-[var(--cream)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--warm-gray-900)]">
                What&apos;s Included
              </h3>
            </div>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--warm-gray-200)] hover:border-[var(--primary)] transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[var(--warm-gray-700)] leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--primary-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[var(--warm-gray-900)]">
                Not Included
              </h3>
            </div>
            <ul className="space-y-3 mb-8">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[var(--warm-gray-600)]">
                  <span className="w-6 h-6 rounded-full bg-[var(--warm-gray-200)] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[var(--warm-gray-500)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Help Card */}
            <div className="bg-[var(--secondary)] text-white rounded-2xl p-8">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                Have questions?
              </h4>
              <p className="text-white/80 text-sm mb-6">
                We&apos;re happy to clarify everything before you book. 
                No question is too small. Your peace of mind matters to us.
              </p>
              <a
                href="https://wa.me/917310554723?text=Namaste!%20I%20have%20questions%20about%20package%20inclusions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--warm-gray-900)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary-light)] transition-colors"
              >
                Ask us anything
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
