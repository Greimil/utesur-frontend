import { Section } from "./wrappers/Section";
import ShadowShot from "../assets/projectsIMG/shadowShot.webp";
import tableShot from "../assets/projectsIMG/tableShot.webp";
import yumyumyesShot from "../assets/projectsIMG/yumyumyesShot.webp";
import ShopShot from "../assets/projectsIMG/ShopShot.webp";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import ArrowUpIcon from "./icons/ArrowUpIcon";

const CustomDot = ({ onClick, ...rest }) => {
  const { t } = useTranslation();
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = [
    <Dot key={1} active={active} />,
    <Dot key={2} active={active} />,
    <Dot key={3} active={active} />,
    <Dot key={4} active={active} />
    ,
  ];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </li>
  );
};

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
  };

  return (
    <Section
      id={ref}
      heading={
        <h2 className="text-black dark:text-white text-[22px] my-3 font-bold px-4 ">
          {t("work.title")}
        </h2>
      }
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
        dotListClass=""
        itemClass="p-4 md:p-2 flex justify-center items-center  "
        customDot={<CustomDot />}
        customRightArrow={<CustomArrow arrow="right" rotate={"rotate-90"} />}
        customLeftArrow={
          <CustomArrow arrow="left" rotate={"rotate-[-90deg]"} />
        }
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
          className=" w-full   bg-[#EDEDED] dark:bg-[#333333] rounded-xl"
          alt={`project ${proName}`}
        />

        <div className=" block  dark:text-white  text-start my-3 font-medium text-base leading-6">
          {proName}
        </div>
      </a>
    </div>
  );
};

const Dot = ({ active }) => {
  return (
    <div
      aria-label="Next slide Button"
      className={`size-3 rounded-full ${
        active ? "bg-black dark:bg-white" : "bg-white dark:bg-black"
      } border border-black mx-[3px] `}
    ></div>
  );
};

const CustomArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
    rotate,
    arrow,
  } = rest;

  return (
    <button
      className={`size-[43px] ${
        arrow === "right" ? "arrowRightPosition" : "arrowLeftPosition"
      }  rounded-full hover:bg-[#00000080] bg-[#6d6d6d80] flex items-center justify-center  absolute right-[0] ${rotate}`}
      onClick={() => onClick()}
    >
      {" "}
      <ArrowUpIcon color={"white"} size={32} />{" "}
    </button>
  );
};
