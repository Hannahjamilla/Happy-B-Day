interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
    </div>
  )
}
