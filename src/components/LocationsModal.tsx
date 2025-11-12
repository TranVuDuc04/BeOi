import { motion, AnimatePresence } from 'framer-motion'

interface LocationsModalProps {
  isOpen: boolean
  onClose: () => void
}

const locations = [
  {
    name: 'BéƠi Mt Waverley',
    address: '1 Barlyn Road, Mount Waverley VIC 3149',
    phone: '(03) 9005 1234',
    hours: 'Mon–Sun 7:00 AM – 5:00 PM',
    mapQuery: '1 Barlyn Road Mount Waverley VIC 3149',
  },
]

const LocationsModal = ({ isOpen, onClose }: LocationsModalProps) => {
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full h-full md:h-auto max-w-4xl md:max-h-[90vh] bg-white z-50 shadow-2xl overflow-hidden flex flex-col rounded-none md:rounded-2xl"
          >
            <div className="p-4 md:p-6 border-b flex items-center justify-between">
              <h4 className="text-2xl font-semibold">Our location</h4>
              <button
                onClick={onClose}
                className="p-2 text-brand-blue hover:text-brand-blue/70 transition-colors"
                aria-label="Close locations"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-4 md:p-6">
              {locations.map((location) => (
                <div key={location.name} className="space-y-3">
                  <h5 className="text-xl font-semibold">{location.name}</h5>
                  <div className="text-gray-600 text-sm">
                    <p>{location.address}</p>
                    <p>{location.phone}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">{location.hours}</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <a
                      href="mailto:hello@beoi.cafe"
                      className="text-brand-blue hover:text-brand-blue/70 transition-colors underline"
                    >
                      Order now
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue/70 transition-colors underline"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LocationsModal

