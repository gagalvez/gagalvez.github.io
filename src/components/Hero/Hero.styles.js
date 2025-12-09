// Estilos del Hero
export const styles = {
  section: "min-h-screen flex items-center justify-center section-container",
  container: "text-center animate-fade-in",
  
  iconContainer: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-8",
  icon: "w-8 h-8 text-blue-500",
  
  title: "text-5xl md:text-6xl font-bold mb-10",
  nameFirst: "text-white",
  nameLast: "gradient-text",
  
  bio: "text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed",
  
  buttons: {
    container: "flex flex-wrap justify-center gap-4 mb-16",
    primary: "px-8 py-3 bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors",
    secondary: "px-8 py-3 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors",
    icon: "w-4 h-4"
  },
  
  social: {
    container: "flex justify-center space-x-6",
    link: "p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors group",
    icon: "w-5 h-5 text-gray-400 group-hover:text-blue-500"
  }
};
