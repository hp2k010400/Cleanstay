const testimonials = [
  {
    name: "Sarah M.",
    location: "New Town, Edinburgh",
    properties: "3 Airbnb properties",
    quote:
      "Cleanstay has completely transformed how I manage my properties. The turnarounds are always on time and my guests consistently mention how clean everything is. 5 stars every time.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Leith, Edinburgh",
    properties: "1 Airbnb property",
    quote:
      "I used to stress about every checkout. Now I just get a WhatsApp photo when it's done and that's it. Couldn't be easier. The cleaners are thorough and professional.",
    rating: 5,
  },
  {
    name: "Fiona T.",
    location: "Old Town, Edinburgh",
    properties: "2 Airbnb properties",
    quote:
      "During the Fringe I had back-to-back bookings every day. Cleanstay handled every single one without a hitch. Absolute lifesavers. I wouldn't trust anyone else.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Edinburgh Hosts Say
          </h2>
          <p className="text-gray-500 text-lg">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col gap-4"
            >
              <Stars count={t.rating} />
              <p className="text-gray-700 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
                <p className="text-xs text-green-700 font-medium mt-0.5">{t.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
