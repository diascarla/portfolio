export const ReactIcon = ({ className = "h-6 w-6 text-brand-pink" }) => {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348" // viewBox oficial do logo do React
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* O núcleo central */}
      <circle cx="0%" cy="0%" r="2.05" fill="currentColor" />

      {/* As três elipses (orbitais) */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};

// Aceita className para tamanho (h-6 w-6), text-color, hover, animações
export const IconBase = ({
  children,
  className = "h-6 w-6",
  viewBox = "0 0 24 24",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="currentColor" // Preenche com a cor do texto do Tailwind (ex: text-brand-pink)
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// Ícone para link do site ao vivo (Abrir em nova aba)
export const ExternalLinkIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// Ícone do GitHub (SVG otimizado da marca)
export const GithubIcon = (props) => (
  <IconBase viewBox="0 0 24 24" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.478 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </IconBase>
);

// Seta fina para "Voltar" ou "Saiba Mais"
export const ArrowRightIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M5 12h14m-7-7l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// // Ícone do React (Simplificado e Limpo)
// export const ReactIcon = (props) => (
//   <IconBase viewBox="-11.5 -10.232 23 20.463" {...props}>
//     <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
//     <g stroke="currentColor" strokeWidth="1" fill="none">
//       <ellipse rx="11" ry="4.2"/>
//       <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
//       <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
//     </g>
//   </IconBase>
// );

// Símbolo de Código (Código Puro/JS/TS) - Estilo Minimalista
export const CodeSymbolIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M8 6l-6 6 6 6m8-12l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// Ícone do LinkedIn
export const LinkedinIcon = (props) => (
  <IconBase viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.052-1.86-3.052-1.86 0-2.14 1.453-2.14 2.957v5.7h-3v-11h2.88v1.506h.042c.401-.76 1.381-1.561 2.839-1.561 3.036 0 3.599 1.998 3.599 4.595v5.96z" />
  </IconBase>
);

// Ícone de Envelope (E-mail) - Estilo Limpo e Fino
export const MailIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

export const SunIcon = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor" // O segredo está aqui! Ele pega a cor do texto.
      strokeWidth="1.5" // Traço fino para delicadeza.
      strokeLinecap="round" // Cantos arredondados.
      strokeLinejoin="round"
      {...props}
    >
      {/* Círculo central do sol */}
      <circle cx="12" cy="12" r="4" />
      {/* Raios do sol com espaçamento delicado */}
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  );
};

export const MoonIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-0.75 -0.75 16 16"
      stroke="#2D2D2D"
      aria-hidden="true"
      id="Moon--Streamline-Heroicons-Outline"
      height="24"
      width="24"
      {...props}
    >
      <desc>Moon Streamline Icon: https://streamlinehq.com</desc>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.141833333333333 9.063708333333333A5.8725 5.8725 0 0 1 10.875 9.515625c-3.2534374999999995 0 -5.890625 -2.6371875 -5.890625 -5.890625 0 -0.8035416666666667 0.16070833333333334 -1.5690208333333333 0.45191666666666663 -2.266833333333333A5.8924375 5.8924375 0 0 0 1.8125 6.796875C1.8125 10.0503125 4.4496875 12.6875 7.703124999999999 12.6875a5.8924375 5.8924375 0 0 0 5.4387083333333335 -3.6237916666666665Z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
