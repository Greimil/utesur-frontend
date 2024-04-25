import { Link } from "react-router-dom";

export const AboutFooter = () => {
  return (
    <div className="flex flex-col justify-between  lg:max-h-[250px] col-start-1 col-end-2 px-4 ">
      <h2 className="[font-size:_clamp(16px,2vw,18px)] font-bold  text-white">
        Nosotros
      </h2>
      <Link className=" block [font-size:_clamp(12px,2vw,14px)]  hover:border-primaryOrange hover:text-white md:py-1 ">
        Quienes somos
      </Link>
      <Link className="block [font-size:_clamp(12px,2vw,14px)] hover:border-primaryOrange hover:text-white md:py-1">
        Historia de la UTESUR
      </Link>
      <Link className="[font-size:_clamp(12px,2vw,14px)] block hover:border-primaryOrange hover:text-white md:py-1">
        Datos fundamentales
      </Link>
      <Link className="[font-size:_clamp(12px,2vw,14px)] block hover:border-primaryOrange hover:text-white md:py-1">
        Misión de la UTESUR
      </Link>
      <Link className="[font-size:_clamp(12px,2vw,14px)] block hover:border-primaryOrange hover:text-white md:py-1">
        Vision de la UTESUR
      </Link>
    </div>
  );
};
