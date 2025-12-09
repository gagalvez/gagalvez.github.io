import React from "react";
import { ChevronDown, Mail, Github, Linkedin, Code2, Zap, GraduationCap, Rocket } from "lucide-react";
import { heroData } from "./Hero.logic";
import { styles } from "./Hero.styles";

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Code2 className={styles.icon} />
        </div>

        <h1 className={styles.title}>
          <span className={styles.nameFirst}>{heroData.name.first}</span>
          <br />
          <span className={styles.nameLast}>{heroData.name.last}</span>
        </h1>

        {/* Badges destacados */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="group relative px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-green-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Zap className="w-4 h-4 text-green-400 relative z-10" />
            <span className="text-sm font-semibold text-green-400 relative z-10">Aprendizaje Rápido</span>
          </div>
          
          <div className="group relative px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <GraduationCap className="w-4 h-4 text-blue-400 relative z-10" />
            <span className="text-sm font-semibold text-blue-400 relative z-10">Código Limpio</span>
          </div>
          
          <div className="group relative px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Rocket className="w-4 h-4 text-purple-400 relative z-10" />
            <span className="text-sm font-semibold text-purple-400 relative z-10">Proactivo</span>
          </div>
        </div>

        <p className={styles.bio}>
          {heroData.bio}
        </p>

        <div className={styles.buttons.container}>
          <a href="#projects" className={styles.buttons.primary}>
            Ver Proyectos
            <ChevronDown className={styles.buttons.icon} />
          </a>
          <a href="#contact" className={styles.buttons.secondary}>
            Contáctame
          </a>
        </div>

        <div className={styles.social.container}>
          <a
            href={`mailto:${heroData.social.email}`}
            className={styles.social.link}
            aria-label="Email"
          >
            <Mail className={styles.social.icon} />
          </a>
          <a
            href={heroData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social.link}
            aria-label="GitHub"
          >
            <Github className={styles.social.icon} />
          </a>
          <a
            href={heroData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social.link}
            aria-label="LinkedIn"
          >
            <Linkedin className={styles.social.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
