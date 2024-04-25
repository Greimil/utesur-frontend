import {Heading} from "../../../ui/Heading"
import { Accordion } from "../../../ui/Accordion.jsx";
import { dataContact } from "./contacData";

export const AccordionContact = () => {

  return (
    <section className=" flex gap-y-4 justify-center py-4 ">
      <div className="max-w-[864px]  w-full">
        <Heading
          text="Contactos específicos a un departamento:"
          type="h2"
          className="text-primary font-bold"
        />

        {dataContact.map((faq, index) => (
          <Accordion
            key={index}
            theme={faq.tema}
            questions={faq.preguntas_respuestas}
            visibleTheme={false}
          />
        ))}
      </div>
    </section>
  );
};
