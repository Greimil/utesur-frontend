import { HeroSectionPortal } from "../components/PortalWeb/HeroSection/HeroSectionPortal";
import { Section } from "../components/ui/wrappers/Section";
import { TutorialSection } from "./../components/PortalWeb/TutorialSection/TutorialSection";

export const PortalWeb = () => {
  return (
    <Section>
      <HeroSectionPortal />
      <TutorialSection />
    </Section>
  );
};
