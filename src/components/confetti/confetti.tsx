import { useMemo } from 'react'

interface ConfettiProps {
  active: boolean
}

const COLORS = ['#9b7fc4', '#c084a0', '#7bafd4', '#fce7f3', '#ddd6fe']

export default function Confetti({ active }: ConfettiProps) {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
      angle: (i / 50) * 360,
      speed: 2 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      color: COLORS[i % COLORS.length],
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
    })), [])

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.id % 2 === 0 ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-burst-${p.id} 3s cubic-bezier(0.1, 0.9, 0.4, 1) forwards`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        ${particles.map((p) => `
          @keyframes confetti-burst-${p.id} {
            0% { transform: translate(0, 0) scale(0) rotate(0deg); opacity: 1; }
            20% { transform: translate(${(Math.cos(p.angle * Math.PI / 180) * p.speed * 5).toFixed(2)}vw, ${(Math.sin(p.angle * Math.PI / 180) * p.speed * 5).toFixed(2)}vh) scale(1.2) rotate(${p.rotation + 90}deg); opacity: 1; }
            100% { 
              transform: translate(${(Math.cos(p.angle * Math.PI / 180) * p.speed * 15).toFixed(2)}vw, ${(Math.sin(p.angle * Math.PI / 180) * p.speed * 15 + 40).toFixed(2)}vh) scale(0.6) rotate(${p.rotation + 720}deg); 
              opacity: 0; 
            }
          }
        `).join('\n')}
      `}</style>
    </div>
  )
}
