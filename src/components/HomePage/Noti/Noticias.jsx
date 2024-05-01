import { Section } from "../../ui/wrappers/Section";
import { Card } from "../cardCarrusell/Card";
import noti1 from "../../../assets/Noticias/noti1.png";
import noti2 from "../../../assets/Noticias/noti2.png";
import noti3 from "../../../assets/Noticias/noti3.png";

export const Noticias = () => {
  return (
    <Section>
      <div className="flex justify-between" >
      <h2 className="text-[22px] font-abc font-bold">Noticias</h2> 

      <a className="text-sm font-medium hover:scale-105 transition-all hover:font-bold cursor-pointer"  >Ver otras noticias</a>
      </div>

      <div className="mt-7 flex justify-between gap-3 flex-wrap">
        <Card
          img={noti1}
          carrera={"Lorem ipsum dolor sit amet"}
          textoDes={"leer mas"}
        />

        <Card
          img={noti2}
          carrera={"Lorem ipsum dolor sit amet"}
          textoDes={"leer mas"}
        />

        <Card
          img={noti3}
          carrera={"Lorem ipsum dolor sit amet"}
          textoDes={"leer mas"}
        />
      </div>
    </Section>
  );
};
