const trustItems = [
  {
    value: "6+",
    label: "Featured case studies",
  },
  {
    value: "Laravel",
    label: "Backend architecture",
  },
  {
    value: "Next.js",
    label: "Fast frontend delivery",
  },
  {
    value: "AI + SEO",
    label: "Growth-focused builds",
  },
]

const proofPoints = [
  "SaaS MVP planning",
  "Secure API integrations",
  "Payment gateway setup",
  "Technical SEO structure",
  "Performance-minded delivery",
]

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-yellow-400/10"
            >
              <p className="text-3xl font-bold text-yellow-400">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
