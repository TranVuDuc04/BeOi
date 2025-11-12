import { motion } from 'framer-motion'

interface LocationsCTAProps {
  onLocationsClick: () => void
}

const LocationsCTA = ({ onLocationsClick }: LocationsCTAProps) => {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center bg-white border-2 border-brand-gray/30 p-12 rounded-2xl shadow-sm"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">Visit Us</h3>
        <p className="text-gray-600 mb-8">
          Your next stop at BéƠi is just one click away.
        </p>
        <button
          onClick={onLocationsClick}
          className="px-8 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
        >
          Our locations
        </button>
      </motion.div>
    </section>
  )
}

export default LocationsCTA

