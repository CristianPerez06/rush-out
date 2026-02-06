import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockEvents } from '../data/events'
import { formatPrice } from '../utilis'
import type { Event } from '../types/types'

const formatEventDateTime = (eventDate: string, startsAt: string) => {
  const d = new Date(eventDate + 'T00:00:00')
  const dayName = d.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  const day = d.getDate()
  const [hours, minutes] = startsAt.includes(':')
    ? startsAt.split(':').map(Number)
    : [20, 0]
  const h12 = hours % 12 || 12
  const ampm = hours < 12 ? 'AM' : 'PM'
  const time = `${h12}:${minutes.toString().padStart(2, '0')} ${ampm}`
  return `${dayName} ${day} AT ${time}`
}

const formatPriceDecimals = (value: number) => `$${Number(value).toFixed(2)}`

const Checkout = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const event = mockEvents.find((e): e is Event => e.id === id)
  const [step, setStep] = useState<1 | 2>(1)
  const [quantity, setQuantity] = useState(1)

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

  const available = event.total_tickets - event.sold_tickets
  const clampedQuantity = Math.min(Math.max(1, quantity), available)
  const hasDiscount = event.current_discount > 0
  const subtotal = clampedQuantity * event.discounted_price
  const serviceFee = 0.1 * subtotal
  const total = subtotal + serviceFee

  if (step === 1) {
    return (
      <div className="relative flex min-h-screen flex-col bg-black text-white">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 text-sm uppercase text-white/80"
        >
          Back
        </button>
        <h1
          className="text-center uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '69.6809px',
            lineHeight: '77px',
            letterSpacing: '0.01em',
          }}
        >
          You're going tonight
        </h1>
        <div
          className="flex flex-col gap-1 px-[26px] pt-8"
          style={{ gap: 4 }}
        >
          <p
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#E9FF3E',
            }}
          >
            {formatEventDateTime(event.event_date, event.starts_at)}
          </p>
          <p
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '31px',
            }}
          >
            {event.event_title}
          </p>
          <p
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            {event.event_location.venue}
          </p>
        </div>
        <div
          className="mx-auto mt-6 w-full max-w-[337px] rounded-[27px] px-6 py-6"
          style={{ background: '#2A2A2A' }}
        >
          <div className="flex flex-row items-center justify-center gap-1">
            {hasDiscount && (
              <>
                <p
                  className="uppercase line-through"
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '21px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {formatPrice(event.price)}
                </p>
                <span
                  className="flex items-center justify-center px-2 py-0.5 uppercase"
                  style={{
                    background: '#074EDA',
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '21px',
                  }}
                >
                  {event.current_discount}% off
                </span>
              </>
            )}
          </div>
          <p
            className="mt-1 text-center uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: '34px',
              lineHeight: '44px',
            }}
          >
            {formatPrice(event.discounted_price)}
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="flex h-12 w-12 items-center justify-center text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '47px',
                lineHeight: '57px',
              }}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div
              className="flex h-[100px] w-[100px] items-center justify-center rounded-lg bg-white text-black"
              style={{
                fontFamily: "'Contrail One', sans-serif",
                fontWeight: 400,
                fontSize: '69.6809px',
                lineHeight: '87px',
                letterSpacing: '0.01em',
              }}
            >
              {clampedQuantity}
            </div>
            <button
              type="button"
              onClick={() => setQuantity(q => Math.min(available, q + 1))}
              className="flex h-12 w-12 items-center justify-center text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '47px',
                lineHeight: '57px',
              }}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p
            className="mt-4 text-center uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '21px',
            }}
          >
            {available} tickets available
          </p>
        </div>
        <div className="mt-auto flex justify-center px-4 pb-10 pt-8">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="flex h-[68px] w-full max-w-[323px] items-center justify-center rounded-[50px] uppercase text-black"
            style={{
              background: '#E9FF3E',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '22px',
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-black text-white">
      <h1
        className="text-center uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '69.6809px',
          lineHeight: '77px',
          letterSpacing: '0.01em',
        }}
      >
        You have a plan
      </h1>
      <button
        type="button"
        onClick={() => setStep(1)}
        className="mt-2 self-center text-sm uppercase text-white/80"
      >
        Back
      </button>
      <div
        className="mx-auto mt-8 w-full max-w-[325px] rounded-2xl p-5"
        style={{ background: '#2A2A2A' }}
      >
        <div className="flex flex-col gap-3">
          <p
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '24px',
            }}
          >
            Tonight's summary
          </p>
          <p
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            {event.event_title}
          </p>
          <div className="flex justify-between uppercase">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              General Admission
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {formatPrice(event.discounted_price)}
            </span>
          </div>
          <p
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            x{clampedQuantity} tickets
          </p>
          <div className="border-t border-dashed border-white" />
          <div className="flex justify-between uppercase">
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
              }}
            >
              Subtotal
            </span>
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
              }}
            >
              {formatPriceDecimals(subtotal)}
            </span>
          </div>
          <div className="flex justify-between uppercase">
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
              }}
            >
              Service fee (10%)
            </span>
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
              }}
            >
              {formatPriceDecimals(serviceFee)}
            </span>
          </div>
          <div className="border-t border-dashed border-white" />
          <div className="flex justify-between uppercase">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              {formatPriceDecimals(total)}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex w-full max-w-[325px] overflow-hidden rounded-2xl border border-white">
        <div className="flex flex-1 items-center justify-center border-r border-dashed border-white py-5">
          <span
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '21px',
            }}
          >
            Saved
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-0 py-5">
          <span
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '21px',
            }}
          >
            Mastercard
          </span>
          <span
            className="uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '21px',
            }}
          >
            ***432
          </span>
        </div>
      </div>
      <div className="mt-auto flex justify-center px-4 pb-10 pt-8">
        <button
          type="button"
          onClick={() => navigate('/success')}
          className="flex h-[68px] w-full max-w-[323px] items-center justify-center rounded-[50px] uppercase text-black"
          style={{
            background: '#E9FF3E',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '22px',
          }}
        >
          I'm in
        </button>
      </div>
    </div>
  )
}

export default Checkout
