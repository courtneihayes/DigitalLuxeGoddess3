const testimonials = [
  {
    quote:
      "I stopped giving away my ideas in DMs and finally packaged them into offers that people respect and pay for.",
    name: "Former social media freelancer",
    location: "Baton Rouge, LA"
  },
  {
    quote:
      "Instead of arguing with my co-parent all day, I now have systems, scripts and documentation. I feel protected and focused.",
    name: "Single mom & creator",
    location: "Louisiana"
  },
  {
    quote:
      "The academy helped me clarify my niche and build one simple funnel that books clients every month.",
    name: "Online service provider",
    location: "US-based"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mb-10">
        <h2 className="section-title">Women who chose themselves</h2>
        <p className="section-subtitle">
          These are the kinds of results and feelings we build for—regulated,
          documented, and properly paid.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.quote}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <p className="text-sm text-gray-200 mb-4">“{t.quote}”</p>
            <figcaption className="text-xs text-gray-400">
              <span className="font-semibold text-gray-200">{t.name}</span>
              <span className="mx-1">•</span>
              <span>{t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
