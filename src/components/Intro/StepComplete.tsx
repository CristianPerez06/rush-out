import ContinueButton from './ContinueButton'

interface StepCompleteProps {
  onContinue: () => void
}

const StepComplete = ({ onContinue }: StepCompleteProps) => (
  <div className="flex min-h-dvh flex-col bg-black">
    <div className="flex flex-1 flex-col">
      <div className="flex-1 flex overflow-hidden items-center justify-center">
        <img
          src="/last_step_image.png"
          alt="You're all set"
          className="h-auto m-auto block w-[80%] max-w-[320px] object-cover"
        />
      </div>

      <div className="px-6 pt-6 pb-8">
        <p className="mt-3 max-w-[300px] mx-auto text-center text-sm uppercase tracking-wide text-white/80">
          Start discovering amazing events at exclusive prices.
        </p>

        <div className="mt-10">
          <ContinueButton label="Explore Events Now" onClick={onContinue} />
        </div>
      </div>
    </div>
  </div>
)

export default StepComplete
