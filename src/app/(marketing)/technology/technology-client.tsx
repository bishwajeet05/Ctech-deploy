'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { InView } from "@/components/ui/in-view";
import { Gallery4 } from "@/components/ui/gallery4";

const processes = [
  {
    id: 1,
    title: "Design & Development",
    description: "Our expert designers combine traditional craftsmanship with cutting-edge CAD technology to create intricate dial designs that push the boundaries of what's possible.",
    image: "/images/Technology/Design.png"
  },
  {
    id: 2,
    title: "Material Selection",
    description: "Each dial begins with the careful selection of premium materials, from precious metals to advanced ceramics, chosen for both their aesthetic appeal and technical properties.",
    image: "/images/Technology/Material selection.png"
  },
  {
    id: 3,
    title: "Precision Cutting",
    description: "State-of-the-art CNC machines and laser cutting technology achieve tolerances of up to 0.01mm, ensuring perfect fit and finish.",
    image: "/images/Technology/Precision cutting.png"
  },
  {
    id: 4,
    title: "Surface Treatment",
    description: "Advanced galvanization and PVD coating processes create stunning finishes while ensuring long-lasting durability.",
    image: "/images/Technology/Surface treatment.png"
  }
];

const materials = [
  {
    name: "Precious Metals",
    items: ["18k Gold", "Platinum", "Palladium"],
    description: "Our precious metal dials are crafted from the finest materials, ensuring both luxury and durability."
  },
  {
    name: "Advanced Ceramics",
    items: ["Zirconium Oxide", "Aluminum Oxide", "Silicon Carbide"],
    description: "High-tech ceramic materials offer exceptional hardness and scratch resistance."
  },
  {
    name: "Innovative Composites",
    items: ["Carbon Fiber", "Metallic Glass", "Ceramic Matrix"],
    description: "Cutting-edge composite materials push the boundaries of what's possible in dial manufacturing."
  }
];

const materialItems = [
  {
    id: "material-1",
    title: "Premium Material Selection",
    description: "Each dial begins with the careful selection of premium materials, ensuring both luxury and durability.",
    href: "#",
    image: "/images/Technology/Material/Premium-material1.webp"
  },
  {
    id: "material-2",
    title: "Advanced Manufacturing",
    description: "Our state-of-the-art manufacturing processes combine traditional craftsmanship with cutting-edge technology.",
    href: "#",
    image: "/images/Technology/Material/Premium-material2.webp"
  },
  {
    id: "material-3",
    title: "Precision Engineering",
    description: "Every component is engineered to meet the highest standards of precision and quality.",
    href: "#",
    image: "/images/Technology/Material/Premium-material3.webp"
  },
  {
    id: "material-4",
    title: "Surface Treatment",
    description: "Advanced surface treatments ensure both aesthetic beauty and long-lasting durability.",
    href: "#",
    image: "/images/Technology/Material/Premium-material4.webp"
  },
  {
    id: "material-5",
    title: "Quality Control",
    description: "Rigorous quality control processes ensure every piece meets our exacting standards.",
    href: "#",
    image: "/images/Technology/Material/Premium-material5.webp"
  },
  {
    id: "material-6",
    title: "Final Assembly",
    description: "Expert craftsmen carefully assemble each component to create the perfect timepiece.",
    href: "#",
    image: "/images/Technology/Material/Premium-material6.webp"
  }
];

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

export default function TechnologyClient() {
  return (
    <main className="relative min-h-screen bg-white antialiased">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[600px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/images/Technology/Technology.png"
              alt="Advanced Watch Technology"
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
                Technology
              </motion.h1>
              <motion.div 
                className="space-y-4"
                variants={fadeIn}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white">
                  <span className="block leading-tight">Precision Engineering</span>
                  <span className="block text-white/90 leading-tight mt-2">Meets Artistry</span>
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
                At CADRATEC, we combine centuries-old watchmaking traditions with cutting-edge technology to create the world's finest watch dials. Every piece is a testament to Swiss precision and innovation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Manufacturing Process Section */}
      <section className="py-32 bg-gradient-to-b from-white to-neutral-50">
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
              Manufacturing Excellence
            </motion.h3>
            <motion.h4 
              className="text-3xl sm:text-4xl font-extralight text-neutral-950 leading-tight"
              variants={fadeIn}
            >
              The Art of Creation
            </motion.h4>
            <motion.div 
              className="w-24 h-[1px] bg-neutral-200 my-10"
              variants={fadeIn}
            />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                className="group relative"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={process.image}
                    alt={process.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-10">
                  <h5 className="text-xl text-neutral-900 font-light mb-4 tracking-wide">
                    {process.title}
                  </h5>
                  <p className="text-neutral-600 leading-relaxed tracking-wide">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Materials Section */}
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
              Materials & Innovation
            </motion.h3>
            <motion.h4 
              className="text-3xl sm:text-4xl font-extralight text-neutral-950 leading-tight"
              variants={fadeIn}
            >
              Premium Materials
            </motion.h4>
            <motion.div 
              className="w-24 h-[1px] bg-neutral-200 my-10"
              variants={fadeIn}
            />
          </motion.div>

          <Gallery4 
            title="Premium Materials"
            description="Discover our selection of premium materials, each chosen for its unique properties and contribution to creating exceptional timepieces."
            items={materialItems}
          />

          {/* Materials Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {materials.map((material) => (
              <motion.div
                key={material.name}
                className="bg-white shadow-sm border border-neutral-100 p-10 group hover:border-neutral-200 transition-colors duration-300"
                variants={fadeIn}
              >
                <h5 className="text-xl text-neutral-900 font-light mb-8 tracking-wide">
                  {material.name}
                </h5>
                <ul className="space-y-5 mb-8">
                  {material.items.map((item) => (
                    <li key={item} className="flex items-center text-neutral-600 tracking-wide">
                      <ChevronRight className="w-4 h-4 mr-3 text-neutral-400 flex-shrink-0" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-600 leading-relaxed tracking-wide">
                  {material.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-neutral-500 text-sm font-light tracking-[0.4em] uppercase mb-6">
                Quality Assurance
              </h3>
              <h4 className="text-3xl sm:text-4xl font-extralight text-neutral-950 mb-8 leading-tight">
                Uncompromising Standards
              </h4>
              <div className="w-24 h-[1px] bg-neutral-200 mb-10" />
              <div className="space-y-8 text-neutral-600">
                <p className="leading-relaxed tracking-wide">
                  Every dial that leaves our facility undergoes rigorous quality control checks, ensuring it meets our exacting standards for both aesthetics and functionality.
                </p>
                <p className="leading-relaxed tracking-wide">
                  Our quality assurance process includes:
                </p>
                <ul className="space-y-5">
                  {["Multi-stage optical inspection using advanced microscopy",
                    "Precision measurement with state-of-the-art equipment",
                    "Environmental testing for durability and longevity",
                    "Final inspection by master craftsmen with decades of experience"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={fadeIn}
                      custom={index}
                    >
                      <ChevronRight className="w-4 h-4 mr-3 mt-1.5 text-neutral-400 flex-shrink-0" />
                      <span className="font-light tracking-wide">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden"
              variants={fadeInRight}
            >
              <Image
                src="/images/Technology/Quality Assurance.png"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 