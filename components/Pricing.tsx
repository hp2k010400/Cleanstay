const tiers = [
  { size: "Studio", price: 65, detail: "Up to 2 hrs · All essentials included" },
  { size: "1 Bedroom", price: 75, detail: "Up to 2.5 hrs · Photo confirmation included" },
  { size: "2 Bedrooms", price: 95, detail: "Up to 3 hrs · Most popular", popular: true },
  { size: "3 Bedrooms", price: 120, detail: "Up to 4 hrs · Full turnover service" },
  { size: "4+ Bedrooms", price: 150, detail: "Up to 5 hrs · Custom quote available" },
];

const addons = [
  { label: "Essentials restock", price: "£12/visit" },
  { label: "Welcome pack", price: "£8/visit" },
  { label: "Same-day turnaround", price: "+£25" },
  { label: "August Fringe uplift", price: "+15%" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Simple, Fixed Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just a spotless property every time.
          </p>
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {tiers.map((t) => (
            <div
              key={t.size}
              className={`relative rounded-2xl p-6 text-center border ${
                t.popular
                  ? "bg-navy-900 border-navy-900 text-white shadow-xl shadow-navy-900/20"
                  : "bg-gray-50 border-gray-100 text-gray-900"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <p className={`text-sm font-semibold mb-2 ${t.popular ? "text-navy-100" : "text-gray-500"}`}>
                {t.size}
              </p>
              <p className={`text-4xl font-extrabold mb-1 ${t.popular ? "text-white" : "text-navy-900"}`}>
                £{t.price}
              </p>
              <p className={`text-xs leading-snug ${t.popular ? "text-navy-100" : "text-gray-400"}`}>
                {t.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-property discount */}
        <div className="bg-navy-50 border border-navy-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-gray-900">Multi-property discount</p>
            <p className="text-gray-500 text-sm">5–9 properties: £5 off per clean · 10+ properties: £10 off per clean. Ideal for property managers.</p>
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Optional add-ons</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {addons.map((a) => (
              <div key={a.label} className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between border border-gray-100">
                <span className="text-sm text-gray-600">{a.label}</span>
                <span className="text-sm font-bold text-navy-900 ml-2 shrink-0">{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-navy-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-navy-800 transition-colors shadow-lg shadow-navy-900/20"
          >
            Get Your Free Quote →
          </a>
          <p className="text-xs text-gray-400 mt-3">We&apos;ll confirm your exact price within 2 hours</p>
        </div>
      </div>
    </section>
  );
}
