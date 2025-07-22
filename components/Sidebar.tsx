"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Facebook } from "lucide-react"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.set(sidebarRef.current, {
        x: -100,
        opacity: 0,
      })

      // Entrance animations
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })

      // Hover animations for sidebar items
      const sidebarItems = sidebarRef.current?.querySelectorAll(".sidebar-item")
      sidebarItems?.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power2.out" })
        })
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }, sidebarRef)

    return () => ctx.revert()
  }, [])

  const sidebarItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: User, label: "About", id: "about" },
    { icon: Code, label: "Skills", id: "skills" },
    { icon: Briefcase, label: "Portfolio", id: "portfolio" },
    { icon: Mail, label: "Contact", id: "contact" },
  ]

  return (
    <div
      ref={sidebarRef}
      className="fixed left-0 top-0 h-full w-20 bg-slate-800/80 backdrop-blur-sm border-r border-slate-700/50 flex flex-col items-center py-8 z-20"
    >
      {/* Logo */}
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-8 sidebar-item cursor-pointer">
        <span className="text-xl font-bold text-white">S</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => onSectionChange(item.id)}
            className={`sidebar-item w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
              activeSection === item.id
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                : "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-white"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
          </div>
        ))}
      </nav>

      {/* Social Links */}
      <div className="mt-auto flex flex-col gap-3">
        <a
          href="https://github.com/SHAHBAZ-SHEIKH/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center cursor-pointer hover:bg-slate-600/50 transition-all text-slate-400 hover:text-white"
          title="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/shabaz-ahmed123/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center cursor-pointer hover:bg-slate-600/50 transition-all text-slate-400 hover:text-white"
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="https://www.facebook.com/shahbaz.shah.798278"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center cursor-pointer hover:bg-slate-600/50 transition-all text-slate-400 hover:text-white"
          title="Facebook"
        >
          <Facebook size={16} />
        </a>
      </div>
    </div>
  )
}
