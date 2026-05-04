"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace REPLACE_WITH_FORMSPREE_ID with your Formspree form ID
    const res = await fetch("https://formspree.io/f/mykoepko", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Get a Free Quote
          </h2>
          <p className="text-gray-500 text-lg">
            Tell us about your properties and we&apos;ll come back to you within 2 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message received!</h3>
              <p className="text-gray-500">We&apos;ll be in touch within 2 hours with your free quote.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+44 7700 000000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Number of Properties *
                  </label>
                  <select
                    name="properties"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 property</option>
                    <option value="2-3">2–3 properties</option>
                    <option value="4-10">4–10 properties</option>
                    <option value="10+">10+ properties</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Tell us about your properties
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Where are they based, how many bedrooms, how often do guests check in/out?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-navy-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-navy-900/20"
              >
                {loading ? "Sending..." : "Get My Free Quote →"}
              </button>

              <p className="text-center text-xs text-gray-400">
                We&apos;ll reply within 2 hours · No commitment required
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
