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
  {
    name: 'BéƠi Pop-up — Glen Waverley',
    address: 'Kingsway & Railway Parade North, Glen Waverley VIC 3150',
    phone: '(03) 9005 5678',
    hours: 'Fri–Sun 8:00 AM – 3:00 PM',
    mapQuery: 'Kingsway and Railway Parade North Glen Waverley VIC 3150',
  },
  {
    name: 'BéƠi Catering HQ',
    address: 'Unit 4/12-16 Cook Road, Mitcham VIC 3132',
    phone: '(03) 9005 9012',
    hours: 'Mon–Fri 6:00 AM – 2:00 PM',
    mapQuery: '12-16 Cook Road Mitcham VIC 3132',
  },
  {
    name: 'BéƠi Coffee Cart — Chadstone',
    address: '1341 Dandenong Road, Chadstone VIC 3148',
    phone: '(03) 9005 3456',
    hours: 'Mon–Sun 9:00 AM – 6:00 PM',
    mapQuery: '1341 Dandenong Road Chadstone VIC 3148',
  },
  {
    name: 'BéƠi Training Lab',
    address: 'Level 2, 520 Collins Street, Melbourne VIC 3000',
    phone: '(03) 9005 7890',
    hours: 'By appointment only',
    mapQuery: '520 Collins Street Melbourne VIC 3000',
  },
  {
    name: 'BéƠi Roastery',
    address: '28 Cochranes Road, Moorabbin VIC 3189',
    phone: '(03) 9005 6543',
    hours: 'Mon–Sat 6:00 AM – 4:00 PM',
    mapQuery: '28 Cochranes Road Moorabbin VIC 3189',
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white z-50 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h4 className="text-2xl font-semibold">Enter your zip code</h4>
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
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="p-6 border-b flex gap-4"
            >
              <input
                type="text"
                placeholder="ZIP code"
                className="flex-grow px-4 py-2 border-2 border-gray-200 rounded focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors"
              >
                Submit
              </button>
            </form>
            <div className="flex-grow overflow-y-auto p-6">
              <h5 className="font-semibold mb-4">CLOSEST LOCATIONS:</h5>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b pb-6 last:border-0"
                  >
                    <h6 className="font-bold text-lg mb-2">{location.name}</h6>
                    <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                    <p className="text-gray-600 text-sm mb-1">{location.phone}</p>
                    <p className="text-gray-500 text-xs">Store Hours: {location.hours}</p>
                    <div className="mt-3 flex gap-3 text-sm">
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LocationsModal

