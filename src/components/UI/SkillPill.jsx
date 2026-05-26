export const SkillPill = ({ icon: Icon, name }) => {
    return (
        <div className="flex w-fit items-center justify-center gap-3 px-5 py-2 rounded-full border transition-all duration-300 bg-(--bg-card) text-main-text border-brand-deep/30 hover:border-brand-deep hover:text-brand-pink hover:shadow-[0_0_15px_rgba(229,56,136,0.3)] dark:hover:shadow-[0_0_20px_rgba(229,56,136,0.4)]">
            <div className="flex items-center text-current">
                {typeof Icon === "function" ? <Icon /> : Icon}
            </div>
            <span className="text-sm font-bold tracking-tight ">
                {name}
            </span>
        </div>
    );
};