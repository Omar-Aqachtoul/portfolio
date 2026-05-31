import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, MapPin, Calendar, Coffee } from 'lucide-react'

const facts = [
  { icon: User,     label: 'Name',     value: 'Omar Aqachtoul'         },
  { icon: MapPin,   label: 'Location', value: 'Méknes, Morocco' },
  { icon: Calendar, label: 'Exp',      value: '3+ Years'          },
  { icon: Coffee,   label: 'Fuel',     value: 'Coffee & Code'     },
]

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-8 h-px bg-neon-blue" />
      <span className="font-mono text-neon-blue text-xs tracking-widest uppercase">{children}</span>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-28 bg-deep overflow-hidden">
      {/* bg grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="font-display font-black text-4xl md:text-5xl text-white section-title">
            WHO AM I<span className="text-neon-blue">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: terminal card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Terminal window */}
            <div className="glass neon-border-blue rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-neon-blue/10">
                <div className="flex gap-1.5">
                  {['#ff2d55','#ffcc00','#00ff88'].map(c => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.8 }} />
                  ))}
                </div>
                <span className="font-mono text-gray-500 text-xs ml-2">~/about/me.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-2">
                {[
                  { prompt: '$', cmd: 'cat about.txt', color: 'text-neon-blue' },
                  { output: '> Passionate developer building', color: 'text-gray-300' },
                  { output: '  scalable & beautiful web apps.', color: 'text-gray-300' },
                  { output: '' },
                  { prompt: '$', cmd: 'echo $PASSION', color: 'text-neon-blue' },
                  { output: '> Clean code + Great UX + Coffee', color: 'text-neon-green' },
                  { output: '' },
                  { prompt: '$', cmd: 'ls hobbies/', color: 'text-neon-blue' },
                  { output: '> gaming  anime  open-source  music', color: 'text-neon-purple' },
                  { output: '' },
                  { prompt: '$', cmd: 'cat motto.txt', color: 'text-neon-blue' },
                  { output: '> "Code is poetry. Design is art.', color: 'text-yellow-400' },
                  { output: '   Ship both."', color: 'text-yellow-400' },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex gap-2"
                  >
                    {line.prompt && <span className="text-neon-green">{line.prompt}</span>}
                    {line.cmd && <span className={line.color}>{line.cmd}</span>}
                    {!line.prompt && <span className={line.color || 'text-transparent'}>
                      {line.output || '.'}
                    </span>}
                  </motion.div>
                ))}
                <div className="flex gap-2 mt-2">
                  <span className="text-neon-green">$</span>
                  <span className="w-2 h-4 bg-neon-green cursor-blink" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a{' '}
              <span className="text-neon-blue font-semibold">Full-Stack Developer & UI/UX Designer</span>{' '}
              with a passion for creating immersive digital experiences.
              Inspired by gaming UIs, anime aesthetics, and cutting-edge web design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not pushing pixels or writing algorithms, you'll find me grinding through
              games, watching anime, or contributing to open-source. I believe in the power of
              design to tell stories and code to bring them to life.
            </p>

            {/* Fact cards */}
            <div className="grid grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass glass-hover p-4 corner-decor"
                >
                  <Icon size={16} className="text-neon-blue mb-2" />
                  <div className="font-mono text-neon-blue text-xs tracking-wider">{label}</div>
                  <div className="font-display font-bold text-white text-sm mt-1">{value}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#skills"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 font-mono text-sm text-neon-blue border-b border-neon-blue/40 hover:border-neon-blue transition-colors pb-0.5"
            >
              View my skills &rarr;
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
