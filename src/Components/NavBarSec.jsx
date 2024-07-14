import React from "react";
import { motion } from "framer-motion";
import { RiHomeGearLine } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import List from "./List";
import ListItem from "./ListItem";

const NavBarSec = () => {
  return (
    <div className=" max-w-max xl:flex flex-col hidden sticky  ">
      <List className="flex flex-col items-center gap-[70px] fixed right-0 ">
        <Link
          scroll={(s) =>
            s.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="#Home"
        >
          <RiHomeGearLine className=" text-white text-[50px] " />
        </Link>
        <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-white after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-300 after:hover:ease-linear  relative rotate-90">
          <Link
            scroll={(s) =>
              s.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="#About"
          >
            About
          </Link>
        </ListItem>
        <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-white after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-300 after:hover:ease-linear  relative rotate-90">
          <Link
            scroll={(s) =>
              s.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="#Skills"
          >
            SKill
          </Link>
        </ListItem>
        <ListItem className=" selection:text-orange font-primary text-[20px] font-[400] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-white after:absolute after:left-0 after:bottom-[-2px] after:hover:w-0 xl:after:hover:w-[100%] after:hover:duration-300 after:hover:ease-linear  relative rotate-90">
          <Link
            scroll={(s) =>
              s.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            to="#Projects"
          >
            Projects
          </Link>
        </ListItem>
        <Link
          scroll={(s) =>
            s.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="#Contacts"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {
              1;
            }}
            onHoverEnd={(e) => {
              1;
            }}
            className=" mt-[50px] "
          >
            <button
              className="selection:bg-none px-[10px] text-white py-[5px] bg-black  xl:bg-orange rounded-xl text-[16px] font-primary mt-[10px] xl:mt-0
           border-[3px] border-transparent font-light hover:bg-transparent  xl:hover:text-orange hover:text-black xl:hover:border-orange hover:border-black duration-300 ease-out rotate-90 "
            >
              Contacts
            </button>
          </motion.div>
        </Link>
      </List>
    </div>
  );
};

export default NavBarSec;
