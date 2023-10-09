import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';




let data = [
    {
        img : require("../../AllProducts/straws.jpg"),
        description:"Zigzag Straws",
        disc : " "
     },
      {
    img : require("../../AllProducts/straws3.jpg"),
    description:"Artistic Jumbo Straw",
    disc : "Length: 24cm and Width: 8mm  "
}, {
  img : require("../../AllProducts/straws5.jpg"),
  description:"Small diameter straws",
  disc : "Length: 23cm and Width: 4mm"
},    {
  img : require("../../AllProducts/straws6.jpg"),
  description:"Flexible straws",
  disc : "Length: 22cm and Width: 6mm  "
},{
  img : require("../../AllProducts/straws7.jpg"),
  description:"Artistic straws",
  disc : "Length: 23cm and Width: 6mm "
},{
  img : require("../../AllProducts/straws8.jpg"),
  description:"Mango Straws",
  disc : "Length: 21cm and Width: 10mm "
},{
  img : require("../../AllProducts/straws9.jpg"),
  description:"normal straws",
  disc : "Length: 22cm and Width: 5mm - 7mm "
},
    
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false ,
          autoplay: true,
          autoplaySpeed: 6000
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false ,
          autoplay: true,
          autoplaySpeed: 6000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false ,
          autoplay: true,
          autoplaySpeed: 6000
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.100);
    cursor: pointer;
    color: #e46c25;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`