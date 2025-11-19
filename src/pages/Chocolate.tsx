import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

// Chocolate products data - using the 20 images
const chocolateProducts = [
  { id: 1, name: 'BA RIA 76% Single Origin', price: 8.90, image: '/chocolate-images/chocolate1.webp' },
  { id: 2, name: 'TIEN GIANG 80% Single Origin', price: 10.90, image: '/chocolate-images/chocolate2.webp' },
  { id: 3, name: 'BEN TRE 78% Single Origin', price: 8.90, image: '/chocolate-images/chocolate3.webp' },
  { id: 4, name: 'LAM DONG 74% Single Origin', price: 8.90, image: '/chocolate-images/chocolate4.webp' },
  { id: 5, name: 'DONG NAI 72% Single Origin', price: 8.90, image: '/chocolate-images/chocolate5.webp' },
  { id: 6, name: 'TIEN GIANG 70% Single Origin', price: 8.90, image: '/chocolate-images/chocolate6.webp' },
  { id: 7, name: 'BEN TRE 70% Single Origin', price: 8.90, image: '/chocolate-images/chocolate7.webp' },
  { id: 8, name: 'LAM DONG 70% Single Origin', price: 8.90, image: '/chocolate-images/chocolate8.webp' },
  { id: 9, name: 'BA RIA 70% Single Origin', price: 8.90, image: '/chocolate-images/chocolate9.webp' },
  { id: 10, name: 'DONG NAI 70% Single Origin', price: 8.90, image: '/chocolate-images/chocolate10.webp' },
  { id: 11, name: 'TIEN GIANG 65% Single Origin', price: 8.90, image: '/chocolate-images/chocolate11.webp' },
  { id: 12, name: 'BEN TRE 65% Single Origin', price: 8.90, image: '/chocolate-images/chocolate12.webp' },
  { id: 13, name: 'LAM DONG 65% Single Origin', price: 8.90, image: '/chocolate-images/chocolate13.webp' },
  { id: 14, name: 'BA RIA 65% Single Origin', price: 8.90, image: '/chocolate-images/chocolate14.webp' },
  { id: 15, name: 'DONG NAI 65% Single Origin', price: 8.90, image: '/chocolate-images/chocolate15.webp' },
  { id: 16, name: 'TIEN GIANG 60% Single Origin', price: 8.90, image: '/chocolate-images/chocolate16.webp' },
  { id: 17, name: 'BEN TRE 60% Single Origin', price: 8.90, image: '/chocolate-images/chocolate17.webp' },
  { id: 18, name: 'LAM DONG 60% Single Origin', price: 8.90, image: '/chocolate-images/chocolate18.webp' },
  { id: 19, name: 'BA RIA 60% Single Origin', price: 8.90, image: '/chocolate-images/chocolate19.webp' },
  { id: 20, name: 'DONG NAI 60% Single Origin', price: 8.90, image: '/chocolate-images/chocolate20.webp' },
]

const Chocolate = ({ onAddToCart }: { onAddToCart?: () => void }) => {
  const [sortBy, setSortBy] = useState('best-selling')
  const [showFilters, setShowFilters] = useState(false)

  const sortedProducts = useMemo(() => {
    const sorted = [...chocolateProducts]
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return sorted
    }
  }, [sortBy])

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 font-display leading-tight">
            VIETNAM'S FINEST CHOCOLATE TABLETS
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
            Hop on a sensory journey, where each bar is a harmonious blend of rich flavors and artisanal craftsmanship. From the vibrant notes of locally sourced ingredients to the precision of our crafting process, this is a celebration of the diverse and exquisite flavors that make Vietnam truly special.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"></div>
        </motion.div>

        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-xs sm:text-sm font-medium text-gray-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="hidden xs:inline">SHOW FILTERS</span>
              <span className="xs:hidden">FILTERS</span>
            </button>
            <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
              {sortedProducts.length} PRODUCTS
            </span>
          </div>
          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded px-3 py-2 sm:px-4 pr-8 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <option value="best-selling">BEST SELLING</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="name">NAME: A TO Z</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                  {product.name}
                </h3>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  €{product.price.toFixed(2)}
                </p>
                <button
                  onClick={onAddToCart}
                  className="w-full px-3 py-2 sm:px-4 bg-brand-blue text-brand-yellow font-medium rounded hover:bg-brand-blue/90 transition-colors text-xs sm:text-sm"
                >
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chocolate
