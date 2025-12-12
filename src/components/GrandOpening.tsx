import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const GrandOpening = () => {
  const firstLookVideoRef = useRef<HTMLVideoElement>(null)
  const collaborationVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleVideoPlay = (video: HTMLVideoElement | null) => {
      if (!video) return
      
      // Start muted for autoplay to work
      video.muted = true
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Try to unmute after video starts playing
            // Some browsers allow this after user interaction
            setTimeout(() => {
              video.muted = false
            }, 1000)
          })
          .catch(() => {
            // If play fails, keep muted and try again
            video.muted = true
            video.play().catch(() => {
              // Autoplay was prevented
            })
          })
      }
    }

    const firstLookObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVideoPlay(firstLookVideoRef.current)
          } else {
            firstLookVideoRef.current?.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    const collaborationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVideoPlay(collaborationVideoRef.current)
          } else {
            collaborationVideoRef.current?.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    const firstLookVideo = firstLookVideoRef.current
    const collaborationVideo = collaborationVideoRef.current

    if (firstLookVideo) {
      firstLookObserver.observe(firstLookVideo)
    }
    if (collaborationVideo) {
      collaborationObserver.observe(collaborationVideo)
    }

    return () => {
      if (firstLookVideo) {
        firstLookObserver.unobserve(firstLookVideo)
      }
      if (collaborationVideo) {
        collaborationObserver.unobserve(collaborationVideo)
      }
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Grand Opening Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue py-3 md:py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-yellow"
            />
            <p className="text-sm md:text-base font-medium tracking-wide uppercase">
              Grand Opening • December 16th
            </p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-yellow"
            />
          </div>
        </div>
      </motion.div>

      <div className="pt-16 md:pt-20">
        {/* First Look Video Section */}
        <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
          <video
            ref={firstLookVideoRef}
            src="/grand-opening/firstlook.mp4"
            loop
            playsInline
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Welcome to BéƠi
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Where every cup tells a story
            </p>
          </motion.div>
        </div>

        {/* Store Picture Section */}
        <div className="relative bg-gradient-to-b from-black via-neutral-900 to-black py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] shadow-2xl">
                <img
                  src="/grand-opening/1.jpeg"
                  alt="BéƠi Cafe storefront"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                  >
                    Our Home
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
                  >
                    A space crafted with care, where community meets coffee
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Collaboration Video Section */}
        <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-black">
          <video
            ref={collaborationVideoRef}
            src="/grand-opening/202512130012.mp4"
            loop
            playsInline
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Crafted Collaborations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8">
              Proudly partnering with Marou Chocolate and local perfumers to bring you unique experiences
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              <Link
                to="/chocolate"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm md:text-base font-medium">Marou Chocolate</span>
              </Link>
              <Link
                to="/perfume"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm md:text-base font-medium">Artisan Perfumes</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GrandOpening

