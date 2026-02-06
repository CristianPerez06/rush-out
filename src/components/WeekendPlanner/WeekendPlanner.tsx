import FilterButtons from '../FilterButtons'
import OtherThingsTonight from '../OtherThingsTonight'
import Swiper from '../Swiper'

const WeekendPlanner = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll">
      {/* Tonight's pick section */}
      <p className="text-white text-xl font-bold uppercase">
        Tonight’s pick
      </p>
      <Swiper />

      {/* Other things happening tonight - Horizontal cards */}
      <OtherThingsTonight />

      {/* Filter buttons section */}
      <FilterButtons />
    </div>
  )
}

export default WeekendPlanner
