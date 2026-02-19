/* ==========================================
   FAQ Section
   Warm, helpful accordion
   ========================================== */

"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Do you offer customizable travel itineraries?",
    answer: "Absolutely! We specialize in creating personalized itineraries tailored to your preferences. Whether you're interested in specific temples, scenic routes, or unique experiences, our team will help craft the perfect journey for you and your family.",
  },
  {
    question: "What is the best time to visit Char Dham?",
    answer: "The Char Dham yatra season typically runs from May to June and September to October. The temples close during winter months due to heavy snowfall. We recommend May-June for pleasant weather and September-October for fewer crowds and beautiful autumn colors.",
  },
  {
    question: "Are your tours guided?",
    answer: "All our tours include an experienced local driver who also serves as your guide. They know the routes, best darshan timings, and local customs intimately. For larger groups, we can arrange dedicated temple guides who can enhance your spiritual experience.",
  },
  {
    question: "Do you provide assistance with yatra registration?",
    answer: "Yes! We handle all official yatra registration formalities on your behalf. This includes the mandatory Char Dham registration, health checkups, and any permits required. You can focus on your pilgrimage while we handle the paperwork.",
  },
  {
    question: "What is included in the trip cost?",
    answer: "Our packages include dedicated vehicle, experienced driver, fuel costs, tolls, permits, hotel accommodation with breakfast and dinner, pickup/drop as per itinerary, and 24/7 on-call support. Helicopter, pony, palki charges and personal expenses are not included.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section bg-[var(--cream)]">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-right section-label mb-8">Frequently Asked</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: FAQ Content */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl leading-tight text-[var(--warm-gray-900)] mb-4">
              Questions about your{" "}
              <span className="text-[var(--primary-dark)]">pilgrimage?</span>
            </h2>
            <p className="text-[var(--warm-gray-500)] mb-8">
              We&apos;re here to help! Browse common questions or reach out directly. 
              no question is too small.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[var(--warm-gray-200)] py-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className={`font-medium transition-colors ${
                      openIndex === index ? "text-[var(--secondary)]" : "text-[var(--warm-gray-700)]"
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index 
                        ? "bg-[var(--secondary)] text-white" 
                        : "bg-[var(--warm-gray-200)] text-[var(--warm-gray-500)]"
                    }`}>
                      {openIndex === index ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pt-4 pr-12">
                      <p className="text-[var(--warm-gray-500)] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image and Contact Card */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000"
                alt="Himalayan landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/60 to-transparent" />
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--warm-gray-200)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🙋</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--warm-gray-900)]">
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-[var(--warm-gray-500)] mb-6">
                Our team is always happy to help. Reach out anytime, we typically 
                respond within a few hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917310554723?text=Namaste!%20I%20have%20a%20question%20about%20yatra%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917310554723"
                  className="btn-outline flex-1 justify-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
