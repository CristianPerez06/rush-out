import type { Event, EventCategory, HighlightedTag } from '../types/types'

const todayPlus = (offset: number) => {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return d.toISOString().split('T')[0]
}

const venues = [
  {
    venue: 'Teatro Sarmiento',
    address: 'Av. Sarmiento 2715',
    neighborhood: 'Palermo',
  },
  {
    venue: 'Niceto Club',
    address: 'Niceto Vega 5510',
    neighborhood: 'Palermo',
  },
  {
    venue: 'CC Konex',
    address: 'Sarmiento 3131',
    neighborhood: 'Abasto',
  },
  {
    venue: 'Teatro Gran Rex',
    address: 'Av. Corrientes 857',
    neighborhood: 'San Nicolás',
  },
  {
    venue: 'Paseo La Plaza',
    address: 'Av. Corrientes 1660',
    neighborhood: 'San Nicolás',
  },
]

const artists = [
  'Baco Polaco',
  'Conociendo Rusia',
  'Eruca Sativa',
  'Fernando Sanjiao',
  'DJ Villa Diamante',
  'Escalandrum',
]

const categories: EventCategory[] = [
  'Rock',
  'Teatro',
  'Electrónica',
  'Stand Up',
  'Jazz',
  'Indie',
]

const images = [
  'https://images.unsplash.com/photo-1515165562835-c3b8e0b6a1b5',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
  'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
]

/* ---------------- mock data ---------------- */

export const mockEvents: Event[] = Array.from({ length: 100 }, (_, i) => {
  const totalTickets = 100 + Math.floor(Math.random() * 500)
  const soldTickets = Math.floor(Math.random() * totalTickets)
  const sellRatio = soldTickets / totalTickets

  let discount = 0
  const tags: HighlightedTag[] = []

  if (sellRatio < 0.5) {
    discount = 50
    tags.push('50% OFF')
  } else if (sellRatio < 0.75) {
    discount = 20
    tags.push('Last Tickets')
  } else if (sellRatio > 0.9) {
    tags.push('Almost Sold Out')
  }

  const dayOffset = i % 7
  if (dayOffset === 0) {
    tags.push('Happening Today')
    if (Math.random() > 0.6) tags.push('Tonight’s Pick')
  }

  const basePrice = 12000 + Math.floor(Math.random() * 40000)

  return {
    id: `event-${i + 1}`,

    event_date: todayPlus(dayOffset),
    starts_at: '20:00',
    ends_at: '22:30',

    event_title: artists[i % artists.length],
    event_sub_title: 'Live en Buenos Aires',
    event_description:
      'Una experiencia única en uno de los venues más icónicos de la ciudad. Música, energía y una noche para recordar.',

    principal_artist: artists[i % artists.length],
    other_artists: [],

    category: categories[i % categories.length],
    highlighted_tags: tags,

    event_location: {
      venue: venues[i % venues.length].venue,
      address: venues[i % venues.length].address,
      city: 'Buenos Aires',
      neighborhood: venues[i % venues.length].neighborhood,
    },

    total_tickets: totalTickets,
    sold_tickets: soldTickets,

    price: basePrice,
    current_discount: discount,
    discounted_price: Math.round(basePrice * (1 - discount / 100)),

    event_image: images[i % images.length],
  }
})
