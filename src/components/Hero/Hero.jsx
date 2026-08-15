import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.webp";
import { Button } from "../Button/Button";
import { ReactIcon } from "../Icons/ReactIcons";


export const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 text-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 z-0 bg-soft-bg/85 backdrop-blur-[2px]" />

            <div className="pointer-events-none absolute bottom-[20%] left-[25%] z-0 hidden rotate-12 opacity-50 lg:block">
                <ReactIcon className="h-20 w-20 text-brand-deep animate-spin-slow" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <span className="mb-6 rounded-full border border-brand-pink/20 bg-brand-soft/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-page)] animate-fade-in">
                    Disponível para novos projetos
                </span>

                <h1 className="mb-4 text-2xl font-medium text-[color:var(--text-page)] md:text-3xl">
                    Olá, eu sou a Carla Dias!
                </h1>

                <h2 className="mb-6 text-4xl font-light tracking-[0.05em] text-[color:var(--text-page)] md:text-6xl">
                    &lt; DESENVOLVEDORA <br className="md:hidden" />
                    <span className="bg-gradient-to-r from-brand-deep via-brand-pink to-brand-soft bg-clip-text font-semibold text-transparent">
                        FRONT-END
                    </span>{" "}
                    /&gt;
                </h2>

                <p className="mb-10 max-w-2xl text-base font-light leading-relaxed tracking-wide text-[color:var(--text-muted)] md:text-lg">
                    Crio experiências interativas com <strong className="font-semibold text-[color:var(--text-page)]">React</strong> e foco no usuário.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button onClick={() => navigate("/projetos")}>Ver Projetos</Button>
                    <Button variant="secondary" onClick={() => navigate("/sobre")}>
                        Sobre Mim
                    </Button>
                </div>
            </div>
        </section>
    );
};