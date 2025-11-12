import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, products } from '../data/catalog'

interface ShopProps {
  onAddToCart: () => void
}

const Shop = ({ onAddToCart }: ShopProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'products'
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const scopedProducts =
      selectedCategory === 'products'
        ? products
        : products.filter((product) => product.category === selectedCategory)

    return [...scopedProducts].sort((a, b) => {
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
  }, [selectedCategory, sortBy])

  const handleCategoryClick = (slug: string) => {
    setSearchParams({ category: slug })
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <div className="flex">
        {/* Sidebar - Categories */}
        <aside className="hidden md:block w-64 flex-shrink-0 bg-[#f5f5f0] border-r border-brand-gray/30 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? 'text-brand-blue font-semibold bg-white rounded-xl border border-brand-blue/40 shadow-sm'
                      : 'text-neutral-600 hover:text-brand-blue hover:bg-brand-soft/40 rounded-xl'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content - Products */}
        <main className="flex-grow min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">
                {categories.find(c => c.slug === selectedCategory)?.name || 'All Products'}
              </h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded bg-white focus:border-brand-blue"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Alphabetically, A-Z</option>
                <option value="name-desc">Alphabetically, Z-A</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
              </select>
            </div>

            {/* Mobile Category Selector */}
            <div className="md:hidden mb-6">
              <label htmlFor="mobile-category" className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Browse categories
              </label>
              <select
                id="mobile-category"
                value={selectedCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:border-brand-blue"
              >
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm text-brand-gray mb-6">
              {filteredProducts.length} products
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-transparent hover:border-brand-blue/30"
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
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </main>
      </div>

    </div>
  )
}

export default Shop
