import TwinkleStars from '../twinkle-stars/twinkle-stars.tsx'

interface BirthdayRevealProps {
  name: string
  onBack: () => void
}

const ACCENT  = '#9b7fc4'
const ACCENT2 = '#c084a0'
const SOFT    = '#b8a0d4'
const TEXT    = '#2e1f3a'
const MID     = '#6b5070'
const FAINT   = '#c4a8d4'
const DARK    = '#1a0f1f'

function Diamond({ size = 7, color = ACCENT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10">
      <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill={color} />
    </svg>
  )
}

function HeartIcon({ size = 18, color = ACCENT2 }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

function StarIcon({ size = 16, color = ACCENT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

function CakeIcon({ size = 22, color = ACCENT2 }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/>
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/>
      <path d="M2 21h20"/>
      <path d="M7 8v3M12 8v3M17 8v3"/>
    </svg>
  )
}

function SparkleIcon({ size = 16, color = SOFT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"/>
    </svg>
  )
}

function FlowerIcon({ size = 16, color = ACCENT2 }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity="0.5"/>
      <path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity="0.5"/>
      <path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity="0.5"/>
      <path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity="0.5"/>
    </svg>
  )
}

export default function BirthdayReveal({ name, onBack }: BirthdayRevealProps) {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e8dff5 0%, #f5e8f0 50%, #fce8f0 100%)' }}>

      <TwinkleStars />

      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full opacity-20 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ddd6fe, transparent 70%)', filter: 'blur(80px)', animationDuration: '14s' }} />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fce7f3, transparent 70%)', filter: 'blur(80px)', animationDuration: '18s', animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a0f1f, transparent 70%)', filter: 'blur(100px)', animationDuration: '20s', animationDelay: '2s' }} />

      <button onClick={onBack}
        className="animate-fade-in delay-1600 fixed top-8 left-8 z-50 font-montserrat text-[9px] uppercase tracking-[0.4em] flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
        style={{ 
          color: DARK, 
          background: 'rgba(255,255,255,0.9)', 
          backdropFilter: 'blur(12px)',
          border: `1.5px solid ${DARK}20`,
          boxShadow: '0 4px 12px rgba(26,15,31,0.1)'
        }}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M5 1L1 5L5 9M1 5H13" stroke={DARK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Bye, Thank you!
      </button>

      <div className="relative z-10 w-full h-full flex animate-fade-in delay-200">
        
        <div className="w-[45%] h-full flex flex-col justify-center items-center p-12 animate-slide-left delay-400 relative"
          style={{ background: 'linear-gradient(135deg, rgba(255,252,255,0.9), rgba(248,245,252,0.85))', backdropFilter: 'blur(24px)', borderRight: `3px solid ${DARK}15`, boxShadow: `inset 0 0 60px rgba(26,15,31,0.03)` }}>
          
          <div className="absolute top-8 left-8 w-12 h-12" style={{ borderTop: `2px solid ${DARK}` }} />
          <div className="absolute bottom-8 left-8 w-12 h-12" style={{ borderBottom: `2px solid ${DARK}` }} />

          <div className="text-center space-y-8 max-w-2xl">
            <div className="flex justify-center animate-zoom-in delay-400 animate-float" style={{ animationDuration: '5s' }}>
              <CakeIcon size={48} color={ACCENT2} />
            </div>

            <p className="animate-fade-in delay-600 font-montserrat text-[9px] uppercase tracking-[0.6em]"
              style={{ color: ACCENT, opacity: 0.7 }}>
              Isang Espesyal na Pagdiriwang
            </p>

            <div className="animate-fade-in delay-800 flex items-center gap-4 justify-center">
              <span className="h-px w-20 animate-line-h delay-800" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}70)` }} />
              <Diamond size={8} color={ACCENT} />
              <span className="h-px w-20 animate-line-h delay-800" style={{ background: `linear-gradient(to left, transparent, ${ACCENT}70)` }} />
            </div>

            <p className="animate-slide-down delay-1000 font-cormorant text-4xl italic font-light"
              style={{ color: MID, letterSpacing: '0.05em' }}>
              Happppyyyy Birthdayyyyy!!,
            </p>

            <h1 className="animate-zoom-in delay-1200 font-cinzel font-bold pastel-shimmer leading-none"
              style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', letterSpacing: '0.15em' }}>
              {name.toUpperCase()}
            </h1>

            <div className="animate-fade-in delay-1400 flex items-center gap-4 justify-center pt-4">
              <FlowerIcon size={20} color={ACCENT2} />
              <span className="h-px w-16" style={{ background: `${ACCENT}60` }} />
              <Diamond size={12} color={ACCENT} />
              <span className="h-px w-16" style={{ background: `${ACCENT}60` }} />
              <FlowerIcon size={20} color={ACCENT2} />
            </div>

            <div className="flex justify-center gap-6 pt-6">
              {[
                { icon: <HeartIcon size={24} color={ACCENT2} />, label: 'Loved' },
                { icon: <StarIcon size={24} color={ACCENT} />,   label: 'Blessed' },
                { icon: <FlowerIcon size={24} color={SOFT} />,   label: 'Radiant' },
              ].map((s, i) => (
                <div key={i} className={`animate-scale-in delay-${1600 + i * 100} flex flex-col items-center gap-3 rounded-2xl px-6 py-4 relative overflow-hidden`}
                  style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT2}12)`, border: `2px solid ${DARK}08`, boxShadow: '0 4px 16px rgba(26,15,31,0.06)' }}>
                  <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at center, ${DARK}, transparent)` }} />
                  {s.icon}
                  <span className="font-montserrat text-[8px] uppercase tracking-widest relative z-10" style={{ color: DARK }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[55%] h-full flex flex-col justify-center p-12 animate-slide-right delay-400 relative"
          style={{ background: 'linear-gradient(135deg, rgba(255,252,255,0.95), rgba(252,248,255,0.9))', backdropFilter: 'blur(24px)', boxShadow: `inset 0 0 60px rgba(26,15,31,0.03)` }}>
          
          <div className="absolute top-8 right-8 w-12 h-12" style={{ borderTop: `2px solid ${DARK}`, borderRight: `2px solid ${DARK}` }} />
          <div className="absolute bottom-8 right-8 w-12 h-12" style={{ borderBottom: `2px solid ${DARK}`, borderRight: `2px solid ${DARK}` }} />
          
          <div className="absolute top-0 right-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT}40, transparent)` }} />

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="animate-fade-in delay-600 rounded-2xl p-8 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, rgba(155,127,196,0.12), rgba(192,132,160,0.12))`, border: `2px solid ${DARK}10`, boxShadow: '0 8px 32px rgba(26,15,31,0.08)' }}>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{ background: `radial-gradient(circle at top right, ${DARK}, transparent)` }} />
              
              <div className="flex items-center gap-2 mb-4">
                <FlowerIcon size={18} color={ACCENT2} />
                <p className="font-montserrat text-[9px] uppercase tracking-[0.4em]" style={{ color: DARK }}>
                  A Special Message
                </p>
              </div>
              <p className="font-cormorant text-2xl italic font-light leading-relaxed mb-4" style={{ color: DARK }}>
                "You may be aging, but don't worry—you're aging beautifully."
              </p>
              <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${DARK}30, transparent)` }} />
              <p className="font-cormorant text-lg leading-relaxed" style={{ color: TEXT }}>
                Another year, another blessing, <span className="font-semibold" style={{ color: ACCENT2 }}>Genwin</span>. You make the world brighter just by being in it. May this year bring you endless joy, laughter, and all the amazing things you deserve. Here's to more adventures, more memories, and more reasons to celebrate you, <span className="font-semibold" style={{ color: ACCENT2 }}>Genwin</span>! Thank you for being the incredible person you are. Cheers to another year of being absolutely amazing! <span className="font-bold" style={{ color: DARK, fontSize: '1.15em' }}>Woii Kita na tayo HAHAHA!!</span>
              </p>
            </div>

            <div className="animate-fade-in delay-800">
              <div className="flex items-center justify-center gap-2 mb-5">
                <SparkleIcon size={12} color={ACCENT} />
                <p className="font-montserrat text-[8px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                  Birthday Wishes
                </p>
                <SparkleIcon size={12} color={ACCENT} />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <HeartIcon size={20} color={ACCENT2} />, title: 'Love', text: 'Forever cherished' },
                  { icon: <StarIcon size={20} color={ACCENT} />, title: 'Success', text: 'Dreams come true' },
                  { icon: <FlowerIcon size={20} color={ACCENT2} />, title: 'Health', text: 'Stay strong' },
                  { icon: <SparkleIcon size={20} color={SOFT} />, title: 'Joy', text: 'Every day' },
                ].map((w, i) => (
                  <div key={i} className={`animate-scale-in delay-${1000 + i * 100} rounded-xl p-5 flex flex-col items-center text-center gap-3`}
                    style={{ background: 'rgba(255,255,255,0.6)', border: `1px solid ${FAINT}40` }}>
                    {w.icon}
                    <p className="font-cinzel text-[9px] font-semibold" style={{ color: ACCENT, letterSpacing: '0.08em' }}>{w.title}</p>
                    <p className="font-cormorant text-sm leading-tight" style={{ color: MID }}>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in delay-1400 text-center space-y-3 pt-2">
              <div className="h-px mx-auto w-64" style={{ background: `linear-gradient(to right, transparent, ${FAINT}, transparent)` }} />
              <p className="font-montserrat text-[9px] uppercase tracking-[0.5em]" style={{ color: ACCENT2 }}>
                With All My Heart,
              </p>
              <p className="font-cinzel text-5xl font-semibold" style={{ color: TEXT, letterSpacing: '0.12em' }}>
                Hannah
              </p>
              <svg width="140" height="28" viewBox="0 0 140 28" fill="none" className="mx-auto">
                <path d="M0 14 Q35 5 70 14 Q105 23 140 14" stroke={ACCENT2} strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
              <div className="flex gap-2 justify-center pt-2">
                {[ACCENT2, SOFT, ACCENT, SOFT, ACCENT2].map((c, i) => (
                  <span key={i} className="rounded-full animate-pulse-soft"
                    style={{ width: i === 2 ? 12 : 8, height: i === 2 ? 12 : 8, background: c, animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
