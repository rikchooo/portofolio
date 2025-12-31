'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiNextdotjs, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiTypescript, SiGraphql, SiDocker, SiGit,
  SiPython, SiFirebase, SiRedux, SiVuedotjs
} from 'react-icons/si';
import { FiCode, FiDatabase, FiServer, FiCpu } from 'react-icons/fi';
import { useState } from 'react';

export default function Skills() {
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs />, level: 95 },
        { name: 'React', icon: <SiReact />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 75 },
        { name: 'Redux', icon: <SiRedux />, level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: <FiServer className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
        { name: 'Express', icon: <SiExpress />, level: 85 },
        { name: 'Python', icon: <SiPython />, level: 80 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 75 },
        { name: 'Firebase', icon: <SiFirebase />, level: 85 },
        { name: 'REST API', icon: <FiServer />, level: 90 }
      ]
    },
    {
      title: 'Database',
      icon: <FiDatabase className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-400',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
        { name: 'MySQL', icon: <FiDatabase />, level: 75 },
        { name: 'Redis', icon: <FiDatabase />, level: 70 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <FiCpu className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-400',
      skills: [
        { name: 'Docker', icon: <SiDocker />, level: 75 },
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'AWS', icon: <FiCpu />, level: 70 },
        { name: 'CI/CD', icon: <FiCpu />, level: 80 }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);

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

  return (
    <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-gray-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
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
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">Skills &</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Technologies
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid by Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl overflow-hidden border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm shadow-2xl p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 backdrop-blur-sm`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">Specialized expertise</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gray-800/50 group-hover/skill:bg-gray-800 transition-colors">
                            <div className="text-xl text-gray-300 group-hover/skill:text-white">
                              {skill.icon}
                            </div>
                          </div>
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">Technology Stack</h3>
            <p className="text-gray-400">Interactive skills visualization</p>
          </div>
          
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-4">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative"
                >
                  <div className={`
                    relative flex items-center gap-3 px-6 py-4 rounded-2xl 
                    bg-gray-900/80 backdrop-blur-sm border border-gray-800/50
                    hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300
                    ${hoveredSkill === index ? 'shadow-xl shadow-blue-500/20' : ''}
                  `}>
                    <div className="text-2xl text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                    <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-300 mb-3">Proficiency Timeline</h3>
            <p className="text-gray-400">Years of experience with key technologies</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500"></div>
            
            <div className="space-y-12">
              {[
                { year: '2024-Now', skills: ['Next.js 14', 'TypeScript', 'Tailwind CSS'], icon: '🚀' },
                { year: '2022-Now', skills: ['React', 'Node.js', 'MongoDB'], icon: '⚡' },
                { year: '2021-Now', skills: ['JavaScript', 'Express', 'PostgreSQL'], icon: '📈' },
                { year: '2022-Now', skills: ['HTML/CSS', 'Python', 'MySQL'], icon: '🎯' }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-300">{item.year}</span>
                    </div>
                    <div className="space-y-2">
                      {item.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-gray-400 hover:text-white transition-colors cursor-default">
                          • {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-4 border-gray-900 z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}