export const Section = ({
  children,
  className = "",
  pt = "pt-6",
  pb= "pb-6",
  id,
  heading = ""
}) => {
  return (
    <section ref={id}>
      {/* {title !== "" && <h3 className={`px-4 ${titleClass}`}>{title}</h3>}
       */}
       {heading !== "" && heading }
      <section className={` px-4 ${pt} ${pb}   ${className}`}>
        {children}
      </section>
    </section>
  );
};
