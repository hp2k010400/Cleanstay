"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do you access the property between guests?",
    a: "Most hosts share a key safe code or smart lock PIN with us. We keep all access details fully secure and only shared with the assigned cleaner. We never retain access details beyond the booking.",
  },
  {
    q: "What's included in a standard turnover clean?",
    a: "Every clean includes: full hoover and mop of all floors, kitchen cleaned and sanitised, bathrooms scrubbed, bins emptied, surfaces wiped down, and a photo report sent to you when done. Linen changes and essentials restocking are available as add-ons.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes. Cleanstay carries full public liability insurance. Every cleaner on our team is vetted, background-checked, and covered. If anything goes wrong, you're protected.",
  },
  {
    q: "How much notice do I need to give?",
    a: "We ask for at least 24 hours notice for a standard booking. For same-day turnovers we charge a £25 surcharge — availability permitting. During August (Fringe season) we recommend booking recurring slots in advance.",
  },
  {
    q: "How will I know when the clean is done?",
    a: "Your cleaner sends a WhatsApp photo confirmation when the property is finished. You see it done before your guests check in — every single time.",
  },
  {
    q: "What areas of Edinburgh do you cover?",
    a: "We cover all Edinburgh postcodes — New Town, Old Town, Leith, Stockbridge, Marchmont, Morningside, Newington, and surrounding areas. Not sure if we cover your property? Just ask.",
  },
  {
    q: "Can I set up a recurring schedule?",
    a: "Absolutely — most of our hosts set up a regular schedule tied to their Airbnb calendar. We can sync with checkout/check-in times automatically. Multi-property hosts get preferential rates and priority scheduling.",
  },
  {
    q: "What if I'm not happy with a clean?",
    a: "We re-clean for free. No arguments, no admin. If a guest flags an issue or you're not satisfied, we'll send someone back within 24 hours at no charge. We stand behind every clean we do.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything Edinburgh hosts ask before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-navy-900 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
