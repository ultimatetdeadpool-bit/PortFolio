"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { ArrowRight, Download } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-150"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-background/0 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              {t.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.text}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t.skills.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(t.skills.categories).map(([key, category]) => (
                <div
                  key={key}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t.skills.items[key as keyof typeof t.skills.items].map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t.experience.title}
            </h2>
            <div className="space-y-8">
              {t.experience.positions.map((position, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-1">{position.role}</h3>
                    <p className="text-primary font-medium mb-2">{position.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{position.period}</p>
                    <p className="text-muted-foreground">{position.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t.projects.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.nav.contact}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'en' && "Let's collaborate on your next data science project."}
              {language === 'fr' && "Collaborons sur votre prochain projet de data science."}
              {language === 'ja' && "次のデータサイエンスプロジェクトでコラボレーションしましょう。"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alex.chen@example.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t.hero.contact}
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                <Download className="mr-2" size={20} />
                {language === 'en' && 'Download CV'}
                {language === 'fr' && 'Télécharger CV'}
                {language === 'ja' && 'CV ダウンロード'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}