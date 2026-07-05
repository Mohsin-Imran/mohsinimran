import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4 text-white">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-gray-300">
          The page you are looking for may have moved, or the link may be incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Back to homepage
        </Link>
      </section>
    </main>
  )
}
