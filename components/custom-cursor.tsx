"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const sync = () => setEnabled(fine.matches)
    sync()
    fine.addEventListener("change", sync)
    return () => fine.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add("has-custom-cursor")
    const point = { x: -100, y: -100 }
    const ringPoint = { x: -100, y: -100 }
    let hot = false
    let frame = 0

    const onMove = (event: MouseEvent) => {
      point.x = event.clientX
      point.y = event.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`
      }
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const next = Boolean(target.closest("a, button, input, textarea, select, summary, [role='button']"))
      if (next === hot) return
      hot = next
      ring.current?.classList.toggle("is-hot", hot)
    }

    const loop = () => {
      ringPoint.x += (point.x - ringPoint.x) * 0.18
      ringPoint.y += (point.y - ringPoint.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPoint.x}px, ${ringPoint.y}px, 0)`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    frame = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
