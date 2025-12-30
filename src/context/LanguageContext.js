'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    heroSubtitle: 'Web Developer & UI/UX Designer crafting clean, responsive, and user-friendly digital experiences.',
    viewWork: 'View My Work',
    contactMe: 'Get In Touch',
    skillsTitle: 'Skills & Tools',
    projectsTitle: 'Featured Projects',
    projectLink: 'View Project',
    footerCopyright: '© 2025 Riko Hermawan. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    availableForWork: 'Available for work',
    heroTitleBefore: 'Hi, I\'m',
    yearsExp: 'Years Experience',
    projectsDone: 'Projects Done',
    clientSatisfaction: 'Client Satisfaction',
    downloadCV: 'Download CV'
  },
  id: {
    navProjects: 'Proyek',
    navSkills: 'Kemampuan',
    navContact: 'Kontak',
    heroTitleAfter: 'Hai, saya',
    heroSubtitle: 'Pengembang Web & Desainer UI/UX yang menciptakan pengalaman digital bersih, responsif, dan ramah pengguna.',
    viewWork: 'Lihat Karyaku',
    contactMe: 'Hubungi Saya',
    skillsTitle: 'Kemampuan & Alat',
    projectsTitle: 'Proyek Unggulan',
    projectLink: 'Lihat Proyek',
    footerCopyright: '© 2025 Riko Hermawan. Hak cipta dilindungi.',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
    availableForWork: 'Tersedia untuk kerja',
    yearsExp: 'Tahun Pengalaman',
    projectsDone: 'Proyek Selesai',
    clientSatisfaction: 'Kepuasan Klien',
    downloadCV: 'Unduh CV'
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id');
  const [isHydrated, setIsHydrated] = useState(false);

  // Solusi: bungkus dalam setTimeout untuk menghindari synchronous update
  useEffect(() => {
    // Hanya jalan di client setelah mount
    const savedLang = localStorage.getItem('language') || 'id';
    
    // Schedule update untuk menghindari synchronous render
    const timer = setTimeout(() => {
      setLang(savedLang);
      setIsHydrated(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const setLanguage = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  }, []);
  
  const t = useCallback((key) => {
    return translations[lang][key];
  }, [lang]);

  const contextValue = {
    lang,
    setLang: setLanguage,
    t,
    isHydrated
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};