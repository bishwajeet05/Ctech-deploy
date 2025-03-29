'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
] as const;

// Pages that have hero sections and should have transparent header initially
const pagesWithHero = ['/', '/about', '/services', '/technology', '/products', '/sustainability', '/news-media'];

export const NavHeader = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { currentLang, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();

  const navItems = [
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.technology'), href: "/technology" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.sustainability'), href: "/sustainability" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.news'), href: "/news-media" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  // Handle initial mount and scroll position
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current page should have transparent header
  const isHeroPage = pagesWithHero.includes(pathname);
  const shouldBeTransparent = isHeroPage && !isScrolled;

  // Return a non-animated version for initial render
  if (!mounted) {
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isHeroPage ? "bg-transparent" : "bg-background/80 backdrop-blur-lg shadow-sm"
      }`}>
        <div className="max-w-[1800px] mx-auto relative">
          <nav className="flex items-center justify-between px-6 py-4 relative">
            {/* Static Logo */}
            <Link href="/" className="relative z-10 w-[180px]">
              <div className={`font-light tracking-[0.25em] ${
                isHeroPage ? "text-white" : "text-foreground"
              }`}>
                <div className="relative">
                  <span className="text-xl">CADRA</span>
                  <span className="text-xl font-extralight">TEC</span>
                </div>
              </div>
            </Link>

            {/* Static Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide relative group ${
                    isHeroPage ? "text-white" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Static Language and Login */}
            <div className="hidden md:flex items-center gap-4 w-[180px] justify-end">
              <button
                className={`flex items-center gap-1 text-sm font-light tracking-wide ${
                  isHeroPage ? "text-white" : "text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.toUpperCase()}</span>
              </button>
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className={`bg-transparent tracking-wide ${
                    isHeroPage
                      ? "border-white text-white"
                      : "border-primary text-primary"
                  }`}
                >
                  {t('nav.login')}
                </Button>
              </Link>
            </div>

            {/* Static Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${
                isHeroPage ? "text-white" : "text-foreground"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>
    );
  }

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    },
    exit: { y: -100, opacity: 0 }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          shouldBeTransparent 
            ? "bg-transparent" 
            : "bg-background/80 backdrop-blur-lg shadow-sm"
        }`}
      >
        <div className="max-w-[1800px] mx-auto relative">
          <nav className="flex items-center justify-between px-6 py-4 relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="relative z-10 w-[180px]">
                <div className={`font-light tracking-[0.25em] ${
                  shouldBeTransparent ? "text-white" : "text-foreground"
                }`}>
                  <div className="relative">
                    <span className="text-xl">CADRA</span>
                    <span className="text-xl font-extralight">TEC</span>
                    <motion.div 
                      className={`h-[1px] ${shouldBeTransparent ? "bg-white/20" : "bg-foreground/20"} mt-1.5`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    />
                    <motion.div 
                      className={`absolute -bottom-0.5 left-0 h-[1px] w-8 ${
                        shouldBeTransparent ? "bg-white/40" : "bg-foreground/40"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium tracking-wide relative group ${
                      shouldBeTransparent ? "text-white" : "text-foreground"
                    }`}
                  >
                    {item.name}
                    <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Language Switcher and Login Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-4 w-[180px] justify-end"
            >
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center gap-1 text-sm font-light tracking-wide transition-colors ${
                    shouldBeTransparent ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang.toUpperCase()}</span>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-sm shadow-lg border border-neutral-100"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-sm text-left hover:bg-neutral-50 transition-colors ${
                            currentLang === lang.code ? 'text-neutral-900 font-medium' : 'text-neutral-600'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className={`bg-transparent transition-all duration-300 tracking-wide ${
                    shouldBeTransparent
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {t('nav.login')}
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                shouldBeTransparent ? "text-white" : "text-foreground"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-20"
          >
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-center block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <div className="flex justify-center gap-8 mb-6">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`text-sm tracking-wide ${
                          currentLang === lang.code
                            ? 'text-primary font-medium'
                            : 'text-foreground/60'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                  <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full tracking-wide">
                      {t('nav.login')}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 