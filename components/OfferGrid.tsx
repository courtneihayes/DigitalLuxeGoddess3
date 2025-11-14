const offers = [
  {
    label: "Signature Program",
    name: "The Goddess Empowerment + Digital Luxe Academy",
    link:
      "https://shop.beacons.ai/digitalluxegoddess/55bb08a3-f5ae-4d8c-a513-b1795bbb944c",
    result:
      "Turn your lived experience into a branded online ecosystem with evergreen offers, funnels, and content.",
    ideal:
      "Perfect for women who are ready to build a long-term online business, not just post on social media.",
    outcome:
      "Walk away with a clear niche, offer suite, pricing, and automated client journey."
  },
  {
    label: "Private Mentorship",
    name: "The Empowered Alignment 1:1",
    link:
      "https://shop.beacons.ai/digitalluxegoddess/ee1e3726-952e-4f81-bbc6-2a70975855b8",
    result:
      "Customized legal-aware strategy, boundaries and business planning for women navigating co-parenting, trauma, and rebuilding income.",
    ideal:
      "Best for women who need a protected space to strategize life, business, and court-proof documentation.",
    outcome:
      "You leave each call with receipts, scripts, and action steps—not vague inspiration."
  },
  {
    label: "Journals & Tools",
    name: "The Goddess Empowerment Journals",
    link: "https://the-goddess-empowerment.printify.me/",
    result:
      "Nervous-system-friendly journals that keep your mind clear while you build your money systems.",
    ideal:
      "A fit if you want daily structure, reflection, and room to rewrite your story without pressure.",
    outcome:
      "Use alongside your program or 1:1 support to anchor your routines and decisions."
  }
];

export default function OfferGrid() {
  return (
    <section id="offers" className="section">
      <div className="mb-10">
        <h2 className="section-title">Choose your level of support</h2>
        <p className="section-subtitle">
          Whether you&apos;re just starting or ready to hit consistent 10k
          months, your next move is to stop doing everything for free and step
          into structured, paid support.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <article
            key={offer.name}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-goddessGold mb-2">
                {offer.label}
              </p>
              <h3 className="text-lg font-semibold mb-3">{offer.name}</h3>
              <p className="text-sm text-gray-200 mb-3">{offer.result}</p>
              <p className="text-xs text-gray-400 mb-3">
                <span className="font-semibold text-gray-200">Best for: </span>
                {offer.ideal}
              </p>
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-200">You get: </span>
                {offer.outcome}
              </p>
            </div>
            <div className="mt-5">
              <a
                href={offer.link}
                target="_blank"
                className="inline-flex items-center justify-center w-full rounded-full border border-goddessGold/70 bg-goddessGold/10 px-4 py-2 text-xs font-semibold text-goddessGold hover:bg-goddessGold hover:text-black transition"
              >
                View details & pricing
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
