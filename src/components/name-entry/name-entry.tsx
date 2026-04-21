import { useState } from 'react'

interface NameEntryProps {
  onSubmit: (name: string) => void
}

// accent color: soft mauve #b48aaa
const ACCENT = '#b48aaa'
const ACCENT_LIGHT = '#e8d5e4'
const TEXT_DARK = '#3d2b3d'
const TEXT_MID = '#7a5c78'

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
    <div className="animate-scale-in w-full max-w-sm mx-auto text-center px-8">

      {/* top ornament */}
      <div className="animate-fade-in delay-100 flex items-center justify-center gap-3 mb-10">
        <span className="h-px w-12" style={{ background: `linear-gradient(to right, transparent, ${ACCENT})` }} />
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill={ACCENT} />
        </svg>
        <span className="h-px w-12" style={{ background: `linear-gradient(to left, transparent, ${ACCENT})` }} />
      </div>

      <p className="animate-fade-in delay-200 font-montserrat text-[9px] uppercase tracking-[0.45em] mb-6"
        style={{ color: ACCENT }}>
        A message awaits you
      </p>

      <h1 className="animate-fade-in-up delay-300 font-cinzel text-3xl font-normal mb-2"
        style={{ color: TEXT_DARK, letterSpacing: '0.08em' }}>
        Birthday Star Alert!
      </h1>

      <p className="animate-fade-in delay-400 font-cormorant text-lg italic mb-10"
        style={{ color: TEXT_MID }}>
        Who's the lucky one today?
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Your name..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
            className="font-cormorant w-full text-center text-xl py-3 bg-transparent outline-none transition-all duration-500 placeholder:italic"
            style={{
              borderBottom: `1.5px solid ${focused ? ACCENT : ACCENT_LIGHT}`,
              color: TEXT_DARK,
              letterSpacing: '0.06em',
              caretColor: ACCENT,
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!value.trim()}
          className="animate-border-glow font-cinzel text-[9px] uppercase tracking-[0.4em] py-4 px-10 transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            border: `1.5px solid ${ACCENT}`,
            color: hovered && value.trim() ? '#fff' : ACCENT,
            background: hovered && value.trim() ? ACCENT : 'transparent',
            letterSpacing: '0.35em',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Open your surprise
        </button>
      </form>

      {/* bottom ornament */}
      <div className="animate-fade-in delay-600 flex items-center justify-center gap-3 mt-10">
        <span className="h-px w-12" style={{ background: `linear-gradient(to right, transparent, ${ACCENT_LIGHT})` }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, opacity: 0.5 }} />
        <span className="h-px w-12" style={{ background: `linear-gradient(to left, transparent, ${ACCENT_LIGHT})` }} />
      </div>
    </div>
  )
}
