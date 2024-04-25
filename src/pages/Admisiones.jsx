import { HeroSectionAdmisiones } from "./../components/Admisiones/components/HeroSection/HeroSectionAdmisiones";
import { InfoSectionAdm } from "../components/Admisiones/components/infoSection/InfoSectionAdm";
import { Section } from "../components/ui/wrappers/Section";

export const Admisiones = () => {
  return (
    <div>
      <Section pb="pb-0">
        <HeroSectionAdmisiones />
      </Section>
      <Section>
        <InfoSectionAdm />
      </Section>
    </div>
  );
};
