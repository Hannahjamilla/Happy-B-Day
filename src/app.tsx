import { useState } from 'react'
import NameEntry from './components/name-entry/name-entry'
import BirthdayReveal from './components/birthday-reveal/birthday-reveal'

export default function App() {
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e8eaf6 100%)' }}>
      {name
        ? <BirthdayReveal name={name} onBack={() => setName('')} />
        : <NameEntry onSubmit={setName} />}
    </div>
  )
}
