import { Section } from "../../ui/wrappers/Section";
import Calendario from "../../../assets/Event/Calendario.png";
import Calendario2 from "../../../assets/Event/Calendario2.png";
import Poma from "../../../assets/Event/poma.png";

export const Event = () => {
  return (
    <Section>
      <h3 className="font-bold text-[22px]">Fechas importantes</h3>
      <div className="flex flex-col gap-3 my-3">
        <EventComing
          title={"Inscripciones Abiertas Cuatrimestre Mayo - Septiembre"}
          imgSrc={Calendario}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <EventComing
          title={"Reinscripciones Abiertas Cuatrimestre Mayo - Septiembre"}
          imgSrc={Calendario2}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <EventComing
          title={"Prueba Poma Cuatrimestre Mayo - Septiembre"}
          imgSrc={Poma}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    </Section>
  );
};

const EventComing = ({ title, imgSrc, desc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f2f5f9] justify-between p-4 rounded-2xl hover:scale-105 transition-all cursor-pointer">
      <div className="flex flex-col ite md:w-[70%] pr-4">
        <strong>{title}</strong>
        <div className="flex w-full h-full py-3">
          <p>{desc}</p>
        </div>
      </div>{" "}
      <div className="md:w-[30%]">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};
