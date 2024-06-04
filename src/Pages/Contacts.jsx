import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import ContactMessage from "../Components/ContactMessage";
import ContactInfo from "../Components/ContactInfo";

const Contacts = () => {
  return (
    <section className=" pb-[100px]">
      <Container>
        <Flex className=" justify-between flex-col lg:flex-col xl:flex-row" >
          <ContactInfo />
          <ContactMessage />
        </Flex>
      </Container>
    </section>
  );
};

export default Contacts;
