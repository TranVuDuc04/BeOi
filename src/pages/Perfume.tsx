import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Perfume = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue font-display">
            Our Perfume Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Fragrances inspired by the rich aromas and memories of coffee culture
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The connection between coffee and fragrance runs deep. Every morning, the first whiff
                of freshly ground beans awakens our senses and sets the tone for the day. We wanted
                to capture that magic in a bottle.
              </p>
              <p>
                Our perfume collection is a sensory journey through the world of coffee. Each scent
                is carefully crafted to evoke the warm, inviting atmosphere of a coffee shop—notes
                of roasted beans, vanilla, caramel, and hints of citrus and spice.
              </p>
              <p>
                Whether you're looking for a signature scent that reminds you of your favorite brew
                or a unique gift for a coffee lover, our perfumes are designed to be as memorable
                and distinctive as the coffee we serve.
              </p>
              <p>
                Made with natural ingredients and inspired by the artisanal spirit of BéƠi, these
                fragrances are more than just scents—they're an extension of our coffee culture.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Link
            to="/shop?category=perfume"
            className="inline-block px-8 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Shop Perfume Collection
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Perfume

