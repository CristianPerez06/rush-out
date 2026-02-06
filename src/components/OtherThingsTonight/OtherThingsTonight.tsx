import { mockEvents } from '../../data/events'
import { EventCard } from './EventCard'

const OtherThingsTonight = () => {
  const today = new Date().toISOString().split('T')[0]
  const tonightEvents = mockEvents.filter(e => e.event_date === today)

  console.log(mockEvents)

  return (
    <div className="flex flex-col max-w-[400px] gap-4 items-start justify-start w-full p-4">
      <p className="text-white text-xl font-bold uppercase">
        Other things happening tonight
      </p>
      <div className="relative w-full">
        <div className="flex gap-4 items-center w-full overflow-x-auto">
          {tonightEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-black to-transparent" />
      </div>
    </div>
  )
}

export default OtherThingsTonight
