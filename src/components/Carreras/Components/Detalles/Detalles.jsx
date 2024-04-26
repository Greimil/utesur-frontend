import { Li } from "../../../ui/Li/Li";

export const Detalles = ({ detalles }) => {
  return (
    <div className="my-4">
      <div>
        <h2 className="text-xl my-2 text-primary font-bold " >Sobre la carrera:</h2>
        <p>
          La licenciatura en informática es un programa académico que se centra
          en el estudio de los fundamentos teóricos y prácticos de la
          computación y la tecnología de la información. Los estudiantes
          exploran áreas como la programación, las redes, la seguridad
          informática, la inteligencia artificial, entre otros. A través de
          cursos y proyectos, adquieren habilidades para diseñar, desarrollar y
          gestionar sistemas informáticos, así como para resolver problemas
          complejos utilizando herramientas y técnicas innovadoras. Esta
          licenciatura prepara a los graduados para una amplia gama de carreras
          en la industria tecnológica, donde su experiencia es crucial para
          impulsar la innovación y el progreso digital.
        </p>
      </div>

      <div>
        <h3 className="text-xl my-4 text-primary font-bold">Detalles</h3>
        <ul>
          <Li text={"Duración"} text2={"4 años "} />
          <Li text={"Total de horas teóricas"} text2={"420"} />
          <Li text={"Total de horas Practicas"} text2={"320"} />
          <Li text={"Total de créditos"} text2={"180"} />
          <Li text={"Asignaturas optativas"} text2={"4"} />
          <Li text={"Total de créditos"} text2={"180"} />
          <Li text={"Total de créditos"} text2={"180"} />
        </ul>
      </div>
    </div>
  );
};
