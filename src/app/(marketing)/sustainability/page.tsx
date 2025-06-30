"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#F2F3F4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sustainability/sustain.webp"
            alt="Sustainability at CadraTec"
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
              Crafting a
              <br />
              <span className="font-normal">Sustainable Future</span>
            </h1>
            <div className="h-[1px] w-20 bg-white/30 mb-6" />
            <p className="text-white/60 text-sm tracking-wide font-light leading-relaxed">
              Our commitment to environmental stewardship and responsible manufacturing practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px] mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Our Commitment
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-12 text-neutral-900">
              Sustainable Excellence in{" "}
              <span className="text-neutral-500">Watchmaking</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-16 w-full">
              <div>
                <h3 className="text-[1.25rem] font-medium text-neutral-900 leading-snug">
                  At CadraTec, sustainability isn't just a goal—it's woven into every aspect of our craftsmanship.
                </h3>
              </div>
              <div>
                <p className="text-[15px] text-neutral-600 leading-relaxed mb-6">
                  We believe that true luxury is inherently sustainable. Our commitment to environmental responsibility drives us to continuously innovate and improve our practices, ensuring that our timepieces not only meet the highest standards of craftsmanship but also minimize their environmental impact.
                </p>
                <p className="text-[15px] text-neutral-600 leading-relaxed">
                  From sourcing sustainable materials to implementing energy-efficient manufacturing processes, every decision we make is guided by our dedication to preserving our planet for future generations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-32 bg-[#F2F3F4]">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl"
            >
              <div className="h-16 w-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-neutral-900 mb-4">Sustainable Materials</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We carefully select eco-friendly materials and work with suppliers who share our commitment to sustainability.
              </p>
            </motion.div>

            {/* Initiative 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl"
            >
              <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-neutral-900 mb-4">Energy Efficiency</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our facilities are powered by renewable energy sources and utilize energy-efficient manufacturing processes.
              </p>
            </motion.div>

            {/* Initiative 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl"
            >
              <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-neutral-900 mb-4">Waste Reduction</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our zero-waste initiative ensures that materials are recycled or repurposed whenever possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Environmental Impact
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-12 text-neutral-900">
              Making a Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4">Carbon Neutral by 2025</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We're on track to achieve carbon neutrality across all operations through renewable energy adoption and offset programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4">Water Conservation</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Our advanced water recycling systems have reduced water consumption by 60% since 2020.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4">Responsible Sourcing</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    100% of our suppliers are audited for environmental compliance and sustainable practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light text-neutral-900 mb-4">Packaging Innovation</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    All packaging materials are recyclable or biodegradable, crafted from sustainable sources.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#F2F3F4]">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-neutral-900">
              Join Us in Creating a Sustainable Future
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Learn more about our environmental initiatives and how we're working to protect our planet for future generations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="min-w-[200px]">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 