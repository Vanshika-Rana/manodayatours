/* ==========================================
   Pricing Section
   Clear, trustworthy pricing display
   ========================================== */

"use client";

import { useState } from "react";

const allPackages = [
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    route: "Yamunotri – Gangotri – Kedarnath – Badrinath",
    duration: "9 Nights / 10 Days",
    vehicles: [
      { type: "Non-AC Car (Swift Dzire / Etios)", pax: "4", price: 35300 },
      { type: "AC Innova / Innova Crysta", pax: "4-5", price: 47500 },
      { type: "Tempo Traveler 12-Seater (Non AC)", pax: "10-12", price: 40700 },
      { type: "Tempo Traveler 17-Seater (Non AC)", pax: "10-12", price: 35500 },
    ],
  },
  {
    id: "do-dham",
    name: "Do Dham Yatra",
    route: "Kedarnath & Badrinath",
    duration: "5 Nights / 6 Days",
    vehicles: [
      { type: "Non-AC Car (Swift Dzire / Etios)", pax: "4", price: 24500 },
      { type: "AC Innova / Innova Crysta", pax: "4-5", price: 26500 },
      { type: "Tempo Traveler 12-Seater (Non AC)", pax: "10-12", price: 25600 },
      { type: "Tempo Traveler 17-Seater (Non AC)", pax: "10-12", price: 22700 },
    ],
  },
  {
    id: "kedarnath",
    name: "Kedarnath Yatra",
    route: "Via Sonprayag / Gaurikund",
    duration: "3 Nights / 4 Days",
    vehicles: [
      { type: "Non-AC Car (Swift Dzire / Etios)", pax: "4", price: 14000 },
      { type: "AC Innova / Innova Crysta", pax: "4-5", price: 16500 },
      { type: "Tempo Traveler 12/17-Seater (Non AC)", pax: "10-16", price: 12800 },
    ],
  },
  {
    id: "badrinath",
    name: "Badrinath Yatra",
    route: "Direct Route",
    duration: "3 Nights / 4 Days",
    vehicles: [
      { type: "Non-AC Car (Swift Dzire / Etios)", pax: "4", price: 16500 },
      { type: "AC Innova / Innova Crysta", pax: "4-5", price: 18200 },
      { type: "Tempo Traveler 12/17-Seater (Non AC)", pax: "10-16", price: 15200 },
    ],
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("char-dham");
  const activePackage = allPackages.find((p) => p.id === activeTab)!;

  return (
    <section id="all-packages" className="section bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h2 className="font-(family-name:--font-playfair) text-3xl md:text-4xl leading-tight text-(--warm-gray-900) mb-4">
            Complete Package Pricing
          </h2>
          <p className="text-(--warm-gray-500) max-w-xl mx-auto">
            No hidden charges. All prices include vehicle, driver, accommodation, 
            meals, permits, and complete yatra assistance.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveTab(pkg.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === pkg.id
                  ? "bg-(--warm-gray-800) text-white shadow-lg"
                  : "bg-(--warm-gray-100) text-(--warm-gray-600) hover:bg-(--warm-gray-200)"
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-(--cream) rounded-3xl overflow-hidden border border-(--warm-gray-200)">
            {/* Package Header */}
            <div className="bg-(--warm-gray-800) text-white p-8 text-center">
              <h3 className="font-(family-name:--font-playfair) text-2xl md:text-3xl mb-2 text-white">
                {activePackage.name}
              </h3>
              <p className="text-white/70">{activePackage.route}</p>
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-primary text-(--warm-gray-900) rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {activePackage.duration}
              </div>
            </div>

            {/* Pricing Table */}
            <div className="p-6 md:p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-(--warm-gray-200)">
                    <th className="text-left py-4 text-sm font-semibold text-(--warm-gray-600)">Vehicle Type</th>
                    <th className="text-center py-4 text-sm font-semibold text-(--warm-gray-600)">Group Size</th>
                    <th className="text-right py-4 text-sm font-semibold text-(--warm-gray-600)">Per Person</th>
                  </tr>
                </thead>
                <tbody>
                  {activePackage.vehicles.map((vehicle, index) => (
                    <tr key={index} className="border-b border-(--warm-gray-100) last:border-b-0 hover:bg-white transition-colors">
                      <td className="py-5">
                        <p className="font-medium text-(--warm-gray-800)">{vehicle.type}</p>
                      </td>
                      <td className="py-5 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-(--warm-gray-200) text-(--warm-gray-700) rounded-full text-sm font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {vehicle.pax} Pax
                        </span>
                      </td>
                      <td className="py-5 text-right">
                        <p className="text-2xl font-bold text-(--warm-gray-800)">
                          ₹{vehicle.price.toLocaleString("en-IN")}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-(--warm-gray-200) flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/917310554723?text=Namaste!%20I%20am%20interested%20in%20${encodeURIComponent(activePackage.name)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon />
                  Enquire on WhatsApp
                </a>
                <a href="tel:+917310554723" className="btn-outline">
                  <PhoneIcon />
                  Call +91 73105 54723
                </a>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 p-6 bg-(--primary)/10 rounded-2xl border border-(--primary)/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-(--warm-gray-900)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-(--warm-gray-800) mb-2">Good to Know:</h4>
                <ul className="text-sm text-(--warm-gray-600) space-y-1">
                  <li>• Rates may vary slightly based on travel dates and route conditions</li>
                  <li>• Peak season (May–June & Sept–Oct) tariffs may apply</li>
                  <li>• All yatras operated as per Uttarakhand Government norms 2026</li>
                  <li>• Helicopter/pony/palki charges are payable separately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
