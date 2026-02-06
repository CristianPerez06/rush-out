import { useOnboarding } from '../../context/OnboardingContext'
import ProgressBar from './ProgressBar'
import ContinueButton from './ContinueButton'
import FeatureItem from './FeatureItem'
import { CalendarIcon, SyncIcon, TicketIcon } from './icons'
import { MessageCircle } from 'lucide-react'

interface StepCalendarProps {
  onContinue: () => void
}

const StepCalendar = ({ onContinue }: StepCalendarProps) => {
  const { dispatch } = useOnboarding()

  const handleAllow = () => {
    dispatch({ type: 'SET_CALENDAR_ACCESS', payload: true })
    onContinue()
  }

  return (
    <div className="flex min-h-dvh flex-col px-6">
      <ProgressBar currentStep={3} />

      <div className="flex flex-1 flex-col items-center pt-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20">
          <CalendarIcon className="h-8 w-8 text-accent" />
        </div>

        <h1 className="mt-8 text-center font-semibold text-4xl uppercase leading-none">
          Never miss an event
        </h1>
        <p className="mt-3 text-center text-sm max-w-[300px] uppercase tracking-wide text-white/50">
          Allow us to access your calendar to automatically add the events you
          purchase.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3">
          <FeatureItem
            icon={<MessageCircle className="text-blue-500" />}
            label="Automatic reminders"
          />
          <FeatureItem
            icon={<SyncIcon className="text-yellow-300" />}
            label="Instant sync"
          />
          <FeatureItem
            icon={<TicketIcon className="text-teal-200" />}
            label="No more forgotten tickets"
          />
        </div>
      </div>

      <div className="pb-8">
        <ContinueButton label="Allow Calendar Access" onClick={handleAllow} />
        <button
          onClick={onContinue}
          className="mt-4 w-full cursor-pointer py-2 text-center text-sm font-semibold uppercase tracking-wider text-white"
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}

export default StepCalendar
