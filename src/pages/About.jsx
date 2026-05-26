import { LuSparkles } from "react-icons/lu";
import fotoPerfil from "../assets/fotoPerfil.png";
import { Button } from "../components/Button/index";
import { SkillPill } from "../components/UI/SkillPill";
import { educationData } from "../data/educationData";
import { pillarsData } from "../data/pillarsData";

export const About = () => {

    return (
        <section className="min-h-[90vh] bg-soft-bg flex flex-col justify-center items-center px-6 py-20">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <img src={fotoPerfil} alt="Imagem de Sobre" className="w-full h-auto drop-shadow-2xl bg-transparent block" />
                </div>
                <div className="flex flex-col items-start gap-6">
                    <SkillPill icon={<LuSparkles size={16} />} name="Desenvolvedora & Designer" />                    
                    <h1 className="text-3xl md:text-5xl font-bold text-main-text">
                        Do artesanato à Engenharia de Software
                    </h1>
                    <p className="text-muted-text text-lg leading-relaxed">
                        Minha trajetória sempre foi guiada pelo cuidado com o detalhe e pela busca pela harmonia visual. Com anos de experiência nos setores de estética e artesanato, desenvolvi uma percepção aguda para simetria, proporção e a experiência do cliente — competências que hoje transponho para a Engenharia de Software na USP. Como desenvolvedora com foco em UX/UI, utilizo essa bagagem para projetar interfaces que não são apenas funcionais, mas esteticamente impecáveis e centradas na jornada humana.
                    </p>
                    <div className="flex sm:flex-row gap-4 ">
                        <Button variant="secondary" onClick={() => window.open("https://drive.google.com/file/d/1xkfjftP6427_OtrM3f-EtWbFpq04fQyD/view?usp=drive_link", "_blank", "noreferrer")}>
                            Baixar CV
                        </Button>
                        <Button onClick={() => window.open("https://www.linkedin.com/in/devcarladias/", "_blank", "noreferrer")}>
                            Vamos conversar?
                        </Button>
                    </div>
                </div>
            </div>

            {/* Seção de Trajetória Acadêmica */}
            <div className="w-full max-w-4xl mx-auto px-6 mt-32 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-main-text mb-12">
                    Trajetória Acadêmica
                </h2>

                {/* O Container da Linha do Tempo */}
                <div className="relative border-l-2 border-brand-deep/20 ml-4 md:ml-6 flex flex-col gap-12">
                    {educationData.map((item) => (
                        <div key={item.id} className="relative pl-8 group">
                            <div className="
                                /* 1. Posicionamento milimétrico em cima da linha */
                                absolute -left-[11px] top-1.5 
  
                                /* 2. Tamanho e Formato */
                                w-5 h-5 rounded-full border-2 
  
                                /* 3. Cores padrão (Combinando com seu index.css) */
                                bg-[var(--bg-card)] border-brand-deep/40 transition-all duration-300
  
                                /* 4. Efeito de Hover (Interatividade de UI) */
                                group-hover:border-brand-pink 
                                group-hover:bg-brand-pink
                                group-hover:shadow-[0_0_12px_rgba(229,56,136,0.5)]" />

                            <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
                                {/* Ano / Período */}
                                <span className="text-sm font-semibold text-brand-pink/90 tracking-wider uppercase">
                                    {item.year}
                                </span>

                                {/* Título do Curso */}
                                <h3 className="text-xl font-bold text-main-text tracking-tight">
                                    {item.title}
                                </h3>

                                {/* Instituição de Ensino */}
                                <span className="text-base font-medium text-muted-text/80">
                                    {item.institution}
                                </span>

                                {/* Descrição sutil da grade/foco */}
                                <p className="text-muted-text text-sm leading-relaxed mt-2 max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seção Pilares de Atuação */}
            <section className="w-full max-w-4xl mx-auto px-6 mt-32 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-main-text mb-12">
                    Como eu transformo ideias em código
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillarsData.map((pilar) => {
                        // Guardamos a referência do ícone em uma variável com letra maiúscula
                        const IconComponent = pilar.icon;

                        return (
                            <div key={pilar.id} className="flex flex-col gap-4 group text-left">
                                {/* Renderização dinâmica com o componente */}
                                <div className="text-muted-text group-hover:text-brand-pink transition-colors duration-300">
                                    <IconComponent size={26} />
                                </div>

                                <h3 className="text-lg font-bold text-main-text tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
                                    {pilar.title}
                                </h3>
                                <p className="text-muted-text text-sm leading-relaxed">
                                    {pilar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    )
}