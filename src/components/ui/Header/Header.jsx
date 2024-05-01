import logo from "../../../assets/logoUtesur.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Header = () => {
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
    <div className="relative text-sm bg-primary w-full border-b">
      <div className="relative">
        {/* Barra superior con logo */}
        <div className="flex justify-between items-center bg-primaryBlue text-white p-4  sm:px-8  lg:px-28  h-[88px] lg:h-[104px] xl:px-48 ">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className=" w-[170px] md:w-[230px] " />
          </Link>
          {/* Icono del menú */}
          <div className="lg:hidden" ref={buttonRef}>
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
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
          {/* Enlaces para la versión de escritorio */}
          <div className="hidden lg:flex items-center  font-semibold   ">
          <span>
              <Link to="/nosotros"  className="text-white border-r px-3">
                Nosotros
              </Link>
            </span>
          
          <span>
              <Link to="/contactos" className="text-white border-r px-3">
                Contactos
              </Link>
            </span>
            
            <span className="border-r px-3 ">
              <Link to="/admisiones" className="text-white  ">
                Admisiones
              </Link>
            </span>
            
            <span>
              <Link to="/portal" className="text-white  px-3">
                Portal de servicios
              </Link>
            </span>
            {/* Agrega más elementos del menú según tu aplicación */}
          </div>
        </div>

        {/* Menú desplegable para versión móvil */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-[100000]">
            <div
              ref={menuRef}
              className="absolute top-0 right-0 h-full w-64 bg-white    shadow"
            >
              <ul className="flex flex-col justify-around  ">
                <li className="hover:bg-primaryBlue hover:text-white  font-semibold rounded-sm h-14 flex items-center px-7">
                  <Link to="/inicio" className="block ">
                    Oferta Académica
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/admisiones" className="block ">
                    Admisiones
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/productos" className="block ">
                    Nosotros
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/productos" className="block ">
                    Educación Continuada
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="https://login.live.com/" target="_blank" className="block ">
                    Correo Institucional
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/preguntas-frecuentes" className="block ">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/contactos" className="block ">
                    Contactos
                  </Link>
                </li>

                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/buzon-sugerencias" blanke className="block ">
                    Buzón de Sugerencias
                  </Link>
                </li>

                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/productos" className="block ">
                    Biblioteca
                  </Link>
                </li>

                <li className="hover:bg-primaryBlue hover:text-white font-semibold h-14 flex items-center px-7 ">
                  <Link to="/productos" className="block ">
                    UTESUR Virtual
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <div className="p-4 h-[72px] lg:flex justify-between items-center hidden lg:px-28 xl:px-48 bg-white  ">
          <button className=" w-1/5 xl:w-2/12  font-semibold bg-primary text-white rounded-3xl h-12">
            UTESUR VIRTUAL
          </button>

          <div className="hidden md:flex items-center  font-semibold">
            <span>
              <Link to="/inicio" className="text-[#46484A]  pr-3">
                Buzón de Sugerencias
              </Link>
            </span>
            
            <span>
              <Link to="/preguntas-frecuentes" className="text-[#46484A]  pr-3">
                Preguntas Frecuentes
              </Link>
            </span>
            
            <span>
              <Link to="https://login.live.com/" className="text-[#46484A]  pr-3">
                Correo Institucional
              </Link>
            </span>
            {/* Agrega más elementos del menú según tu aplicación */}
          </div>
        </div>
      </div>
    </div>
  );
};
