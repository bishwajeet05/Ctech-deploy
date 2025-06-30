'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const BentoGridSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Specialized Features */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-32"
          >
            {/* Swiss Precision */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl font-light text-neutral-900">Expert Restoration</h2>
                <div className="space-y-6">
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Our master craftsmen bring decades of experience to every restoration project. Using traditional techniques and modern precision tools, we breathe new life into cherished timepieces.
                  </p>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Each restoration is approached with meticulous attention to detail, ensuring that every component is carefully preserved or enhanced while maintaining the watch's original character and value.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/services/dial-restoration.webp"
                    alt="Expert Watch Restoration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>

            {/* Customizable Designs */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl font-light text-neutral-900">Comprehensive Services</h2>
                <div className="space-y-6">
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    From routine maintenance to complex repairs, our comprehensive service suite covers every aspect of watch care. We offer specialized treatments for vintage and modern timepieces alike.
                  </p>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Our expert technicians utilize state-of-the-art equipment and techniques to ensure your timepiece receives the highest level of care, maintaining both its functionality and aesthetic appeal.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg"
                >
                  <Image
                    src="/images/services/services.webp"
                    alt="Comprehensive Watch Services"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>

            {/* Advanced Technology */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl font-light text-neutral-900">Laboratory Testing</h2>
                <div className="space-y-6">
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Our advanced laboratory facilities enable precise diagnostics and quality control. Every timepiece undergoes rigorous testing to ensure optimal performance and reliability.
                  </p>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Using cutting-edge equipment and proprietary testing protocols, we verify water resistance, timing accuracy, and movement integrity. This scientific approach guarantees that your watch meets or exceeds original specifications.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-black"
                >
                  <Image
                    src="/images/services/lab-testing.webp"
                    alt="Laboratory Testing"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Watchmaking Reimagined Section */}
        <div className="mb-40">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px] mb-40"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Watchmaking, Reimagined
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-24 text-neutral-900">
              CadraTec reinvents what luxury watchmaking should be,{" "}
              <span className="text-neutral-500">combining precision, advanced technology, and personalized care.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-16 w-full">
              <div>
                <h3 className="text-[1.25rem] font-medium text-neutral-900 leading-snug">
                  Take control of your timepiece with a comprehensive assessment unlike any other.
                </h3>
              </div>
              <div>
                <p className="text-[15px] text-neutral-600 leading-relaxed">
                  We use the latest innovations in watchmaking, including next-generation manufacturing techniques, 
                  precision assessments, and early defect detection. The CadraTec team carefully evaluates your timepiece 
                  to provide actionable insights for improving its quality and lifespan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Main Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[85vh] overflow-hidden rounded-2xl bg-neutral-100"
            >
              <Image
                src="/images/bento-grid/luxury_experience.webp"
                alt="Luxury Experience"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 max-w-md bg-black/80 rounded-tr-2xl">
                <h3 className="text-lg text-white font-light mb-2">Luxury Experience</h3>
                <p className="text-[13px] text-white/80 leading-relaxed">
                  CadraTec offers personalized, concierge-level service in a beautifully designed setting, where every detail is crafted to perfection.
                </p>
              </div>
            </motion.div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Advanced Technology */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[65vh] overflow-hidden rounded-2xl bg-blue-50"
              >
                <Image
                  src="/images/bento-grid/advanced_technology.webp"
                  alt="Advanced Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 max-w-md bg-black/80 rounded-tr-2xl">
                  <h3 className="text-lg text-white font-light mb-2">Advanced Technology</h3>
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    Our state-of-the-art facilities combine traditional expertise with cutting-edge innovation for unmatched precision.
                  </p>
                </div>
              </motion.div>

              {/* Your CadraTec Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[65vh] overflow-hidden rounded-2xl bg-neutral-100"
              >
                <Image
                  src="/images/bento-grid/CadraTech_Experience.webp"
                  alt="Your CadraTec Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 max-w-md bg-black/80 rounded-tr-2xl">
                  <h3 className="text-lg text-white font-light mb-2">Your CadraTec Experience</h3>
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    Experience the perfect blend of artistry and innovation in our exclusive atelier environment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 