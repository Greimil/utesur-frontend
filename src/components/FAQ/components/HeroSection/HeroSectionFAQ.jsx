import { Heading } from "../../../ui/Heading";
import { Accordion } from "../../../ui/Accordion.jsx";
// import { Accordion , Heading} from "@/features/ui";
import { dataFAQ } from "./dataFAQ";

export const HeroSectionFAQ = () => {
  return (
    <div className=" flex-1  flex  justify-center ">
      <main className=" flex-1 flex flex-col justify-center  pb-16 max-w-[864px] ">
        <Heading
          type="h1"
          bold={true}
          className=" pt-8  text-primary"
          text="Preguntas Frecuentes: Encuentra Respuestas a tus Inquietudes"
        ></Heading>

        {dataFAQ.map((faq, index) => (
          <Accordion
            key={index}
            theme={faq.tema}
            questions={faq.preguntas_respuestas}
            txtColor="text-slate-300"
          />
        ))}
      </main>
    </div>
  );
};
