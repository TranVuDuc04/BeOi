import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import SearchModal from './components/SearchModal'
import LocationsModal from './components/LocationsModal'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductsPage from './pages/ProductsPage'
import About from './pages/About'
import Chocolate from './pages/Chocolate'
import Perfume from './pages/Perfume'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header
          onCartClick={() => setIsCartOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onMenuClick={() => setIsSidebarOpen(true)}
          cartCount={cartCount}
          isSidebarOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
        />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onAddToCart={() => setCartCount(prev => prev + 1)}
                  onLocationsClick={() => setIsLocationsOpen(true)}
                />
              }
            />
            <Route
              path="/shop"
              element={<Shop onAddToCart={() => setCartCount(prev => prev + 1)} />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/chocolate"
              element={<Chocolate onAddToCart={() => setCartCount(prev => prev + 1)} />}
            />
            <Route
              path="/perfume"
              element={<Perfume />}
            />
            <Route
              path="/collections/:category"
              element={<ProductsPage onAddToCart={() => setCartCount(prev => prev + 1)} />}
            />
          </Routes>
        </main>
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartCount={cartCount}
        />
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <LocationsModal
          isOpen={isLocationsOpen}
          onClose={() => setIsLocationsOpen(false)}
        />
      </div>
    </Router>
  )
}

export default App

