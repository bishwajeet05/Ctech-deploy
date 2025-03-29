'use client';

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const collections = [
  {
    id: "haute-horlogerie",
    name: "Haute Horlogerie",
    description: "Masterpieces of intricate design and exceptional craftsmanship for the most prestigious timepieces.",
    image: "/images/Products/Haute Horlogerie.jpeg",
    features: [
      "Hand-finished guilloché patterns",
      "Mother-of-pearl inlays",
      "Diamond-cut indices",
      "Precious metal appliques"
    ]
  },
  {
    id: "classic-elegance",
    name: "Classic Elegance",
    description: "Timeless designs that embody traditional watchmaking aesthetics with modern precision.",
    image: "/images/Products/Classic Elegance.jpg",
    features: [
      "Sunburst finishing",
      "Applied hour markers",
      "Multi-level construction",
      "Lacquered surfaces"
    ]
  },
  {
    id: "sport-professional",
    name: "Sport Professional",
    description: "High-performance dials engineered for durability and exceptional legibility.",
    image: "/images/Products/Sport Professional.jpg",
    features: [
      "SuperLuminova applications",
      "Ceramic composites",
      "Scratch-resistant coatings",
      "High-contrast designs"
    ]
  }
];

const specialties = [
  {
    name: "Custom Dials",
    description: "Bespoke creations tailored to your unique specifications.",
    image: "/images/Products/Specialized-Services/Costum-Dials.png"
  },
  {
    name: "Limited Editions",
    description: "Exclusive series featuring unique materials and designs.",
    image: "/images/Products/Specialized-Services/Limited-Editions.png"
  },
  {
    name: "Complications",
    description: "Specialized dials for complex watch mechanisms.",
    image: "/images/Products/Specialized-Services/Compliations.png"
  },
  {
    name: "Restoration",
    description: "Expert restoration of vintage and antique watch dials.",
    image: "/images/Products/Specialized-Services/Restoration.png"
  }
];

const finishes = [
  {
    name: "Sunburst Pattern",
    description: "Radial brushed pattern emanating from the center, creating a dynamic play of light",
    image: "/images/Products/Exquisite-Finishes/09E9123D-9075-4B2E-9FB4-3EE3916DC10D-1-p3ad4257h33xd5ahwi8dozs877zcqe55jogd6ck1so.jpeg"
  },
  {
    name: "Guilloché Art",
    description: "Intricate geometric patterns created through traditional hand-engraving techniques",
    image: "/images/Products/Exquisite-Finishes/IMG_5379-p49v407irqionu6kt6zvajrjg2o5uxi0pvc4ou46xk.jpg"
  },
  {
    name: "Grand Feu Enamel",
    description: "Timeless beauty achieved through multiple layers of fired enamel",
    image: "/images/Products/Exquisite-Finishes/IMG_5380-p49v4ajquwwu7jrk4tgrjz5lzb977ln2faigyvov14.jpg"
  }
];

export default function ProductsClient() {
  return (
    <main className="relative min-h-screen bg-white antialiased">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[600px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/images/Products/Products.png"
              alt="Luxury Watch Collections"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-white/80 text-sm font-light tracking-[0.4em] uppercase mb-8"
                variants={fadeIn}
              >
                Our Collections
              </motion.h1>
              <motion.div 
                className="space-y-4"
                variants={fadeIn}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white">
                  <span className="block leading-tight">Masterpieces of</span>
                  <span className="block text-white/90 leading-tight mt-2">Precision & Beauty</span>
                </h2>
              </motion.div>
              <motion.div 
                className="w-24 h-[1px] bg-white/20 my-10"
                variants={fadeIn}
              />
              <motion.p 
                className="text-white/70 text-lg font-light leading-relaxed max-w-2xl tracking-wide"
                variants={fadeIn}
              >
                Each CADRATEC dial is a testament to Swiss craftsmanship, combining traditional techniques with innovative technology to create timepieces of unparalleled quality.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <section className="py-32 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index !== collections.length - 1 ? 'mb-32' : ''
              }`}
            >
              <motion.div 
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <h3 className="text-neutral-500 text-sm font-light tracking-[0.4em] uppercase mb-6">
                  Collection
                </h3>
                <h4 className="text-3xl sm:text-4xl font-extralight text-neutral-950 mb-8 leading-tight">
                  {collection.name}
                </h4>
                <div className="w-24 h-[1px] bg-neutral-200 mb-10" />
                <p className="text-neutral-700 text-lg leading-relaxed mb-10 tracking-wide">
                  {collection.description}
                </p>
                <ul className="space-y-5">
                  {collection.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-600 tracking-wide">
                      <ChevronRight className="w-4 h-4 mr-3 text-neutral-400 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className={`relative aspect-[4/3] ${index % 2 === 1 ? 'md:order-1' : ''}`}
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-neutral-500 text-sm font-light tracking-[0.4em] uppercase mb-6"
              variants={fadeIn}
            >
              Expertise
            </motion.h3>
            <motion.h4 
              className="text-3xl sm:text-4xl font-extralight text-neutral-950 leading-tight"
              variants={fadeIn}
            >
              Specialized Services
            </motion.h4>
            <motion.div 
              className="w-24 h-[1px] bg-neutral-200 my-10"
              variants={fadeIn}
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {specialties.map((specialty) => (
              <motion.div
                key={specialty.name}
                className="group relative"
                variants={fadeIn}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h5 className="text-xl text-white font-light mb-3 tracking-wide">{specialty.name}</h5>
                  <p className="text-white/90 text-sm font-light tracking-wide leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Finishes Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-neutral-500 text-sm font-light tracking-[0.4em] uppercase mb-6"
              variants={fadeIn}
            >
              Artistry
            </motion.h3>
            <motion.h4 
              className="text-3xl sm:text-4xl font-extralight text-neutral-950 leading-tight"
              variants={fadeIn}
            >
              Exquisite Finishes
            </motion.h4>
            <motion.div 
              className="w-24 h-[1px] bg-neutral-200 my-10"
              variants={fadeIn}
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {finishes.map((finish) => (
              <motion.div
                key={finish.name}
                className="bg-white shadow-sm border border-neutral-100 group"
                variants={fadeIn}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={finish.image}
                    alt={finish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10">
                  <h5 className="text-xl text-neutral-900 font-light mb-4 tracking-wide">
                    {finish.name}
                  </h5>
                  <p className="text-neutral-600 leading-relaxed tracking-wide">
                    {finish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 