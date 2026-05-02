export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-navy-900 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z" fill="white" />
                <path d="M12 11l.6 1.8H14.4l-1.5 1.1.6 1.8L12 14.6l-1.5 1.1.6-1.8-1.5-1.1H11.4L12 11Z" fill="#0D1B4B" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">Cleanstay</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <span>Edinburgh, Scotland</span>
            <a
              href="https://wa.me/447763691050"
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
