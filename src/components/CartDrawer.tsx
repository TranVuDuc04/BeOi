import { motion, AnimatePresence } from 'framer-motion'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cartCount: number
}

const CartDrawer = ({ isOpen, onClose, cartCount }: CartDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h4 className="text-xl font-semibold">Your cart</h4>
              <button
                onClick={onClose}
                className="p-2 hover:text-gray-600 transition-colors"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto">
              {cartCount === 0 ? (
                <p className="text-gray-500 text-center py-12">Your cart is currently empty.</p>
              ) : (
                <p className="text-gray-500">Cart items will appear here</p>
              )}
            </div>
            <div className="p-6 border-t space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span>Total</span>
                <strong>$0.00</strong>
              </div>
              <button className="w-full px-6 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm">
                Check Out
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer

