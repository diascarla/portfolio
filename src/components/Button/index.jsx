
export const Button = ({ children, variant = "primary", onClick }) => {
  const styles = {
    // Estilo base: tamanho responsivo e espaçamento equilibrado
    base: "min-h-[44px] w-fit max-w-full px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2",
    
    // Variantes com suas cores favoritas
    primary: "bg-brand-deep text-white button-hover",
    secondary: "bg-transparent border border-brand-pink text-brand-pink hover:bg-brand-deep hover:text-white button-hover",
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

