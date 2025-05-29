'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiMapPin, FiAward, FiUser, FiCoffee } from 'react-icons/fi';

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
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-3 rounded-full bg-indigo-500/10 mb-4"
            >
              <FiUser className="w-6 h-6 text-indigo-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 