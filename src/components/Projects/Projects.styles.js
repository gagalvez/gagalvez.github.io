// Estilos del componente Projects
export const styles = {
  section: "section-container",
  
  header: {
    container: "mb-16",
    title: "section-title",
    subtitle: "text-secondary text-center max-w-2xl mx-auto",
  },

  projectsList: "space-y-8",

  card: {
    container: "card card-hover animate-fade-up",
    layout: "flex flex-col md:flex-row md:items-start md:justify-between gap-6",
    content: "flex-1",
    innerContent: "flex items-start gap-4 mb-4",
    details: "flex-1",
  },

  icon: {
    base: "p-3 rounded-lg",
    inProgress: "bg-gradient-to-br from-accent/20 to-accent/5",
    default: "bg-accent/10",
    iconSize: "w-6 h-6 text-accent",
  },

  projectHeader: {
    container: "flex items-center gap-3 mb-2",
    title: "text-xl font-bold",
  },

  badge: {
    container: "px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-semibold text-accent flex items-center gap-1",
    dot: "w-2 h-2 bg-accent rounded-full animate-pulse",
  },

  description: "text-secondary mb-4",

  technologies: {
    container: "flex flex-wrap gap-2 mb-4",
    tag: "px-3 py-1 bg-surface border border-gray-800 rounded-full text-sm text-secondary",
  },

  previewButton: "inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-sm font-medium text-accent transition-all",

  links: {
    container: "flex gap-3",
    link: "p-3 rounded-lg bg-surface border border-gray-800 hover:border-accent transition-colors",
    iconSize: "w-5 h-5",
  },

  gallery: {
    container: "mt-6 pt-6 border-t border-gray-800 animate-fade-up",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    imageWrapper: "relative group overflow-hidden rounded-lg border border-gray-800 hover:border-accent transition-colors cursor-pointer",
    image: "w-full h-48 object-cover transition-transform group-hover:scale-105",
    overlay: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
    overlayText: "absolute bottom-0 left-0 right-0 p-4",
    label: "text-sm text-white font-medium",
  },

  lightbox: {
    overlay: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-up",
    closeButton: "absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10",
    closeIcon: "w-6 h-6",
    imageContainer: "relative max-w-7xl max-h-[90vh] mx-4",
    image: "max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl",
  },
};
