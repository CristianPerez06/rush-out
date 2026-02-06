import { useParams, useNavigate } from 'react-router-dom'
import { mockEvents } from '../data/events'
import { formatPrice } from '../utilis'

const Checkout = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const event = mockEvents.find(e => e.id === id)

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-white px-4 py-2 text-black uppercase"
        >
          Go back
        </button>
      </div>
    )
  }

  const hasDiscount = event.current_discount > 0

  return (
    <div className="flex min-h-screen flex-col bg-black text-white p-6 gap-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start text-white uppercase text-sm"
      >
        &larr; Back
      </button>

      <h1 className="text-2xl font-bold uppercase">Checkout</h1>

      <div className="flex flex-col gap-4 border border-[#9fabde] rounded-[15px] p-4">
        <h2 className="text-xl font-semibold uppercase">
          {event.event_title}
        </h2>
        {event.event_sub_title && (
          <p className="text-sm text-white/70 uppercase">
            {event.event_sub_title}
          </p>
        )}

        <div className="flex justify-between text-sm uppercase">
          <p>{event.event_location.venue}</p>
          <p>{event.starts_at} hs</p>
        </div>

        <p className="text-sm text-white/70">
          {event.event_date} &middot; {event.event_location.neighborhood}
        </p>

        <div className="border-t border-[#9fabde] pt-4 flex justify-between items-end">
          <div>
            {hasDiscount && (
              <div className="flex gap-2 items-center mb-1">
                <p className="text-sm line-through text-white/50 uppercase">
                  {formatPrice(event.price)}
                </p>
                <span className="bg-white/20 px-1 py-0.5 text-xs uppercase">
                  {event.current_discount}% off
                </span>
              </div>
            )}
            <p className="text-lg font-semibold uppercase">
              {formatPrice(event.discounted_price)}
            </p>
          </div>

          <button className="bg-white text-black px-6 py-3 uppercase font-medium">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
