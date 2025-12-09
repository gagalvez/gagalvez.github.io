export const styles = {
  nav: {
    base: "fixed w-full z-50 transition-all duration-300",
    scrolled: "bg-surface/95 backdrop-blur-md border-b border-gray-800",
    transparent: "bg-transparent",
  },
  container: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "flex justify-between items-center h-16",
  
  logo: {
    link: "flex items-center space-x-2 group relative",
    icon: "w-6 h-6 text-accent group-hover:rotate-12 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    text: {
      base: "text-xl font-bold transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]",
      firstName: "text-white",
      lastName: "text-accent",
      cursor: "",
    },
  },
  
  menu: {
    desktop: "hidden md:flex items-center space-x-8",
    mobile: "md:hidden py-4 border-t border-gray-800",
    link: {
      desktop: "relative text-secondary hover:text-accent transition-colors text-sm font-medium group/link",
      mobile: "block py-2 text-secondary hover:text-accent transition-colors relative group/link",
      underline: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 group-hover/link:w-full transition-all duration-300 ease-out",
    },
  },
  
  toggleButton: "md:hidden text-secondary hover:text-primary",
  icon: "w-6 h-6",
};
