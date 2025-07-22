"use client"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Sidebar from "@/components/Sidebar"
import Scene3D from "@/components/Scene3D"
import HomeSection from "@/components/sections/HomeSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import ContactSection from "@/components/sections/ContactSection"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const contentRef = useRef<HTMLDivElement>(null)

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return

    // Animate out current content
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        setActiveSection(section)
        // Animate in new content
        gsap.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      },
    })
  }

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />
      case "about":
        return <AboutSection />
      case "skills":
        return <SkillsSection />
      case "portfolio":
        return <PortfolioSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />

        {/* Main Content */}
        <div className="flex-1 ml-20">
          <div ref={contentRef} className="min-h-screen">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
