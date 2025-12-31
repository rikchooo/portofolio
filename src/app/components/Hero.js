'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Particles from './Particles';

export default function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/rikchooo', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/rikohrmwn29', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:rikohrmawan258@gmail.com', label: 'Email' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-900 via-blue-950/30 to-purple-950/20"></div>
      
      {/* Dynamic gradient based on mouse position */}
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      {/* Particles Effect */}
      <Particles />

      {/* Floating Orbs */}
      <div className="absolute -z-10">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left -mt-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              <span className="block text-gray-300">{t('heroTitleBefore')}</span>
              <span className="block text-gray-300">{t('heroTitleAfter')}</span>
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient">
                  Riko Hermawan
                </span>
                <motion.div/>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {t('viewWork')}
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 border border-blue-500/30 rounded-xl group-hover:border-blue-400/50 transition-all duration-500"></div>
              </a>

              <a
                href="mailto:rikohrmawan258@gmail.com"
                className="group relative px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiMail />
                  {t('contactMe')}
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="text-gray-500 text-sm">Follow me</div>
              <div className="h-px w-12 bg-gradient-to-r from-gray-700 to-transparent"></div>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xl">
                      {link.icon}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-xs text-gray-400">
                      {link.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                
                {/* Code Preview */}
                <div className="absolute inset-4 rounded-2xl bg-gray-950/80 backdrop-blur-sm border border-gray-800/30 overflow-hidden">
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm text-gray-400">
                      <div className="mb-2">
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">developer</span> = {'{'}
                      </div>
                      <div className="ml-4">
                        <span className="text-cyan-400">name</span>:{' '}
                        <span className="text-green-400">``Riko Hermawan``</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-cyan-400">role</span>:{' '}
                        <span className="text-green-400">``Full Stack Developer``</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-cyan-400">skills</span>:{' '}
                        <span className="text-yellow-400">[``React``, ``Next.js``, ``Node.js``]</span>
                      </div>
                      <div>{'};'}</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
                />
              </div>

              {/* Reflection */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}