interface VideoScreenProps {
  onComplete: () => void
}

const VideoScreen = ({ onComplete }: VideoScreenProps) => (
  <div className="fixed inset-0 z-50 bg-black">
    <video
      src="/intro.mp4"
      autoPlay
      muted
      playsInline
      onEnded={onComplete}
      className="h-full w-full object-cover"
    />
    <button
      onClick={onComplete}
      className="absolute bottom-8 right-6 cursor-pointer text-sm uppercase tracking-wider text-white/60"
    >
      Skip
    </button>
  </div>
)

export default VideoScreen
