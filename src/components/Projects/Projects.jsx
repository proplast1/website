import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import SliderCompp from './sliderb2b';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1> <span className="orange">Commercial Products</span></h1>
            <p>We manufacture a wide variety of straws for use in commerce . Commercial items include straws in a variety of shapes, sizes, and colors.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
        <br/>
        <Zoom>
            <h1> <span className="orange">Industrial Products</span></h1>
            <p>Industrial items include a variety of sticks and straws.</p>
        </Zoom>
        <Slide>
        <SliderCompp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``