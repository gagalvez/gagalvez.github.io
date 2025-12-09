// Estilos de Experience
export const styles = {
  section: "section-container",
  
  header: {
    container: "mb-16",
    title: "section-title",
    subtitle: "text-secondary text-center max-w-2xl mx-auto"
  },
  
  timeline: {
    container: "relative",
    line: "absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block",
    itemWrapper: "mb-12 md:flex md:items-center md:gap-8 animate-fade-up",
    dot: "hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10",
  },
  
  card: {
    base: "card md:w-1/2",
    left: "md:mr-auto md:pr-12",
    right: "md:ml-auto md:pl-12"
  },
  
  content: {
    wrapper: "flex items-start gap-4 mb-4",
    iconWrapper: "p-3 rounded-lg bg-accent/10",
    icon: "w-6 h-6 text-accent",
    details: "flex-1"
  },
  
  jobHeader: {
    role: "text-xl font-bold mb-1",
    company: "text-accent font-medium mb-3"
  },
  
  meta: {
    container: "flex flex-wrap gap-4 text-sm text-secondary mb-4",
    item: "flex items-center gap-1",
    icon: "w-4 h-4"
  },
  
  description: "text-secondary mb-4 leading-relaxed",
  
  technologies: {
    container: "flex flex-wrap gap-2",
    tag: "px-3 py-1 bg-surface border border-gray-800 rounded-full text-sm text-secondary"
  }
};
