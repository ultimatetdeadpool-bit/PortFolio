"use client";

import { useLanguage, Language } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { Github, Linkedin, Mail } from 'lucide-react';

const languages: { code: Language; flag: string; name: string }[] = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            TR
          </button>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.projects}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a
              href="mailto:teddy.richol@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="flex items-center space-x-2 pl-4 border-l border-border">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-2xl transition-all duration-200 hover:scale-110 ${
                  language === lang.code ? 'scale-110 opacity-100' : 'opacity-60'
                }`}
                title={lang.name}
              >
                {lang.flag}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}