"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    THREE: any
    VANTA: any
  }
}

export function VantaCloudsBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function loadScripts() {
      // 1. Check/Load Three.js r134
      if (!window.THREE) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script")
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          script.onload = () => resolve()
          script.onerror = () => reject(new Error("Failed to load Three.js"))
          document.body.appendChild(script)
        })
      }

      // 2. Check/Load Vanta Clouds
      if (!window.VANTA || !window.VANTA.CLOUDS) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script")
          script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
          script.onload = () => resolve()
          script.onerror = () => reject(new Error("Failed to load Vanta Clouds"))
          document.body.appendChild(script)
        })
      }

      if (isMounted && window.VANTA && window.VANTA.CLOUDS && vantaRef.current) {
        try {
          if (vantaEffectRef.current) {
            vantaEffectRef.current.destroy()
          }

          vantaEffectRef.current = window.VANTA.CLOUDS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            skyColor: 0x0,
            cloudShadowColor: 0x0,
            sunColor: 0x0,
            sunGlareColor: 0x0,
            sunlightColor: 0x0,
            speed: 3.0,
          })

          setIsLoaded(true)
        } catch (e) {
          console.error("Error initializing Vanta.js CLOUDS:", e)
        }
      }
    }

    loadScripts()

    return () => {
      isMounted = false
      if (vantaEffectRef.current) {
        try {
          vantaEffectRef.current.destroy()
        } catch (e) {
          // ignore
        }
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none transition-opacity duration-1000"
      style={{ opacity: isLoaded ? 1 : 0 }}
    />
  )
}
