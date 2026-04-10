export const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 40" // Define o espaço de desenho
      className={`block h-10 w-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Definição do Gradiente (as cores que você definiu no tailwind.config.js) */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F706B6" /> {/* brand-pink */}
          <stop offset="100%" stopColor="#F7A8C4" /> {/* neon-pink */}
        </linearGradient>
      </defs>

      {/* O Texto do Logo */}
      <text
        x="50%"
        y="57%"
        textAnchor="middle" // Centraliza o texto no SVG
        fill="url(#logoGradient)" // Aplica o gradiente definido acima
        fontFamily="Consolas, Monaco, 'Courier New', monospace" // Fonte de código
        fontSize="24"
        fontWeight="bold"
        letterSpacing="-1"
      >
        &lt;CD/&gt;
      </text>
    </svg>
  );
};
