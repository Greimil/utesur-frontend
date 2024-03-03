import { Container } from "./components/wrappers/Container";
import { Menu } from "./components/Menu";
import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  return (
    <main className="flex text-sm  items-center flex-col  justify-center font-abc dark:bg-[#222121] ">
      <Menu theme={theme} setTheme={setTheme} />
      <Container>
          <HeroSection/>
          <WorkSection/>
          <AboutMe theme={theme} />
          <Contact/>
      </Container>
    </main>
  );
};

export default App;
