export const AboutMe = () => {
    return (
        <section className="relative overflow-hidden bg-soft-bg px-6 py-20">
            <div className="mx-auto max-w-5xl gap-8">
                <h2 className="mb-8 text-center text-3xl font-bold text-brand-deep md:text-4xl">
                    Além do Código
                </h2>

                <p className="mx-auto mb-6 max-w-4xl text-lg leading-relaxed text-[color:var(--text-muted)]">
                    Crio interfaces que unem a lógica do desenvolvimento Front-End à sensibilidade do <span className="font-semibold text-[color:var(--brand-accent)]">UX/UI Design</span>. Minha missão é traduzir conceitos complexos em experiências simples e visualmente sofisticadas. Com formação em Engenharia de Software pela <span className="font-semibold text-[color:var(--brand-accent)]">USP</span> e domínio de ferramentas como <span className="font-semibold text-[color:var(--brand-accent)]">React</span> e Tailwind, foco em construir produtos digitais que não apenas funcionam perfeitamente, mas que encantam quem os utiliza.
                </p>
            </div>
        </section>
    );
};
