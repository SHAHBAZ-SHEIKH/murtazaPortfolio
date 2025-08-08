"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function HomeSection() {
  const profileRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      })
      gsap.set(profileRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
      })

      // Entrance animations
      const tl = gsap.timeline()

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        0.2,
      )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          profileRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          "-=1",
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )

      // Profile image hover effect
      if (profileRef.current) {
        profileRef.current.addEventListener("mouseenter", () => {
          gsap.to(profileRef.current, {
            scale: 1.05,
            rotation: 5,
            duration: 0.5,
            ease: "power2.out",
          })
        })
        profileRef.current.addEventListener("mouseleave", () => {
          gsap.to(profileRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const handleDownloadCV = () => {
    // Create a link to the CV file and trigger download
    const link = document.createElement("a")
    link.href = "/assests/murtuza-ahmed.pdf"
    link.download = "Murtuza-Ahmed-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="max-w-2xl">
          <div ref={subtitleRef} className="text-cyan-400 text-lg font-medium mb-4 tracking-wider">
            HELLO I AM
          </div>

          <div ref={titleRef} className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
              Murtaza Ahmed
            </h1>
            <p className="text-xl text-slate-300 mb-2">Software Engineer</p>
            <p className="text-slate-400">MernStack Developer & 3D Enthusiast</p>
          </div>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Start Consulting
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-600 hover:bg-slate-800 px-8 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>

          <div className="text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for Freelance
            </span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-96 flex items-center justify-center px-8">
        <div className="text-center">
          <div ref={profileRef} className="relative mb-6 cursor-pointer py-6">
            <div className="w-64 h-64  rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl shadow-cyan-500/10">
              <Image
                src="/assests/murtaza.png"
                alt="Shahbaz Ahmed"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Murtaza Ahmed</h2>
          <p className="text-slate-400 mb-6">Software Engineer</p>

          <Button
            variant="outline"
            className="border-slate-600 text-slate-600 hover:bg-slate-800 rounded-xl transition-all duration-300"
            onClick={handleDownloadCV}
          >
            <Download className="mr-2" size={16} />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  )
}
