import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Accordion = ({
  theme,
  questions,
  visibleTheme = true,
  txtColor,
}) => {
  const [activeTheme, setActiveTheme] = useState(theme);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useEffect(() => {
    setActiveTheme(theme); // Establece el tema activo
    setActiveQuestion(null); // Asegura que ninguna pregunta esté activa al inicializar
  }, []);

  return (
    <ul
      className={`accordion lg:my-[20px] disableSelect  select-none  ${txtColor} `}
    >
      {visibleTheme ? (
        <h2
          className={`accordion-theme text-primary [font-size:_clamp(20px,2vw,32px)] font-semibold my-6  ${
            activeTheme === theme ? "active   " : ""
          }`}
          
        >
          <span className="border-b-2 text-primaryBlue hover:border-primaryOrange transition-all ">
            {theme}
          </span>
        </h2>
      ) : (
        ""
      )}

      {activeTheme === theme &&
        questions.map((question, index) => (
          <li
            className="accordion-item [font-size:_clamp(14px,1vw,16px)] hover:text-primaryOrange transition-colors pl-2 border-b-2 border-gray-300  hover:border-black   flex justify-between py-4  "
            key={index}
            onClick={() => toggleQuestion(index)}
          >
            <span
              className={`  text-black  ${
                activeQuestion === index ? "font-semibold" : ""
              } `}
            >
              {question.pregunta}
              <br />

              {activeQuestion === index && question.lista === true ? (
                <ul className="accordion-list ">
                  {question.respuesta.map((current, index) => (
                    <li
                      className="list-disc mx-10 my-3 font-normal"
                      key={index}
                    >
                      {current}
                    </li>
                  ))}
                </ul>
              ) : (
                activeQuestion === index && (
                  <p className="accordion-content  font-normal ml-4 disableSelect pAccordion [font-size:_clamp(12px,1vw,14px)] border-1 ">
                    {question.respuesta}
                  </p>
                )
              )}
            </span>
            {activeQuestion === index ? (
              <span className="block">-</span>
            ) : (
              <span className="" >+</span>
            )}
          </li>
        ))}
    </ul>
  );
};

Accordion.propTypes = {
  theme: PropTypes.string,
  questions: PropTypes.array,
  visibleTheme: PropTypes.bool,
  txtColor: PropTypes.string,
};
