"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function NewsMediaPage() {
  return (
    <div className="min-h-screen bg-[#F2F3F4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/news-media/news.jpg"
            alt="News & Media"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-[-0.02em] mb-6">
              News &
              <br />
              <span className="font-normal">Media</span>
            </h1>
            <div className="h-[1px] w-20 bg-white/30 mb-6" />
            <p className="text-white/60 text-sm tracking-wide font-light leading-relaxed">
              Stay updated with the latest developments, innovations, and stories from CadraTec
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px] mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Latest Updates
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-12 text-neutral-900">
              Latest from CadraTec
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/news-media/facility.png"
                  alt="New Manufacturing Facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <span className="text-sm text-neutral-500">March 15, 2024</span>
                <h3 className="text-xl font-light text-neutral-900">New Manufacturing Facility Opens in Switzerland</h3>
                <p className="text-neutral-600">
                  CadraTec expands its operations with a state-of-the-art manufacturing facility, enhancing our production capabilities.
                </p>
                <Link href="#" className="inline-block text-sm text-neutral-900 hover:text-neutral-500 transition-colors">
                  Read more →
                </Link>
              </div>
            </motion.div>

            {/* News Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/news-media/award.jpg"
                  alt="Innovation Award"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <span className="text-sm text-neutral-500">March 10, 2024</span>
                <h3 className="text-xl font-light text-neutral-900">CadraTec Wins Innovation Award</h3>
                <p className="text-neutral-600">
                  Recognition for our groundbreaking work in sustainable watch manufacturing and innovative dial designs.
                </p>
                <Link href="#" className="inline-block text-sm text-neutral-900 hover:text-neutral-500 transition-colors">
                  Read more →
                </Link>
              </div>
            </motion.div>

            {/* News Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/news-media/partner.jpg"
                  alt="Partnership Announcement"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <span className="text-sm text-neutral-500">March 5, 2024</span>
                <h3 className="text-xl font-light text-neutral-900">Strategic Partnership Announcement</h3>
                <p className="text-neutral-600">
                  CadraTec announces new partnership with leading luxury watch brands to expand market presence.
                </p>
                <Link href="#" className="inline-block text-sm text-neutral-900 hover:text-neutral-500 transition-colors">
                  Read more →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-24 bg-[#F2F3F4]">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px] mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Media Gallery
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-12 text-neutral-900">
              Visual Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Items */}
            {[
              { src: '/images/news-media/1.jpg', format: 'jpg' },
              { src: '/images/news-media/2.webp', format: 'webp' },
              { src: '/images/news-media/3.jpg', format: 'jpg' },
              { src: '/images/news-media/5.avif', format: 'avif' },
              { src: '/images/news-media/6.jpg', format: 'jpg' },
              { src: '/images/news-media/44.jpg', format: 'jpg' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Resources
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-12 text-neutral-900">
              Press Kit
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Access our press kit for high-resolution images, company information, and media resources.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-4 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Download Press Kit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 