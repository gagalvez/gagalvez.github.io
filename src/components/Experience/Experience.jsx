import React from "react";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import { experiencesData } from "./Experience.logic";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="mb-16">
        <h2 className="section-title">
          Experiencia <span className="text-accent">Profesional</span>
        </h2>
        <p className="text-secondary text-center max-w-2xl mx-auto">
          Mi trayectoria hasta el momento.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Línea de tiempo central animada */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-blue-500/50 to-transparent hidden md:block"></div>

        {experiencesData.map((exp, index) => (
          <div
            key={exp.id}
            className="relative mb-16 last:mb-0 animate-fade-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Punto central con animación */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-20 hidden md:block">
              <div className="relative">
                {/* Pulso animado */}
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl"></div>
                
                {/* Punto central */}
                <div className="relative w-6 h-6 bg-gradient-to-br from-accent to-blue-500 rounded-full border-4 border-background shadow-lg shadow-accent/50 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Contenido alternado */}
            <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16`}>
              {/* Espaciador invisible */}
              <div className="hidden md:block w-1/2"></div>

              {/* Card */}
              <div className="w-full md:w-1/2 group">
                <div className="">
                  {/* Header con gradiente */}
                  <div className="relative overflow-hidden rounded-t-lg -m-6 mb-4 p-6 bg-gradient-to-br from-accent/10 via-blue-500/5 to-transparent border-b border-accent/20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent/30 to-blue-500/20 border border-accent/40 transition-all duration-300">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-sm">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-gray-800 rounded-full text-sm">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      <span className="text-secondary">{exp.location}</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-surface to-gray-900/50 border border-gray-800 rounded-lg text-sm text-secondary hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
