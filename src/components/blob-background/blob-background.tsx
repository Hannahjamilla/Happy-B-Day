export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="animate-drift absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #fde8d0, #fce7f3)', filter: 'blur(80px)', animationDuration: '12s' }} />
      <div className="animate-drift absolute -top-20 -right-32 w-96 h-96 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #ede9fe, #fce7f3)', filter: 'blur(70px)', animationDuration: '15s', animationDelay: '2s' }} />
      <div className="animate-drift absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #fef9c3, #fde8d0)', filter: 'blur(90px)', animationDuration: '18s', animationDelay: '1s' }} />
    </div>
  )
}
