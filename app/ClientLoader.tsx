"use client"

import { useEffect, useState } from "react"
import type React from "react"

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-ring" />

        <style jsx>{`
          .loader-screen {
            height: 100vh;
            width: 100%;
            background: radial-gradient(circle at center, #0b0b0b, #000);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loader-ring {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: conic-gradient(
              from 0deg,
              #F0B100,
              #ffd666,
              #F0B100
            );
            animation: spin 0.9s linear infinite;
            mask: radial-gradient(circle 26px, transparent 96%, black 100%);
            -webkit-mask: radial-gradient(circle 26px, transparent 96%, black 100%);
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="page-fade">
      {children}
      <style jsx>{`
        .page-fade {
          animation: fade 0.6s ease forwards;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
