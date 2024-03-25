import { useTranslation } from "react-i18next";

export const Message = ({ message, role, theme, date }) => {
  const { t } = useTranslation();

  let unixTimestamp = date 
 

  let dateH = date === undefined ? new Date() : new Date(unixTimestamp * 1000); 

  
  let horas = dateH.getHours();
  let minutos = dateH.getMinutes();

  
  let horaHumanaFriendly =
    horas.toString().padStart(2, "0") +
    ":" +
    minutos.toString().padStart(2, "0");

  return (
    <div
      className={`flex items-start mt-2 gap-2.5 ${
        role === "user" ? "justify-end" : "justify-start"
      } `}
    >
      <div className="flex flex-col gap-1  max-w-[320px]">
        <div
          className={`flex items-center space-x-2 ${
            role === "user"
              ? "ltr:space-x-reverse justify-end"
              : "rtl:space-x-reverse justify-start"
          }`}
        >
          <span className="text-[12px] font-semibold text-gray-900 dark:text-white">
            {role === "user" ? "Tu" : "ByteBuddy"}
          </span>
          <span className="text-[12px] font-normal text-gray-500 dark:text-gray-400">
            {horaHumanaFriendly}
          </span>
        </div>
        <span
          className={`flex flex-col leading-1.5 p-4  border-gray-200  ${
            role === "user"
              ? "rounded-s-xl rounded-ee-xl bg-black text-white"
              : "rounded-e-xl rounded-es-xl bg-white"
          }   `}
        >
          <p
            className={`text-sm font-normal ${
              role === "user" ? "text-end" : "text-start"
            } `}
          >
            {" "}
            {message === undefined && role === "assistant"
              ? t("chat")
              : message}
          </p>
        </span>
      </div>
    </div>
  );
};
