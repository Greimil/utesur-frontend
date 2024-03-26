export const Section = ({
  children,
  className = "",
  id,
  heading = ""
}) => {
  return (
    <section ref={id}>
       {heading !== "" && heading }
      <section className={` px-4  py-6 lg:px-4 lg:py-10 ${className}`}>
        {children}
      </section>
    </section>
  );
};
