import React from 'react';

export const Button = ({ children, variant = "primary", onClick }) => {
  const styles = {
    // Estilo base: minimalista e suave
    base: "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2",
    
    // Variantes com suas cores favoritas
    primary: "bg-brand-pink text-white hover:bg-neon-pink hover:border-brand-deep  hover:shadow-[0_0_15px_rgba(229,56,136,0.3)] dark:hover:shadow-[0_0_20px_rgba(229,56,136,0.4)]",
    secondary: "bg-transparent border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white",
    ghost: "text-main-text hover:text-brand-pink"
  };

  return (
    <button 
      className={`${styles.base} ${styles[variant]} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

