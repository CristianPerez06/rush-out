import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import successAnimation from '../assets/success.json'

const Success = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col text-white"
      style={{
        background: '#074EDA',
        padding: '32px 26px',
      }}
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          className="flex items-center justify-center"
          style={{
            width: 240.27,
            height: 445.33,
            transform: 'rotate(3.49deg)',
          }}
        >
          <Lottie
            animationData={successAnimation}
            loop={false}
            style={{ width: 240.27, height: 445.33 }}
          />
        </div>
        <p
          className="mt-8 text-center uppercase"
          style={{
            fontWeight: 500,
            fontSize: '22.4728px',
            lineHeight: '29px',
            letterSpacing: '0.05em',
          }}
        >
          The night&apos;s waiting.
        </p>
      </div>
      <div className="pb-2">
        <Link
          to="/"
          className="flex h-[68px] w-full items-center justify-center rounded-[50px] bg-black uppercase text-white"
          style={{
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '22px',
          }}
        >
          View tickets
        </Link>
      </div>
    </div>
  )
}

export default Success
