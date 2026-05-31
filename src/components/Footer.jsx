import { motion } from 'framer-motion'
import { Terminal, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-deep border-t border-neon-blue/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border border-neon-blue/60 flex items-center justify-center"
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <Terminal size={12} className="text-neon-blue" />
          </div>
          <span className="font-display text-sm text-white tracking-widest">
            DEV<span className="text-neon-blue">.</span>kailo
          </span>
        </div>

        <p className="font-mono text-xs text-gray-600 flex items-center gap-1">
          © {year} — @kailo
        </p>

        <div className="font-mono text-xs text-gray-600">
          <span className="text-neon-blue">{'>'}</span> by me
          <span className="w-1.5 h-3 bg-neon-blue ml-1 inline-block cursor-blink" />
        </div>
      </div>
    </footer>
  )
}
