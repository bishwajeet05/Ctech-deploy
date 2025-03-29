'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/About/About.PNG"
            alt="CadraTec About"
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
              Our Legacy of
              <br />
              <span className="font-normal">Precision & Innovation</span>
            </h1>
            <div className="h-[1px] w-20 bg-white/30 mb-6" />
            <p className="text-white/60 text-sm tracking-wide font-light leading-relaxed">
              Crafting the future of luxury timepieces in the heart of Switzerland
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light mb-4 block">
              • Our Vision
            </span>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">
              Shaping Tomorrow's <span className="text-neutral-500">Horological Excellence</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-12 text-lg">
              To be the world's leading innovator in luxury watch dial manufacturing, setting new standards in craftsmanship, 
              sustainability, and technological advancement while preserving the rich heritage of Swiss watchmaking.
            </p>
            <div className="h-[1px] w-20 bg-neutral-200 mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-24 bg-[#F2F3F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light mb-4 block">
                • Our Mission
              </span>
              <h2 className="text-[2.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">
                Crafting Excellence, <br />Inspiring Innovation
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We develop, create, and manufacture beautiful faces for watches and clocks with a strong connection to innovation. 
                By incorporating design elements from various connected industries and utilizing the finest materials and processes, 
                we make innovation our way of life.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our goal is to create a positive impact in the communities where we live and work, while maintaining 
                the highest standards of Swiss watchmaking excellence.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/images/About/Crafting-Excellence.PNG"
                alt="CadraTec Mission"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light mb-4 block">
                • Our Heritage
              </span>
              <h2 className="text-[2.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">
                A Legacy of Excellence
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our company is nestled in the picturesque mountain area of the Franches-Montagnes region 
                of Canton Jura in Switzerland. Located in the village of St-Brais, our factory has a rich 
                history dating back to the 1950s when it housed watchmaking for the prestigious brand Longines.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Today, the facility has been meticulously renovated to meet the demands of modern watch dial 
                manufacturing while preserving its historical significance in Swiss watchmaking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/factory-interior.jpg"
                alt="CadraTec Factory Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 bg-[#F2F3F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light mb-4 block">
              • Our Values
            </span>
            <h2 className="text-[2.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">
              Guided by Excellence
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Our fundamental beliefs guide every decision we make and every timepiece we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and embracing new technologies while honoring traditional craftsmanship."
              },
              {
                title: "Excellence",
                description: "Maintaining the highest standards in every aspect of our work, from design to delivery."
              },
              {
                title: "Sustainability",
                description: "Committed to environmental stewardship and responsible manufacturing practices."
              },
              {
                title: "Integrity",
                description: "Operating with transparency, honesty, and ethical business practices in all relationships."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-light text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light mb-4 block">
              • Our Team
            </span>
            <h2 className="text-[2.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">
              Masters of Their Craft
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Meet the artisans and innovators who bring our vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marc Laurent",
                role: "Master Watchmaker",
                image: "/images/About/team1.jpeg"
              },
              {
                name: "Sophie Weber",
                role: "Head of Innovation",
                image: "/images/About/team2.jpg"
              },
              {
                name: "Thomas Mueller",
                role: "Technical Director",
                image: "/images/About/team3.jpeg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-sm text-neutral-600">{member.role}</p>
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
            <h2 className="text-[2.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-8 text-neutral-900">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <p className="text-neutral-600 mb-6 text-lg">
                Cadratec SA
                <br />
                Le Péquie 1, CH-2364 St-Brais
                <br />
                Switzerland
              </p>
              <div className="space-y-2 text-neutral-600">
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