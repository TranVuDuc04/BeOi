import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const perfumes = [
  {
    id: 1,
    name: 'White Rice',
    description: "A tribute to Vietnam's cultural symbol of livelihood - the white jasmine rice. This scent presents a subtly sweet aroma, harmonizing gentle softness with the rice grain's nuttiness. Embrace the heart of Vietnamese culture, where humble beginnings flourish into enduring strength.",
    image: '/perfume-images/perfume1.webp',
  },
  {
    id: 2,
    name: 'Monsoon Tea',
    description: 'Monsoon Tea captures the tranquil moment of savoring Vietnamese green tea after a rainstorm. Brewed with fresh tea leaves, this traditional drink is light, bright, and refreshing. As the rain subsides, every spray of Monsoon Tea is a sip of optimism, clarity, and renewal.',
    image: '/perfume-images/perfume2.webp',
  },
  {
    id: 3,
    name: 'In The Garden',
    description: "In The Garden pays tribute to rural Vietnamese garden, inspired by fond memories of our founder's visits to his grandmother. Those were the childhood days spent playing in the garden, embraced by scents of lime trees, elegant jasmine, and native flora.",
    image: '/perfume-images/perfume3.webp',
  },
  {
    id: 4,
    name: 'Harvest Season',
    description: "Harvest Season EDP embodies the enchanting spirit of Vietnam's countryside during the rice harvest season. Imagine walking along these rustic lanes, immersed in fields of golden straw. The sun shines brightly overhead as aroma of drying straw fills your senses.",
    image: '/perfume-images/perfume4.webp',
  },
  {
    id: 5,
    name: 'Phu Quoc',
    description: 'Phu Quoc EDP pays tribute to the captivating island of Phu Quoc, located off the southern coast of Vietnam. Beyond a fresh marine scent, Phu Quoc EDP presents its unique character by infusing a distinctive local twist with essence of green peppercorn and native woods.',
    image: '/perfume-images/perfume5.webp',
  },
  {
    id: 6,
    name: 'Da Lat',
    description: 'Da Lat EDP pays homage to the charming city of Da Lat, a haven of romance and serenity in central Vietnam. At its core, Da Lat EDP is an innovative rose scent that unfolds like a love letter, where every spray carries the promise of romance and surprise.',
    image: '/perfume-images/perfume6.webp',
  },
  {
    id: 7,
    name: 'Pho Breakfast',
    description: "Pho Breakfast is inspired by pho, Vietnam's national dish. This fragrance mirrors the dish's main ingredients, echoes the warmth of spice blend, and weaves in hints of fresh herbs. While not a literal translation, Pho Breakfast invites you to savour its symphony of aromas and tastes.",
    image: '/perfume-images/perfume7.webp',
  },
  {
    id: 8,
    name: 'Through The Forest',
    description: "Through The Forest tells the story of Vietnamese men venturing deep into the forest in search of prized oud. This fragrance transports you into Vietnam's jungle as alluring scents of oud beckons. It's an ode to exploration, reverence, and the treasures hidden within nature's embrace.",
    image: '/perfume-images/perfume8.webp',
  },
  {
    id: 9,
    name: 'Vietnamese Coffee',
    description: "Vietnamese Coffee EDP honors Vietnam's iconic drink, crafted from dark-roasted Robusta beans, which exude a bold, caramel-chocolate richness and a pronounced bitterness that perfectly complements condensed milk. Topped with ice, it is the perfect drink to start the day.",
    image: '/perfume-images/perfume9.webp',
  },
]

const Perfume = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPerfume = () => {
    setCurrentIndex((prev) => (prev + 1) % perfumes.length)
  }

  const prevPerfume = () => {
    setCurrentIndex((prev) => (prev - 1 + perfumes.length) % perfumes.length)
  }

  const currentPerfume = perfumes[currentIndex]

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
            Our d'Annam Perfume Collection
          </h1>
        </motion.div>

        {/* Story Section - Letter from Founder */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-8 md:p-12"
          >
            <img
              src="/perfume-images/perfume_founder.png"
              alt="A letter from the perfume founder"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Perfume Display - Split Layout (like d'Annam reference) */}
        <div className="max-w-7xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <div key={currentIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 px-4 lg:px-8"
              >
                <div className="text-sm text-brand-blue font-medium mb-4">
                  {currentIndex + 1}/9
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-blue font-display">
                  {currentPerfume.name}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {currentPerfume.description}
                </p>
                
                {/* Navigation Arrows */}
                <div className="flex items-center gap-4 pt-8">
                  <button
                    onClick={prevPerfume}
                    className="p-3 rounded-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-yellow transition-colors"
                    aria-label="Previous perfume"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextPerfume}
                    className="p-3 rounded-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-yellow transition-colors"
                    aria-label="Next perfume"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-600 ml-4">
                    Navigate through the collection
                  </span>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-yellow-50 via-blue-50 to-white"
              >
                <img
                  src={currentPerfume.image}
                  alt={currentPerfume.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>

        {/* Perfume Thumbnails Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">Browse All Perfumes</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {perfumes.map((perfume, index) => (
              <button
                key={perfume.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  currentIndex === index
                    ? 'ring-4 ring-brand-blue scale-105'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-brand-blue/20" />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 text-center">
                  {index + 1}/9
                </div>
              </button>
            ))}
          </div>
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
