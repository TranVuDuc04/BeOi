import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories } from '../data/catalog'

const categoryMap = Object.fromEntries(categories.map((category) => [category.slug, category.name]))

interface ProductsPageProps {
  onAddToCart: () => void
}

const ProductsPage = ({ onAddToCart }: ProductsPageProps) => {
  const { category = 'products' } = useParams<{ category: string }>()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const scopedProducts =
      category === 'products'
        ? products
        : products.filter((p) => p.category === category)

    let filtered = scopedProducts

    if (availabilityFilter.includes('in-stock')) {
      filtered = filtered.filter((p) => p.inStock)
    }
    if (availabilityFilter.includes('out-of-stock')) {
      filtered = filtered.filter((p) => !p.inStock)
    }

    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= parseFloat(priceRange.min))
    }
    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= parseFloat(priceRange.max))
    }

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })
  }, [category, availabilityFilter, priceRange, sortBy])

  const toggleAvailability = (value: string) => {
    setAvailabilityFilter(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {categoryMap[category] || 'All Products'}
        </h1>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="font-semibold mb-4">Filters</h2>

              {/* Availability */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes('in-stock')}
                      onChange={() => toggleAvailability('in-stock')}
                      className="mr-2"
                    />
                    <span className="text-sm">In stock ({products.filter(p => p.inStock).length})</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={availabilityFilter.includes('out-of-stock')}
                      onChange={() => toggleAvailability('out-of-stock')}
                      className="mr-2"
                    />
                    <span className="text-sm">Out of stock ({products.filter(p => !p.inStock).length})</span>
                  </label>
                </div>
                {availabilityFilter.length > 0 && (
                  <button
                    onClick={() => setAvailabilityFilter([])}
                    className="text-xs text-gray-500 mt-2 hover:text-gray-700"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="From $"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:border-brand-blue"
                    />
                    <input
                      type="number"
                      placeholder="To $"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:border-brand-blue"
                    />
                  </div>
                  {(priceRange.min || priceRange.max) && (
                    <button
                      onClick={() => setPriceRange({ min: '', max: '' })}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4 flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-brand-soft/50 focus:border-brand-blue"
              >
                Filter and sort
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:border-brand-blue"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Alphabetically, A-Z</option>
                <option value="name-desc">Alphabetically, Z-A</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
              </select>
            </div>

            {/* Mobile Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden mb-6 bg-white p-4 rounded-lg shadow-sm overflow-hidden"
                >
                  {/* Same filter content as sidebar */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-3">Availability</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={availabilityFilter.includes('in-stock')}
                          onChange={() => toggleAvailability('in-stock')}
                          className="mr-2"
                        />
                        <span className="text-sm">In stock</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={availabilityFilter.includes('out-of-stock')}
                          onChange={() => toggleAvailability('out-of-stock')}
                          className="mr-2"
                        />
                        <span className="text-sm">Out of stock</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price</h3>
                    <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="From $"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:border-brand-blue"
                    />
                      <input
                        type="number"
                        placeholder="To $"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:border-brand-blue"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Alphabetically, A-Z</option>
                <option value="name-desc">Alphabetically, Z-A</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-brand-blue/30"
                >
                  <div className="relative aspect-square bg-gray-100 overflow-hidden flex flex-col">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onAddToCart}
                        disabled={!product.inStock}
                        className="px-6 py-2 bg-white text-brand-blue border border-brand-blue text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Quick add
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

