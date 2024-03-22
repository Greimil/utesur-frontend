import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeqykwbl");
  const { t } = useTranslation();

  if (state.succeeded) {
    return <p className="dark:text-white text-base" >{t("contact.successMsg")}</p>;
  }


  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full flex flex-col gap-6 text-base  "
    >
      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex flex-col w-full">
          <label className="font-semibold dark:text-white" htmlFor="name">
            {t("contact.placeholder2")}
          </label>
          <input
            id="name"
            type="name"
            name="name"
            className="h-10 border border-solid dark:text-white dark:bg-[#333333] border-[#bebebe] dark:border-bg-[#333333] rounded-lg p-2"
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>

        <div className="flex flex-col w-full">
          <label className="font-semibold dark:text-white" htmlFor="email">
          {t("contact.placeholder3")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="h-10 border rounded-lg dark:bg-[#333333] dark:text-white border-[#bebebe] p-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label className="dark:text-white font-semibold" htmlFor="message">
          {t("contact.placeholder4")}
          </label>
          <textarea
            
            id="message"
            name="message"
            className="aspect-video  size-full max-h-48 border rounded-lg dark:text-white dark:bg-[#333333] border-[#bebebe] resize-none p-2"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex w-full justify-between items-center rounded-full   min-h-16 px-4 ">
          <button
            disabled={state.submitting}
            type="submit"
            className="w-full h-14 bg-black   hover:scale-105 transition-all dark:bg-white dark:text-black   text-white rounded-3xl text-base  font-bold"
          >
            {t("contact.btn")}
          </button>
        </div>
      </div>
    </form>
  );
};
