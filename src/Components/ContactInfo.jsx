import React from "react";
import Title from "./Title";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Label from "./Label";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./AllCss.css";

const ContactInfo = () => {
  return (
    <div
      className=" w-full h-fit lg:w-full xl:w-[49%] bg-transparent px-[15px] py-[30px] mt-[50px] border-2 border-[#252525] rounded-xl "
      id="ContactInfo"
    >
      <div>
        <p className=" text-white text-[16px] font-primary font-normal  ">
          <span className=" select-none">Mail - </span>

          <span className=" text-white pointer-events-auto selection:line-through selection:text-orange">
            fahad.iqbal.im.47@gmail.com
          </span>
        </p>
        <p className=" text-white text-[16px] font-primary font-normal mt-[20px] s">
          <span className=" select-none">Phone - </span>

          <span className=" text-white pointer-events-auto selection:line-through selection:text-orange ">
            +8801748996699
          </span>
        </p>
        <p className=" text-white text-[16px] font-primary font-normal mt-[20px] e ">
          <span className=" select-none">Web - </span>

          <span className=" text-white  pointer-events-auto selection:line-through selection:text-orange">
            03.06.2024
          </span>
        </p>
        <a
          href="https://github.com/fahadiqbal-01"
          target="blank"
          className=" inline-block text-[16px] font-primary font-bold text-orange mt-[20px] px-[20px] py-[5px] border-[3px]
           border-orange rounded-lg select-none hover:border-transparent hover:bg-white hover:text-black duration-300 ease-out "
        >
          Github
        </a>
      </div>
      <div className=" mt-[40px] select-none ">
        <Title title="Socials" />
        <div className=" px-[10px] py-[10px] rounded-xl ">
          <a
            href="https://www.facebook.com/fahadiqbal246?mibextid=JRoKGi"
            target="blank"
            className=" gap-[35px] inline-block relative group  "
          >
            <FaFacebookSquare className=" text-[30px] text-[#316ff6] " />
            <Label
              label="facebook"
              className=" text-[20px] text-transparent absolute top-0 left-[30px] pointer-events-none group-hover:left-[50px] group-hover:text-orange duration-500 ease-out "
            />
          </a>{" "}
          <br />
          <a
            href="https://x.com/_fahad_01_?s=21"
            target="blank"
            className=" gap-[50px] mt-[20px] inline-block relative group"
          >
            <FaSquareXTwitter className=" text-[32px] text-gray-600 " />
            <Label
              label="twitter"
              className="text-[20px] text-transparent absolute bottom-0 left-[30px] pointer-events-none group-hover:left-[50px] group-hover:text-orange duration-500 ease-out "
            />
          </a>{" "}
          <br />
          <a
            href="https://www.linkedin.com/in/fahad-iqbal-37b3b52b7/"
            target="blank"
            className=" gap-[35px] inline-block relative group mt-[20px] "
          >
            <FaLinkedin className=" text-[30px] text-[#0a66c2] " />
            <Label
              label="Linkedin"
              className=" text-[20px] text-transparent absolute top-0 left-[30px] pointer-events-none group-hover:left-[50px] group-hover:text-orange duration-500 ease-out "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
