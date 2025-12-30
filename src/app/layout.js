import '@/Styles/globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Riko Hermawan | Portfolio',
  description: 'Full Stack Developer & UI/UX Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        
        {/* Open Graph Meta Tags untuk social media */}
        <meta property="og:title" content="Riko Hermawan | Portfolio" />
        <meta property="og:description" content="Full Stack Developer & UI/UX Designer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Riko Hermawan | Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer & UI/UX Designer" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {/* Background Gradient yang menutupi seluruh halaman */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-br from-gray-900 via-blue-950/20 to-purple-950/10">
          {/* Noise/Texture Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <LanguageProvider>
          <main className="relative min-h-screen">
            {children}
          </main>
        </LanguageProvider>

        {/* Smooth Scroll Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
}