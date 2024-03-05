import { Section } from "./wrappers/Section";
import ShadowShot from "../assets/projectsIMG/shadowShot.png";
import tableShot from "../assets/projectsIMG/tableShot.png";
import yumyumyesShot from "../assets/projectsIMG/yumyumyesShot.png";
import yumyumyesShot16 from "../assets/projectsIMG/yumyumyesShot16-9.png";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

export const WorkSection = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <Section
      title={t("work.title")}
      id={ref}
      titleClass={"text-black dark:text-white text-[22px] my-3 font-bold"}
    >
      <div
        className={
          "grid grid-template-cols-2 grid-template-rows-2 sm:grid-template-cols-3 sm:grid-template-rows-1 gap-4"
        }
      >
        <div className="col-start-1   md:max-w-[300px]">
          <Card
            src={ShadowShot}
            proName={t("work.projects.0")}
            link="https://devex.tools/shadows"
          />
        </div>
        <div className="col-start-2   md:max-w-[300px]">
          <Card
            src={tableShot}
            proName={t("work.projects.1")}
            link="https://devex.tools/tables"
          />
        </div>

        <div className="col-start-1 row-start-2 col-span-2 sm:col-span-1 sm:col-start-3 sm:row-start-1 ">
          <Card
            src={yumyumyesShot}
            proName={t("work.projects.2")}
            className="hidden sm:block"
            link="https://yumyumyes.com/"
          />
          <CardLg
            src={yumyumyesShot16}
            proName={t("work.projects.2")}
            className="sm:hidden"
            link="https://yumyumyes.com/"
          />
        </div>
      </div>

      <div className="py-3">
        <button className="bg-[#EDEDED] hover:scale-105 transition-all dark:bg-[#333333] w-full max-w-44 h-12 rounded-3xl dark:text-white font-bold">
          {t("work.btn")}
        </button>
      </div>
    </Section>
  );
});

WorkSection.displayName = "WorkSection";

const Card = ({ link, proName, src, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`hover:scale-105 transition-all duration-200 block ${className}`}
    >
      <img
        src={src}
        className=" w-full max-h-[300px]  bg-[#EDEDED] dark:bg-[#333333] rounded-xl"
        alt={`project ${proName}`}
      />

      <div className=" block  dark:text-white  text-start my-3 font-medium text-base leading-6">
        {proName}
      </div>
    </a>
  );
};

const CardLg = ({ link, proName, src, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`hover:scale-105 transition-all duration-200  w-full max-w-[600px]  ${className}`}
    >
      <img
        src={src}
        className=" w-full max-h-[300px]  bg-[#EDEDED] dark:bg-[#333333] rounded-xl"
        alt={`project ${proName}`}
      />

      <div className=" block  dark:text-white  text-start my-3 font-medium text-base leading-6">
        {proName}
      </div>
    </a>
  );
};
