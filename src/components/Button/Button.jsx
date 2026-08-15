
export const Button = ({ children, variant = "primary", onClick, ...props }) => {
  const styles = {
    base: "inline-flex min-h-[46px] w-fit max-w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 md:text-base focus-ring",
    primary: "bg-brand-deep text-white button-hover shadow-sm hover:bg-brand-pink",
    secondary: "bg-transparent border border-brand-pink text-[color:var(--brand-accent)] hover:bg-brand-deep hover:text-white button-hover"
  };

  return (
    <button
      type="button"
      className={`${styles.base} ${styles[variant]} cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

