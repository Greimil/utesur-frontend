// import { Heading } from "@/features/ui";
import { Link } from "react-router-dom";
import { Admisiones } from './../../../../pages/Admisiones';
export const InfoSectionAdm = () => {
  return (
    <section className=" ">
      <div className="py-3" >
        <h1 className="text-[36px] font-bold text-primary mb-4 ">
          Como Inscribirse
        </h1>

        <div className="flex gap-x-1 md:gap-x-6 justify-between ">
          <CardSteps
            num={"1"}
            description={"Prueba de Medición y Orientación Académica, POMA."}
            title={"Tomar la prueba Poma"}
          />

          <CardSteps num={"2"} title={"Llenar Formulario de admisión"} description={"Completa el formulario de inscripción e imprime"} />

          <CardSteps num={"3"} title={"Depositar los documentos"} description={"Depositar los documentos en departamento de Admisiones"} />
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold  my-4 text-primary">
          Requisitos de Ingreso a Nuestra Universidad
        </h2>

        <p className="text-[#141414] text-base">
          Conoce los documentos y procesos necesarios para ingresar a nuestra
          universidad. Estamos aquí para guiarte en cada paso de este
          emocionante viaje académico. Bienvenido al primer paso hacia tu futuro
          brillante.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-semibold text-primary">
          Documentos a depositar:
        </h2>

        <ul className="  flex flex-col  text-sm py-2">
          <Li
            text={"Formulario de inscripción"}
            text2={"Puedes llenarlo haciendo click aquí"}
          />
          <Li text={"Acta de nacimiento"} text2={"Certificada y legalizada"} />
          <Li
            text={"Certificación de bachiller"}
            text2={"Expedida por el Ministerio de Educación (MINERD) "}
          />
          <Li
            text={"Record de notas de bachiller"}
            text2={"Firmado y sellado por el director de distrito"}
          />
          <Li text={"Certificado médico."} />
          <Li text={"3 Fotos 2x2"} text2={"De frente y formales"} />
          <Li text="Copia de cédula" />
          <Li
            text={"Tomar la prueba POMA"}
            text2={"Ver fechas disponibles e inscribirte"}
          />
        </ul>
      </div>

      <div className="py-4">
        <h3 className="font-bold text-[22px]">Sobre la prueba Poma</h3>

        <p>
          <span className="block py-3">
            La prueba <strong>Poma</strong> es una prueba obligatoria según la
            Ley 139-01 para los aspirantes a la educación superior.
          </span>
          Mide la inteligencia académica, evaluando las habilidades cognitivas y
          la comprensión de conceptos clave antes de ingresar a la universidad.
          Su propósito es asegurar una transición exitosa a los estudios
          superiores al proporcionar una visión completa de la preparación
          académica.
        </p>

        <div className="py-4">
          {/* <Heading
            className="text-primaryBlue  font-bold"
            type="h2"
            text="Próximas fechas para la prueba poma"
          /> */}

          <p>
            La programación de las pruebas POMAS está sujeta a modificaciones
            constantes. Por lo tanto, instamos a todos los interesados en
            participar a estar atentos a nuestras redes sociales, donde
            proporcionaremos información actualizada sobre las próximas fechas.
          </p>
        </div>
      </div>
    </section>
  );
};

const Li = ({ text, text2 }) => {
  return (
    <li className="min-h-[62px] py-4 border-y flex items-center gap-x-7 justify-a">
      {" "}
      <p className="w-2/4 max-w-40">{text}</p>{" "}
      <span className="font-bold w-1/4">{text2}</span>{" "}
    </li>
  );
};

const CardSteps = ({ num, title, description, link }) => {
  return (
    <a href={link} className="flex w-full flex-col gap-y-2 p-4  ">
      <div className="flex jus ">
        <div className="bg-primary flex justify-center items-center rounded-full p-1  " >
          <div className="size-8 border-2 bg-primary p-5  rounded-full  flex justify-center items-center">
            <strong className="text-white text-lg">{num}</strong>{" "}
          </div>
        </div>
      </div>

      <strong className="font-bold [font-size:_clamp(10px,2vw,16px)] text-p"> {title} </strong>

      <p className="text-primaryText hidden md:block">{description}</p>
    </a>
  );
};
