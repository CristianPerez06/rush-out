import { useParams, Link } from 'react-router-dom'
import { mockEvents } from '../data/events'

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

  const soldPercent = Math.round(
    (event.sold_tickets / event.total_tickets) * 100
  )
  const available = event.total_tickets - event.sold_tickets

  return (
    <div className="min-h-screen bg-black px-4 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="mb-8 inline-block text-sm text-gray-400 hover:text-white">
          &larr; Back to Events
        </Link>

        <img
          src={event.event_image}
          alt={event.event_title}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">
            {event.category}
          </span>
          {event.highlighted_tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-purple-900 px-3 py-1 text-xs text-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-1 text-4xl font-bold">{event.event_title}</h1>
        {event.event_sub_title && (
          <p className="mb-4 text-lg text-gray-400">{event.event_sub_title}</p>
        )}
        <p className="mb-8 text-gray-300">{event.event_description}</p>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-700 p-4">
            <p className="mb-1 text-xs text-gray-500">Date</p>
            <p className="font-medium">{event.event_date}</p>
          </div>
          <div className="rounded-lg border border-gray-700 p-4">
            <p className="mb-1 text-xs text-gray-500">Time</p>
            <p className="font-medium">
              {event.starts_at} – {event.ends_at}
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-4">
            <p className="mb-1 text-xs text-gray-500">Venue</p>
            <p className="font-medium">{event.event_location.venue}</p>
            <p className="text-sm text-gray-400">
              {event.event_location.address},{' '}
              {event.event_location.neighborhood}
            </p>
          </div>
          <div className="rounded-lg border border-gray-700 p-4">
            <p className="mb-1 text-xs text-gray-500">Artist</p>
            <p className="font-medium">{event.principal_artist}</p>
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-gray-700 p-4">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs text-gray-500">Price</p>
              {event.current_discount > 0 ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">
                    ${event.discounted_price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${event.price.toLocaleString()}
                  </span>
                  <span className="rounded bg-green-900 px-2 py-0.5 text-xs text-green-300">
                    -{event.current_discount}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">
                  ${event.price.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">
                {available} tickets left
              </p>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full rounded-full bg-purple-600"
              style={{ width: `${soldPercent}%` }}
            />
          </div>
          <p className="mt-1 text-right text-xs text-gray-500">
            {soldPercent}% sold
          </p>
        </div>

        <Link
          to="/checkout"
          className="block w-full rounded-lg bg-white py-3 text-center font-semibold text-black transition hover:bg-gray-200"
        >
          Buy Tickets
        </Link>
      </div>
    </div>
  )
}

export default Event
