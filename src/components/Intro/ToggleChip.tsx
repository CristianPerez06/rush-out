import type { ReactNode } from 'react'

interface ToggleChipProps {
  label: string
  selected: boolean
  onToggle: () => void
  icon?: ReactNode
  variant?: 'chip' | 'listItem'
}

const ToggleChip = ({
  label,
  selected,
  onToggle,
  icon,
  variant = 'chip',
}: ToggleChipProps) => {
  const base =
    'cursor-pointer transition-colors font-semibold text-xs uppercase tracking-wider'

  const selectedStyles = 'bg-white text-black border-white'
  const unselectedStyles = 'bg-transparent text-white border-white/20'

  if (variant === 'listItem') {
    return (
      <button
        onClick={onToggle}
        className={`${base} flex w-full items-center gap-4 rounded-2xl border px-6 py-6 ${
          selected ? selectedStyles : unselectedStyles
        }`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span>{label}</span>
      </button>
    )
  }

  return (
    <button
      onClick={onToggle}
      className={`${base} rounded-3xl border px-6 py-6! text-center ${
        selected ? selectedStyles : unselectedStyles
      }`}
    >
      {label}
    </button>
  )
}

export default ToggleChip
