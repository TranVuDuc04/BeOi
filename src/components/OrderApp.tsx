import { motion } from 'framer-motion'

const OrderApp = () => {
  return (
    <section className="py-8 md:py-10 bg-brand-soft/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_0.9fr] gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-brand-blue">
              Book catering or schedule click & collect for your next gathering.
            </h3>
            <p className="text-neutral-600 mb-4 max-w-xl">
              Plan ahead with BéƠi. Reserve platters, large-format coffees, or set pickup windows-all tailored to your event.
            </p>
            <a
              href="#"
              className="inline-block px-7 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
            >
              Plan with BéƠi
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white h-56 md:h-64 rounded-2xl flex items-center justify-center border-2 border-brand-blue/30 shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
              alt="Preview of BéƠi catering and click & collect options"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OrderApp

