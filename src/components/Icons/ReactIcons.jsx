// Em vez de 'const OfficialIcons = { ... }', faça assim:

import { DiReact } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiFigma, SiNodedotjs } from "react-icons/si";
import { MdOutlineArchitecture } from "react-icons/md";

const iconClassBase = "h-5 w-5 text-current"; // Classe base para todos os ícones, usando a cor atual do texto

export const ReactIconOficial = () => <DiReact className={`${iconClassBase} !h-6 !w-6`} />;
export const TSIcon = () => <SiTypescript className={iconClassBase} />;
export const TailwindIcon = () => <SiTailwindcss className={iconClassBase} />;
export const UXUIIcon = () => <MdOutlineArchitecture className={iconClassBase} />;
export const FigmaIcon = () => <SiFigma className={iconClassBase} />;
export const NodeIcon = () => <SiNodedotjs className={iconClassBase} />;

export const ReactIcon = ({ className = "h-5 w-5"}) => {
  return (
    <svg
      viewBox="-11.5 -10.23174 23 20.46348" // viewBox oficial do logo do React
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
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

export const CodeSymbolIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M8 6l-6 6 6 6m8-12l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// Ícone do Git
export const GitIcon = (props) => (
  <IconBase {...props}>
    <path 
      d="M10.5 19a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14.5 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14.5 10.5l-4 4m0-4.5V4" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none"
    />
  </IconBase>
);

// Ícone do GitHub (Versão Outline Minimalista)
export const GithubIcon = (props) => (
  <IconBase viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.06.069-.06 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.512.335 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

// Ícone para link do site ao vivo (Abrir em nova aba)
export const ExternalLinkIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// Seta fina para "Voltar" ou "Saiba Mais"
export const ArrowRightIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M5 12h14m-7-7l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

// Ícone do LinkedIn (Versão Outline Minimalista)
export const LinkedinIcon = (props) => (
  <IconBase viewBox="0 0 24 24" fill="none" {...props}>
    <g
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* O quadrado externo arredondado */}
      <rect x="2" y="2" width="20" height="20" rx="4" />
      
      {/* O 'i' e o ponto */}
      <line x1="8" y1="11" x2="8" y2="17" />
      <circle cx="8" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
      
      {/* O 'n' arredondado */}
      <path d="M11 17V11c0-1.333.667-2 2-2s2 .667 2 2v6" />
    </g>
  </IconBase>
);

// Aceita className para tamanho (h-5 w-5), text-color, hover, animações
export const IconBase = ({
  children,
  className = "h-5 w-5",
  viewBox = "0 0 24 24",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="currentColor" // Preenche com a cor do texto do Tailwind (ex: text-brand-pink)
    className={className}
    {...props}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    stroke="currentColor" // Traço também segue a cor do texto
  >
    {children}
  </svg>
);

// Ícone de Envelope (E-mail) - Estilo Limpo e Fino
export const MailIcon = (props) => (
  <IconBase {...props}>
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconBase>
);

export const MoonIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-0.75 -0.75 16 16"
      stroke="currentColor"
      aria-hidden="true"
      id="Moon--Streamline-Heroicons-Outline"
      height="24"
      width="24"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
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