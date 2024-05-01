// import banner from "../../../../assets/Carreras/CarrerasBanner.png";
import informatica from "../../../../assets/Carreras/pdfs/informatica.pdf";
import piscologiaGeneral from "../../../../assets/Carreras/pdfs/piscologiaGeneral.pdf";
import psicologiaEscolar from "../../../../assets/Carreras/pdfs/psicologiaEscolar.pdf";
import derecho from "../../../../assets/Carreras/pdfs/derecho.pdf";
import contabilidad from "../../../../assets/Carreras/pdfs/contabilidad.pdf";
import matematica from "../../../../assets/Carreras/pdfs/matematica.pdf";
import mercadeo from "../../../../assets/Carreras/pdfs/mercadeo.pdf";
import enfermeriaRenovado from "../../../../assets/Carreras/pdfs/enfermeriaRenovado.pdf";
import educacionPrimaria from "../../../../assets/Carreras/pdfs/educacionPrimaria.pdf";
import educacionInicial from "../../../../assets/Carreras/pdfs/educacionInicial.pdf";
import bioanalisis from "../../../../assets/Carreras/pdfs/bioanalisis.pdf";
import agronomia from "../../../../assets/Carreras/pdfs/agronomia.pdf";
import administracionEmpresas from "../../../../assets/Carreras/pdfs/administracionEmpresas.pdf";

export const HeroSectionCarreras = ({
  carrera = "informatica",
  descIMg = "The Bachelor of Science (B.S.) degree in Computer Science is the most technical and specialized undergraduate degree offered by the department. It is designed to provide a strong foundation in computer science, as well as a  variety of applications that use computer science. Students in the B.S. program are required to complete a set of  core courses in computer science, as well as a set of electives that can be used to develop an area of specialization or to explore a variety of subfields within computer science.",
}) => {
  let pdf;

  switch (carrera) {
    case "informatica":
      pdf = informatica;
      break;
    case "psicologia-general":
      pdf = piscologiaGeneral;
      carrera = "Psicologia General"
      break;
    case "psicologia-escolar":
      pdf = psicologiaEscolar;
      carrera = "Psicologia Escolar"
      break;
    case "derecho":
      pdf = derecho;
      carrera = "Derecho"
      break;
    case "contabilidad":
      pdf = contabilidad;
      carrera = "Contabilidad"
      break;
    case "matematica":
      pdf = matematica;
      carrera = "Matemática"
      break;
    case "mercadeo":
      pdf = mercadeo;
      carrera = "Mercadeo"
      break;

    case "enfermeria":
      pdf = enfermeriaRenovado;
      carrera = "Enfermería"
      break;

    case "educacion-inicial":
      pdf = educacionInicial;
      carrera = "Educación Inicial"
      break;

    case "educacion-primaria":
      pdf = educacionPrimaria;
      carrera = "Educación Primaria"
      break;

    case "bioanalisis":
      pdf = bioanalisis;
      carrera = "Bioanálisis"
      break;

    case "agronomia":
      pdf = agronomia;
      carrera = "Agronomía"
      break;

    case "administracion-empresas":
      pdf = administracionEmpresas;
      carrera = "Administración de empresas"
      break;
  }




  return (
    <div>
      <div className="container carreras   w-full aspect-video  md:max-h-[480px] rounded-2xl text-white px-4 md:px-14 relative">
        <div className="flex flex-col justify-center gap-4 h-full md:absolute top-12 ">
          <h1 className="font-bold text-2xl md:text-4xl">
            Licenciatura en {carrera.split("-")}{" "}
          </h1>
          <p className="text-base hidden md:block">{descIMg}</p>

          <div className="flex gap-2 md:gap-3">
            <a
              href={pdf}
              download
              className="bg-primary flex cursor-pointer justify-center text-[12px] md:text-sm items-center  px-3 md:px-6 md:py-4 font-bold rounded-full hover:scale-105 transition-all"
            >
              Descargar programa
            </a>
            <a target="_blank" href="https://uxxi.utesur.edu.do/ac_app/f?p=400800:9000" className="bg-white flex justify-center items-center text-[12px] md:text-sm  px-3 md:px-6 py-3  md:py-4 text-black font-bold rounded-full hover:scale-105 transition-all">
              Aplicar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
