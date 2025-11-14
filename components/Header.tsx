export default function Header() {
  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-goddessGold/20 border border-goddessGold/60 text-goddessGold text-xl font-semibold">
            G
          </span>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wide uppercase text-xs text-gray-300">
              Digital Luxe Goddess
            </span>
            <span className="text-xs text-gray-400">
              Wealth • Alignment • Systems
            </span>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <a href="#offers" className="hover:text-goddessGold transition">
            Programs
          </a>
          <a href="#testimonials" className="hover:text-goddessGold transition">
            Results
          </a>
          <a href="#faq" className="hover:text-goddessGold transition">
            FAQ
          </a>
        </nav>

        <a
          href="https://beacons.ai/digitalluxegoddess"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-goddessGold/80 bg-goddessGold/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-goddessGold hover:bg-goddessGold hover:text-black transition"
        >
          View All Offers
        </a>
      </div>
    </header>
  );
}
