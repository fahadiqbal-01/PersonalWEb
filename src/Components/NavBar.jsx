import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";

export const NavBar = () => {
  let [tooglemenu, setToogleMenu] = useState(false);

  return (
    <nav className={`${tooglemenu ? "mb-[150px] duration-300 ease-leaner" : "mb-0" } font-Abel text-[20px] font-normal`}>
      <Container>
        <Flex className=" justify-between lg:justify-center xl:justify-center gap-[80px] py-[30px] px-[20px] xl:px-0 relative ">
          <Link to="/">
            <RiHome4Fill className=" text-[40px] text-white " />
          </Link>
          <div
            className={`${
              tooglemenu ? "block bg-orange py-[25px] px-[30px] rounded-xl duration-500 ease-out " : "hidden"
            } lg:flex xl:flex lg:items-center gap-0 lg:gap-[80px] xl:gap-[80px] absolute right-5 top-[80px] lg:static xl:static px-[20px] lg:px-0 xl:px-0 `}
          >
            <List className="xl:flex items-center gap-[25px]">
              <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-black after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 lg:after:hover:w-full xl:after:hover:w-[100%] after:hover:duration-500 after:hover:ease-linear  relative">
                <Link to="/About">About</Link>
              </ListItem>
            </List>
            <Link to="/Contacts">
              <button
                className="selection:bg-none px-[25px] text-white py-[5px] bg-black lg:bg-orange xl:bg-orange rounded-xl text-[20px] font-primary mt-[10px] lg:mt-0 xl:mt-0
           border-[3px] border-transparent font-light hover:bg-transparent lg:hover:text-orange xl:hover:text-orange hover:text-black lg:hover:border-orange xl:hover:border-orange hover:border-black duration-300 ease-out "
              >
                Contacts
              </button>
            </Link>
          </div>
          <BiSolidCategoryAlt
            onClick={() => setToogleMenu(!tooglemenu)}
            className=" block lg:hidden xl:hidden text-[35px] text-white "
          />
        </Flex>
      </Container>
    </nav>
  );
};
