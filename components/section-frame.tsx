import type { ReactNode } from "react"

type SectionFrameProps = {
  children: ReactNode
  accent?: "yellow" | "white"
  delay?: number
  stackIndex?: number
  size?: "hero" | "section" | "compact"
}

export default function SectionFrame({
  children,
  accent = "yellow",
  stackIndex = 1,
  size = "section",
}: SectionFrameProps) {
  const background =
    accent === "yellow"
      ? "radial-gradient(circle, rgba(253,199,0,0.12), transparent 62%)"
      : "radial-gradient(circle, rgba(255,255,255,0.08), transparent 62%)"

  return (
    <div
      className={`parallax-stack parallax-stack--${size} relative`}
      style={{ zIndex: stackIndex }}
    >
      <div className="parallax-panel sticky top-0 bg-[#0A0A0A]">
        <div
          aria-hidden="true"
          style={{ background }}
          className="parallax-glow pointer-events-none absolute left-1/2 top-16 z-0 h-80 w-[min(42rem,90vw)] -translate-x-1/2 rounded-full blur-3xl"
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
