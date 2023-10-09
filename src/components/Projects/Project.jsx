import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, description, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h5>{description}</h5>
            <p>{disc}</p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 22rem;
    background-color:#0000;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 78%;
        object-fit:scale-down ;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0rem;
        text-align: middle;
        padding: 0.5rem;
        background: rgb(0,0,0);
        background-image: linear-gradient(to left, #6b6b6b, #9a9a9a, #cbcbcb, #ffffff);
        transition: transform 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            text-align: middle;
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: orange;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

`