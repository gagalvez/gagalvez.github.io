import { useState } from 'react';
import img1 from '../../assets/medtime-home.png';
import img2 from '../../assets/medtime-profile.png';
import img3 from '../../assets/medtime-appointment.png';

// Datos de proyectos
export const projects = [
  {
    id: 1,
    title: "Sistema de Citas Médicas con IA",
    description:
      "Aplicación web para agendamiento de citas médicas con integración de inteligencia artificial para optimizar la programación y reducir tiempos de espera.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "APIs REST", "AI/ML"],
    github: "#",
    live: "#",
    inProgress: true,
    images: [img1, img2, img3],
  },
  {
    id: 2,
    title: "To-Do List (CRUD con LocalStorage)",
    description:
      "Aplicación para gestionar tareas con funcionalidades CRUD completas. Incluye creación, edición, marcado y eliminación de tareas, con persistencia en LocalStorage y una interfaz moderna construida con React y Tailwind.",
    technologies: ["React", "JavaScript", "Tailwind", "LocalStorage"],
    github: "https://github.com/gagalvez/to-do-list",
    live: "https://gagalvez.github.io/to-do-list/",
  },
  {
    id: 3,
    title: "Weather App (Consulta de Clima con API)",
    description:
      "Aplicación para consultar el clima en tiempo real usando una API externa. Permite buscar ciudades, mostrar temperatura, estado del tiempo y datos adicionales, con una interfaz responsiva desarrollada en React y Tailwind.",
    technologies: ["React", "JavaScript", "Tailwind", "APIs"],
    github: "https://github.com/gagalvez/weather-app",
    live: "https://gagalvez.github.io/weather-app/",
  },
];

// Hook personalizado con toda la lógica
export const useProjectsLogic = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const isExpanded = (projectId) => expandedProject === projectId;

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return {
    projects,
    expandedProject,
    lightboxImage,
    toggleProject,
    isExpanded,
    openLightbox,
    closeLightbox,
  };
};
