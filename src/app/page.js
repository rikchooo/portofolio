// app/page.js
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/bgsystem.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gelap agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/70 z-[-1]"></div>

      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}