import { motion } from 'framer-motion'

interface TimelineItem {
  title: string
  description: string
  media: Array<{
    src: string
    type: 'image' | 'video'
    alt: string
  }>
}

const timelineData: TimelineItem[] = [
  {
    title: 'The Beginning',
    description: "Transforming this space was a full journey. The shop was so old that we had to rebuild almost everything from the ground up. Many custom details couldn't be done locally, so we worked with artisans in Vietnam to hand-make pieces that matched our vision.",
    media: [
      { src: '/timeline/p1.1.jpeg', type: 'image', alt: 'The Beginning' },
      { src: '/timeline/p1.2.jpeg', type: 'image', alt: 'The Beginning' },
      { src: '/timeline/p1.3.jpeg', type: 'image', alt: 'The Beginning' },
    ],
  },
  {
    title: 'Building Our Home',
    description: 'Throughout the process, I spent countless late nights talking with builders and makers—sometimes until 2 or 3 in the morning—just to keep everything on track. Completing a shop like this in only two months was incredibly intense. Every phase brought its own challenges, from sourcing materials to coordinating international craftsmanship.',
    media: [
      { src: '/timeline/p2.1.jpeg', type: 'image', alt: 'Building Our Home' },
      { src: '/timeline/p2.2.mp4', type: 'video', alt: 'Building Our Home' },
      { src: '/timeline/p2.3.mp4', type: 'video', alt: 'Building Our Home' },
    ],
  },
  {
    title: 'Growing Forward',
    description: "But those challenges shaped the final result. Each photo and video you'll see tells part of that story: the hard work, the pressure, and the excitement of bringing a new coffee shop to life.",
    media: [],
  },
]

const Timeline = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#f5f5f0] border-t border-brand-gray/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-brand-blue/60 font-medium">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-neutral-900">
            From dream to daily ritual
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue/20 via-brand-blue/40 to-brand-blue/20 transform -translate-x-1/2" />

          <div className="space-y-20 md:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-5 h-5 rounded-full bg-brand-blue border-4 border-white shadow-xl z-10" />

                <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Title and Description */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 md:mb-6"
                    >
                      {item.title}
                    </motion.h3>
                    {item.description && (
                      <motion.p
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg text-neutral-600 leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>

                  {/* Media grid */}
                  {item.media.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex-1 w-full"
                    >
                      <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {item.media.map((media, mediaIndex) => (
                          <motion.div
                            key={mediaIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + mediaIndex * 0.1 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
                          >
                            {media.type === 'image' ? (
                              <img
                                src={media.src}
                                alt={media.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <video
                                src={media.src}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

