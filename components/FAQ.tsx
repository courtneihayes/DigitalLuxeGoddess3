const faqs = [
  {
    q: "Who is Digital Luxe Goddess for?",
    a:
      "We serve women—especially Black women, single moms, and survivors—who are ready to build real online income from their existing skills, experience, and story. If you're tired of chaos clients, free labor, and unclear boundaries, this is for you."
  },
  {
    q: "Can this help me reach 10k/month consistently?",
    a:
      "Yes, if you're willing to treat this like a real business. We help you clarify your signature offer, price it correctly, create an evergreen funnel, and build sustainable systems. The site you're on now is intentionally built to support search traffic and conversions over time."
  },
  {
    q: "Is this only for Baton Rouge or local clients?",
    a:
      "No. While we understand the realities of women in Baton Rouge, New Orleans, Houston, Atlanta and the South, your brand and offers are designed to be fully online and nationwide. That means clients can find you through search and social from anywhere."
  },
  {
    q: "What if I'm still in a difficult co-parenting or legal situation?",
    a:
      "We cannot offer legal representation, but everything is built with legal awareness, documentation and emotional safety in mind. You will not be told to ignore your reality—we build strategies that honor it and protect your energy."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="mb-10">
        <h2 className="section-title">Questions women like you ask</h2>
        <p className="section-subtitle">
          Read this before you talk yourself out of the life and income you
          actually deserve.
        </p>
      </div>

      <div className="space-y-5">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
          >
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              {item.q}
            </h3>
            <p className="text-sm text-gray-200">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
