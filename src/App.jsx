import { Container } from "./components/ui/wrappers/Container";

import { Footer } from "./components/ui/Footer/Footer";
// import { useRef } from "react";
// import { Noticias } from "./components/Noticias";
import { Home } from "./pages/Home";
import { Admisiones } from "./pages/Admisiones";
// import {Chat} from "./components/Chatbot/Chat"
import { Header } from "./components/ui/Header/Header";
import { PortalWeb } from "./pages/PortalWeb";
import { Contacto } from "./pages/Contacto";
import {Carrera} from "./pages/Carrera"
import { FAQ } from "./pages/FAQ";
import { Nosotros } from "./pages/Nosotros";
import {  Routes, Route  } from "react-router-dom";

const App = () => {
 

  return (
    <main className="flex text-sm  items-center flex-col  justify-center font-abc dark:bg-[#222121] relative">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admisiones" element={<Admisiones/>} />
          <Route path="/portal" element={<PortalWeb/>} />
          <Route path="/contactos" element={<Contacto/> }/>
          <Route path="/preguntas-frecuentes" element={<FAQ/>} />
          <Route path="/carreras/:carreraId" element={<Carrera/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;
