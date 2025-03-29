"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection } from "@/components/marketing/hero-section";
import { NavHeader } from "@/components/marketing/nav-header";
import { BentoGridSection } from "@/components/marketing/bento-grid-section";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

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

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#F2F3F4]">
      <NavHeader />
      <HeroSection />

      {/* About CadraTec Section */}
      <section className="py-32 bg-[#F2F3F4]">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • About CadraTec
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-24 text-neutral-900">
              Masters of precision in{" "}
              <span className="text-neutral-500">luxury watch dial creation.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-16 w-full">
              <div>
                <h3 className="text-[1.25rem] font-medium text-neutral-900 leading-snug">
                  Setting the standard in luxury watch dial manufacturing with unparalleled craftsmanship and innovative techniques.
                </h3>
              </div>
              <div>
                <p className="text-[15px] text-neutral-600 leading-relaxed">
                  Established in the heart of Switzerland's watchmaking valley, CadraTec has been pioneering the art of watch dial creation since 1950. Our specialized expertise lies in crafting exquisite watch dials that combine traditional artisanal techniques with cutting-edge manufacturing processes. From intricate guilloché patterns and grand feu enamel to innovative materials and finishes, we create masterpieces that adorn the world's most prestigious timepieces. Our commitment to excellence and innovation in dial making has made us the trusted partner for leading luxury watch brands seeking the highest standards of Swiss craftsmanship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[1px] bg-black/50 mb-8 mx-auto"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              {t('excellence.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('excellence.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/Excellence/Expert-Craftsmanship.PNG"
                  alt={t('excellence.items.craftsmanship.title')}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl text-white font-light mb-3">{t('excellence.items.craftsmanship.title')}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  {t('excellence.items.craftsmanship.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/Excellence/advanced_technology.png"
                  alt={t('excellence.items.technology.title')}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl text-white font-light mb-3">{t('excellence.items.technology.title')}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  {t('excellence.items.technology.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/Excellence/Dedicated-Support.PNG"
                  alt={t('excellence.items.support.title')}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl text-white font-light mb-3">{t('excellence.items.support.title')}</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  {t('excellence.items.support.description')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expert Restoration Section */}
      <section className="py-32 bg-[#F2F3F4]">
        <div className="max-w-[1600px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start max-w-[1000px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-light">
                • Expert Restoration
              </span>
            </div>
            <h2 className="text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] mb-24 text-neutral-900">
              Breathing new life into{" "}
              <span className="text-neutral-500">timeless masterpieces.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr,1.2fr] gap-16 w-full">
              <div>
                <h3 className="text-[1.25rem] font-medium text-neutral-900 leading-snug">
                  Reviving heritage timepieces with unparalleled expertise and meticulous attention to historical authenticity.
                </h3>
              </div>
              <div>
                <p className="text-[15px] text-neutral-600 leading-relaxed">
                  Our expert restoration service combines traditional craftsmanship with modern precision to breathe new life into cherished timepieces. Each restoration project is approached with meticulous attention to detail, ensuring that every component is carefully preserved or authentically recreated. From vintage watch dials to rare complications, our master artisans possess the expertise to restore your timepiece to its former glory while maintaining its historical integrity and value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BentoGridSection />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-r from-[#F2F3F4]/80 to-transparent rounded-full blur-3xl"
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900"
          >
            Ready to Create Your Bespoke Timepiece?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            Experience the artistry of custom watch dial creation with Switzerland's premier craftsmen
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="min-w-[200px]">
                Begin Your Design
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 