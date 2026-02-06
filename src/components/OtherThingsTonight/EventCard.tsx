import { useNavigate } from 'react-router-dom'
import type { Event } from '../../types/types'
import { formatPrice } from '../../utilis'
import dividerImg from '../../assets/1361086a8f0f419f1cdbdeac9fbe6653810af24b.svg'

export const EventCard = ({ event }: { event: Event }) => {
  const navigate = useNavigate()
  const hasDiscount = event.current_discount > 0

  return (
    <div
      style={{
        border: '1px solid #9fabde',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        alignItems: 'flex-start',
        padding: '12px',
        position: 'relative',
        borderRadius: '15px',
        flexShrink: 0,
        width: '280px',
      }}
    >
      <div
        style={{
          height: '133px',
          position: 'relative',
          borderRadius: '8px',
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            borderRadius: '8px',
          }}
        >
          <img alt={event.event_title} src={event.event_image} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          alignItems: 'flex-start',
          position: 'relative',
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'flex-start',
            lineHeight: 'normal',
            fontStyle: 'normal',
            position: 'relative',
            flexShrink: 0,
            color: 'white',
            textTransform: 'uppercase',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              flexShrink: 0,
              fontSize: '14px',
              width: '100%',
            }}
          >
            <p
              style={{
                position: 'relative',
                flexShrink: 0,
              }}
            >
              {event.event_location.venue}
            </p>
            <p
              style={{
                position: 'relative',
                flexShrink: 0,
              }}
            >
              {event.starts_at} hs
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'flex-start',
              position: 'relative',
              flexShrink: 0,
              width: '100%',
              whiteSpace: 'pre-wrap',
            }}
          >
            <p
              style={{
                fontWeight: 600,
                position: 'relative',
                flexShrink: 0,
                fontSize: '23px',
                width: '100%',
              }}
            >
              {event.event_title}
            </p>
            {event.event_sub_title && (
              <p
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  fontSize: '14px',
                  width: '100%',
                }}
              >
                {event.event_sub_title}
              </p>
            )}
          </div>
        </div>
        <div
          style={{
            height: 0,
            position: 'relative',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <div style={{ position: 'absolute', inset: '-0.55px 0 0 0' }}>
            <img
              alt=""
              style={{
                display: 'block',
                maxWidth: 'none',
                width: '100%',
                height: '100%',
              }}
              src={dividerImg}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {hasDiscount && (
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <p
                  style={{
                    textDecorationSkipInk: 'none',
                    textDecorationStyle: 'solid',
                    lineHeight: 'normal',
                    textDecorationLine: 'line-through',
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    fontSize: '14px',
                    color: 'white',
                    letterSpacing: '0.42px',
                    textTransform: 'uppercase',
                  }}
                >
                  {formatPrice(event.price)}
                </p>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <p
                    style={{
                      lineHeight: 'normal',
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      fontSize: '12px',
                      color: 'white',
                      letterSpacing: '0.36px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {event.current_discount}% off
                  </p>
                </div>
              </div>
            )}
            <p
              style={{
                lineHeight: 'normal',
                fontStyle: 'normal',
                position: 'relative',
                flexShrink: 0,
                fontSize: '18px',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              {formatPrice(event.discounted_price)}
            </p>
          </div>
          <button
            onClick={() => navigate(`/event/${event.id}`)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              alignSelf: 'stretch',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '8px',
                paddingBottom: '8px',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  lineHeight: 'normal',
                  fontStyle: 'normal',
                  position: 'relative',
                  flexShrink: 0,
                  fontSize: '16px',
                  color: 'black',
                  textTransform: 'uppercase',
                }}
              >
                I&apos;M IN
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
