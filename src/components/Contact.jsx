import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, MessageSquare, Github, Twitter, Linkedin, Globe, CheckCircle } from 'lucide-react'

const socials = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/omar-aqachtoul', color: '#fff' },
  { icon: Twitter,  label: 'Twitter',  href: '#', color: '#1DA1F2' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-aqachtoul-a6ba2932b?utm_source=share_via&utm_content=profile&utm_medium=member_android   ', color: '#0A66C2' },
  { icon: Globe,    label: 'Website',  href: '#', color: '#00d4ff' },
]

const contactInfo = [
  { icon: Mail,        label: 'Email',    value: 'omaraqachtoul8@gmail.com' },
  { icon: MapPin,      label: 'Location', value: 'Méknes, Morocco' },
  { icon: MessageSquare, label: 'Discord', value: 'Kai.lo' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.09) 0%, transparent 70%)' }}
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
            <span className="font-mono text-neon-blue text-xs tracking-widest"></span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            LET'S <span className="text-neon-blue">CONNECT</span>
          </h2>
          <p className="text-gray-400 mt-4 font-mono text-sm">

          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 glass p-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-neon-blue/10 border border-neon-blue/20">
                    <Icon size={16} className="text-neon-blue" />
                  </div>
                  <div>
                    <div className="font-mono text-neon-blue text-xs tracking-wider">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social dock */}
            <div>
              <p className="font-mono text-gray-500 text-xs tracking-widest mb-4">// FIND ME ON</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center glass border border-white/10 relative group"
                    title={label}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <Icon size={18} style={{ color }} />
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: `${color}15`,
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="glass p-4 border border-neon-green/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" style={{ boxShadow: '0 0 10px #00ff88' }} />
                <div>
                  <div className="font-display font-bold text-white text-sm">Currently Available</div>
                  <div className="font-mono text-gray-500 text-xs"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass corner-decor overflow-hidden relative">
              {/* Form header HUD */}
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border-b border-neon-blue/10">
                <Send size={12} className="text-neon-blue" />
                <span className="font-mono text-xs text-gray-400 tracking-widest">SEND_MESSAGE.exe</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                  <span className="font-mono text-neon-green text-xs">READY</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-2 block">
                        {field} {field === 'email' && '*'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        required={field === 'email'}
                        placeholder={field === 'name' ? 'Your name' : 'YourName@mail.com'}
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm placeholder:text-gray-600 focus:outline-none focus:border-neon-blue/60 focus:bg-neon-blue/5 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-2 block">Subject</label>
                  <input
                    type="text"
                    placeholder="Project collaboration / Job opportunity / Say Hi"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm placeholder:text-gray-600 focus:outline-none focus:border-neon-blue/60 focus:bg-neon-blue/5 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-2 block">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm placeholder:text-gray-600 focus:outline-none focus:border-neon-blue/60 focus:bg-neon-blue/5 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 font-display font-bold tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                    sent ? 'bg-neon-green text-void' : 'bg-neon-blue text-void'
                  }`}
                  style={{ clipPath: 'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)' }}
                >
                  {sent ? (
                    <><CheckCircle size={16} /> MESSAGE SENT!</>
                  ) : (
                    <><Send size={16} /> TRANSMIT MESSAGE</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
