'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUp, FiMail, FiMapPin, FiHeart } from 'react-icons/fi';
import { 
  FaGithub, FaDiscord, FaInstagram, FaTiktok,
  FaLinkedin, FaTwitter, FaYoutube, FaCodepen
} from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rikchooo',
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-300 hover:bg-gray-800/50',
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/rk.hrmwn_',
      icon: <FaDiscord className="w-5 h-5" />,
      color: 'hover:text-[#5865F2] hover:bg-[#5865F2]/10',
      gradient: 'from-[#5865F2]/20 to-[#5865F2]/10'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/rk.hrmwn_',
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10',
      gradient: 'from-[#E4405F]/20 to-[#833AB4]/10'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      icon: <FaLinkedin className="w-5 h-5" />,
      color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
      gradient: 'from-[#0A66C2]/20 to-[#0A66C2]/10'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@rikcho_',
      icon: <FaTiktok className="w-5 h-5" />,
      color: 'hover:text-[#ff0050] hover:bg-[#000000]/10',
      gradient: 'from-[#000000]/20 to-[#FF0050]/10'
    },
  ];

  const quickLinks = [
    { name: t('navProjects'), href: '#projects' },
    { name: t('navSkills'), href: '#skills' },
    { name: t('navContact'), href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-30"></div>
                    <div className="relative px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                        eR-Ha
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500">Portfolio</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Crafting exceptional digital experiences with modern technologies and innovative design thinking.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4" />
                    <span>Situbondo, Indonesia</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  <a 
                    href="mailto:rikohrmawan258@gmail.com"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>rikohrmawan258@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                Navigation
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-4 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                Tech Stack
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400"></div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-900/50 backdrop-blur-sm text-gray-300 rounded-full border border-gray-800 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Legal Links */}
              <div className="mt-8 pt-6 border-t border-gray-800/30">
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {t('privacy')}
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                    {t('terms')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-8 border-t border-gray-800/30"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 ${link.color} transition-all duration-300 group`}
                    aria-label={link.name}
                  >
                    {link.icon}
                    <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs text-gray-400">
                      {link.name}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-gray-500 text-sm mb-2">
                  {t('footerCopyright').replace('2025', currentYear)}
                </p>
                <div className="flex items-center justify-center lg:justify-end gap-1 text-gray-600 text-sm">
                  <span>Made with</span>
                  <FiHeart className="w-3 h-3 text-red-500 animate-pulse" />
                  <span>in Indonesia</span>
                  <span className="ml-1">🇮🇩</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 z-40 group"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span>🚀 Built with Next.js & Tailwind CSS</span>
              <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <span>⚡ Optimized for performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}