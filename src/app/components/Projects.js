'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';

export default function Projects() {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState(null);

const projects = [
  {
    title: 'E-Learning Platform',
    description: 'A modern learning platform with course management, video streaming, and AI-powered progress tracking. Features interactive quizzes, peer collaboration, and mobile-first design.',
    tech: ['Next.js 14', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#',
    github: '#',
    image: '/images/elearning.jpg',
    featured: true
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Real-time admin dashboard for managing multi-vendor marketplace with advanced analytics, inventory management, and automated reporting system.',
    tech: ['React', 'TypeScript', 'Redux', 'Express', 'PostgreSQL', 'Chart.js'],
    link: '#',
    github: '#',
    image: '/images/ecommerce.jpg',
    featured: true
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">{t('projectsTitle')}</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Port0folio
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences that blend innovation with elegant design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="relative h-full rounded-3xl overflow-hidden border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm shadow-2xl">
                {/* Project Image/Preview */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(30%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30">
                        <span className="text-xs font-medium text-blue-300">⭐ Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-900/90 backdrop-blur-sm text-cyan-300 rounded-full border border-gray-700"
                      >
                        {tech}
                      </div>
                    ))}
                    {project.tech.length > 3 && (
                      <div className="px-3 py-1 text-xs font-medium bg-gray-900/90 backdrop-blur-sm text-gray-400 rounded-full border border-gray-700">
                        +{project.tech.length - 3} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-500">
                      {project.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: hoveredProject === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors"
                    >
                      <FiArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                    </motion.div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="group/link relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {t('projectLink')}
                          <FiExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      </a>
                      
                      <a
                        href={project.github}
                        className="group/github p-2.5 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View source code"
                      >
                        <FiGithub className="w-5 h-5 text-gray-400 group-hover/github:text-white transition-colors" />
                      </a>
                    </div>

                    <div className="text-xs text-gray-500">
                      Project #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500/50 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-500">
            <span className="text-gray-300 group-hover:text-white font-medium flex items-center gap-2">
              View All Projects
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent -z-10"></div>
      </div>
    </section>
  );
}