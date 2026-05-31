import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, ChevronDown, Cpu, Zap, Code2 } from 'lucide-react'
import profileImg from '../{components,assets}/profile.jpeg'

const TITLES = ['Full-Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Code Architect']

function useTypewriter(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx]         = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setIdx(i => (i + 1) % texts.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, texts, speed, pause])

  return display
}

/* Particles */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }))

  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
            <motion.div
                key={p.id}
                className="absolute rounded-full bg-neon-blue/30"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                animate={{
                  y: [0, -120, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
            />
        ))}
      </div>
  )
}

/* Hexagon grid background */
function HexGrid() {
  return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,2 55,15 55,37 30,50 5,37 5,15"
                     fill="none" stroke="#00d4ff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
  )
}

/* Stats row */
const stats = [
  { icon: Code2, label: 'Projects Done',   value: '10+' },
  { icon: Cpu,   label: 'Technologies',    value: '20+' },
  { icon: Zap,   label: 'Years Experience', value: '3+' },
]

export default function Hero() {
  const title   = useTypewriter(TITLES)
  const photo   = profileImg

  return (
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void">
        {/* Layered background */}
        <HexGrid />
        <Particles />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(0,144,204,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: text */}
          <div>
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-neon-green/30 bg-neon-green/5"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-neon-green text-xs tracking-widest">AVAILABLE FOR HIRE</span>
            </motion.div>

            {/* Name */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
              <p className="font-mono text-neon-blue text-sm tracking-widest mb-2">
                <span className="text-gray-500">// </span>Hello, World! I am
              </p>
              <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-none mb-1">
                OMAR
              </h1>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-none mb-4"
                  style={{ WebkitTextStroke: '2px #00d4ff', color: 'transparent' }}>
                AQACHTOUL
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-neon-blue text-lg">{'>'}</span>
              <span className="font-mono text-gray-300 text-lg">{title}</span>
              <span className="w-0.5 h-6 bg-neon-blue cursor-blink" />
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-base leading-relaxed max-w-md mb-8"
            >
              Crafting immersive digital experiences at the intersection of
              <span className="text-neon-blue"> code</span>,
              <span className="text-neon-green"> design</span>, and
              <span className="text-neon-red"> innovation</span>.
              Building the future, one commit at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-void font-display font-bold text-sm tracking-widest relative overflow-hidden group"
                  style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <Eye size={16} />
                VIEW MY WORK
              </motion.a>

              <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-display font-bold text-sm tracking-widest hover:bg-white/5 transition-all duration-200"
                  style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
              >
                <Download size={16} />
                DOWNLOAD CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-8"
            >
              {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon size={14} className="text-neon-blue mx-auto mb-1" />
                    <div className="font-display text-2xl font-black text-white">{value}</div>
                    <div className="font-mono text-xs text-gray-500 tracking-wider">{label}</div>
                  </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: character placeholder */}
          <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-80 h-80 rounded-full border border-dashed border-neon-blue/20"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 rounded-full border border-dashed border-neon-purple/20"
            />

            {/* Glow behind character */}
            <div
                className="absolute w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.18) 0%, transparent 70%)' }}
            />

            {/* Character placeholder box */}
            <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-[420px] glass neon-border-blue overflow-hidden scanlines corner-decor"
            >
              {/* HUD header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-neon-blue/20">
                <span className="font-mono text-neon-blue text-xs tracking-widest">CHARACTER_CARD.exe</span>
                <div className="flex gap-1">
                  {['red','yellow','green'].map(c => (
                      <div key={c} className={`w-2 h-2 rounded-full bg-${c}-500 opacity-60`} />
                  ))}
                </div>
              </div>

              {/* Rank badge */}
              <div className="absolute top-12 left-3 z-10">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-neon-blue/20 border border-neon-blue/40">
                  <span className="font-display text-neon-blue font-black text-sm">S</span>
                  <span className="font-mono text-white text-xs">RANK</span>
                </div>
              </div>

              {/* Scanline animation */}
              <motion.div
                  className="absolute left-0 right-0 h-12 z-20 pointer-events-none"
                  style={{ background: 'linear-gradient(transparent, rgba(0,212,255,0.07), transparent)' }}
                  animate={{ y: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Character area */}
              <div className="absolute inset-0 top-10 flex items-center justify-center">
                <div className="text-center">
                  {/* Photo circle */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue/40"
                       style={{
                         boxShadow: '0 0 40px rgba(0,212,255,0.25)'
                       }}
                  >
                    <img src={photo} alt="profile" className="w-full h-full object-cover" />
                  </div>

                  <p className="font-mono text-neon-blue text-xs tracking-widest mb-1">THE DEVELOPER</p>
                  <h3 className="font-display font-black text-white text-xl">OMAR AQACHTOUL</h3>
                  <p className="font-mono text-gray-500 text-xs">( kai.lo )</p>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-deep border-t border-neon-blue/10">
                {[
                  { label: 'POWER',   val: 98, color: '#00d4ff' },
                  { label: 'SPEED',   val: 85, color: '#00ff88' },
                  { label: 'DESIGN',  val: 92, color: '#b44fff' },
                ].map(s => (
                    <div key={s.label} className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-gray-500 text-xs w-12">{s.label}</span>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${s.val}%` }}
                            transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="font-mono text-xs" style={{ color: s.color }}>{s.val}</span>
                    </div>
                ))}
              </div>
            </motion.div>

            {/* Corner decorations */}
            {[
              { top: '10%', right: '-5%', label: 'REACT.js' },
              { bottom: '25%', right: '-8%', label: 'NODE.js' },
              { bottom: '15%', left: '-8%', label: 'PYTHON' },
            ].map(({ label, ...pos }) => (
                <motion.div
                    key={label}
                    style={pos}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute px-2 py-1 border border-neon-blue/30 bg-deep/80"
                >
                  <span className="font-mono text-neon-blue text-xs">{label}</span>
                </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-gray-600 text-xs tracking-widest">SCROLL</span>
          <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className="text-neon-blue" />
          </motion.div>
        </motion.div>
      </section>
  )
}