import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBack } from "@material-ui/icons";

function Contact() {
  const [hidden, setHidden] = useState("active");
  const [hidden2, setHidden2] = useState("hidden");
  const [arrow, setArrow] = useState("hideArrow");

  function handleClick() {
    if (hidden === "hidden") {
      setHidden("active");
      setHidden2("hidden");
      setArrow("hideArrow");
      // setHidden3("hidden");
      // setHidden4("hidden");
      // setHidden5("hidden");
    } else if (hidden === "active") {
      setHidden("hidden");
      setHidden2("active");
      setArrow("showArrow");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Details>
          <div className={hidden} onClick={handleClick}>
            <h1>Contact Me</h1>
          </div>
          <div className={hidden2} onClick={handleClick}>
            <div className='info'>
              {/* <ArrowBack className={arrow} onClick={handleClick} /> */}
              <span>Email (Preferred Contact): 2103duykim@gmail.com</span>
              <span>Phone: (714) 944-0018</span>
              <span>
                LinkedIn:{" "}
                <a
                  href='https://www.linkedin.com/in/duy-kim-620698165/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Duy Kim
                </a>
              </span>
              <span>
                GitHub:{" "}
                <a
                  href='https://github.com/Dueey'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dueey
                </a>
              </span>
            </div>
          </div>
        </Details>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #18181b;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin-top: -300px;

  div {
    display: flex;
    justify-content: center;
    height: 0px;
    transition: 0.1s;
    cursor: pointer;

    h1 {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      display: flex;
      align-self: center;
      font-size: 150px;
      font-family: "Lobster", cursive;
      color: gray;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;

      span {
        color: white;
        font-weight: bold;
        font-size: 20px;

        a {
          text-decoration: none;
          color: lightblue;

          :hover {
            text-decoration: underline;
            color: #f0b851;
          }
        }
      }

      .showArrow {
        color: white;
        cursor: pointer;
        font-size: 30px;
        position: absolute;
        margin-left: -155px;
        margin-top: -105px;

        :hover {
          color: #f0b851;
        }
      }

      .hideArrow {
        display: none;
      }
    }
  }

  .active {
    border: 1px solid #f0b851;
    background-color: #29292c;
    height: 250px;
    width: 800px;

    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }

  @media (max-width: 850px) {
    div {
      max-width: 80vw;

      h1 {
        font-size: 100px;
        margin-left: 10vw;
      }

      div {
        margin-left: 5%;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      max-width: 80vw;

      h1 {
        font-size: 80px;
        margin-left: 10vw;
      }

      div {
        margin-left: 12%;
      }
    }
  }

  @media (max-width: 320px) {
    div {
      max-width: 80vw;

      h1 {
        font-size: 70px;
        margin-left: 10vw;
      }

      div {
        margin-left: 2%;
      }
    }
  }
`;

export default Contact;
