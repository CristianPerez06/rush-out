import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WeekendPlanner from '../components/WeekendPlanner'
import { useOnboarding } from '../context/OnboardingContext'

const Home = () => {
  const navigate = useNavigate()
  const { state } = useOnboarding()

  useEffect(() => {
    if (!state.onboardingCompleted) {
      navigate('/intro', { replace: true })
    }
  }, [state.onboardingCompleted, navigate])

  if (!state.onboardingCompleted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-4 py-12 text-white overflow-y-scroll">
      <WeekendPlanner />
    </div>
  )
}

export default Home
