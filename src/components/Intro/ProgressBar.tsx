interface ProgressBarProps {
  currentStep: number
  totalSteps?: number
}

const ProgressBar = ({ currentStep, totalSteps = 5 }: ProgressBarProps) => (
  <div className="flex gap-1 px-2 pt-4">
    {Array.from({ length: totalSteps }, (_, i) => (
      <div
        key={i}
        className={`h-1.5 flex-1 rounded-full ${
          i < currentStep ? 'bg-accent' : 'bg-white/20'
        }`}
      />
    ))}
  </div>
)

export default ProgressBar
