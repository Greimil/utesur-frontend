
import { Section } from "../../ui/wrappers/Section";
import { forwardRef } from "react";
import banner from "../../../assets/banner.png";
import { Tab } from "@headlessui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../cardCarrusell/Card";
import informatica from "../../../assets/Carreras/informatica.png";
import Psicologia from "../../../assets/Carreras/Psicologia.png";
import Contabilidad from "../../../assets/Carreras/Contabilidad.png";
import Educacion from "../../../assets/Carreras/Educacion.png";
import Enfermeria from "../../../assets/Carreras/Enfermeria.png";
import Agronomia from "../../../assets/Carreras/Agronomia.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const HeroSection = forwardRef(({ contactRef }, ref) => {
  return (
    <Section id={ref} className="w-full  ">
      <div
        id="heroSection"
        className=" flex-col  md:flex-row items-center gap-3 0 "
      >
        <div>
          <img src={banner} alt="" className="px-4 py-3" />
        </div>

        <div>
          <div className="mt-4 mb-3">
            <h1 className="text-[36px] leading-8 font-extrabold font-abc ">
              Oferta Académica
            </h1>
          </div>

          <p className="text-primaryText text-base mt-3">
            Conoce todos los detalles de nuestros programas académicos
          </p>
        </div>

        <Tab.Group>
          <Tab.List
            className={
              "my-8 flex  gap-x-8 text-sm font-abc border-b  py-4"
            }
          >
            <Tab>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "text-black" : "text-primaryText"
                  } font-bold transition-all text-base`}
                >
                  Grado
                </button>
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "text-black" : "text-primaryText"
                  } font-bold transition-all text-base`}
                >
                  PostGrado
                </button>
              )}
            </Tab>

            {/* <Tab>
              {({ selected }) => (
                <button
                  className={`${
                    selected ? "text-accent" : "text-primaryText"
                  } font-bold transition-all`}
                >
                  Habilitaciones
                </button>
              )}
            </Tab> */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Carousel
                partialVisbile={false}
                itemClass="mx-4"
                responsive={responsive}
              >
                <Card
                  img={informatica}
                  carrera={"informatica"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Psicologia}
                  carrera={"psicologia-general"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Psicologia}
                  carrera={"psicologia-escolar"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Contabilidad}
                  carrera={"contabilidad"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Educacion}
                  carrera={"educacion-inicial"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Educacion}
                  carrera={"educacion-primaria"}
                  textoDes={"Conoce mas detalles"}
                />

                <Card
                  img={Enfermeria}
                  carrera={"enfermeria"}
                  textoDes={"Conoce mas detalles"}
                />
                <Card
                  img={Agronomia}
                  carrera={"agronomia"}
                  textoDes={"Conoce mas detalles"}
                />
              </Carousel>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  );
});

HeroSection.displayName = "HeroSection";
