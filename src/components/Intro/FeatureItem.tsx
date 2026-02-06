import type { ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  label: string
}

const FeatureItem = ({ icon, label }: FeatureItemProps) => (
  <div className="flex items-center gap-4 rounded-2xl border border-white/20 px-5 py-4">
    <span className="text-white/70">{icon}</span>
    <span className="text-xs font-semibold uppercase tracking-wider text-white">
      {label}
    </span>
  </div>
)

export default FeatureItem
