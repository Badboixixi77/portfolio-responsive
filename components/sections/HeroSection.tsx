'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="relative inline-block">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider relative z-10"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Frontend Developer
                </span>
              </motion.span>
              {/* Multiple glow layers */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-full animate-pulse animation-delay-2000"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-lg rounded-full animate-pulse animation-delay-4000"></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine rounded-full"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            Crafting Digital Experiences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Through Clean Code
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 sm:px-4 md:px-0"
          >
            I build modern, responsive web applications with a focus on performance, accessibility, and user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 text-center text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-slate-800/50 text-white font-medium border border-slate-700 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4 sm:gap-6"
          >
            <a
              href="https://github.com/Badboixixi77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 p-2"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/maxwell-okosun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 p-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://twitter.com/badboixixi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 p-2"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-slate-400 flex justify-center">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 mt-1.5 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection 