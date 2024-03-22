import UserIcon from "../icons/UserIcon";
import BrainICon from "../icons/BrainIcon";
import { useTranslation } from "react-i18next";


export const Message = ({ message, role, theme }) => {
  const { t } = useTranslation();
  
  return (
    <div className="my-2">
    <div
      className={`flex ${
        role === "assistant" ? "flex-row-reverse justify-start" : ""
      } items-center gap-x-1 px-3 `}
    >
      {role === "assistant" ? (
        <div className="rounded-full p-2 bg-[#000000] dark:bg-[#222121] ">
          <BrainICon color={theme === "light" && "white"} />{" "}
        </div>
      ) : (
        <div className="rounded-full p-2 bg-[#000000] dark:bg-[#222121] ">
          <UserIcon color={theme === "light" && "white"} />
        </div>
      )}
      <p className="rounded-2xl p-3 bg-[#000000] text-white   ">
        {(message === undefined && role === "assistant") ? t("chat") : message }
      </p>
    </div>
  </div>
  )
}
