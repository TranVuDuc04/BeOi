import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Chocolate = () => {
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
            Our Chocolate Collection
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Handcrafted with the same care and passion we bring to every cup of coffee
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
                At BéƠi, we believe that great coffee deserves great companions. Our chocolate collection
                was born from a simple idea: what if we could create something that pairs perfectly with
                our carefully roasted beans?
              </p>
              <p>
                Each piece is crafted using premium cacao sourced from sustainable farms, blended with
                unique flavors that complement our coffee profiles. From rich dark chocolate bars to
                delicate truffles infused with coffee notes, every creation tells a story of passion
                and attention to detail.
              </p>
              <p>
                Whether you're enjoying a morning espresso with a dark chocolate square or gifting
                someone special with our artisanal collection, our chocolates are made to elevate
                your coffee experience.
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
            to="/shop?category=chocolate"
            className="inline-block px-8 py-3 bg-brand-blue text-brand-yellow font-medium rounded-full border border-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm"
          >
            Shop Chocolate Collection
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Chocolate

