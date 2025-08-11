'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CircleUserRound, Search } from 'lucide-react';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
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
      <div className="mx-auto w-full sm:pr-1 lg:pr-8 bg-secondary ">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center h-full  bg-white rounded-tr-2xl rounded-br-full px-4 py-2"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[160px] h-[60px] sm:w-[200px] sm:h-[70px] md:w-[250px] md:h-[80px]">
                <Image
                  src="/images/all-img/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
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
                  className="text-black font-medium hover:text-green-500 transition"
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-[350px] rounded-xl sm:overflow-hidden bg-white border shadow-xl z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-red-500 hover:rounded-t-md  hover:text-white transition"
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

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-black hover:text-rose-500 transition">
              <Search />
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="inline-flex items-center sm:hover:bg-red-500 sm:hover:text-white space-x-2 rounded-full ring-1 ring-black px-6 py-2.5 font-bold text-black transition hover:shadow-lg"
              >
                <CircleUserRound />
                <span>Compte</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Button */}
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
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mt-4 rounded-xl border bg-white py-4 shadow-xl space-y-2">
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
                    className="block w-full rounded-lg py-2.5 align-center hover:bg-muted font-medium text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                   <Search />
                  </Link>
                   <Link
                href="/signup"
                className="inline-flex items-center  hover:bg-red-500 hover:text-white space-x-2 rounded-full ring-1 ring-black px-6 py-2.5 font-bold text-black transition hover:shadow-lg"
              >
                <CircleUserRound />
                <span>Compte</span>
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
