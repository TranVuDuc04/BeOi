import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const journeyImage =
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80'

const JourneySection = () => {
  return (
    <section className="py-12 md:py-20 container mx-auto px-4">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={journeyImage}
            alt="The journey behind our coffee shop"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl md:rounded-[32px] shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Journey Behind Our Coffee Shop
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Want to know more?
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors text-center rounded-full shadow-sm"
          >
            About us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection

