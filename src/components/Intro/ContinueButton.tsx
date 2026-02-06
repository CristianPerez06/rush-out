interface ContinueButtonProps {
  label: string
  disabled?: boolean
  onClick: () => void
}

const ContinueButton = ({
  label,
  disabled = false,
  onClick,
}: ContinueButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full  rounded-full py-6 text-sm font-bold uppercase tracking-widest transition-colors ${
      disabled
        ? 'cursor-not-allowed bg-white/10 text-white/30'
        : 'cursor-pointer bg-accent text-black'
    }`}
  >
    {label}
  </button>
)

export default ContinueButton
