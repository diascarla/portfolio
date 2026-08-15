export const SectionHeader = ({ eyebrow, title }) => {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className="mb-8 text-center text-3xl font-bold text-brand-deep md:text-4xl">
          {title}
        </h2>
      )}
    </div>
  );
};
