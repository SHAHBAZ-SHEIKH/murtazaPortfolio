"use client"

import { Card } from "@/components/ui/card"
import { Code, Briefcase, User } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express Js",
    "Python",
    "JavaScript",
    "GSAP",
    "Tailwind CSS",
    "Material Ui",
    "Shadcn Ui",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ]

  return (
    <div className="max-w-6xl mx-auto px-12 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 cursor-pointer p-6 text-center"
          >
            <div className="text-lg font-semibold text-white">{skill}</div>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
            <Code className="text-cyan-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-3 text-white">Frontend Development</h4>
            <p className="text-slate-400">
              Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
            </p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
            <Briefcase className="text-cyan-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-3 text-white">Backend Development</h4>
            <p className="text-slate-400">
              Building scalable APIs and server-side applications using Node.js, Python, and various databases.
            </p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
            <User className="text-cyan-400 mx-auto mb-4" size={48} />
            <h4 className="text-xl font-bold mb-3 text-white">3D & Animation</h4>
            <p className="text-slate-400">
              Creating immersive 3D experiences and smooth animations using Three.js, GSAP, and WebGL.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
