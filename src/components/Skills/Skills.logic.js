import { Cpu, Database, Server, Wrench, Languages } from "lucide-react";

// Datos de habilidades
export const skillsData = {
  categories: [
    {
      title: "Frontend",
      icon: Cpu,
      skills: [
        { name: "HTML5 & CSS3" },
        { name: "ReactJS" },
        { name: "Angular" },
        { name: "Tailwind" },
        { name: "Typescript" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Python & Django" },
        { name: "JavaScript" },
        { name: "Node.js" },
        { name: "APIs REST" },
        { name: "SQL" },
        { name: "Typescript" },
      ],
    },
    {
      title: "Infraestructura TI",
      icon: Wrench,
      skills: [
        { name: "Azure" },
        { name: "Windows Server" },
        { name: "Active Directory" },
        { name: "Office 365" },
      ],
    },
  ],
  
  languages: {
    icon: Languages,
    items: ["Inglés (C1)"]
  },
  
  tools: [
    "Git & GitHub",
    "Postman",
    "ServiceNow",
    "Solman",
    "Excel Intermedio",
    "Nagios",
    "NagVis",
    "Atentus",
  ]
};
