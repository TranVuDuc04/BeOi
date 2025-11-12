import { motion } from 'framer-motion'

const location = {
  name: 'BéƠi Cafe',
  addressLine1: '1 Barlyn Rd',
  addressLine2: 'Mt Waverley, VIC 3149',
  email: 'Beoicafe@outlook.com',
}

const About = () => {
  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue/90 to-black text-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-brand-yellow/70">
              Visit Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Brewing community in the heart of Mt Waverley
            </h1>
            <p className="text-lg md:text-xl text-brand-soft/80">
              Swing by our first cafe, grab your favourite sip, and say hello. We can’t wait to welcome you in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-brand-blue">Our Cafe</h2>
            <p className="text-neutral-600">
              Tucked just off the heart of Mount Waverley, our cafe is built for slow mornings, midday catch-ups, and
              late-afternoon pick-me-ups.
            </p>
            <div className="bg-white border border-brand-gray/30 rounded-2xl p-6 space-y-4 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{location.name}</h3>
                <p className="text-neutral-600">
                  {location.addressLine1}
                  <br />
                  {location.addressLine2}
                </p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-neutral-500">Email</span>
                <p className="text-neutral-700">
                  <a href={`mailto:${location.email}`} className="underline hover:text-neutral-900 transition-colors">
                    {location.email}
                  </a>
                </p>
              </div>
              <div className="border-t border-brand-gray/30 pt-4">
                <p className="text-sm text-neutral-500">
                  Opening hours coming soon. Follow us on social for the latest updates and sneak peeks.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-brand-gray/30 rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="Interior of BéƠi cafe in Mount Waverley"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-neutral-700">
                Easy street parking is available nearby. We also sit a short stroll from Mount Waverley Station, making
                it simple to pop in on your morning commute.
              </p>
              <p className="text-neutral-700">
                Have a question before you visit? Drop us a line at{' '}
                <a href={`mailto:${location.email}`} className="underline hover:text-neutral-900">
                  {location.email}
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Story */}
      <section className="bg-white border-t border-brand-gray/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-brand-blue/60">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neutral-900">
                From dream to daily ritual
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                BéƠi Cafe started as a tiny idea—we wanted a space where coffee could spark connection, where every cup
                felt like a reminder to pause. After months of planning, roasting, and tasting with friends, we opened
                the doors to our first shop on Barlyn Road.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Today, we’re still obsessed with sourcing beans we love, crafting drinks with care, and creating a warm
                corner of the neighbourhood that feels like home. Whether you’re grabbing a latte to go or settling in
                for an afternoon hang, we’re here to make your day a little brighter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-blue text-brand-yellow rounded-2xl p-10 space-y-6 shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-brand-yellow">What we’re about</h3>
              <ul className="space-y-4 text-brand-yellow/80">
                <li>
                  <strong className="text-brand-yellow">Neighbourhood first.</strong> Our cafe is designed as a gathering spot
                  where everyone feels welcome.
                </li>
                <li>
                  <strong className="text-brand-yellow">Obsessed with the details.</strong> From the beans to the final pour,
                  we sweat the small stuff so every sip is memorable.
                </li>
                <li>
                  <strong className="text-brand-yellow">Community over everything.</strong> We love collaborating with local
                  makers, artists, and friends to keep Mt Waverley buzzing.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


