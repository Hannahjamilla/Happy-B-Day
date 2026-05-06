import TwinkleStars from '../twinkle-stars/twinkle-stars.tsx'

interface BirthdayRevealProps {
  name: string
  onBack: () => void
}

const ACCENT = '#9b7fc4'
const ACCENT2 = '#c084a0'
const SOFT = '#b8a0d4'
const TEXT = '#2e1f3a'
const MID = '#6b5070'
const FAINT = '#c4a8d4'
const DARK = '#1a0f1f'

function Diamond({ size = 7, color = ACCENT, className = '', opacity = 1 }: { size?: number; color?: string; className?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" className={className} style={{ opacity }}>
      <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill={color} />
    </svg>
  )
}

function HeartIcon({ size = 18, color = ACCENT2, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

function CakeIcon({ size = 22, color = ACCENT2, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3M12 8v3M17 8v3" />
    </svg>
  )
}

function SparkleIcon({ size = 16, color = SOFT, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
    </svg>
  )
}

function FlowerIcon({ size = 16, color = ACCENT2, className = '' }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity="0.5" />
      <path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity="0.5" />
      <path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity="0.5" />
      <path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity="0.5" />
    </svg>
  )
}

function BalloonIcon({ size = 24, color = ACCENT, className = '' }: { size?: number; color?: string; className?: string }) {
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

function FloatingParticle({ delay = 0, duration = 10, size = 4, left = '50%', top = '50%', color = ACCENT2 }) {
  return (
    <div className="absolute rounded-full opacity-20 pointer-events-none animate-drift"
      style={{
        width: size,
        height: size,
        left,
        top,
        backgroundColor: color,
        filter: 'blur(2px)',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  )
}

function FloatingBalloon({ delay = 0, duration = 15, left = '50%', color = ACCENT }) {
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

export default function BirthdayReveal({ name, onBack }: BirthdayRevealProps) {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden animate-aurora"
      style={{ background: 'linear-gradient(-45deg, #e8dff5, #f5e8f0, #fce8f0, #e0e7ff)' }}>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <TwinkleStars />

      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full opacity-20 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ddd6fe, transparent 70%)', filter: 'blur(80px)', animationDuration: '14s' }} />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fce7f3, transparent 70%)', filter: 'blur(80px)', animationDuration: '18s', animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 animate-drift pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a0f1f, transparent 70%)', filter: 'blur(100px)', animationDuration: '20s', animationDelay: '2s' }} />

      {[...Array(12)].map((_, i) => (
        <FloatingParticle 
          key={i} 
          delay={i * 1.5} 
          duration={15 + i * 2} 
          size={Math.random() * 8 + 4}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
          color={i % 3 === 0 ? ACCENT : i % 3 === 1 ? ACCENT2 : SOFT}
        />
      ))}

      {[...Array(6)].map((_, i) => (
        <FloatingBalloon 
          key={i} 
          delay={i * 2} 
          duration={20 + i * 5} 
          left={`${10 + i * 15}%`}
          color={i % 2 === 0 ? ACCENT : ACCENT2}
        />
      ))}

      <button onClick={onBack}
        className="animate-fade-in delay-1600 fixed top-4 left-4 sm:top-8 sm:left-8 z-50 font-montserrat text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 hover:scale-105"
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
        <span className="hidden sm:inline">Bye, Thank you!</span>
        <span className="sm:hidden">Back</span>
      </button>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row animate-fade-in delay-200 overflow-y-auto lg:overflow-hidden"
        style={{ perspective: '1500px' }}>

        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center p-8 sm:p-8 lg:p-12 animate-slide-left delay-400 relative"
          style={{ background: 'linear-gradient(135deg, rgba(255,252,255,0.9), rgba(248,245,252,0.85))', backdropFilter: 'blur(24px)', borderRight: `3px solid ${DARK}15`, boxShadow: `inset 0 0 60px rgba(26,15,31,0.03)` }}>

          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 hidden lg:block" style={{ borderTop: `2px solid ${DARK}` }} />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 hidden lg:block" style={{ borderBottom: `2px solid ${DARK}` }} />

          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-2xl w-full">
            <div className="flex justify-center animate-zoom-in delay-400 animate-float-scale" style={{ animationDuration: '5s' }}>
              <CakeIcon size={36} color={ACCENT2} className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 animate-swing" />
            </div>

            <p className="animate-fade-in delay-600 font-montserrat text-[8px] sm:text-[8px] lg:text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.5em] lg:tracking-[0.6em]"
              style={{ color: ACCENT, opacity: 0.7 }}>
              Isang Espesyal na Pagdiriwang
            </p>

            <div className="animate-fade-in delay-800 flex items-center gap-3 sm:gap-3 lg:gap-4 justify-center">
              <span className="h-px w-12 sm:w-16 lg:w-20 animate-line-h delay-800" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}70)` }} />
              <Diamond size={6} className="w-1.5 h-1.5 lg:w-2 lg:h-2" color={ACCENT} />
              <span className="h-px w-12 sm:w-16 lg:w-20 animate-line-h delay-800" style={{ background: `linear-gradient(to left, transparent, ${ACCENT}70)` }} />
            </div>

            <div className="space-y-4 py-4">
              <p className="animate-slide-down delay-1000 font-cormorant text-2xl sm:text-3xl lg:text-5xl italic font-light pastel-shimmer"
                style={{ letterSpacing: '0.05em' }}>
                Happppyy Birthdayyyy!!!
              </p>
              
              <h1 className="animate-zoom-in delay-1200 font-cinzel font-bold pastel-shimmer leading-tight px-2 sm:px-4"
                style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', letterSpacing: '0.1em' }}>
                {name.toUpperCase()}
              </h1>
            </div>

            <div className="animate-fade-in delay-1400 flex items-center gap-3 sm:gap-3 lg:gap-4 justify-center pt-3 sm:pt-3 lg:pt-8">
              <FlowerIcon size={14} color={ACCENT2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span className="h-px w-8 sm:w-12 lg:w-16" style={{ background: `${ACCENT}60` }} />
              <Diamond size={7} color={ACCENT} className="w-2 h-2 sm:w-2 sm:h-2 lg:w-3 lg:h-3" />
              <span className="h-px w-8 sm:w-12 lg:w-16" style={{ background: `${ACCENT}60` }} />
              <FlowerIcon size={14} color={ACCENT2} className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </div>

            <div className="flex justify-center gap-4 sm:gap-4 lg:gap-8 pt-6 sm:pt-6 lg:pt-10 flex-wrap pb-12 lg:pb-0">
              {[
                { icon: <HeartIcon size={18} color={ACCENT2} className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, label: 'Loved' },
                { icon: <StarIcon size={18} color={ACCENT} className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, label: 'Blessed' },
                { icon: <FlowerIcon size={18} color={SOFT} className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, label: 'Radiant' },
              ].map((s, i) => (
                <div key={i} className={`animate-scale-in delay-${1600 + i * 100} flex flex-col items-center gap-2 sm:gap-2 lg:gap-3 rounded-xl sm:rounded-xl lg:rounded-2xl px-5 sm:px-4 lg:px-6 py-3 sm:py-3 lg:py-4 relative overflow-hidden active:scale-95 transition-transform hover:animate-float-scale`}
                  style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT2}12)`, border: `2px solid ${DARK}08`, boxShadow: '0 4px 16px rgba(26,15,31,0.06)' }}>
                  <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at center, ${DARK}, transparent)` }} />
                  <div className="animate-swing" style={{ animationDelay: `${i * 0.5}s` }}>
                    {s.icon}
                  </div>
                  <span className="font-montserrat text-[8px] sm:text-[7px] lg:text-[8px] uppercase tracking-widest relative z-10" style={{ color: DARK }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center p-8 sm:p-8 lg:p-12 animate-slide-right delay-400 relative"
          style={{ background: 'linear-gradient(135deg, rgba(255,252,255,0.95), rgba(252,248,255,0.9))', backdropFilter: 'blur(24px)', boxShadow: `inset 0 0 60px rgba(26,15,31,0.03)` }}>

          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 hidden lg:block" style={{ borderTop: `2px solid ${DARK}`, borderRight: `2px solid ${DARK}` }} />
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 hidden lg:block" style={{ borderBottom: `2px solid ${DARK}`, borderRight: `2px solid ${DARK}` }} />

          <div className="absolute top-0 right-0 w-1 h-full hidden lg:block" style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT}40, transparent)` }} />

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-6 lg:space-y-8 w-full pb-8 lg:pb-0">

            <div className="animate-fade-in delay-600 rounded-2xl sm:rounded-xl lg:rounded-2xl p-6 sm:p-6 lg:p-8 relative overflow-hidden animate-shine"
              style={{ background: `linear-gradient(135deg, rgba(155,127,196,0.12), rgba(192,132,160,0.12))`, border: `2px solid ${DARK}10`, boxShadow: '0 8px 32px rgba(26,15,31,0.08)' }}>
              <div className="absolute top-0 right-0 w-16 sm:w-16 lg:w-20 h-16 sm:h-16 lg:h-20 opacity-10" style={{ background: `radial-gradient(circle at top right, ${DARK}, transparent)` }} />

              <div className="flex items-center gap-2 sm:gap-2 mb-4 sm:mb-3 lg:mb-4">
                <FlowerIcon size={16} color={ACCENT2} className="w-4 h-4 sm:w-3.5 sm:h-3.5 lg:w-[18px] lg:h-[18px]" />
                <p className="font-montserrat text-[8px] sm:text-[7px] lg:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.3em] lg:tracking-[0.4em]" style={{ color: DARK }}>
                  A Special Message
                </p>
              </div>
              <p className="font-cormorant text-base sm:text-lg lg:text-2xl italic font-light leading-relaxed mb-4 sm:mb-3 lg:mb-4" style={{ color: DARK }}>
                "You may be aging, but don't worry—you're aging beautifully."
              </p>
              <div className="h-px mb-4 sm:mb-3 lg:mb-4" style={{ background: `linear-gradient(to right, ${DARK}30, transparent)` }} />
              <p className="font-poppins text-[11px] sm:text-[12px] lg:text-[14px] leading-relaxed" style={{ color: TEXT }}>
                Another year, another beautiful blessing. With each passing moment, you illuminate the world with your radiant presence. May this year overflow with boundless joy, genuine laughter, and all the extraordinary things you truly deserve. Here's to unforgettable adventures, cherished memories, and countless reasons to celebrate life to the fullest. You're not simply getting older—you're growing wiser, more radiant, and increasingly fabulous with grace. Thank you for being such an extraordinary and inspiring soul. Cheers to another magnificent year of being absolutely amazing! <span className="font-bold" style={{ color: DARK, fontSize: '1.1em' }}>Ingat ka palagi</span>
              </p>
            </div>

            <div className="animate-fade-in delay-800">
              <div className="flex items-center justify-center gap-2 sm:gap-2 mb-5 sm:mb-4 lg:mb-5">
                <BalloonIcon size={20} color={ACCENT} className="animate-swing" />
                <SparkleIcon size={11} color={ACCENT} className="w-3 h-3 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3" />
                <p className="font-montserrat text-[8px] sm:text-[7px] lg:text-[8px] uppercase tracking-[0.3em] sm:tracking-[0.3em] lg:tracking-[0.4em]" style={{ color: ACCENT }}>
                  Birthday Wishes
                </p>
                <SparkleIcon size={11} color={ACCENT} className="w-3 h-3 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-3 lg:gap-4">
                {[
                  { icon: <HeartIcon size={18} color={ACCENT2} className="w-5 h-5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, title: 'Love', text: 'Forever cherished' },
                  { icon: <StarIcon size={16} color={ACCENT} className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, title: 'Success', text: 'Dreams come true' },
                  { icon: <FlowerIcon size={16} color={ACCENT2} className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, title: 'Health', text: 'Stay strong' },
                  { icon: <SparkleIcon size={16} color={SOFT} className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />, title: 'Joy', text: 'Every day' },
                ].map((w, i) => (
                  <div key={i} className={`animate-scale-in delay-${1000 + i * 100} rounded-lg sm:rounded-lg lg:rounded-xl p-3 sm:p-3 lg:p-5 flex flex-col items-center text-center gap-2 sm:gap-2 lg:gap-3 hover:scale-105 transition-transform cursor-default group`}
                    style={{ background: 'rgba(255,255,255,0.6)', border: `1px solid ${FAINT}40` }}>
                    <div className="group-hover:animate-swing">
                      {w.icon}
                    </div>
                    <p className="font-cinzel text-[8px] sm:text-[8px] lg:text-[9px] font-semibold" style={{ color: ACCENT, letterSpacing: '0.08em' }}>{w.title}</p>
                    <p className="font-cormorant text-[11px] sm:text-xs lg:text-sm leading-tight" style={{ color: MID }}>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in delay-1400 text-center space-y-2 sm:space-y-2 lg:space-y-3 pt-3 pb-8 lg:pb-0">
              <div className="h-px mx-auto w-32 sm:w-48 lg:w-64" style={{ background: `linear-gradient(to right, transparent, ${FAINT}, transparent)` }} />
              <p className="font-montserrat text-[7px] sm:text-[7px] lg:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em]" style={{ color: ACCENT2 }}>
                With All My Heart,
              </p>
              <p className="font-cinzel text-2xl sm:text-3xl lg:text-5xl font-semibold" style={{ color: TEXT, letterSpacing: '0.12em' }}>
                Hannah
              </p>
              <svg width="80" height="16" viewBox="0 0 140 28" fill="none" className="mx-auto sm:w-[100px] sm:h-[20px] lg:w-[140px] lg:h-[28px]">
                <path d="M0 14 Q35 5 70 14 Q105 23 140 14" stroke={ACCENT2} strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
              <div className="flex gap-1 sm:gap-1.5 lg:gap-2 justify-center pt-1 lg:pt-2">
                {[ACCENT2, SOFT, ACCENT, SOFT, ACCENT2].map((c, i) => (
                  <span key={i} className="rounded-full animate-pulse-soft"
                    style={{ width: i === 2 ? 8 : 5, height: i === 2 ? 8 : 5, background: c, animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
