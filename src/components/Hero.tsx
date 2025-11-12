import { motion } from 'framer-motion'

const heroImage =
  'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-soft/20 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              The neighborhood coffee shop of Melbourne
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-neutral-600 mb-10"
            >
              BéƠi is your everyday corner cafe - crafted drinks, warm hospitality, and a place to slow down.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#"
                className="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors text-center rounded-full shadow-sm"
              >
                Shop now
              </a>
              <a
                href="#"
                className="inline-block px-8 py-3 border-2 border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-brand-yellow transition-colors text-center rounded-full"
              >
                Order Now
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-lg lg:max-w-none mx-auto lg:mx-0"
          >
            <img
              src={heroImage}
              alt="Barista pouring latte art at BéƠi"
              className="w-full h-[420px] sm:h-[480px] lg:h-[500px] object-cover rounded-[32px] shadow-2xl"
            />
            <div className="absolute inset-0 rounded-[32px] border border-white/40" />
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

