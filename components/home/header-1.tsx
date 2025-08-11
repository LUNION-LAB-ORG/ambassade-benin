'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  CircleUserRound,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: 'ACCUEIL', href: '#' },
  {
    name: 'LE CONSULAT',
    href: '/consulat',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Apropos du consulat honoraire', href: '#' },
      { name: 'Les représentations ', href: '#' },
    ],
  },
  { name: 'NOS PRESTATIONS', href: '#' },
  {
    name: 'BENIN',
    href: '/consulat',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Connaitre le Benin', href: '#' },
      { name: 'Investir au BENIN', href: '#' },
      { name: 'Chambre de Commerce et d’Industrie', href: '#' },
      { name: 'APIEX BENIN', href: '#' },
    ],
  },
  { name: 'LE RAVIP', href: '#' },
  {
    name: 'GALERIE',
    href: '/galerie',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Actualités', href: '#' },
      { name: 'Evènements', href: '#' },
      { name: 'Photos', href: '#' },
      { name: 'Vidéos', href: '#' },
    ],
  },
  { name: 'CONTACT', href: '#' },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: 'blur(20px)',
      backgroundColor:
        theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'animate'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled
          ? theme === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl  sm:pr-1 lg:pr-8 bg-[#FDD644]">
        <div className="flex h-16 justify-between lg:h-20 items-center">
          <motion.div
            className="flex items-center space-x-2 h-full w-44 lg:w-64 bg-white rounded-tr-2xl rounded-br-full px-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-xl font-bold text-transparent">
                Acme Inc.
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-foreground font-medium hover:text-green-500 transition"
                >
                  {item.name}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-[350px] rounded-xl bg-white border shadow-xl backdrop-blur-lg z-50"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-red-500 hover:text-white transition"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-foreground hover:text-rose-500 transition"
            >
              <Search />
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="inline-flex items-center space-x-2 rounded-full ring-1 ring-black px-6 py-2.5 font-bold text-black transition hover:shadow-lg"
              >
                <CircleUserRound />
                <span>Compte</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="mt-4 rounded-xl border bg-white py-4 shadow-xl backdrop-blur-lg space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="px-4">
                    <button
                      onClick={() =>
                        item.hasDropdown
                          ? setActiveDropdown((prev) =>
                              prev === item.name ? null : item.name
                            )
                          : setIsMobileMenuOpen(false)
                      }
                      className="w-full flex justify-between items-center py-2 text-left font-medium"
                    >
                      <Link href={item.href}>{item.name}</Link>
                      {item.hasDropdown && (
                        <span className="ml-2">
                          {activeDropdown === item.name ? '-' : '+'}
                        </span>
                      )}
                    </button>

                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-sm px-2 py-1 rounded hover:bg-rose-500 hover:text-white transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-4 px-4 space-y-2">
                  <Link
                    href="/login"
                    className="block w-full rounded-lg py-2.5 text-center text-foreground hover:bg-muted font-medium transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 py-2.5 text-center font-medium text-white transition hover:shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Compte
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
