"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PortfolioSection() {
  const projects = [
    {
      title: "Suffah Institute Of Technology",
      description: "Full-stack web solution  with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Express Js"],
      image: "/assests/sit.jpg",
      link: "https://sit.com.pk/",
    },
    {
      title: "Suffah Tech",
      description: "Mern Stack Web Devlopment Learning Service Platform",
      tech: ["Next js", "Tailwind CSS"],
      image: "/assests/suffah.jpg",
      link: "https://suffahtech.com/",
    },
    {
      title: "LMS Learning System",
      description: "Students and Teacher Lms System",
      tech: ["Next.js", "Express js", "Gemini APi", "Node js", "Mongo Db"],
      image: "/assests/ims.jpg",
      link: "https://ims.suffahtech.com/sign-in",
    },
    
  ]

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="max-w-6xl mx-auto px-12 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="aspect-video bg-slate-700 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="border-cyan-500/30 text-cyan-400">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                className="text-cyan-400 hover:text-cyan-300 p-0"
                onClick={(e) => {
                  e.stopPropagation()
                  handleProjectClick(project.link)
                }}
              >
                View Project <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
