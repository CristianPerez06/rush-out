import WeekendPlanner from '../components/WeekendPlanner'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-4 py-12 text-white overflow-y-scroll">
      <WeekendPlanner />
    </div>
  )
}

export default Home
