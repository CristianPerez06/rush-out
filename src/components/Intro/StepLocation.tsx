import { useOnboarding } from '../../context/OnboardingContext'
import ProgressBar from './ProgressBar'
import ContinueButton from './ContinueButton'
import FeatureItem from './FeatureItem'
import { LocationPinIcon, MapAreaIcon, ClockIcon } from './icons'
import { MessageCircle } from 'lucide-react'

interface StepLocationProps {
  onContinue: () => void
}

const StepLocation = ({ onContinue }: StepLocationProps) => {
  const { dispatch } = useOnboarding()

  const handleAllow = () => {
    dispatch({ type: 'SET_LOCATION_ACCESS', payload: true })
    onContinue()
  }

  return (
    <div className="flex min-h-dvh flex-col px-6">
      <ProgressBar currentStep={4} />

      <div className="flex flex-1 flex-col items-center pt-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20">
          <LocationPinIcon className="h-8 w-8 text-accent" />
        </div>

        <h1 className="mt-8 text-center font-semibold text-4xl uppercase leading-none">
          Find events near you
        </h1>
        <p className="mt-3 text-center max-w-[260px] text-sm uppercase tracking-wide text-white/50">
          Allow us to access your location to show you the best nearby events.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3">
          <FeatureItem
            icon={<MapAreaIcon className="text-yellow-300" />}
            label="Events in your area"
          />
          <FeatureItem
            icon={<ClockIcon className="text-teal-200" />}
            label="Estimated travel time"
          />
          <FeatureItem
            icon={<MessageCircle className="text-blue-500" />}
            label="Last-minute deals nearby"
          />
        </div>
      </div>

      <div className="pb-8">
        <ContinueButton label="Allow Location" onClick={handleAllow} />
        <button
          onClick={onContinue}
          className="mt-4 w-full cursor-pointer py-2 text-center text-sm font-semibold uppercase tracking-wider text-white"
        >
          Set up later
        </button>
      </div>
    </div>
  )
}

export default StepLocation
