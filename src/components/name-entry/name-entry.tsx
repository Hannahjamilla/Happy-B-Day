import { useState } from 'react'

function BalloonIcon({ size = 24, color = '#9b7fc4', className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 24 36" fill="none" className={className}>
      <path d="M12 24C17.5228 24 22 19.5228 22 14C22 8.47715 17.5228 4 12 4C6.47715 4 2 8.47715 2 14C2 19.5228 6.47715 24 12 24Z" fill={color} fillOpacity="0.3" />
      <path d="M12 24C17.5228 24 22 19.5228 22 14C22 8.47715 17.5228 4 12 4C6.47715 4 2 8.47715 2 14C2 19.5228 6.47715 24 12 24Z" stroke={color} strokeWidth="1.5" />
      <path d="M12 24L10 28H14L12 24Z" fill={color} />
      <path d="M12 28C12 30 10 32 12 34C14 36 12 36 12 36" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M7 10C7.5 9 9 8.5 10 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function FloatingBalloon({ delay = 0, duration = 15, left = '50%', color = '#9b7fc4' }) {
  return (
    <div className="absolute bottom-0 pointer-events-none animate-balloon-up"
      style={{
        left,
        animationDelay: `${delay}s`,
        zIndex: 0
      }}>
      <div className="animate-float-scale" 
        style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}>
        <BalloonIcon size={40 + Math.random() * 40} color={color} />
      </div>
    </div>
  )
}

interface NameEntryProps {
  onSubmit: (name: string) => void
}

// accent color: soft mauve #b48aaa
const ACCENT = '#9b7fc4'
const ACCENT_LIGHT = '#e8dff5'
const SOFT = '#b8a0d4'
const TEXT_DARK = '#2e1f3a'
const TEXT_MID = '#6b5070'
const ACCENT2 = '#c084a0'

function Diamond({ size = 7, color = ACCENT, className = '', opacity = 1 }: { size?: number; color?: string; className?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" className={className} style={{ opacity }}>
      <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill={color} />
    </svg>
  )
}

function StarIcon({ size = 16, color = ACCENT, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function NameEntry({ onSubmit }: NameEntryProps) {
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) onSubmit(trimmed)
  }

  return (
    <div className="relative w-full max-w-lg mx-auto p-1 px-4">
      {[...Array(4)].map((_, i) => (
        <FloatingBalloon 
          key={i} 
          delay={i * 3} 
          duration={25 + i * 5} 
          left={`${15 + i * 20}%`}
          color={i % 2 === 0 ? ACCENT : ACCENT2}
        />
      ))}
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rounded-full opacity-10 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ddd6fe, transparent 70%)', filter: 'blur(80px)', animationDuration: '20s' }} />
      
      <div className="animate-scale-in relative z-10 w-full overflow-hidden rounded-[2rem] p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(155,127,196,0.15)] bg-white/60 backdrop-blur-3xl border border-white/40">
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* corner ornaments */}
        <div className="absolute top-6 left-6 w-8 h-8 opacity-40" style={{ borderTop: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` }} />
        <div className="absolute bottom-6 right-6 w-8 h-8 opacity-40" style={{ borderBottom: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` }} />

        <div className="animate-fade-in delay-100 flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}70)` }} />
          <StarIcon size={14} color={ACCENT} className="animate-twinkle" />
          <span className="h-px w-8" style={{ background: `linear-gradient(to left, transparent, ${ACCENT}70)` }} />
        </div>

        <p className="animate-fade-in delay-200 font-montserrat text-[10px] uppercase tracking-[0.5em] mb-4"
          style={{ color: TEXT_MID, opacity: 0.8 }}>
          A message awaits you
        </p>

        <h1 className="animate-fade-in-up delay-300 font-cinzel text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: TEXT_DARK, letterSpacing: '0.05em' }}>
          Birthday Star Alert!
        </h1>

        <p className="animate-fade-in delay-400 font-cormorant text-xl italic mb-10"
          style={{ color: TEXT_MID }}>
          Who's the lucky one today?
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-20">
          <div className="relative group">
            <input
              type="text"
              placeholder="Your name..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoFocus
              className="font-poppins w-full text-center text-2xl py-4 bg-white/40 rounded-2xl outline-none transition-all duration-500 placeholder:italic placeholder:font-light px-8"
              style={{
                border: `1.5px solid ${focused ? ACCENT : 'transparent'}`,
                color: TEXT_DARK,
                letterSpacing: '0.04em',
                boxShadow: focused ? `0 10px 30px ${ACCENT}15` : '0 10px 20px rgba(0,0,0,0.03)',
              }}
            />
            <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-right from-transparent via-${ACCENT} to-transparent transition-all duration-700 ${focused ? 'w-full' : 'w-0 opacity-0'}`} 
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}/>
          </div>

          <button
            type="submit"
            disabled={!value.trim()}
            className="animate-shine group relative font-cinzel text-[11px] font-bold uppercase tracking-[0.4em] py-5 px-10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-98 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl"
            style={{
              background: value.trim() ? `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` : '#e5e7eb',
              color: '#fff',
              letterSpacing: '0.4em',
              boxShadow: value.trim() ? `0 15px 35px ${ACCENT}40` : 'none',
            }}
          >
            <span className="relative z-10">Open your surprise</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </form>

        <div className="animate-fade-in delay-600 flex items-center justify-center gap-4 mt-12">
          <Diamond size={6} color={ACCENT} opacity={0.4} />
          <span className="w-1 h-1 rounded-full animate-pulse-soft" style={{ background: ACCENT2 }} />
          <Diamond size={6} color={ACCENT} opacity={0.4} />
        </div>
      </div>
    </div>
  )
}
