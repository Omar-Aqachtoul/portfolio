import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'Frontend',
    color: '#00d4ff',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript',      level: 88 },
      { name: 'Tailwind CSS',    level: 92 },
      { name: 'Framer Motion',   level: 80 },
    ],
  },
  {
    title: 'Backend',
    color: '#00ff88',
    skills: [
      { name: 'Node.js / Express', level: 87 },
      { name: 'Python / Django',   level: 82 },
      { name: 'PostgreSQL',        level: 79 },
      { name: 'MongoDB',           level: 85 },
    ],
  },
  {
    title: 'Tools & Cloud',
    color: '#b44fff',
    skills: [
      { name: 'Docker / K8s',  level: 75 },
      { name: 'AWS / GCP',     level: 70 },
      { name: 'Git / CI-CD',   level: 90 },
      { name: 'Figma',         level: 88 },
    ],
  },
]

const techTags = [
  'React','Next.js','TypeScript','JavaScript','Python','Node.js','Express',
  'Django','PostgreSQL','MongoDB','Redis','Docker','Kubernetes','AWS',
  'Tailwind','Framer Motion','GraphQL','REST API','Git','Figma',
  'Three.js','Socket.io','Jest','Cypress'
]

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-gray-300 tracking-wide">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="h-px absolute top-0 left-0 right-0"
            style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }}
          />
        </div>
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: color,
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color}88`,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(180,79,255,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-neon-blue" />
            <span className="font-mono text-neon-blue text-xs tracking-widest uppercase"></span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            MY <span className="text-neon-blue">ARSENAL</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass p-6 corner-decor relative overflow-hidden"
              style={{ borderColor: `${group.color}22` }}
            >
              {/* top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }} />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <h3 className="font-display font-bold text-white tracking-wider">{group.title}</h3>
              </div>

              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={group.color}
                  inView={inView}
                  delay={0.3 + gi * 0.15 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tags cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="font-mono text-gray-600 text-xs tracking-widest text-center mb-6">// TECHNOLOGIES I WORK WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.04 }}
                whileHover={{ scale: 1.1, borderColor: '#00d4ff', color: '#00d4ff' }}
                className="px-3 py-1 border border-white/10 text-gray-400 font-mono text-xs tracking-wider cursor-default transition-all duration-200 bg-white/2"
                style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
