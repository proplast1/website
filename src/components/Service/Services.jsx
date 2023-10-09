import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { RiFileList2Line } from "react-icons/ri";
import { CgEye } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h1>
          Our <span className="orange">Mission and Vision</span>
        </h1>
        {/* <h2>What We Do</h2> */}
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={RiUser3Line}
            title={"Overview  "}
            disc={`In 1998, our business was founded in Cairo, Egypt. Since then, we've gone from having just 2 production lines for straws to having 14 lines.
            Our facility manufactures flexible and non-flexible drinking straws, as well as artistic and non-artistic straws with diameters ranging from 2.5 to 11 mm.
            You have the option of individually packing or not packing any straws.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={RiFileList2Line}
            title={"Mission"}
            disc={`We qualify products for business-to-business sales, including straws for juice factories, lollipop sticks, cotton buds sticks, ice cream sticks, and various items that are equivalent to straws. `}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgEye}
            title={"Vision"}
            disc={`We are of very high quality. Because of this, we are the market leaders in Egypt and the nearby areas. We are currently focusing on new markets in the Middle East, North Africa, and West Africa.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, minmax(250px, 1fr));
  // auto-fit
  margin-top: 3rem;
  gap: 1rem;
`;
