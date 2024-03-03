import { Section } from "./wrappers/Section";
import { useTranslation } from "react-i18next";

export const Contact = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="flex justify-center">
        <div className="max-w-[596px] flex items-center gap-8 flex-col">
          <h2 className="dark:text-white text-center  [font-size:_clamp(26px,3vw,32px)] md:text-[32px] font-bold leading-10">
            {t("contact.h2")}
          </h2>
          <div className="flex w-full justify-between items-center rounded-full max-w-[380px]  min-h-16 px-4 ">
            <button className="w-full h-12 bg-black  hover:scale-105 transition-all dark:bg-white dark:text-black   text-white rounded-3xl text-base  font-bold">
              {t("contact.btn")}
            </button>



          </div>
        </div>
      </div>
    </Section>
  );
};
