import { Link } from "react-router-dom";

export const InteresLinks = () => {
  return (
    <div className="hidden 2xl:lg:flex flex-col justify-between lg:max-h-[250px]">
      <h2 className="[font-size:_clamp(16px,2vw,18px)] font-bold text-white">
        Enlaces de interés
      </h2>

      <Link
        to="/portal-servicios"
        className="[font-size:_clamp(10px,2vw,14px)] block  hover:text-white"
      >
        Portal de Servicios
      </Link>

      <Link className="[font-size:_clamp(10px,2vw,14px)] block hover:text-white ">
        Oferta Académica
      </Link>
      <Link className="[font-size:_clamp(10px,2vw,14px)] block  hover:text-white">
        UTESUR virtual
      </Link>

      <Link
        to="/admisiones"
        className="[font-size:_clamp(10px,2vw,14px)] block  hover:text-white"
      >
        Admisiones
      </Link>
      <Link className="[font-size:_clamp(10px,2vw,14px)] block  hover:text-white">
        Biblioteca
      </Link>
    </div>
  );
};
