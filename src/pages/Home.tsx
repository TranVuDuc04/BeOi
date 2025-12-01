import Hero from '../components/Hero'
import Products from '../components/Products'
import OrderApp from '../components/OrderApp'
import LocationsCTA from '../components/LocationsCTA'
import OrderMarquee from '../components/OrderMarquee'
import JourneySection from '../components/JourneySection'

interface HomeProps {
  onAddToCart: () => void
  onLocationsClick: () => void
}

const Home = ({ onAddToCart, onLocationsClick }: HomeProps) => {
  return (
    <>
      <Hero />
      <JourneySection />
      <Products onAddToCart={onAddToCart} />
      <OrderMarquee />
      <OrderApp />
      <LocationsCTA onLocationsClick={onLocationsClick} />
    </>
  )
}

export default Home

