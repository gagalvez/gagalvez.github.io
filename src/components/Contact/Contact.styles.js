// Estilos de Contact
export const styles = {
  section: "section-container",
  
  header: {
    container: "mb-16",
    title: "section-title",
    subtitle: "text-secondary text-center max-w-2xl mx-auto"
  },
  
  wrapper: "max-w-2xl mx-auto",
  
  card: {
    container: "card",
    title: "text-2xl font-bold mb-8"
  },
  
  contactList: "space-y-6",
  
  contactItem: {
    container: "flex items-start gap-4",
    iconWrapper: "p-3 rounded-lg bg-accent/10",
    icon: "w-6 h-6 text-accent",
    details: "flex-1",
    label: "text-secondary text-sm",
    value: "text-primary font-medium"
  },
  
  copyButton: {
    base: "p-2.5 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:border-accent transition-all duration-300 group",
    icon: "w-4 h-4 text-accent/70 group-hover:text-accent",
    iconCopied: "w-4 h-4 text-accent"
  }
};
