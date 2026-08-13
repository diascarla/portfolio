export const SkillPill = ({ icon: Icon, name }) => {
    return (
        <div className="flex w-fit items-center justify-center gap-3 px-5 py-2 rounded-full card-hover">
            <div className="flex items-center text-current">
                {typeof Icon === "function" ? <Icon /> : Icon}
            </div>
            <span className="text-sm font-bold tracking-tight ">
                {name}
            </span>
        </div>
    );
};
