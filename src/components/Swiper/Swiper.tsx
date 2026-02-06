import { useState, useRef, useEffect, useCallback } from 'react'
import ContainerSvg from './ContainerSvg'
import dottedLineSvg from './assets/dotted-line.svg'
import { mockEvents } from '../../data/events'
import { formatPrice } from '../../utilis'
import { useNavigate } from 'react-router-dom'

interface SwiperProps {
  width?: number
  height?: number
}

const COLORS = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#FFA07A',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E2',
]

const CONTENT = mockEvents.map(event => ({
  id: event.id,
  timing: event.starts_at,
  startsIn: event.starts_at,
  distance: '20 min away',
  title: event.event_title,
  venue: event.event_location.venue,
  image: event.event_image,
  originalPrice: formatPrice(event.price),
  discount: `${event.current_discount}% off`,
  finalPrice: formatPrice(event.discounted_price),
}))

/* const CONTENT = [
  {
    id: 1,
    timing: 'Fits before your 9 pm dinner WITH JOHN',
    startsIn: 'Starts in 2h 14m',
    distance: '20 min away',
    title: 'Baco polaco',
    venue: 'Teatro Sarmiento',
    image: eventImage1,
    originalPrice: '$40,000',
    discount: '50% off',
    finalPrice: '$20,000',
    cta: "I'M IN",
  },
  {
    id: 2,
    timing: 'Perfect for your 7 pm drinks WITH MARIA',
    startsIn: 'Starts in 45m',
    distance: '15 min away',
    title: 'Jazz Night Live',
    venue: 'Blue Note Club',
    image: eventImage2,
    originalPrice: '$35,000',
    discount: '30% off',
    finalPrice: '$24,500',
    cta: "I'M IN",
  },
  {
    id: 3,
    timing: 'Great after your 6 pm meeting WITH CARLOS',
    startsIn: 'Starts in 1h 30m',
    distance: '10 min away',
    title: 'Sushi Masterclass',
    venue: 'Nobu Restaurant',
    image: eventImage3,
    originalPrice: '$60,000',
    discount: '40% off',
    finalPrice: '$36,000',
    cta: "I'M IN",
  },
] */

