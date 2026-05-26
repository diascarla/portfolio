import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/hero-bg.webp";
import { Button } from "../Button";
import { ReactIcon } from "../Icons/ReactIcons";


export const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-soft-bg/85 backdrop-blur-[2px] z-0" />

            <div className="absolute left-[25%] bottom-[20%] opacity-50 z-0 hidden lg:block rotate-12 pointer-events-none">
                <ReactIcon className="h-20 w-20  text-brand-deep animate-spin-slow" />
            </div>

            {/* Conteúdo Principal: z-10 para ficar ACIMA do overlay e do ícone de fundo */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Badge Superior */}
                <span className="px-4 py-1.5 rounded-full border border-brand-pink/20 bg-brand-soft/5 text-main-text text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in">
                    Disponível para novos projetos
                </span>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-light text-main-text tracking-[0.05em] mb-6">
                    &lt; DESENVOLVEDORA <br className="md:hidden" />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-deep via-brand-pink to-brand-soft">
                        FRONT-END
                    </span>{" "}
                    /&gt;
                </h1>

                {/* Subtítulo */}
                <p className="max-w-2xl text-base md:text-lg text-gray-500 mb-10 leading-relaxed font-light tracking-wide">
                    Crio Experiências Interativas com <strong>React</strong> e Foco no
                    Usuário.
                </p>

                {/* Ações (CTAs) */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => navigate("/projetos")}>Ver Projetos</Button>
                    <Button variant="secondary" onClick={() => navigate("/sobre")}>
                        Sobre Mim
                    </Button>
                </div>
            </div>
        </section>
    )
}