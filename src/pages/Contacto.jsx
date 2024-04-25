import { Section } from "../components/ui/wrappers/Section"
import { HeroSectionContact } from './../components/Contacto/components/HeroSectionContact/HeroSectionContact';
import { AccordionContact } from './../components/Contacto/components/accordionContact/AccordionContact';

export const Contacto = () => {
  return (
    <Section>

        <HeroSectionContact/>
        <AccordionContact/>

    </Section>
  )
}
