"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto px-12 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just
            want to chat about technology, feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-slate-400">murtazaahmed.tech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-slate-400">0349-2297626</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-slate-400">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
              <Linkedin size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
              <Twitter size={20} />
            </Button>
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
