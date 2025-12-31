'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGlobe, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { MdWork, MdComputer, MdContactMail } from 'react-icons/md';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const langDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { key: 'projects', label: t('navProjects'), href: '#projects', icon: <MdWork className="w-5 h-5" /> },
    { key: 'skills', label: t('navSkills'), href: '#skills', icon: <MdComputer className="w-5 h-5" /> },
    { key: 'contact', label: t('navContact'), href: '#contact', icon: <MdContactMail className="w-5 h-5" /> }
  ];

  const languages = [
    { code: 'id', name: 'Indonesia', flag: 'ID' },
    { code: 'en', name: 'English', flag: 'EN' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-blue-900/10' 
            : 'py-4 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link 
                href="/" 
                className="flex items-center gap-2 sm:gap-3"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 rounded-lg border border-gray-800">
                    <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                      eR-Ha
                    </span>
                  </div>
                </div>
                <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                <span className="hidden md:block text-sm text-gray-400 font-medium tracking-wider">
                  Full Stack Developer
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="relative group px-4 py-2.5 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-gray-300 group-hover:text-white font-medium tracking-wide transition-colors text-sm sm:text-base">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></div>
                  </button>
                </motion.div>
              ))}

              {/* Desktop Language Switcher */}
              <motion.div 
                className="relative ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                ref={langDropdownRef}
              >
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <FiGlobe className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    {languages.find(l => l.code === lang)?.name}
                  </span>
                  <FiChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setLang(language.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 ${
                            lang === language.code
                              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300'
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium text-sm sm:text-base">{language.name}</span>
                          {lang === language.code && (
                            <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden" ref={mobileMenuRef}>
              {/* Mobile Language Switcher */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="p-2 sm:p-2.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors flex items-center gap-1.5"
                >
                  <FiGlobe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">
                    {lang === 'en' ? 'EN' : 'ID'}
                  </span>
                  <FiChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Language Dropdown */}
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden z-50"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => {
                            setLang(language.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 ${
                            lang === language.code
                              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300'
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium text-sm">{language.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 sm:p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors relative group"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-5 h-5">
                  <FiMenu className={`absolute inset-0 w-5 h-5 text-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`} />
                  <FiX className={`absolute inset-0 w-5 h-5 text-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
          />
        )}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="p-6 border-b border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-gray-800/50 rounded-lg border border-gray-700">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                          eR-Ha
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">
                        Portfolio
                      </span>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                    >
                      <FiX className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Menu Content */}
                <div className="flex-1 p-6">
                  <nav className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.key}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="w-full flex items-center gap-4 px-4 py-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/70 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                            {item.icon}
                          </div>
                          <span className="text-gray-300 group-hover:text-white font-medium text-lg flex-1 text-left">
                            {item.label}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Contact Info in Mobile Menu */}
                  <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                    <h3 className="text-gray-300 font-medium mb-4">Get in Touch</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:rikohrmawan258@gmail.com"
                        className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FiMail className="w-5 h-5" />
                        <span className="text-sm">rikohrmawan258@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-800/50">
                  <div className="flex items-center justify-center gap-6">
                    <button
                      onClick={() => setLang('id')}
                      className={`px-4 py-2 rounded-lg transition-all ${lang === 'id' ? 'bg-blue-500/20 text-blue-300' : 'text-gray-400 hover:text-white'}`}
                    >
                      id
                    </button>
                    <button
                      onClick={() => setLang('en')}
                      className={`px-4 py-2 rounded-lg transition-all ${lang === 'en' ? 'bg-blue-500/20 text-blue-300' : 'text-gray-400 hover:text-white'}`}
                    >
                      en
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add padding to main content to account for fixed header */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}