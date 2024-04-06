import { useTranslation } from "react-i18next";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";

export const Footer = ({ theme }) => {
  const { t } = useTranslation();
  let year = new Date().getFullYear();

  return (
    <footer className=" border-t border-[#E5E8EB] w-full text-base mt-[47px]">
      <div className="flex flex-col h-full w-full items-center p-4 relative">
        <div className="socialLinks flex flex-row-reverse items-center justify-around  w-full  ">
          <div className="size-[28px] bg-[#EDEDED] dark:bg-[#333333] mr-8 cursor-pointer rounded-3xl " onClick={()=> {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} >
            <ArrowUpIcon color={theme === "dark"? "white" : "black" } />
          </div>

          <div className="flex justify-center  gap-4 w-full  p-6">
            <a
              href="https://github.com/Greimil"
              target="_blank"
              aria-label="GithubIcon"
              className="hover:scale-105 transition-all"
            >
              <GithubIcon color={theme === "dark"? "white" : "black" } />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/greimil-nu%C3%B1ez/"
              target="_blank"
              className="hover:scale-105 transition-all"
              aria-label="LinkedinIcon"
            >
              <LinkedinIcon color={theme === "dark"? "white" : "black" } />{" "}
            </a>
            <a
              href="https://twitter.com/Greimil1"
              target="_blank"
              className="hover:scale-105 transition-all"
              aria-label="TwitterIcon"
            >
              <TwitterIcon color={theme === "dark"? "white" : "black" } />{" "}
            </a>
          </div>
        </div>
        <div className="flex gap-1 ">
          <strong className="text-black dark:text-white">
            &lt;GreyDev/&gt;
          </strong>
          <span className="dark:text-white font-semibold">
            {year} {t("footer")}
          </span>
        </div>
      </div>
    </footer>
  );
};
