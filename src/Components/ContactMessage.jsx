import React, { useState } from "react";
import Title from "./Title";
import Flex from "./Flex";
import Label from "./Label";
import { getDatabase, set, ref, push } from "firebase/database";

const ContactMessage = () => {
  let [submit, setSubmit] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [number, setNumber] = useState("");
  let [question, setQuestion] = useState("");
  let [allinput, setAllInput] = useState("");

  function inputs() {
    setAllInput = setEmail;
    setAllInput = setName;
    setAllInput = setNumber;
    setAllInput = setQuestion;
  }

  let handleSubmit = () => {
    if (name == "") {
      alert("add name");
      $("button").hide();
    } else {
      const db = getDatabase();
      set(push(ref(db, "name/")), {
        usersName: name,
      }).then(() => {
        setName("");
      });
    }

    if (email == "") {
      alert("add e");
    } else {
      const db = getDatabase();
      set(push(ref(db, "email/")), {
        mailAddress: email,
      }).then(() => {
        setEmail("");
      });
    }

    if (number == "") {
      alert("add n");
    } else {
      const db = getDatabase();
      set(push(ref(db, "number/")), {
        contactnumber: number,
      }).then(() => {
        setNumber("");
      });
    }
    if (question == "") {
      alert("add q");
    } else {
      const db = getDatabase();
      set(push(ref(db, "question/")), {
        askedQuestion: question,
      }).then(() => {
        setQuestion("");
      });
    }
  };

  function handleName(nm) {
    setName(nm.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleNumber(n) {
    setNumber(n.target.value);
  }

  function handleQuestion(q) {
    setQuestion(q.target.value);
  }

  return (
    <div className="w-full lg:w-full xl:w-[49%] bg-[#252525] px-[25px] lg:px-[80px] pt-[35px]  rounded-xl mt-[50px] overflow-hidden ">
      <Title title="Ask me anything" className=" capitalize select-none " />
      <Flex className=" flex-col mt-[35px] ">
        <Flex className=" gap-4 lg:gap-0 xl:gap-0 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center mt-[10px] select-none">
          <div className=" w-full">
            <Label label="Name" />
            <br />
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="enter name"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] bg-black border-0 capitalize w-full
               border-black rounded-[5px] outline-1 outline-white placeholder:font-primary placeholder:text-left placeholder:lowercase"
            />
          </div>
        </Flex>
        <Flex className=" gap-4 lg:gap-0 xl:gap-0 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center mt-[50px] select-none">
          <div>
            <Label label="Email" />
            <br />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="enter email"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] w-[300px] bg-black border-0
               border-black rounded-[5px] outline-1 outline-white placeholder:font-primary placeholder:text-left"
            />
          </div>
          <div>
            <Label label="Phone number" />
            <br />
            <input
              type="number"
              value={number}
              onChange={handleNumber}
              maxLength="12"
              placeholder="enter number"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] w-[300px] bg-black border-0 
               border-black rounded-[5px] outline-1 outline-white placeholder:font-primary placeholder:text-left"
            />
          </div>
        </Flex>
        <div className=" mt-[50px] ">
          <Label label="Ask a question" className="select-none" /> <br />
          <textarea
            value={question}
            onChange={handleQuestion}
            placeholder="type here"
            className="text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] bg-black border-0 h-[200px] selection:text-orange w-full
               border-black rounded-[5px] outline-1 outline-white placeholder:font-primary placeholder:text-left"
          ></textarea>
        </div>
      </Flex>
      <div className=" flex items-center justify-center mt-[20px] relative ">
        <button
          onClick={handleSubmit}
          value={submit}
          className={`${
            question === "" ? "top-[200px]" : " top-2 duration-[400] ease-out"
          } text-[16px] font-primary font-normal text-white border-[3px] border-solid border-transparent absolute
          px-[25px] py-[7px] bg-orange rounded-lg hover:bg-transparent hover:border-orange hover:text-orange duration-300 ease-out `}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactMessage;
