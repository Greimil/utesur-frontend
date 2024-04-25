import { Heading } from "../../../ui/Heading/Heading";
import { Link } from "react-router-dom";
import { Location } from "../../../ui/Icons/Location";


export const HeroSectionContact = () => {
  return (
    <section className="flex justify-center ">
      <div className="max-w-[864px]  flex flex-col  gap-4">
        <Heading
          type="h1"
          text="Contacto de Departamentos"
          className="font-bold text-primary"
        />
        <p className="">
          En nuestra institución facilitamos la comunicación entre estudiantes,
          profesores y personal administrativo para resolver consultas, obtener
          asistencia académica y conocer más sobre nuestros servicios. Conéctate
          con los departamentos correspondientes para maximizar tu experiencia
          universitaria.
        </p>

        <div className="my-4 ">
          <Heading
            type="h2"
            text="Consultas Generales"
            className="font-bold text-primary py-2"
          />

          <div className="linkSection flex justify-between flex-col sm:flex-row gap-4 my-4 ">
            <div>
              <Link className="block font-bold  [font-size:_clamp(16px,1vw,16px)] ">
                +1 809-521-3785
              </Link>
              <Link className="block font-semibold ">
                Info@utesur.edu
              </Link>
              <span>Atención al cliente</span>
            </div>

            <div>
              <Link className="flex gap-x-1 items-center font-bold [font-size:_clamp(16px,1vw,16px)]">
                <span>+1 809-521-4164</span>
              </Link>
              <Link className="block  font-semibold  ">
              rectoria@utesur.edu.do
              </Link>
              <span>Rectaría de la universidad</span>
            </div>

            <div>
              <Link to="https://maps.app.goo.gl/cgUmnboQPyByRc3p8" target="_blank" className="flex gap-x-1 items-center font-bold [font-size:_clamp(16px,1vw,16px)]">
                <span >
                  Visitanos
                </span>
                <Location/>
              </Link>
              <span>Conoce nuestra ubicación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
