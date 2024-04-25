import { AboutFooter } from "./AboutFooter";
import { SocialLinks } from "./SocialLinks";
import { InteresLinks } from "./InteresLinks";
import { Location } from "./Location";
import { Contact } from "./Contact";
import { Section } from "../wrappers/Section";

export const Footer = () => {
  const year = new Date();

  return (
    <footer className=" bg-primaryGray  text-[#BBBBBB] font-semibold bg-primary  w-full flex flex-col justify-center items-center ">
      <div className="flex-container flex py-4  justify-around max-w-[960px]  w-full px-4">
        <AboutFooter />

        <InteresLinks />

        <Contact />
      </div>

      <div className="max-w-[960px]">
        <SocialLinks />
      </div>

      <div className="py-5 bg-black flex justify-center items-center w-full">
        <strong className="font-bold [font-size:_clamp(10px,2vw,16px)] text-white ">
          &copy; {year.getFullYear()} UTESUR. Todos los derechos reservados.
        </strong>
      </div>
    </footer>
  );
};
