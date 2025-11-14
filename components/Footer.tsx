export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="section py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400">
        <div>
          <p>© {new Date().getFullYear()} Digital Luxe Goddess. All rights reserved.</p>
          <p className="mt-1">
            Online wealth & alignment support for women ready to be fully
            compensated for their story, skills, and leadership.
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-2">
          <a
            href="https://beacons.ai/digitalluxegoddess"
            target="_blank"
            className="text-goddessGold hover:underline"
          >
            View full link hub on Beacons
          </a>
          <p>Built with Next.js • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
