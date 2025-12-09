import { useState } from 'react';

// Datos de contacto
export const contactData = {
  email: "ga.galvez.v@gmail.com",
  phone: "+569 8391166",
  location: "Santiago, Chile",
  locationFull: "Disponible para remoto, hibrido o presencial en Santiago, Chile"
};

// Hook para manejo de copy to clipboard
export const useCopyToClipboard = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return {
    copiedField,
    copyToClipboard,
  };
};
