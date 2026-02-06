import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Event from './pages/Event'
import Checkout from './pages/Checkout'
import Intro from './pages/Intro'
import Success from './pages/Success'
import { OnboardingProvider } from './context/OnboardingContext'

const App = () => {
  return (
    <OnboardingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </OnboardingProvider>
  )
}

export default App
