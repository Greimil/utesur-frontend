import computadora from "../../../assets/PortalWeb/computadora.png";
// import { Button, Heading, Header } from "@/features/ui";

export const HeroSectionPortal = () => {
  return (
    <section className="heroPortal flex flex-col ">
      <main className=" flex-1 flex justify-center md:items-center">
        <div className="flex flex-col justify-center h-full md:grid grid-cols-[minmax(500px,_1fr)_1fr] grid-rows-3">
          <div className="py-3">
            <h1 className="font-bold  text-3xl  md:text-4xl text-primary">
              Portal Portal Educativo
            </h1>
            <p className="  text-lg md:text-xl">
              Acceso para Estudiantes y docentes
            </p>
          </div>

          <img
            src={computadora}
            alt="Laptop Portal"
            className="col-start-2 row-span-3 self-center"
          />

          <p className="max-w-[524px] self-center text-sm my-3">
            <strong>Descubre el Portal Educativo: </strong>
            consulta calificaciones, historial académico, horario de clases,
            estado financiero y realiza la selección de materias.
          </p>

          <div className="h-full w-full flex   items-center  ">
            <a
              href=""
              className="bg-orange-500  w-full text-white rounded-full flex font-bold justify-center items-center h-10 md:w-2/3 hover:scale-105 transition-all"
            >
              Acceder al portal
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};
