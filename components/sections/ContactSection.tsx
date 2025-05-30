'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Show success message (you can implement this as needed)
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get in Touch" icon={FiMail} />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:maxwellokosun@gmail.com"
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <FiMail className="w-5 h-5 text-indigo-400" />
                    <span>maxwellokosun@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/maxwell-okosun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Badboixixi77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5 text-gray-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Location</h3>
                <div className="flex items-center space-x-3 text-slate-300">
                  <FiMapPin className="w-5 h-5 text-red-400" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 