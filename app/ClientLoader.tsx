"use client"

import { useState, useEffect } from "react"
import type React from "react"

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // loader duration
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader-circle">
          <div className="loader-inner"></div>
        </div>

        <style jsx>{`
          .loader-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100%;
            background-color: #000;
            overflow: hidden;
          }

          .loader-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top: 4px solid #facc15;
            animation: spin 1s linear infinite, glow 1.5s ease-in-out infinite alternate;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .loader-inner {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: radial-gradient(circle, #facc15 0%, #000 70%);
            animation: pulse 1.2s ease-in-out infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes glow {
            from {
              box-shadow: 0 0 10px #facc15;
            }
            to {
              box-shadow: 0 0 30px #facc15;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="fade-in">
      {children}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
