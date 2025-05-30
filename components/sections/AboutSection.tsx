'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiMapPin, FiAward, FiUser, FiCoffee, FiLayout, FiPenTool, FiTool, FiMonitor, FiSmartphone } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading title="About Me" icon={FiUser} />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-slate-300 leading-relaxed">
                I&apos;m a passionate Frontend Developer with a keen eye for creating beautiful and functional web experiences. My journey in web development started with a curiosity for how things work on the internet, which led me to master modern web technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
              <p className="text-slate-300 leading-relaxed">
                I specialize in building responsive, user-friendly applications using React and Next.js, with a strong focus on performance and accessibility. My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed expectations.
              </p>
            </motion.div>
          </div>

          <SectionHeading title="Quick Facts" icon={FiAward} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 mx-auto">
                <FiMapPin className="w-6 h-6 text-indigo-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-slate-300">Lagos, Nigeria</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                <FiAward className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Experience</h4>
              <p className="text-slate-300">1+ Year</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                <FiCode className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Specialization</h4>
              <p className="text-slate-300">React & Next.js</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 mx-auto">
                <FiCoffee className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Beyond Coding</h4>
              <p className="text-slate-300">Open Source & Learning</p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading title="Skills & Technologies" icon={FiCode} />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Frontend Development</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiCode className="w-5 h-5 text-indigo-400" />
                    <span>React</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiLayout className="w-5 h-5 text-blue-400" />
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiCode className="w-5 h-5 text-purple-400" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiPenTool className="w-5 h-5 text-green-400" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiLayout className="w-5 h-5 text-orange-400" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiPenTool className="w-5 h-5 text-pink-400" />
                    <span>CSS3</span>
                  </div>
                </div>
              </motion.div>

              {/* Tools & Others */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Tools & Others</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiTool className="w-5 h-5 text-indigo-400" />
                    <span>Git</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiCode className="w-5 h-5 text-gray-400" />
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiMonitor className="w-5 h-5 text-blue-400" />
                    <span>VS Code</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiPenTool className="w-5 h-5 text-purple-400" />
                    <span>Figma</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiSmartphone className="w-5 h-5 text-green-400" />
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                    <FiLayout className="w-5 h-5 text-pink-400" />
                    <span>UI/UX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 