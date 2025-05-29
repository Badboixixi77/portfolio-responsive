'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills, built with Next.js and Tailwind CSS.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://portfolio-demo.com',
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 