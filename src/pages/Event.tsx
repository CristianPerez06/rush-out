import { useParams, Link } from 'react-router-dom'
import { mockEvents } from '../data/events'

const getDurationMinutes = (start: string, end: string) => {
  const [sh, sm] = start.split(':').map(Number)
  const [eh, em] = end.split(':').map(Number)
  return eh * 60 + em - (sh * 60 + sm)
}

const Event = () => {
  const { id } = useParams<{ id: string }>()
  const event = mockEvents.find(e => e.id === id)

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="mb-4 text-4xl font-bold">Event not found</h1>
        <Link to="/" className="underline hover:text-gray-300">
          Back to Home
        </Link>
      </div>
    )
  }

  const available = event.total_tickets - event.sold_tickets
  const duration = getDurationMinutes(event.starts_at, event.ends_at)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div>
        {/* Hero Image */}
        <div className="relative">
          <img
            src={event.event_image}
            alt={event.event_title}
            className="h-[400px] w-full object-cover"
          />
          <Link
            to="/"
            className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm"
            aria-label="Go back"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <button
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm"
            aria-label="Share"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pt-6 pb-8">
          {/* Title */}
          <h1 className="text-4xl font-bold uppercase leading-tight">
            {event.event_title}
          </h1>
          {event.event_sub_title && (
            <p className="mt-1 text-sm uppercase tracking-wide text-gray-300">
              {event.event_sub_title}
            </p>
          )}

          {/* Tickets Available Badge */}
          <div className="mt-5">
            <div className="rounded-lg border text-black border-white/20 bg-white py-3 text-center text-sm font-semibold uppercase tracking-wider">
              {available} Tickets Available
            </div>
          </div>

          {/* Location */}
          <div className="mt-6 flex items-start gap-3">
            <svg
              className="mt-0.5 shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase">
                {event.event_location.venue}
              </p>
              <p className="text-sm uppercase text-gray-400">
                {event.event_location.address}, {event.event_location.city}
              </p>
            </div>
          </div>

          {/* Duration & Genre */}
          <div className="mt-4 flex items-start gap-3">
            <svg
              className="mt-0.5 shrink-0"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <p className="text-sm font-semibold uppercase">
                Duration: {duration} min
              </p>
              <p className="text-sm uppercase text-gray-400">
                Genre: {event.category}
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="my-8 border-t border-dashed border-gray-600" />

          {/* About the show */}
          <h2 className="mb-3 text-lg font-semibold">About the show</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            {event.event_description}
          </p>

          {/* Separator */}
          <div className="my-8 border-t border-dashed border-gray-600" />
        </div>
      </div>
      {/* CTA Button */}
      <div className="px-5 mt-4 pb-8">
        <Link
          to={`/checkout/${event.id}`}
          className="block w-full rounded-full bg-[#D6F500] py-4 text-center text-lg font-bold uppercase text-black transition hover:bg-[#c2e000]"
        >
          I&apos;m in
        </Link>
      </div>
    </div>
  )
}

export default Event
