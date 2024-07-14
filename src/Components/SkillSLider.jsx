import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import SkillSliderItem from "./SkillSliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReact, TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { delay, motion, useAnimation, useInView } from "framer-motion";

const SkillSLider = () => {
  const ref = useRef(null);
  const isINView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isINView) {
      mainControls.start("visible");
    }
  }, [isINView]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToShow: 1.5,
          rows: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
          rows: 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25, type: "tween" }}
      className=" bg-transparent p-[40px] rounded-lg border-[2px] border-[#252525] "
    >
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" p-[5px] ">
            <SkillSliderItem name="HTML" icon={<FaHtml5 />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="CSS" icon={<FaCss3Alt />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="JavaScript" icon={<IoLogoJavascript />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="React JS" icon={<TbBrandReact />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="Next JS" icon={<SiNextdotjs />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="Redux" icon={<TbBrandRedux />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="Bootstrap" icon={<BsBootstrapFill />} />
          </div>
          <div className=" p-[5px] ">
            <SkillSliderItem name="Tailwind" icon={<RiTailwindCssFill />} />
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default SkillSLider;
