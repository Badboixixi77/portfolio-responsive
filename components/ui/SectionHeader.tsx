'use client'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 relative">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
      
      <h2 className="text-4xl font-bold mb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x relative">
          {title}
          {/* Shining overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
        </span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg animate-fade-in relative">
          {subtitle}
          {/* Subtle glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-xl" />
        </p>
      )}
    </div>
  )
} 