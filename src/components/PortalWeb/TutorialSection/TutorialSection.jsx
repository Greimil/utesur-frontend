import { VideoComponent } from "../../ui/videoComponent/VideoComponent";
import { Link } from "react-router-dom";
import { Section } from "../../ui/wrappers/Section";
import { Phone } from "../../ui/Icons/Phone";
import { Email } from "../../ui/Icons/Email";
import { Location } from "../../ui/Icons/Location";

export const TutorialSection = () => {
  return (
    <section className="my-3 ">
      <h3 className="font-bold text-base">
        Instrucciones para acceder a la plataforma:
      </h3>

      <p className="palance py-2">
        Ingresa con tu correo institucional compuesto por tu matrícula (sin
        guiones) seguida de @utesur.edu.do (Ejemplo:{" "}
        <strong>202266@utesur.edu.do</strong>). Utiliza la contraseña
        provisional Utesur2023. Si es la primera vez, cambia la contraseña a una
        nueva con al menos 8 caracteres alfanuméricos, iniciando con mayúscula.
      </p>

      <h4 className="font-bold my-2">Video tutorial</h4>

      <VideoComponent
        link="https://www.youtube.com/embed/KBBoopodd4g?si=IlyCIwPJmf6zjcYh"
        className="py-8"
      />

      <Section className="py-2">
        <h3 className="text-xl font-bold text-primary">
          ¿Aun necesitas ayuda?
        </h3>

        <p className="py-2">
          Si necesitas mayor asistencia para acceder al portal estudiantil,
          puedes contactarnos a traves de los siguientes canales:
        </p>

        <div className="linkSection py-3 flex justify-between flex-col sm:flex-row gap-4 ">
          <div>
            <Link
              to="https://maps.app.goo.gl/cgUmnboQPyByRc3p8"
              target="_blank"
              className="flex gap-x-1 items-center  [font-size:_clamp(14px,1vw,16px)]"
            >
              <div className="flex flex-col ">
                <span className="flex font-bold">
                  Llámanos <Phone />{" "}
                </span>
                <a className="text-sm" href="Tel: +1 809-521-3785">
                  {" "}
                  +1 809-521-3785, EXT 218
                </a>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to="https://maps.app.goo.gl/cgUmnboQPyByRc3p8"
              target="_blank"
              className="flex gap-x-1 items-center  [font-size:_clamp(14px,1vw,16px)]"
            >
              <div className="flex flex-col ">
                <span className="flex font-bold gap-x-2">
                  Envíanos un correo <Email />{" "}
                </span>
                <a className="text-sm" href="Tel: +1 809-521-3785">
                  soporte@utesur.edu.do
                </a>
                <span className="text-sm"></span>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to="https://maps.app.goo.gl/cgUmnboQPyByRc3p8"
              target="_blank"
              className="flex gap-x-1 items-center  [font-size:_clamp(14px,1vw,16px)]"
            >
              <div className="flex flex-col ">
                <span className="flex font-bold gap-x-2">
                  Visitanos <Location />{" "}
                </span>
                <a className="text-sm " href="Tel: +1 809-521-3785">
                  Ven por nuestras oficinas
                </a>
                <span className="text-sm"></span>
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
};
