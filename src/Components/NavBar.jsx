import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";
import Images from "./Images";
import { delay, easeInOut, motion } from "framer-motion";
import { RiHomeGearLine } from "react-icons/ri";

export const NavBar = () => {
  let [tooglemenu, setToogleMenu] = useState(false);
  function handleClose() {
    setToogleMenu(false);
  }

  return (
    <motion.nav
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -100 },
      }}
      initial="closed"
      animate="open"
      transition={{ delay: 0.25, duration: 0.5, easeInOut }}
      className={`${
        tooglemenu ? "mb-[250px] duration-300 ease-leaner" : "mb-0"
      } font-Abel text-[20px] font-normal xl:fixed bottom-0 w-auto xl:w-full static xl:hidden `}
    >
      <Container>
        <Flex className=" justify-between xl:justify-center gap-[80px] py-[30px] px-[20px] xl:px-0 relative ">
            <RiHomeGearLine className=" text-white text-[50px] " />

          <div
            id="DropdownMenu"
            className={`${
              tooglemenu
                ? "block bg-green py-[25px] px-[30px] rounded-xl"
                : "hidden"
            }  xl:flex lg:items-center gap-0 xl:gap-[80px] absolute right-5 top-[80px] xl:static px-[20px] xl:px-0 `}
          >
            <List className=" flex flex-col gap-[10px] ">
              <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-black after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-500 after:hover:ease-linear  relative">
                <Link
                  onClick={handleClose}
                  scroll={(s) =>
                    s.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  to="#About"
                >
                  About
                </Link>
              </ListItem>
              <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-black after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-500 after:hover:ease-linear  relative">
                <Link
                  onClick={handleClose}
                  scroll={(s) =>
                    s.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  to="#Skills"
                >
                  SKill
                </Link>
              </ListItem>
              <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-black after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-500 after:hover:ease-linear  relative">
                <Link
                  onClick={handleClose}
                  scroll={(s) =>
                    s.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  to="#Projects"
                >
                  Projects
                </Link>
              </ListItem>
            </List>
            <Link
              onClick={handleClose}
              scroll={(s) =>
                s.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              to="#Contacts"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {
                  1;
                }}
                onHoverEnd={(e) => {
                  1;
                }}
              >
                <button
                  className="selection:bg-none px-[25px] text-white py-[5px] bg-black  xl:bg-orange rounded-xl text-[20px] font-primary mt-[15px] xl:mt-0
           border-[3px] border-transparent font-light hover:bg-transparent  xl:hover:text-orange hover:text-black xl:hover:border-orange hover:border-black duration-300 ease-out "
                >
                  Contacts
                </button>
              </motion.div>
            </Link>
          </div>
          <BiSolidCategoryAlt
            onClick={() => setToogleMenu(!tooglemenu)}
            className=" block xl:hidden text-[35px] text-white duration-500 "
          />
        </Flex>
      </Container>
    </motion.nav>
  );
};
