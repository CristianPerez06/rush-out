const buttons = [
  {
    topText: 'I want',
    bottomText: 'to laugh',
    bg: '#6B5080',
  },
  {
    topText: "I'm ready",
    bottomText: 'to cry',
    bg: '#253253',
  },
  {
    topText: 'Plan',
    bottomText: 'my date',
    bg: '#9FABD8',
  },
  {
    topText: 'Take me',
    bottomText: 'somewhere',
    bg: '#2D7A65',
  },
]

const FilterButtons = () => {
  return (
    <div className="flex flex-col gap-2.5 w-full p-4 max-w-[400px] mb-8">
      <p className="text-white text-[17px] font-semibold uppercase font-['Inter'] w-full">
        What are you in the mood for?
      </p>
      <div className="grid grid-cols-2 gap-2 w-full">
        {buttons.map(btn => (
          <button
            key={btn.bottomText}
            className="flex items-end rounded-lg px-4 py-3 h-[99px] cursor-pointer border-none text-left"
            style={{ backgroundColor: btn.bg }}
          >
            <div className="flex flex-col uppercase text-white/80 text-center justify-center items-center h-full w-full">
              <span className="text-sm font-semibold font-['Inter'] leading-tight">
                {btn.topText}
              </span>
              <span className="text-[26px] font-bold font-['Inter'] leading-none tracking-tight text-white">
                {btn.bottomText}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="h-8"></div>
    </div>
  )
}

export default FilterButtons
