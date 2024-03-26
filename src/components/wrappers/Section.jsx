export const Section = ({
  children,
  className = "",

  id,
  heading = ""
}) => {
  return (
    <section ref={id}>
      {/* {title !== "" && <h3 className={`px-4 ${titleClass}`}>{title}</h3>}
       */}
       {heading !== "" && heading }
      <section className={` px-4  py-6 lg:px-4 lg:py-10 ${className}`}>
        {children}
      </section>
    </section>
  );
};
