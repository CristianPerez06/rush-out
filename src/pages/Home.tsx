// import { Link } from 'react-router-dom'
import { mockEvents } from '../data/events'
import WeekendPlanner from '../components/WeekendPlanner'

// const today = new Date().toISOString().split('T')[0]
// const upcomingEvents = mockEvents.filter(e => e.event_date >= today)
// const pastEvents = mockEvents.filter(e => e.event_date < today)

console.log({ mockEvents })

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-4 py-12 text-white">
      <h1 className="mb-8 text-4xl font-bold">Rush Out</h1>
      {/* <nav className="flex flex-col gap-4">
        <Link to="/login" className="text-lg underline hover:text-gray-300">
          Login
        </Link>
        <Link to="/profile" className="text-lg underline hover:text-gray-300">
          Profile
        </Link>
        <Link to="/checkout" className="text-lg underline hover:text-gray-300">
          Checkout
        </Link>
        <Link to="/intro" className="text-lg underline hover:text-gray-300">
          Intro Video
        </Link>
      </nav> */}

      {/* <section className="mt-12 w-full max-w-md">
        <h2 className="mb-4 text-2xl font-semibold">Upcoming Events</h2>
        <ul className="flex flex-col gap-3">
          {upcomingEvents.map(event => (
            <li key={event.id}>
              <Link
                to={`/event/${event.id}`}
                className="flex items-center justify-between rounded-lg border border-gray-700 px-4 py-3 transition hover:bg-gray-900"
              >
                <div>
                  <span className="font-medium">{event.event_title}</span>
                  <span className="ml-2 text-xs text-gray-500">
                    {event.category}
                  </span>
                </div>
                <span className="text-sm text-gray-400">
                  {event.event_date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {pastEvents.length > 0 && (
        <section className="mt-10 w-full max-w-md">
          <h2 className="mb-4 text-2xl font-semibold">Past Events</h2>
          <ul className="flex flex-col gap-3">
            {pastEvents.map(event => (
              <li key={event.id}>
                <Link
                  to={`/event/${event.id}`}
                  className="flex items-center justify-between rounded-lg border border-gray-700 px-4 py-3 opacity-60 transition hover:bg-gray-900 hover:opacity-100"
                >
                  <div>
                    <span className="font-medium">{event.event_title}</span>
                    <span className="ml-2 text-xs text-gray-500">
                      {event.category}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {event.event_date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )} */}

      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          margin: 0,
          padding: 16,
          overflow: 'auto',
        }}
      >
        <WeekendPlanner />
      </div>
    </div>
  )
}

export default Home
