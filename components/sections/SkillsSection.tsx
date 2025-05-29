    <section id="skills" className="py-20 bg-slate-900">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section> 