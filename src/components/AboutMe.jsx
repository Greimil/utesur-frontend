import { Section } from "./wrappers/Section";
import headShot from "../assets/headShot.webp";
import { useTranslation } from "react-i18next";
import DownloadIcon from "./icons/DownloadIcon";
import cvEn from "../assets/CV/CV-EN.pdf";
import cvES from "../assets/CV/CV-ES.pdf";
import i18n from "../i18n/i18n";
import { forwardRef } from "react";
import { useEffect, useState } from "react";

let tec = [
  { title: "React", link: "https://es.react.dev/" },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { title: "Tailwind", link: "https://tailwindcss.com/" },
  { title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    title: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { title: "Git", link: "https://git-scm.com/" },
  { title: "GitHub", link: "https://github.com/" },
];



export const AboutMe = forwardRef(({ theme }, ref) => {
  const { t } = useTranslation();
  const [cvLang, setCvLang] = useState(i18n.language === "en-US" ? cvEn : cvES);

  useEffect(() => {
    // Actualizar el enlace de descarga cuando cambia el idioma
    setCvLang(i18n.language === "en-US" || i18n.language === "en"  ? cvEn : cvES);
    
  }, [i18n.language]);

  return (
    <Section id={ref}>
      <div id="aboutSection" className="flex justify-between flex-col md:flex-row gap-4 items-center">
        <div className=" flex items-center gap-4 md:flex-row  flex-col">
          <div className="bg-[#EDEDED] dark:bg-[#333333] relative size-[185px]  rounded-full overflow-hidden ">
            <img src={headShot} className="  w-full  absolute bottom-0   " alt="profile Photo" />
          </div>
          <span>
            <strong className="mb-4 md:mb-2 block dark:text-white text-[18px] font-bold">GREIMIL NUÑEZ</strong>
            <p className="dark:text-[#c7c6c6] text-base ">{t("about.subtitle")}</p>
          </span>
        </div>

        <a href={cvLang} download="Resume" target="_blank" className="bg-[#EDEDED] dark:bg-[#333333]  w-full max-w-44 h-12 hover:scale-105 transition-all rounded-3xl dark:text-white font-bold flex items-center justify-center gap-1">
          {t("about.btn")}{" "}
          {<DownloadIcon color={theme === "light" ? "black" : "white"} />}
        </a>
      </div>
      <h3 className="font-bold py-6 px-2 text-2xl dark:text-white">{t("about.title")}</h3>
      <p className="dark:text-white leading-6 px-2 text-wrap  text-base">{t("about.p")}</p>

      <div>
        <h3 className="font-bold py-6 px-2 text-2xl dark:text-white">{t("about.tec.title")}</h3>
        <div className="flex lg:justify-between gap-2 flex-wrap">
          {tec.map((current, idx) => {
            return <Btn title={current.title} link={current.link} key={idx} />;
          })}
        </div>
      </div>
    </Section>
  );
});

export default AboutMe;

AboutMe.displayName = "AboutMe";

const Btn = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#EDEDED] transition-all dark:bg-[#333333] hover:scale-105 w-[48%]  md:w-full  sm:max-w-28 h-12 px-3 rounded-3xl cursor-pointer dark:text-white font-semibold flex items-center justify-center gap-1"
    >
      {title}
    </a>
  );
};
