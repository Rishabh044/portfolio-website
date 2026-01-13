'use client'

import { motion } from 'framer-motion'
import { skills, certifications, education } from '@/lib/data'
import { GraduationCap, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Summary & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I build <span className="text-blue-400 font-medium">production-grade data pipelines</span>,{' '}
              <span className="text-blue-400 font-medium">LLM gateway systems</span>, and{' '}
              <span className="text-blue-400 font-medium">RAG applications</span> that turn complex data into reliable, measurable products.
              Currently working at Overstand Labs (YC W25), I focus on creating scalable solutions that bridge the gap between raw data and actionable insights.
            </p>

            {/* Education */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="font-medium text-white">{education.institution}</h4>
                <p className="text-gray-400">{education.degree}</p>
                <p className="text-gray-500 text-sm">{education.duration}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.slice(0, 4).map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">{cert.name}</p>
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
                {certifications.length > 4 && (
                  <p className="text-gray-500 text-sm">+{certifications.length - 4} more certifications</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-blue-400 font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
