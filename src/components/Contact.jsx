import { Section } from "./wrappers/Section";
import { useTranslation } from "react-i18next";
import { ContactForm } from "./ContacForm";
import { forwardRef } from "react";


export const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <Section id={ref} >
      <div id="contactSection" className="flex justify-center items-center flex-col">
        <div className="max-w-[596px] flex items-center gap-8 flex-col w-full">
          <h2 className="dark:text-white text-center  [font-size:_clamp(26px,3vw,32px)] md:text-[32px] font-bold leading-10">
            {t("contact.h2")}
          </h2>
          <ContactForm/>
          
        
        </div>
        
      </div>
    </Section>
  );
})

Contact.displayName="Contact"
