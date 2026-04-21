export default function SparkleRing() {
  const dots = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="relative w-16 h-16 animate-spin-slow">
      {dots.map((i) => {
        const angle = (i / 12) * 360
        const rad = (angle * Math.PI) / 180
        const x = 50 + 42 * Math.cos(rad)
        const y = 50 + 42 * Math.sin(rad)
        const colors = ['bg-rose-300', 'bg-pink-300', 'bg-violet-300', 'bg-fuchsia-300', 'bg-sky-300', 'bg-yellow-300']
        return (
          <span
            key={i}
            className={`absolute w-2 h-2 rounded-full ${colors[i % colors.length]} animate-pulse-soft`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        )
      })}
      {/* center dot */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-3 h-3 rounded-full bg-gradient-to-br from-rose-300 to-violet-300 animate-heartbeat" />
      </span>
    </div>
  )
}
