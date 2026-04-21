import { useMemo } from 'react'

const COLORS = ['#c084a0', '#9b7fc4', '#7bafd4', '#b8a0d4', '#d4a0b8']

export default function TwinkleStars() {
  const stars = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: 4 + (i % 3) * 3,
      left: `${4 + (i * 5.1) % 92}%`,
      top: `${3 + (i * 7.7) % 94}%`,
      delay: `${(i * 0.28) % 2.8}s`,
      duration: `${2 + (i % 4) * 0.6}s`,
      color: COLORS[i % COLORS.length],
      opacity: 0.2 + (i % 4) * 0.1,
    })), [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <div key={s.id} className="absolute animate-twinkle"
          style={{ left: s.left, top: s.top, animationDelay: s.delay, animationDuration: s.duration, opacity: s.opacity }}>
          <svg width={s.size} height={s.size} viewBox="0 0 10 10">
            <path d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z" fill={s.color} />
          </svg>
        </div>
      ))}
    </div>
  )
}
