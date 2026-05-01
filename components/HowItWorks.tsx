const steps = [
  {
    number: "01",
    title: "Get a Free Quote",
    desc: "Fill in our quick form or WhatsApp us. We'll come back to you within 2 hours with a fixed price — no hidden fees.",
  },
  {
    number: "02",
    title: "We Clean",
    desc: "Our vetted cleaners arrive between checkout and check-in. Fresh linens, restocked essentials, spotless throughout.",
  },
  {
    number: "03",
    title: "Guests Arrive to Perfection",
    desc: "You get a photo confirmation when the clean is done. Your guests walk in to a 5-star property. Every single time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Three simple steps between a checkout and a 5-star check-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-green-100 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center z-10">
              <div className="w-14 h-14 bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-extrabold text-lg">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
