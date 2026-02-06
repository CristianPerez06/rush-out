export type InterestCategory =
  | 'Classical Theater'
  | 'Musical'
  | 'Independent'
  | 'Stand Up'
  | 'Contemporary Dance'
  | 'Drama'
  | 'Classical Dance'
  | 'Cinema'
  | 'Live Music'
  | 'Outdoor Events'

export type TransportMode = 'Car' | 'Bike' | 'Public Transport' | 'I Like Walking'

export interface OnboardingData {
  interests: InterestCategory[]
  transport: TransportMode[]
  calendarAccess: boolean
  locationAccess: boolean
  onboardingCompleted: boolean
}

export type OnboardingAction =
  | { type: 'TOGGLE_INTEREST'; payload: InterestCategory }
  | { type: 'TOGGLE_TRANSPORT'; payload: TransportMode }
  | { type: 'SET_CALENDAR_ACCESS'; payload: boolean }
  | { type: 'SET_LOCATION_ACCESS'; payload: boolean }
  | { type: 'COMPLETE_ONBOARDING' }
