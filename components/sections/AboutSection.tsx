"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Phone, Calendar } from "lucide-react"

export default function AboutSection() {
  const experience = [
    {
      title: "Software Engineer",
      company: "Suffah Tech.",
      period: "2024 - Present",
      description: "Leading development of scalable web applications using React and Node.js",
    },
    {
      title: "Frontend Developer",
      company: "Tek Gravity New Nazimabad (Remote)",
      period: "2024 - 2024",
      description: "Mentored students in web and mobile development using HTML, CSS, JS, React, Node, Express, Next Firebase Guided them in project creation and deployment.",
    },
    {
      title: "Web Designer Trainer",
      company: "Suffah Institute of Technology.",
      period: "2024 - present",
      description: "Mentored students in web and mobile development using HTML, CSS, JS, React, Node, Express, Next Firebase Guided them in project creation and deployment.",
    },
    
  ]

  return (
    <div className="max-w-4xl mx-auto px-12 py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            I'm a passionate Junior Software Engineer with over 1.5 years of experience in building scalable web
            applications. I specialize in React, Node.js, and modern web technologies.
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
            experimenting with 3D graphics and animations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" size={20} />
              <span className="text-slate-300">Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" size={20} />
              <span className="text-slate-300">0349-2297626</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-cyan-400" size={20} />
              <span className="text-slate-300">1+ Years Experience</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          {experience.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
              <p className="text-cyan-400 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
              <p className="text-slate-300">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
