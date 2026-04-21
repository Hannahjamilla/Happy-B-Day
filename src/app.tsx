import { useState, useEffect } from 'react'
import NameEntry from './components/name-entry/name-entry'
import BirthdayReveal from './components/birthday-reveal/birthday-reveal'
import Confetti from './components/confetti/confetti'

const ACCENT = '#9b7fc4'
const ACCENT2 = '#c084a0'

export default function App() {
  const [name, setName] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleReveal = (submittedName: string) => {
    setShowConfetti(true)
    setTimeout(() => {
      setName(submittedName)
      // Reset confetti after some time if needed, or keep it for the reveal
    }, 800)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden animate-aurora relative"
      style={{ background: 'linear-gradient(-45deg, #e8dff5, #f5e8f0, #fce8f0, #e0e7ff)' }}>
      
      {/* Interactive Magic Wand Follower */}
      <div className="fixed pointer-events-none z-[100] transition-transform duration-200 ease-out hidden sm:block"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y, 
          transform: 'translate(-50%, -50%)' 
        }}>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full opacity-20 animate-pulse-soft blur-xl" style={{ background: ACCENT }} />
          <div className="absolute inset-3 rounded-full opacity-40 animate-ping blur-sm" style={{ background: ACCENT2 }} />
          <div className="absolute inset-5 rounded-full opacity-80" style={{ background: '#fff', boxShadow: `0 0 15px ${ACCENT}` }} />
        </div>
      </div>

      <Confetti active={showConfetti} />

      {name
        ? <BirthdayReveal name={name} onBack={() => { setName(''); setShowConfetti(false); }} />
        : <NameEntry onSubmit={handleReveal} />}
    </div>
  )
}
