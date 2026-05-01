export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="text-white font-bold text-lg">Cleanstay</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <span>Edinburgh, Scotland</span>
            <a
              href="https://wa.me/447700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Get a Quote
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Cleanstay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
