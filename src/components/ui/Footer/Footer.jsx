import { AboutFooter } from "./AboutFooter";
import { SocialLinks } from "./SocialLinks";
import { InteresLinks } from "./InteresLinks";
import { Location } from "./Location";
import { Contact } from "./Contact";
import { Section } from "../wrappers/Section";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date();

  return (
    <footer className=" bg-primaryGray  text-[#BBBBBB] font-semibold bg-primary  w-full flex flex-col justify-center items-center ">
      <div className="flex-container flex   justify-evenly max-w-[1140px]  w-full pt-7">
        <Link
          className="text-base text-[#BBBBBB] hover:text-white transition-all "
          to="/nosotros"
        >
          Nosotros
        </Link>

        <a
          className="text-base text-[#BBBBBB] hover:text-white  transition-all "
          href=""
        >
          Ubicanos
        </a>

        <Link
          className="text-base text-[#BBBBBB] hover:text-white transition-all "
          to="/contactos"
        >
          Contáctanos
        </Link>
      </div>

      <div className="max-w-[960px]">
        <SocialLinks />
      </div>

      <div className="pb-7  flex justify-center items-center w-full">
        <strong className="font-bold  text-[#BBBBBB] ">
          &copy; {year.getFullYear()} UTESUR. Todos los derechos reservados.
        </strong>
      </div>
    </footer>
  );
};
