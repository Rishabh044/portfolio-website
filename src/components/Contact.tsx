'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { Mail, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about data engineering and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card hover-card p-4 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card p-4 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Linkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">Rishabh Hedaoo</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-card p-4 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Github className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white group-hover:text-blue-400 transition-colors">@Rishabh044</p>
              </div>
            </a>

            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* AMA CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-blue-400" size={40} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">Have Questions?</h3>

              <p className="text-gray-400 mb-6">
                Try my AI-powered AMA bot! It knows everything about my experience, projects, and skills.
                Ask anything about my background.
              </p>

              <Link
                href="/ama"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium hover:scale-105"
              >
                <MessageCircle size={20} />
                Ask Me Anything
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
