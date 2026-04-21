import { useMemo } from 'react'

export default function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      color: ['#fecdd3','#ddd6fe','#bae6fd','#fde68a','#f0abfc','#bbf7d0'][i % 6],
      size: 5 + (i % 5) * 4,
      left: `${4 + (i * 7) % 92}%`,
      top: `${4 + (i * 9) % 92}%`,
      delay: `${(i * 0.4).toFixed(1)}s`,
      duration: `${4 + (i % 5)}s`,
      borderRadius: i % 3 === 0 ? '60% 40% 55% 45%' : i % 3 === 1 ? '50% 50% 40% 60%' : '40% 60% 60% 40%',
    })), [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float opacity-30"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            borderRadius: p.borderRadius,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  )
}
