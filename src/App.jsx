import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

/* Boot-up loading screen */
function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [line, setLine] = useState(0)

  const lines = [
    'Initializing system...',
    'Loading assets...',
    'Compiling components...',
    'Rendering portfolio...',
    'Ready.',
  ]

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); return 100 }
        return p + 2
      })
    }, 25)
    const lv = setInterval(() => {
      setLine(l => (l < lines.length - 1 ? l + 1 : l))
    }, 600)
    const t = setTimeout(onDone, 3200)
    return () => { clearInterval(iv); clearInterval(lv); clearTimeout(t) }
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center"
    >
      <div className="w-80">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="font-display text-3xl font-black text-white">
            DEV<span className="text-neon-blue">.</span>kailo
          </div>
          <div className="font-mono text-neon-blue text-xs tracking-widest mt-1">Welcome To My Portfolio</div>
        </div>

        {/* Terminal lines */}
        <div className="font-mono text-xs text-gray-500 space-y-1 mb-6 h-24 overflow-hidden">
          {lines.slice(0, line + 1).map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={i === line ? 'text-neon-green' : 'text-gray-600'}
            >
              <span className="text-neon-blue mr-2">{'>'}</span>{l}
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #00d4ff, #b44fff)', width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between font-mono text-xs text-gray-600">
          <span>LOADING</span>
          <span style={{ color: '#00d4ff' }}>{progress}%</span>
        </div>
      </div>
    </motion.div>
  )
}

/* Cursor spotlight */
function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.045), transparent 40%)`,
      }}
    />
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Spotlight />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
