// app/page.tsx
import Image from "next/image";

const links = [
  {
    label: "✨ The Goddess Empowerment + Digital Luxe Academy",
    href: "https://shop.beacons.ai/digitalluxegoddess/55bb08a3-f5ae-4d8c-a513-b1795bbb944c",
  },
  {
    label: "🧠 1:1 The Empowered Alignment Session",
    href: "https://shop.beacons.ai/digitalluxegoddess/ee1e3726-952e-4f81-bbc6-2a70975855b8",
  },
  {
    label: "📓 The Goddess Empowerment Journals",
    href: "https://the-goddess-empowerment.printify.me/",
  },
  {
    label: "🎨 Canva Resources & Templates",
    href: "https://www.canva.com/design/DAGiBpm_H3s/XndvWg9CNvhhIto3QcGQAQ/edit",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center py-12 space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="relative h-28 w-28 rounded-full overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            {/* Replace src with your actual profile image path in /public */}
            <Image
              src="/avatar-digital-luxe-goddess.jpg"
              alt="Digital Luxe Goddess"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Name + handle */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-wide">
            Digital Luxe Goddess
          </h1>
          <p className="text-sm text-white/70">@digitalluxegoddess</p>
        </div>

        {/* Short bio (link-in-bio style) */}
        <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
          Helping creators, coaches, and service providers turn their gifts into
          evergreen digital offers, high-ticket experiences, and consistent
          $10K+ months.
        </p>

        {/* Tags / identity chips */}
        <div className="flex flex-wrap justify-center gap-2 text-[11px]">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
            🎥 Digital Products & Funnels
          </span>
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
            💻 AI-Powered Marketing Systems
          </span>
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">
            ✨ Goddess Empowerment
          </span>
        </div>

        {/* Main link buttons */}
        <div className="space-y-3 mt-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer / tiny CTA */}
        <div className="pt-4 text-[11px] text-white/60 space-y-1">
          <p>
            Ready for a custom strategy, launch plan, or done-for-you systems?
          </p>
          <p>
            DM <span className="font-semibold">@digitalluxegoddess</span> or
            apply via the offers above.
          </p>
        </div>
      </div>
    </main>
  );
}
