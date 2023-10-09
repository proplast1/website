import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Contact Us</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Professional Plast </p>
              <p>  Cairo,Egypt </p>
              <p>  22 Ibrahim Tantawy st., El Herafyeen.</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact us directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+201222114801">General Manager - Mohamed Kamel Al Afandi.</a>
            </Slide>
          </div>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+201205111187">Marketing manager : Mohamed Mohanad Al Afandi</a>
            </Slide>
          </div>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+201068782211">Artistic straw project manager : Samir Al Afandi</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:mkafandi@hotmail.com">mkafandi@hotmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
          </Slide>
          <div className="icons">
          
          </div>
        </div>
      </Profile>
      <Form>
        <Slide direction="right">
          {/* <img src={companyImage}  height={400}></img> */}
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: #000;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;

const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
  img {
    border-radius: 10%;
    width: 3  00px;
    height: 400px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;  }
`;
