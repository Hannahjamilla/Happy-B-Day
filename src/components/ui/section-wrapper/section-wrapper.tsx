import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 px-4 max-w-5xl mx-auto ${className}`}>
      {children}
    </section>
  )
}
