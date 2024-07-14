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
      set(push(ref(db, "user/")), {
        usersName: name,
        mailAddress: email,
        contactnumber: number,
        askedQuestion: question,
      }).then(() => {
        setName("");
      });
    }

    if (email == "") {
      alert("add e");
    } else {
      const db = getDatabase();
      set(push(ref(db, "email/")), {}).then(() => {
        setEmail("");
      });
    }

    if (number == "") {
      alert("add n");
    } else {
      const db = getDatabase();
      set(push(ref(db, "number/")), {}).then(() => {
        setNumber("");
      });
    }
    if (question == "") {
      alert("add q");
    } else {
      const db = getDatabase();
      set(push(ref(db, "question/")), {}).then(() => {
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
    <div
      className=" w-full lg:w-full xl:w-[49%] bg-transparent px-[25px] lg:px-[80px] pt-[35px] pb-[70px] border-[2px] border-[#414341] rounded-xl mt-[50px] overflow-hidden "
    >
      <Title title="Ask me anything" className=" capitalize select-none " />
      <Flex className=" flex-col mt-[35px] ">
        <Flex className=" gap-4 lg:gap-0 xl:gap-0 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between items-center mt-[10px] select-none">
          <div className=" w-full">
            <Label label="Name" className=" text-yellow " />
            <br />
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="enter name"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] bg-green capitalize w-full
               border-black rounded-[5px] focus:outline-none focus:outline-[#2e2f2e] placeholder:font-primary placeholder:text-left placeholder:lowercase placeholder:text-white "
            />
          </div>
        </Flex>
        <Flex className=" gap-4 lg:gap-0 xl:gap-[20px] flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-wrap justify-between items-center mt-[50px] select-none ">
          <div>
            <Label label="Email" className=" text-yellow " />
            <br />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="enter email"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] w-[300px] bg-green border-0
               border-black rounded-[5px] focus:outline-none focus:outline-[#2e2f2e] placeholder:font-primary placeholder:text-left placeholder:text-white "
            />
          </div>
          <div>
            <Label label="Phone number" className=" text-yellow " />
            <br />
            <input
              type="tel"
              inputmode="numeric"
              value={number}
              onChange={handleNumber}
              maxLength="12"
              placeholder="enter number"
              className=" text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] w-[300px] bg-green border-0 
               border-black rounded-[5px] focus:outline-none focus:outline-[#2e2f2e] placeholder:font-primary placeholder:text-left placeholder:text-white "
            />
          </div>
        </Flex>
        <div className=" mt-[50px] ">
          <Label label="Ask a question" className="text-yellow " /> <br />
          <textarea
            value={question}
            onChange={handleQuestion}
            placeholder="type here"
            className="text-white text-[14px] font-primary px-[10px] py-[10px] mt-[10px] bg-green border-0 h-[200px] selection:text-orange w-full
               border-black rounded-[5px] focus:outline-none focus:outline-[#2e2f2e] placeholder:font-primary placeholder:text-left placeholder:text-white "
          ></textarea>
        </div>
      </Flex>
      <div className=" flex items-center justify-center mt-[20px] relative ">
        <button
          onClick={handleSubmit}
          value={submit}
          className={`${
            question === "" ? "top-[200px]" : " top-2 duration-[400] ease-out"
          } text-[16px] font-primary font-normal text-black border-[3px] border-solid border-transparent absolute
          px-[25px] py-[7px] bg-yellow rounded-lg hover:bg-transparent hover:border-yellow hover:text-yellow duration-300 ease-out `}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactMessage;