const Swiper = ({ width = 360, height = 450 }: SwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef(0)
  const dragCurrentRef = useRef(0)
  const navigate = useNavigate()

  const currentContent = CONTENT[currentIndex]
  const nextIndex = (currentIndex + 1) % CONTENT.length
  const afterNextIndex = (currentIndex + 2) % CONTENT.length

  // Colors tied to card IDs (id 1 = COLORS[0], id 2 = COLORS[1], etc.)
  const card1Color =
    COLORS[(Number(currentContent.id.split('_')[1]) - 1) % COLORS.length]
  const card2Color =
    COLORS[(Number(CONTENT[nextIndex].id.split('_')[1]) - 1) % COLORS.length]
  const card3Color =
    COLORS[
      (Number(CONTENT[afterNextIndex].id.split('_')[1]) - 1) % COLORS.length
    ]

  const card2Width = width - 30
  const card3Width = card2Width - 30

  const SWIPE_THRESHOLD = 50

  // Calculate drag offset and effects
  const dragOffset = isDragging || isAnimating ? currentX - startX : 0
  const dragProgress = Math.abs(dragOffset) / width // 0 to 1
  const rotation = dragOffset * 0.15 // Rotation in degrees
  const opacity =
    isDragging || isAnimating ? Math.max(0, 1 - dragProgress * 1.2) : 1
  const scale =
    isDragging || isAnimating ? Math.max(0.7, 1 - dragProgress * 0.3) : 1

  const handleSwipeEnd = useCallback(
    (start: number, current: number) => {
      const diff = start - current

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        setIsDragging(false)
        setIsAnimating(true)

        // Set final position for exit animation
        const exitDirection = diff > 0 ? 1 : -1
        setCurrentX(start + exitDirection * width * 2)

        // Animate card out, then change index
        setTimeout(() => {
          if (diff > 0) {
            // Swipe left - next item
            setCurrentIndex(prev => (prev + 1) % CONTENT.length)
          } else {
            // Swipe right - previous item
            setCurrentIndex(
              prev => (prev - 1 + CONTENT.length) % CONTENT.length
            )
          }

          setIsAnimating(false)
          setStartX(0)
          setCurrentX(0)
        }, 200)
      } else {
        setIsDragging(false)
        setStartX(0)
        setCurrentX(0)
      }
    },
    [width]
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const x = e.touches[0].clientX
    setStartX(x)
    setCurrentX(x)
    dragStartRef.current = x
    dragCurrentRef.current = x
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].clientX
    setCurrentX(x)
    dragCurrentRef.current = x
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    handleSwipeEnd(dragStartRef.current, dragCurrentRef.current)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const x = e.clientX
    setStartX(x)
    setCurrentX(x)
    dragStartRef.current = x
    dragCurrentRef.current = x
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setCurrentX(e.clientX)
        dragCurrentRef.current = e.clientX
      }
    }

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleSwipeEnd(dragStartRef.current, dragCurrentRef.current)
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, handleSwipeEnd])

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div
        ref={containerRef}
        className="relative select-none"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          touchAction: 'pan-y',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {/* 3rd card (bottom) */}
        <div
          className="absolute rounded-lg z-1 transition-colors duration-300"
          style={{
            width: `${card3Width}px`,
            height: `${height}px`,
            backgroundColor: card3Color,
            bottom: '60px',
            left: `${(width - card3Width) / 2}px`,
          }}
        />

        {/* 2nd card (middle) */}
        <div
          className="absolute rounded-lg z-2 transition-colors duration-300"
          style={{
            width: `${card2Width}px`,
            height: `${height}px`,
            backgroundColor: card2Color,
            bottom: '30px',
            left: `${(width - card2Width) / 2}px`,
          }}
        />

        {/* 1st card (top) */}
        <div
          className="absolute bottom-0 left-0 z-3 flex flex-col"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform:
              isDragging || isAnimating
                ? `translateX(${dragOffset}px) rotate(${rotation}deg) scale(${scale})`
                : 'translateX(0) rotate(0deg) scale(1)',
            opacity: opacity,
            transition: isDragging
              ? 'none'
              : 'transform 0.2s ease-out, opacity 0.2s ease-out',
            transformOrigin: 'center center',
          }}
        >
          {/* SVG Container Background */}
          <ContainerSvg
            backgroundColor={card1Color}
            width={width}
            height={height}
            className="absolute top-0 left-0 z-0 pointer-events-none"
          />

          {/* Content section */}
          <div className="flex-1 justify-center items-center p-4 relative z-1">
            {/* Content goes here */}
            <div
              key={currentIndex}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '9.758px',
                alignItems: 'flex-start',
                lineHeight: 'normal',
                fontStyle: 'normal',
                position: 'relative',
                flexShrink: 0,
                color: 'white',
                textTransform: 'uppercase',
                width: '100%',
                transition: 'opacity 0.3s ease-in-out',
              }}
              data-node-id="104:303"
            >
              <p
                style={{
                  fontFamily: "'IBM_Plex_Sans:Medium', sans-serif",
                  lineHeight: 'normal',
                  fontStyle: 'normal',
                  position: 'relative',
                  flexShrink: 0,
                  fontSize: '13px',
                  color: 'white',
                  textTransform: 'uppercase',
                }}
                data-node-id="104:300"
              >
                {currentContent.timing}
              </p>
              <div
                style={{
                  height: '179.556px',
                  position: 'relative',
                  borderRadius: '7.807px',
                  flexShrink: 0,
                  width: '100%',
                }}
              >
                <img
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    maxWidth: 'none',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    borderRadius: '7.807px',
                    width: '100%',
                    height: '100%',
                  }}
                  src={currentContent.image}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  fontFamily: "'IBM_Plex_Sans:Medium', sans-serif",
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  flexShrink: 0,
                  fontSize: '14px',
                  width: '100%',
                }}
                data-node-id="104:304"
              >
                <p
                  style={{ position: 'relative', flexShrink: 0 }}
                  data-node-id="104:305"
                >
                  {currentContent.startsIn}
                </p>
                <p
                  style={{ position: 'relative', flexShrink: 0 }}
                  data-node-id="104:306"
                >
                  {currentContent.distance}
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  flexShrink: 0,
                  width: '100%',
                  whiteSpace: 'pre-wrap',
                }}
                data-node-id="104:307"
              >
                <p
                  style={{
                    fontFamily: "'Inter:Semi_Bold', sans-serif",
                    fontWeight: 600,
                    position: 'relative',
                    flexShrink: 0,
                    fontSize: '26px',
                    width: '100%',
                  }}
                  data-node-id="104:308"
                >
                  {currentContent.title}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM_Plex_Sans:Medium', sans-serif",
                    position: 'relative',
                    flexShrink: 0,
                    fontSize: '14px',
                    width: '100%',
                  }}
                  data-node-id="104:309"
                >
                  {currentContent.venue}
                </p>
              </div>
            </div>
          </div>

          {/* Dotted line separator */}
          <div
            style={{
              height: 0,
              position: 'relative',
              flexShrink: 0,
              width: '100%',
            }}
          >
            <div style={{ position: 'absolute', inset: '-0.85px 0 0 0' }}>
              <img
                alt=""
                style={{
                  display: 'block',
                  maxWidth: 'none',
                  width: '90%',
                  height: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                src={dottedLineSvg}
              />
            </div>
          </div>

          {/* Footer section */}
          <div className="flex items-end justify-between relative shrink-0 w-full p-5">
            <div className="flex flex-col items-start justify-center relative shrink-0">
              <div className="flex items-center relative shrink-0 gap-[6.61px]">
                <p className="relative shrink-0 text-white uppercase line-through font-['IBM_Plex_Sans:Medium',sans-serif] text-[13.547px] leading-normal not-italic tracking-[0.4064px]">
                  {currentContent.originalPrice}
                </p>
                <div className="bg-white/20 flex items-center justify-center relative shrink-0 px-[6.61px] py-[3.305px]">
                  <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-normal not-italic relative shrink-0 text-[11.853px] text-white tracking-[0.3556px] uppercase">
                    {currentContent.discount}
                  </p>
                </div>
              </div>
              <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-normal not-italic relative shrink-0 text-[20.32px] text-white uppercase">
                {currentContent.finalPrice}
              </p>
            </div>
            <div className="flex flex-row items-end self-stretch ">
              <button
                onClick={() => navigate(`/event/${currentContent.id}`)}
                className="bg-white flex h-full items-center justify-center relative shrink-0 px-[9.914px] py-[6.61px] w-[74.506px]"
              >
                <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-[13.547px] text-black uppercase">
                  I&apos;M IN
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swiper
