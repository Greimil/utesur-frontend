export const Section = ({ children, className="", titleClass="", title = "" }) => {
  return (
    <section>
      {title !== "" && <h3 className={`px-4 ${titleClass}`}>{title}</h3>}
      <section className={` px-4  py-6 lg:px-4 ${className}`}>
        {children}
      </section>
    </section>
  );
};
