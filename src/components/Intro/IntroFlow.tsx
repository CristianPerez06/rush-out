import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../../context/OnboardingContext'
import VideoScreen from './VideoScreen'
import StepInterests from './StepInterests'
import StepTransport from './StepTransport'
import StepCalendar from './StepCalendar'
import StepLocation from './StepLocation'
import StepComplete from './StepComplete'

const IntroFlow = () => {
  const [step, setStep] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useOnboarding()

  const goNext = () => {
    if (step === 5) {
      dispatch({ type: 'COMPLETE_ONBOARDING' })
      navigate('/', { replace: true })
      return
    }

    setTransitioning(true)
    setTimeout(() => {
      setStep(s => s + 1)
      setTransitioning(false)
    }, 200)
  }

  if (step === 0) {
    return <VideoScreen onComplete={goNext} />
  }

  const stepComponent = (() => {
    switch (step) {
      case 1:
        return <StepInterests onContinue={goNext} />
      case 2:
        return <StepTransport onContinue={goNext} />
      case 3:
        return <StepCalendar onContinue={goNext} />
      case 4:
        return <StepLocation onContinue={goNext} />
      case 5:
        return <StepComplete onContinue={goNext} />
      default:
        return null
    }
  })()

  return (
    <div className="min-h-dvh bg-black text-white">
      <div
        className={`transition-opacity duration-200 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {stepComponent}
      </div>
    </div>
  )
}

export default IntroFlow
