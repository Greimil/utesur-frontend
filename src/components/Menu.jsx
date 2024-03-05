import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import WorldIcon from "./icons/WorldIcon";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export const Menu = ({
  theme,
  setTheme,
  heroRef,
  workRef,
  aboutRef,
  contactRef,
}) => {
  let prevLanguage = navigator.language || navigator.userLanguage;
  prevLanguage = prevLanguage.substring(0, 2);

  const [language, setlanguage] = useState(prevLanguage);

  const handleLanguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("es");
      setlanguage("es");
    } else {
      i18n.changeLanguage("en");
      setlanguage("en");
    }
  };

  const { t } = useTranslation();
  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <div className="relative text-base font-medium text-black dark:text-white  w-full border-b border-solid border-[#E5E8EB] max-h-[65px]">
      <div className="relative flex justify-center  ">
        {/* Barra superior con logo */}
        <div className="flex justify-between p-[12.5px] w-full items-center max-w-[1168px]    ">
          <div className="flex gap-6">
            {/* Icono del menú */}
            <div className="md:hidden" ref={buttonRef}>
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={theme === "light" ? "black" : "white"}
                  style={{ transition: "normal" }}
                >
                  {/* Icono del menú (puedes cambiarlo por el de tu preferencia) */}
                  {menuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 11H5v-2h10v2zM3 5h14V7H3V5zm2 6h10v2H5v-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <Link to="/" className="flex items-center text-[18px]">
              <button className="p-1">
                <strong className="text-black dark:text-white">
                  {" "}
                  &lt;GreyDev/&gt;{" "}
                </strong>
              </button>
            </Link>
          </div>
          {/* Enlaces para la versión de escritorio */}
          <div className="hidden md:flex items-center justify-end  flex-1     ">
            <button
              className="hover:font-semibold px-3 text-black dark:text-white"
              onClick={() =>
                workRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("menu.0").toLocaleUpperCase()}
            </button>
            <button
              className="hover:font-semibold px-3 text-black dark:text-white"
              onClick={() =>
                aboutRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("menu.1").toLocaleUpperCase()}
            </button>
            <button
              className="hover:font-semibold  px-3 text-black dark:text-white"
              onClick={() =>
                contactRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("menu.2").toLocaleUpperCase()}
            </button>
          </div>

          <div className="flex gap-x-2 ">
            <button
              onClick={handleLanguageChange}
              className="size-10 bg-[#EDEDED] dark:bg-[#333333] text-black dark:text-white flex items-center justify-center rounded-full "
            >
              {theme === "light" ? (
                <WorldIcon color={"black"} hidden={theme === "dark"} />
              ) : (
                <WorldIcon color={"white"} hidden={theme === "light"} />
              )}
            </button>
            <button
              onClick={handleTheme}
              className=" size-10 bg-[#EDEDED] dark:bg-[#333333] dark:text-white md:flex items-center justify-center hidden rounded-full"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-[100000]">
            <div
              ref={menuRef}
              className="absolute flex flex-col top-0 left-0-0 h-full w-64 bg-white dark:bg-[#222121] shadow"
            >
              <ul className="flex flex-1 flex-col   ">
                <li className="hover:bg-primaryBlue `  font-semibold rounded-sm h-14 flex items-center px-7">
                  <button
                    className="hover:font-semibold px-3 text-black dark:text-white"
                    onClick={() =>
                      workRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("menu.0").toLocaleUpperCase()}
                  </button>
                </li>
                <li className="hover:bg-primaryBlue  font-semibold h-14 flex items-center px-7 ">
                  <button
                    className="hover:font-semibold px-3 text-black dark:text-white"
                    onClick={() =>
                      aboutRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("menu.1").toLocaleUpperCase()}
                  </button>
                </li>
                <li className="hover:bg-primaryBlue  font-semibold h-14 flex items-center px-7 ">
                  <button
                    className="hover:font-semibold  px-3 text-black dark:text-white"
                    onClick={() =>
                      contactRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("menu.2").toLocaleUpperCase()}
                  </button>
                </li>
              </ul>

              <button
                onClick={handleTheme}
                className=" size-10 bg-[#EDEDED] dark:bg-[#333333] dark:text-white flex items-center justify-center m-7 rounded-full"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
