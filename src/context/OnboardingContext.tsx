import { createContext, useContext, useReducer } from 'react'
import type { OnboardingData, OnboardingAction } from '../types/onboarding'

const initialState: OnboardingData = {
  interests: [],
  transport: [],
  calendarAccess: false,
  locationAccess: false,
  onboardingCompleted: false,
}

function onboardingReducer(
  state: OnboardingData,
  action: OnboardingAction
): OnboardingData {
  switch (action.type) {
    case 'TOGGLE_INTEREST': {
      const exists = state.interests.includes(action.payload)
      return {
        ...state,
        interests: exists
          ? state.interests.filter(i => i !== action.payload)
          : [...state.interests, action.payload],
      }
    }
    case 'TOGGLE_TRANSPORT': {
      const exists = state.transport.includes(action.payload)
      return {
        ...state,
        transport: exists
          ? state.transport.filter(t => t !== action.payload)
          : [...state.transport, action.payload],
      }
    }
    case 'SET_CALENDAR_ACCESS':
      return { ...state, calendarAccess: action.payload }
    case 'SET_LOCATION_ACCESS':
      return { ...state, locationAccess: action.payload }
    case 'COMPLETE_ONBOARDING':
      return { ...state, onboardingCompleted: true }
    default:
      return state
  }
}

interface OnboardingContextValue {
  state: OnboardingData
  dispatch: React.Dispatch<OnboardingAction>
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null)

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(onboardingReducer, initialState)
  return (
    <OnboardingContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardingContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useOnboarding = () => {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider')
  }
  return context
}
