import { Section } from "./wrappers/Section";
import ShadowShot from "../assets/projectsIMG/shadowShot.png";
import tableShot from "../assets/projectsIMG/tableShot.png";
import yumyumyesShot from "../assets/projectsIMG/yumyumyesShot.png";
import ShopShot from "../assets/projectsIMG/ShopShot.png";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const WorkSection = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      slidesToSlide: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 640,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 640,
      },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 30,
    },
  }

  return (
    <Section
      title={t("work.title")}
      id={ref}
      titleClass={"text-black dark:text-white text-[22px] my-3 font-bold"}
    >
      
      
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          className="md:pb-16 pb-8 "
          responsive={responsive}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="p-4 md:p-2 flex justify-center items-center  "
        >
          
            <Card
              src={ShadowShot}
              proName={t("work.projects.0")}
              link="https://devex.tools/shadows"
            />
          
            
            <Card
              src={tableShot}
              proName={t("work.projects.1")}
              link="https://devex.tools/tables"
            />
          
          
            <Card
              src={yumyumyesShot}
              proName={t("work.projects.2")}
              className="block"
              link="https://yumyumyes.com/"
            />
          
            <Card
              src={ShopShot}
              proName={t("work.projects.3")}
              className="block"
              link="https://greimil.github.io/tienda"
            />
          
        </Carousel>
      

      {/* <div className="py-3">
        <button className="bg-[#EDEDED] hover:scale-105 transition-all dark:bg-[#333333] w-full max-w-44 h-12 rounded-3xl dark:text-white font-bold">
          {t("work.btn")}
        </button>
      </div> */}
    </Section>
  );
});

WorkSection.displayName = "WorkSection";

const Card = ({ link, proName, src, className }) => {
  return (
    
    <div className="max-w-[300px] max-h-[300px]">
       <a
      href={link}
      target="_blank"
      className={`hover:scale-105 transition-all duration-200 block ${className}`}
    >
      <img
        src={src}
        className=" w-full     bg-[#EDEDED] dark:bg-[#333333] rounded-xl"
        alt={`project ${proName}`}
      />

      <div className=" block  dark:text-white  text-start my-3 font-medium text-base leading-6">
        {proName}
      </div>
    </a>
    </div>
   
  );
};
