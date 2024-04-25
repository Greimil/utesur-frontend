
import { HeroSection } from "../components/HomePage/heroSection/HeroSection";

import { Noticias } from "../components/HomePage/Noti/Noticias";
import { Event } from "../components/HomePage/EventSection/Event";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Noticias />
      <Event/>
    </div>
  );
};
