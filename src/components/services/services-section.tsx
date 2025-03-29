'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Pad Printing",
    description: "Precision pad printing services for watch dials and components.",
    icon: "🎯"
  },
  {
    title: "Screen Printing",
    description: "High-quality screen printing for intricate watch face designs.",
    icon: "🖨️"
  },
  {
    title: "SuperLuminova Application",
    description: "Expert application by hand and screen printing techniques.",
    icon: "✨"
  },
  {
    title: "Lacquer Filling",
    description: "Meticulous hand-applied lacquer filling for premium finishes.",
    icon: "🖌️"
  },
  {
    title: "Calendar Disc Printing",
    description: "Specialized printing for plastic and metal calendar discs.",
    icon: "📅"
  },
  {
    title: "PVD Treatment",
    description: "Advanced PVD coating for enhanced durability and aesthetics.",
    icon: "⚡"
  }
];

const specializedServices = [
  {
    title: "Lab Testing",
    description: "Comprehensive lab testing facilities based on NIHS Standards. Contact us for detailed information about our testing capabilities.",
    icon: "🔬",
    image: "/images/services/lab-testing.jpg",
    imageAlt: "CadraTec precision lab testing equipment"
  },
  {
    title: "Dial Restoration",
    description: "Expert restoration services for vintage and contemporary watch dials. Send us pictures for a detailed estimation.",
    icon: "🔄",
    image: "/images/services/dial-restoration.jpg",
    imageAlt: "Vintage watch dial restoration process"
  }
];

export const ServicesSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services.PNG"
            alt="CadraTec Services"
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
              Precision &
              <br />
              <span className="font-normal">Craftsmanship</span>
            </h1>
            <div className="h-[1px] w-20 bg-white/30 mb-6" />
            <p className="text-white/60 text-sm tracking-wide font-light leading-relaxed">
              Expert watchmaking services with Swiss precision
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-neutral-900 mb-6">Our Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comprehensive watchmaking services delivered with precision and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-white border border-neutral-100 hover:border-neutral-200 transition-colors"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-light text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized Services */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-neutral-900 mb-6">Specialized Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Advanced capabilities for unique requirements
            </p>
          </motion.div>

          <div className="space-y-16">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-[400px] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                  <div className="text-3xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-light text-neutral-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-8">{service.description}</p>
                  <motion.div
                    className="h-[1px] w-20 bg-neutral-200"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-[#F2F3F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-neutral-900 mb-8">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <p className="text-neutral-600 mb-6">
                Contact us to discuss your specific requirements
              </p>
              <div className="space-y-2 text-sm text-neutral-600">
                <p>Cadratec SA</p>
                <p>Le Péquie 1, CH-2364 St-Brais, Switzerland</p>
                <p>Phone: +41 32 322 34 35</p>
                <p>Email: info@cadratec.ch</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 