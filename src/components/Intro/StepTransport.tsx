import { useOnboarding } from '../../context/OnboardingContext'
import type { TransportMode } from '../../types/onboarding'
import ProgressBar from './ProgressBar'
import ContinueButton from './ContinueButton'
import ToggleChip from './ToggleChip'
import { CarIcon, BikeIcon, BusIcon, WalkingIcon } from './icons'

const transportOptions: {
  mode: TransportMode
  icon: React.ReactNode
}[] = [
  { mode: 'Car', icon: <CarIcon /> },
  { mode: 'Bike', icon: <BikeIcon /> },
  { mode: 'Public Transport', icon: <BusIcon /> },
  { mode: 'I Like Walking', icon: <WalkingIcon /> },
]

interface StepTransportProps {
  onContinue: () => void
}

const StepTransport = ({ onContinue }: StepTransportProps) => {
  const { state, dispatch } = useOnboarding()

  return (
    <div className="flex min-h-dvh flex-col px-6">
      <ProgressBar currentStep={2} />

      <div className="flex flex-1 flex-col pt-8">
        <h1 className="font-semibold text-4xl uppercase leading-none">
          How do you move?
        </h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-white/80">
          This helps us show you events that are easy for you to reach.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {transportOptions.map(({ mode, icon }) => (
            <ToggleChip
              key={mode}
              label={mode}
              icon={icon}
              variant="listItem"
              selected={state.transport.includes(mode)}
              onToggle={() =>
                dispatch({ type: 'TOGGLE_TRANSPORT', payload: mode })
              }
            />
          ))}
        </div>
      </div>

      <div className="pb-8">
        <p className="mb-4 text-center text-white/60">
          You can always change your preferences in your profile.
        </p>
        <ContinueButton
          label="Continue"
          disabled={state.transport.length === 0}
          onClick={onContinue}
        />
      </div>
    </div>
  )
}

export default StepTransport
