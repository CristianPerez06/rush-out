import { useOnboarding } from '../../context/OnboardingContext'
import type { InterestCategory } from '../../types/onboarding'
import ProgressBar from './ProgressBar'
import ContinueButton from './ContinueButton'
import ToggleChip from './ToggleChip'

const categories: InterestCategory[] = [
  'Classical Theater',
  'Musical',
  'Independent',
  'Stand Up',
  'Contemporary Dance',
  'Drama',
  'Classical Dance',
  'Cinema',
  'Live Music',
  'Outdoor Events',
]

interface StepInterestsProps {
  onContinue: () => void
}

const StepInterests = ({ onContinue }: StepInterestsProps) => {
  const { state, dispatch } = useOnboarding()

  return (
    <div className="flex min-h-dvh flex-col px-6">
      <ProgressBar currentStep={1} />

      <div className="flex flex-1 flex-col pt-7">
        <h1 className="font-semibold text-5xl uppercase leading-none">
          What are you into?
        </h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-white/80">
          Select everything that interests you. Choose as many as you like.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 w-full max-w-[600px]! h-full">
          {categories.map(cat => (
            <ToggleChip
              key={cat}
              label={cat}
              selected={state.interests.includes(cat)}
              onToggle={() =>
                dispatch({ type: 'TOGGLE_INTEREST', payload: cat })
              }
            />
          ))}
        </div>
      </div>

      <div className="pb-14">
        <p className="mb-4 text-center  text-white/60">
          You can always change your preferences in your profile.
        </p>
        <ContinueButton
          label="Continue"
          disabled={state.interests.length === 0}
          onClick={onContinue}
        />
      </div>
    </div>
  )
}

export default StepInterests
