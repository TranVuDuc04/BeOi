import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const perfumes = [
  {
    id: 1,
    name: 'White Rice',
    description: 'A homage to Vietnam's staple grain, jasmine rice. This perfume blends a mild sweetness with the soft, nutty character of rice, reflecting the quiet resilience and cultural heart of Vietnamese life.',
  },
  {
    id: 2,
    name: 'Monsoon Tea',
    description: 'Monsoon Tea evokes the calm of enjoying Vietnamese green tea after a passing downpour. Light, clean, and refreshing, it captures that post-rain clarity — each spray feels like a fresh, uplifting sip.',
  },
  {
    id: 3,
    name: 'In The Garden',
    description: 'In The Garden draws from the founder's childhood moments in his grandmother's rural garden. Lime trees, jasmine, and local greenery come together to recreate those warm, nostalgic days spent outdoors.',
  },
  {
    id: 4,
    name: 'Harvest Season',
    description: 'Harvest Season EDP reflects the charm of Vietnam's countryside during rice harvest time. Picture yourself strolling among golden straw fields, sunlight above and the warm scent of drying grain surrounding you.',
  },
  {
    id: 5,
    name: 'Phu Quoc',
    description: 'This scent celebrates the island of Phu Quoc in southern Vietnam. It opens with a fresh coastal feel, then layers in green peppercorn and local woods to deliver a distinctive regional twist.',
  },
  {
    id: 6,
    name: 'Da Lat',
    description: 'Da Lat EDP is inspired by the romantic, tranquil atmosphere of Da Lat. At its heart is a modern rose composition that unfolds gently, like a tender message filled with affection and intrigue.',
  },
  {
    id: 7,
    name: 'Pho Breakfast',
    description: 'Pho Breakfast takes cues from Vietnam's beloved noodle soup. It brings together the aromatic spices, herbs, and warm notes that define the dish — not as a literal replica, but as a fragrant, flavorful impression.',
  },
  {
    id: 8,
    name: 'Through The Forest',
    description: 'Through The Forest retells the journeys of Vietnamese men seeking precious oud in the deep jungle. The fragrance draws you into the forest with its captivating oud presence, celebrating adventure and nature's hidden wonders.',
  },
  {
    id: 9,
    name: 'Vietnamese Coffee',
    description: 'This EDP honors Vietnam's signature iced coffee made from robust, dark-roasted Robusta beans. Rich, bitter, and caramel-like, it captures the bold flavor balanced by creamy condensed milk — an energizing morning classic.',
  },
]

const Perfume = () => {
  const [selectedPerfume, setSelectedPerfume] = useState(0)

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
        </motion.div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Dear reader,</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                As a child growing up in rural Vietnam, the founder was captivated by the symphony of scents that painted the landscapes. The lotus blossoms that graced the serene lakes, the crisp scent of morning dew on verdant rice paddies, the bitterness of lime leaves in his grandmother's garden - each scent was a thread in the tapestry of memories.
              </p>
              <p>
                As the journey led outside Vietnam, it became clear that while the world of fragrances was vast and diverse, it was missing a heart note - the scent of homeland. Thus came the idea for the first collection.
              </p>
              <p>
                This collection is a love letter to Vietnam. Each of the 9 fragrances is a personal and contemporary interpretation of heritage, hand-crafted by local perfumers to echo the melodies of the land.
              </p>
              <p>
                This is a manifestation of a dream, a sensory memoir of Vietnam.
              </p>
              <p>
                Let the journey begin.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-semibold text-brand-blue">Nick Hoang</p>
              <p className="text-sm text-gray-600">Founder</p>
              <p className="text-sm text-gray-600">BéƠi</p>
            </div>
          </motion.div>
        </div>

        {/* Perfume Carousel/Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perfumes.map((perfume, index) => (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedPerfume(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm text-brand-blue font-medium">
                    {index + 1}/9
                  </span>
                  {selectedPerfume === index && (
                    <span className="text-xs bg-brand-yellow text-brand-blue px-2 py-1 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-blue">{perfume.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{perfume.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Perfume Detail */}
        {selectedPerfume !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
                {perfumes[selectedPerfume].name}
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {perfumes[selectedPerfume].description}
              </p>
            </div>
          </motion.div>
        )}

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
