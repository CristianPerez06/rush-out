export type EventCategory =
  | 'Rock'
  | 'Teatro'
  | 'Electrónica'
  | 'Stand Up'
  | 'Jazz'
  | 'Indie'

export type HighlightedTag =
  | 'Tonight’s Pick'
  | '50% OFF'
  | 'Last Tickets'
  | 'Almost Sold Out'
  | 'Happening Today'

export type Event = {
  id: string

  event_date: string // YYYY-MM-DD
  starts_at: string
  ends_at: string

  event_title: string
  event_sub_title?: string
  event_description: string

  principal_artist: string
  other_artists: string[]

  category: EventCategory
  highlighted_tags: HighlightedTag[]

  event_location: {
    venue: string
    address: string
    city: 'Buenos Aires'
    neighborhood: string
  }

  total_tickets: number
  sold_tickets: number

  price: number
  current_discount: number // %
  discounted_price: number

  event_image: string
}
