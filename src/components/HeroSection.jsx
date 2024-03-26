import { useTranslation } from "react-i18next";
import heroImg from "../assets/heroImg.webp";
import { Section } from "./wrappers/Section";
import { forwardRef } from "react";

export const HeroSection = forwardRef(({ contactRef }, ref) => {
  const { t } = useTranslation();

  return (
    <Section id={ref} className="w-full mt-8 mb-6 md:mt-5  ">
      <div
        id="heroSection"
        className="flex flex-col md:max-h-[372px] md:flex-row items-center gap-3 md:py-10 "
      >
        <div className=" w-full md:w-[45%] md:top-[15px]  flex justify-center    ">
          <img
            src={heroImg}
            className="w-full max-w-[400px] md:max-h-[292px]   "
            alt="developer writing code"
          />
        </div>

        <div className="flex flex-col sm:items-center md:items-start  gap-y-4 md:w-[55%] my-2   ">
          <h1 className=" text-black md:text-5xl text-[28px] sm:text-center md:text-start font-bold leading-7 md:leading-[36px] lg:leading-[46px]  xl:leading-[60px] md:[font-size:_clamp(28px,3vw,48px)]   dark:text-white">
            {t("hero.h1")}
          </h1>
          <p className="text-black dark:text-white  font-medium">
            {t("hero.p")}
          </p>
          <button
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full h-12 hover:scale-105 transition-all bg-black dark:bg-white dark:text-black max-w-[320px]  text-white rounded-3xl text-base px-5 font-bold"
          >
            {t("hero.btn").toUpperCase()}
          </button>
        </div>
      </div>
    </Section>
  );
});

HeroSection.displayName = "HeroSection";
