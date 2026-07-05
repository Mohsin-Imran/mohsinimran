import { seoFaqs } from "@/lib/seo"

export default function Faq() {
  return (
    <section id="faq" className="bg-[#0A0A0A] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-500" />
        </div>

        <div className="space-y-4">
          {seoFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-yellow-500/30 bg-white/[0.03] p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-2xl leading-none text-yellow-400 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
