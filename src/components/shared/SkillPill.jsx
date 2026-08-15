export const SkillPill = ({ icon: Icon, name }) => {
    return (
        <div className="flex w-fit items-center justify-center gap-3 rounded-full border border-brand-deep/15 bg-[color:var(--bg-card)] px-4 py-2 shadow-sm transition-all duration-200 hover:border-brand-deep hover:text-brand-deep">
            <div className="flex items-center text-current">
                {typeof Icon === "function" ? <Icon /> : Icon}
            </div>
            <span className="text-sm font-semibold tracking-tight text-[color:var(--text-page)]">
                {name}
            </span>
        </div>
    );
};
