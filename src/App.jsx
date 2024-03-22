import { Container } from "./components/wrappers/Container";
import { Menu } from "./components/Menu";
import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useRef } from "react";
import {Chat} from "./components/Chatbot/Chat"




const App = () => {
  const [theme, setTheme] = useState("light");
  const heroRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="flex text-sm  items-center flex-col  justify-center font-abc dark:bg-[#222121] relative">
      <Menu
        heroRef={heroRef}
        workRef={workRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        theme={theme}
        setTheme={setTheme}
      />
      <Container>
        <HeroSection contactRef={contactRef} ref={heroRef} />
        <WorkSection ref={workRef} />
        <AboutMe ref={aboutRef} theme={theme} />
        <Contact ref={contactRef} />
      </Container>
      <Footer theme={theme} />
      <Chat theme={theme} />
    </main>
  );
};

export default App;
