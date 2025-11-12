import { motion } from 'framer-motion'
import { featuredProducts } from '../data/catalog'

interface ProductsProps {
  onAddToCart: () => void
}

const Products = ({ onAddToCart }: ProductsProps) => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Shop our classics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-square border border-transparent group-hover:border-brand-blue/40 transition-colors duration-300 flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onAddToCart}
                  className="px-6 py-2 bg-white text-brand-blue border border-brand-blue text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm"
                >
                  Quick add
                </motion.button>
              </div>
            </div>
            <h3 className="font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Products

