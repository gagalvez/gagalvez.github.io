// Estilos de Skills
export const styles = {
  section: "section-container",
  
  header: {
    container: "mb-16",
    title: "section-title",
    subtitle: "text-secondary text-center max-w-2xl mx-auto"
  },
  
  categoriesGrid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  
  categoryCard: {
    container: "card animate-fade-up",
    header: "flex items-center gap-3 mb-6",
    iconWrapper: "p-3 rounded-lg bg-accent/10",
    icon: "w-6 h-6 text-accent",
    title: "text-xl font-bold"
  },
  
  skillsList: "space-y-4",
  skillItem: "flex justify-between items-center py-2 border-b border-gray-800 last:border-0",
  skillName: "text-primary",
  
  languages: {
    container: "mt-12 mb-8",
    card: "card max-w-md mx-auto",
    header: "flex items-center gap-3 mb-4 justify-center",
    iconWrapper: "p-3 rounded-lg bg-accent/10",
    icon: "w-6 h-6 text-accent",
    title: "text-xl font-bold",
    content: "text-center",
    item: "text-primary"
  },
  
  tools: {
    container: "mt-12",
    title: "text-2xl font-bold text-center mb-8",
    grid: "grid grid-cols-2 sm:grid-cols-4 gap-4",
    item: "p-4 bg-surface border border-gray-800 rounded-lg text-center hover:border-accent transition-colors",
    text: "text-secondary"
  }
};
