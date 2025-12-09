import React from "react";
import { ExternalLink, Github, Folder, Sparkles, ChevronDown, ChevronUp, Image as ImageIcon, X } from "lucide-react";
import { useProjectsLogic } from "./Projects.logic";
import { styles } from "./Projects.styles";

const Projects = () => {
  const {
    projects,
    lightboxImage,
    toggleProject,
    isExpanded,
    openLightbox,
    closeLightbox,
  } = useProjectsLogic();

  return (
    <section id="projects" className={styles.section}>
      {/* Header */}
      <div className={styles.header.container}>
        <h2 className={styles.header.title}>
          Proyectos <span className="text-accent">Destacados</span>
        </h2>
        <p className={styles.header.subtitle}>
          Una selección de trabajos recientes que demuestran mi enfoque en
          soluciones escalables y código de calidad.
        </p>
      </div>

      {/* Projects List */}
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={styles.card.container}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={styles.card.layout}>
              <div className={styles.card.content}>
                <div className={styles.card.innerContent}>
                  {/* Icon */}
                  <div className={`${styles.icon.base} ${project.inProgress ? styles.icon.inProgress : styles.icon.default}`}>
                    {project.inProgress ? (
                      <Sparkles className={styles.icon.iconSize} />
                    ) : (
                      <Folder className={styles.icon.iconSize} />
                    )}
                  </div>
                  
                  <div className={styles.card.details}>
                    {/* Title & Badge */}
                    <div className={styles.projectHeader.container}>
                      <h3 className={styles.projectHeader.title}>{project.title}</h3>
                      {project.inProgress && (
                        <span className={styles.badge.container}>
                          <span className={styles.badge.dot}></span>
                          En Desarrollo
                        </span>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className={styles.description}>{project.description}</p>
                    
                    {/* Technologies */}
                    <div className={styles.technologies.container}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.technologies.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Preview Button */}
                    {project.images && project.images.length > 0 && (
                      <button
                        onClick={() => toggleProject(project.id)}
                        className={styles.previewButton}
                      >
                        <ImageIcon className="w-4 h-4" />
                        {isExpanded(project.id) ? 'Ocultar' : 'Ver'} Preview
                        {isExpanded(project.id) ? 
                          <ChevronUp className="w-4 h-4" /> : 
                          <ChevronDown className="w-4 h-4" />
                        }
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Links */}
              {!project.inProgress && (
                <div className={styles.links.container}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.links.link}
                    aria-label="Código fuente"
                  >
                    <Github className={styles.links.iconSize} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.links.link}
                    aria-label="Ver demo"
                  >
                    <ExternalLink className={styles.links.iconSize} />
                  </a>
                </div>
              )}
            </div>

            {/* Image Gallery */}
            {project.images && isExpanded(project.id) && (
              <div className={styles.gallery.container}>
                <div className={styles.gallery.grid}>
                  {project.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className={styles.gallery.imageWrapper}
                      onClick={() => openLightbox(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} preview ${imgIndex + 1}`}
                        className={styles.gallery.image}
                      />
                      <div className={styles.gallery.overlay}>
                        <div className={styles.gallery.overlayText}>
                          <p className={styles.gallery.label}>Vista {imgIndex + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className={styles.lightbox.overlay}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className={styles.lightbox.closeButton}
            aria-label="Cerrar"
          >
            <X className={styles.lightbox.closeIcon} />
          </button>
          <div 
            className={styles.lightbox.imageContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage} 
              alt="Preview ampliado"
              className={styles.lightbox.image}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
