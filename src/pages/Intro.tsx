import splashVideo from '../assets/splash.mp4'

const Intro = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black text-white">
      <video
        src={splashVideo}
        autoPlay
        muted
        playsInline
        loop
        className="max-h-[70vh] w-full max-w-4xl object-contain"
      />
    </div>
  )
}

export default Intro
