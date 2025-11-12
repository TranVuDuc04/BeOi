import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 sm:pt-20"
          >
            <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SearchModal

