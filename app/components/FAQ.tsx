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
    answer: "The Char Dham yatra season typically runs from May to June and September to October. The temples close during winter months due to heavy snowfall. We recommend May to June for pleasant weather and September to October for fewer crowds and beautiful autumn colors.",
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
    <section id="faq" className="section bg-(--cream)">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-right section-label mb-6 sm:mb-8">Frequently Asked</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left: FAQ Content */}
          <div>
            <h2 className="font-(family-name:--font-playfair) text-2xl sm:text-3xl md:text-4xl leading-tight text-(--warm-gray-900) mb-3 sm:mb-4">
              Questions about your{" "}
              <span className="text-(--primary-dark)">pilgrimage?</span>
            </h2>
            <p className="text-(--warm-gray-500) mb-6 sm:mb-8 text-sm sm:text-base">
              We&apos;re here to help! Browse common questions or reach out directly. 
              no question is too small.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-(--warm-gray-200) py-3 sm:py-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left"
                  >
                    <span className={`font-medium text-sm sm:text-base transition-colors ${
                      openIndex === index ? "text-secondary" : "text-(--warm-gray-700)"
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index 
                        ? "bg-secondary text-white" 
                        : "bg-(--warm-gray-200) text-(--warm-gray-500)"
                    }`}>
                      {openIndex === index ? (
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pt-3 sm:pt-4 pr-4 sm:pr-12">
                      <p className="text-(--warm-gray-500) text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image and Contact Card */}
          <div className="space-y-4 sm:space-y-6">
            {/* Image */}
            <div className="relative h-[200px] sm:h-[280px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000"
                alt="Himalayan landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAgEDBAIDAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAYEQEBAQEBAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8AmeFa0t9q0Md3Gsko3yoGwVXoZHfJooHjGiD/ALWyH6WP8pD4V/Rq8f8ATH+0sUx1S3GnY1f/2Q=="
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--secondary)/60 to-transparent" />
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-(--warm-gray-200)">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🙋</span>
                <h3 className="font-(family-name:--font-playfair) text-lg sm:text-xl text-(--warm-gray-900)">
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-(--warm-gray-500) mb-5 sm:mb-6 text-sm sm:text-base">
                Our team is always happy to help. Reach out anytime, we typically 
                respond within a few hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/917310554723?text=Namaste!%20I%20have%20a%20question%20about%20yatra%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center text-sm sm:text-base"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917310554723"
                  className="btn-outline flex-1 justify-center text-sm sm:text-base"
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
