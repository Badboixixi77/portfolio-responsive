'use client'

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SectionHeadingProps {
  title: string;
  icon: IconType;
  className?: string;
}

const SectionHeading = ({ title, icon: Icon, className = '' }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-12 sm:mb-16 ${className}`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block p-3 rounded-full bg-indigo-500/10 mb-4"
      >
        <Icon className="w-6 h-6 text-indigo-400" />
      </motion.div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
    </motion.div>
  );
};

export default SectionHeading; 