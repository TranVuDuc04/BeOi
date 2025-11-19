import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface HeaderProps {
  onCartClick: () => void
  onSearchClick: () => void
  onMenuClick: () => void
  cartCount: number
  isSidebarOpen: boolean
  onCloseSidebar: () => void
}

const Header = ({
  onCartClick,
  onSearchClick,
  onMenuClick,
  cartCount,
  isSidebarOpen,
  onCloseSidebar,
}: HeaderProps) => {
  const [isSpecialtyHovered, setIsSpecialtyHovered] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-gray/30">
      {/* Announcement Bar */}
      <div className="bg-brand-blue text-brand-yellow text-center py-2 text-sm font-medium tracking-wide">
        GRAND OPENING — THANKS FOR VISITING OUR SHOP!
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-brand-blue hover:text-brand-blue/70 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-3xl font-bold tracking-tight font-display text-brand-blue"
          >
            <img
              src="/logo.jpg"
              alt="BéƠi logo"
              className="h-10 w-10 rounded-lg border border-brand-blue/30 object-cover shadow-sm"
            />
            BéƠi
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-neutral-700 hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium text-neutral-700 hover:text-brand-blue transition-colors">
              Shop
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsSpecialtyHovered(true)}
              onMouseLeave={() => setIsSpecialtyHovered(false)}
            >
              <button className="text-sm font-medium text-neutral-700 hover:text-brand-blue transition-colors flex items-center gap-1">
                Specialty
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isSpecialtyHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <Link
                      to="/chocolate"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      Chocolate
                    </Link>
                    <Link
                      to="/perfume"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                    >
                      Perfume
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/about" className="text-sm font-medium text-neutral-700 hover:text-brand-blue transition-colors">
              About Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onSearchClick}
              className="p-2 text-brand-blue hover:text-brand-blue/70 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              to="/shop"
              className="hidden md:inline-block px-4 py-2 bg-brand-blue text-brand-yellow text-sm font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
            >
              ORDER NOW
            </Link>
            <button
              onClick={onCartClick}
              className="relative p-2 text-brand-blue hover:text-brand-blue/70 transition-colors"
              aria-label="Open cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 -translate-y-1 translate-x-1 bg-brand-yellow text-brand-blue text-xs rounded-full w-5 h-5 flex items-center justify-center border border-brand-blue"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseSidebar}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 shadow-xl lg:hidden border-r border-brand-gray/20"
            >
              <div className="p-4 border-b border-brand-gray/30 flex items-center justify-end">
                <button
                  onClick={onCloseSidebar}
                  className="p-2 text-brand-blue hover:text-brand-blue/70 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="p-4 space-y-2 text-brand-blue">
                <Link
                  to="/"
                  onClick={onCloseSidebar}
                  className="block py-2 text-sm font-semibold hover:text-brand-blue/70 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  onClick={onCloseSidebar}
                  className="block py-2 text-sm font-semibold hover:text-brand-blue/70 transition-colors"
                >
                  Shop
                </Link>
                <div className="py-2">
                  <span className="text-sm font-semibold block mb-2">Specialty</span>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/chocolate"
                      onClick={onCloseSidebar}
                      className="block py-1 text-sm hover:text-brand-blue/70 transition-colors"
                    >
                      Chocolate
                    </Link>
                    <Link
                      to="/perfume"
                      onClick={onCloseSidebar}
                      className="block py-1 text-sm hover:text-brand-blue/70 transition-colors"
                    >
                      Perfume
                    </Link>
                  </div>
                </div>
                <Link
                  to="/about"
                  onClick={onCloseSidebar}
                  className="block py-2 text-sm font-semibold hover:text-brand-blue/70 transition-colors"
                >
                  About Us
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

