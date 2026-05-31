import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'NeonShop — E-Commerce',
    description: 'Full-stack e-commerce platform with real-time inventory, AI-powered recommendations, and a cyberpunk UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#00d4ff',
    category: 'Full-Stack',
    emoji: '🛒',
    live: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'TaskForce — PM App',
    description: 'Collaborative project management tool with drag-and-drop kanban boards, real-time updates via WebSockets.',
    tags: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    color: '#00ff88',
    category: 'Full-Stack',
    emoji: '📋',
    live: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'AniTrack — Anime Hub',
    description: 'Anime tracking dashboard with personalized recommendations, reviews, and a beautiful glassmorphism UI.',
    tags: ['React', 'GraphQL', 'Tailwind', 'AniList API'],
    color: '#b44fff',
    category: 'Frontend',
    emoji: '⛩️',
    live: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'CipherChat — Secure Msgs',
    description: 'End-to-end encrypted messaging app with self-destructing messages and anonymous rooms.',
    tags: ['React Native', 'Node.js', 'WebCrypto', 'Redis'],
    color: '#ff2d55',
    category: 'Mobile',
    emoji: '🔐',
    live: '#',
    code: '#',
  },
  {
    id: 5,
    title: 'DataVerse — Analytics',
    description: 'Big data analytics dashboard with interactive D3.js visualizations and real-time streaming data.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    color: '#ffcc00',
    category: 'Data',
    emoji: '📊',
    live: '#',
    code: '#',
  },
  {
    id: 6,
    title: 'PortalAI — AI Tools',
    description: 'AI-powered productivity suite integrating GPT, Stable Diffusion, and voice synthesis in one dashboard.',
    tags: ['Next.js', 'OpenAI API', 'Python', 'AWS'],
    color: '#00d4ff',
    category: 'AI',
    emoji: '🤖',
    live: '#',
    code: '#',
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile', 'Data', 'AI']

function ProjectCard({ project, inView, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group glass glass-hover overflow-hidden"
      style={{ borderColor: hovered ? `${project.color}44` : 'rgba(0,212,255,0.12)' }}
    >
      {/* Top color accent */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}10, transparent 70%)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 flex items-center justify-center text-xl"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              {project.emoji}
            </div>
            <div>
              <div className="font-mono text-xs" style={{ color: project.color }}>{project.category}</div>
              <h3 className="font-display font-bold text-white text-sm">{project.title}</h3>
            </div>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.15 }}
              className="p-1.5 border rounded"
              style={{ borderColor: `${project.color}40`, color: project.color }}
            >
              <ExternalLink size={12} />
            </motion.a>
            <motion.a
              href={project.code}
              whileHover={{ scale: 1.15 }}
              className="p-1.5 border border-white/20 rounded text-gray-400"
            >
              <Github size={12} />
            </motion.a>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-xs"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" ref={ref} className="relative py-28 bg-deep overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-25 pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-neon-blue" />
            <span className="font-mono text-neon-blue text-xs tracking-widest uppercase"></span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            FEATURED <span className="text-neon-blue">BUILDS</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 font-mono text-xs tracking-widest transition-all duration-200 ${
                active === cat
                  ? 'bg-neon-blue text-void'
                  : 'border border-white/15 text-gray-400 hover:border-neon-blue/40 hover:text-neon-blue'
              }`}
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              delay={0.2 + i * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon-blue/30 text-neon-blue font-mono text-sm tracking-widest hover:bg-neon-blue/10 transition-all duration-200"
          >
            <Eye size={16} />
            VIEW ALL ON GITHUB
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
