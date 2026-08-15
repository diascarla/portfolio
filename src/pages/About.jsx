import { LuSparkles } from "react-icons/lu";
import fotoPerfil from "../assets/fotoPerfil.png";
import { Button } from "../components/Button/Button";
import { SkillPill } from "../components/shared/SkillPill";
import { educationData } from "../data/educationData";
import { pillarsData } from "../data/pillarsData";

export const About = () => {
    return (
        <section className="flex min-h-[90vh] flex-col items-center justify-center bg-soft-bg px-6 py-20">
            <div className="section-shell grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex items-center justify-center">
                    <img
                        src={fotoPerfil}
                        alt="Retrato profissional de Carla Dias"
                        className="block h-auto w-full max-w-[480px] rounded-[2rem] bg-transparent drop-shadow-2xl"
                    />
                </div>

                <div className="flex flex-col items-start gap-6">
                    <SkillPill icon={<LuSparkles size={16} />} name="Desenvolvedora & Designer" />
                    <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text-page)] md:text-5xl">
                        Do artesanato à Engenharia de Software
                    </h1>
                    <p className="text-lg leading-relaxed text-[color:var(--text-muted)]">
                        Minha trajetória sempre foi guiada pelo cuidado com o detalhe e pela busca pela harmonia visual. Com anos de experiência nos setores de estética e artesanato, desenvolvi uma percepção aguda para simetria, proporção e a experiência do cliente — competências que hoje transponho para a Engenharia de Software na USP. Como desenvolvedora com foco em UX/UI, utilizo essa bagagem para projetar interfaces que não são apenas funcionais, mas esteticamente impecáveis e centradas na jornada humana.
                    </p>

                    <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row">
                        <Button
                            aria-label="Baixar currículo"
                            variant="secondary"
                            onClick={() => window.open("https://drive.google.com/file/d/1xkfjftP6427_OtrM3f-EtWbFpq04fQyD/view?usp=drive_link", "_blank", "noreferrer")}
                        >
                            Baixar CV
                        </Button>
                        <Button
                            aria-label="Enviar mensagem pelo WhatsApp"
                            onClick={() => window.open("https://wa.me/5511979658956?text=Ol%C3%A1%2C%20Carla!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.", "_blank", "noopener noreferrer")}
                        >
                            Vamos conversar?
                        </Button>
                    </div>
                </div>
            </div>

            <div className="section-shell mt-32 w-full max-w-4xl text-left">
                <h2 className="mb-12 text-2xl font-bold text-brand-deep md:text-3xl">
                    Trajetória Acadêmica
                </h2>

                <div className="relative ml-4 flex flex-col gap-12 border-l-2 border-brand-pink/20 md:ml-6">
                    {educationData.map((item) => (
                        <div key={item.id} className="group relative pl-8">
                            <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-2 border-brand-pink/40 bg-[var(--bg-card)] transition-all duration-300 group-hover:border-brand-deep group-hover:bg-brand-deep group-hover:shadow-[0_0_12px_rgba(229,56,136,0.5)]" />

                            <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-accent)]">
                                    {item.year}
                                </span>

                                <h3 className="text-xl font-bold tracking-tight text-[color:var(--text-page)]">
                                    {item.title}
                                </h3>

                                <span className="text-base font-medium text-[color:var(--text-muted)]/80">
                                    {item.institution}
                                </span>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--text-muted)]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="section-shell mt-32 w-full max-w-4xl text-left">
                <h2 className="mb-12 text-2xl font-bold text-brand-deep md:text-3xl">
                    Como eu transformo ideias em código
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {pillarsData.map((pilar) => {
                        const IconComponent = pilar.icon;

                        return (
                            <div key={pilar.id} className="group flex flex-col gap-4 text-left">
                                <div className="text-[color:var(--text-muted)] transition-colors duration-300 group-hover:text-[color:var(--brand-accent)]">
                                    <IconComponent size={26} />
                                </div>

                                <h3 className="text-lg font-bold tracking-tight text-[color:var(--text-page)] transition-colors duration-300 group-hover:text-[color:var(--brand-accent)]">
                                    {pilar.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                                    {pilar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
};