'use client';

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1800px] mx-auto">
        <motion.div 
          className="flex flex-col justify-center min-h-[100svh] px-6 lg:px-24"
          style={{ scale, opacity }}
        >
          {/* Hero Content */}
          <motion.div 
            className="max-w-4xl pt-20 lg:pt-0"
            style={{ y: yText }}
          >
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[1px] bg-white/30 mb-16"
            />

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <span className="block text-[12px] tracking-[0.4em] uppercase text-white/60 font-light mb-6">
                A New Dimension of
              </span>
              <span className="block text-6xl md:text-7xl lg:text-[8.5rem] font-thin text-white tracking-[-0.02em] leading-[1.1] mb-3">
                Luxury
              </span>
              <span className="block text-6xl md:text-7xl lg:text-[8.5rem] font-thin text-white tracking-[-0.02em] leading-[1.1] opacity-80">
                Timepieces
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 mb-16"
            >
              <p className="text-lg tracking-[0.15em] text-white/50 font-extralight leading-relaxed max-w-xl">
                At the intersection of modern science and ancient wisdom, where timeless elegance converges with cutting-edge innovation.
              </p>
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-[11px] tracking-[0.3em] text-white/40 font-light">
                —crafted with precision at CadraTec
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6"
            >
              <Link href="/products">
                <Button 
                  variant="outline"
                  className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.3em] font-light hover:border-white"
                >
                  Discover Collection
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="ghost"
                  className="text-white hover:text-white/80 transition-all rounded-none px-8 py-6 text-[11px] uppercase tracking-[0.3em] font-light"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-6 z-10 flex items-center gap-5"
      >
        <div className="relative flex flex-col items-center">
          <div className="w-[26px] h-[42px] rounded-full border border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="w-[4px] h-[4px] rounded-full bg-white/40"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1">
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                y: [0, 4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="w-[1px] h-3 bg-gradient-to-b from-white/30 to-transparent"
            />
            <motion.div
              animate={{
                opacity: [0, 1, 0],
                y: [0, 4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[1px] h-3 bg-gradient-to-b from-white/30 to-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="font-sans text-white/40 text-xs tracking-[0.3em] uppercase font-light"
          >
            Scroll
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="font-sans text-white/30 text-[10px] tracking-[0.2em] uppercase font-light"
          >
            to explore
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}; 