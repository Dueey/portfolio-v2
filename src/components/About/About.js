import React, { useState } from "react";
import styled from "styled-components";
import { Code, School, Build, FitnessCenter } from "@material-ui/icons";

function About() {
  const [hidden, setHidden] = useState("hidden");
  const [hidden2, setHidden2] = useState("hidden");
  const [hidden3, setHidden3] = useState("hidden");
  const [hidden4, setHidden4] = useState("hidden");
  const [hidden5, setHidden5] = useState("active");

  function handleClick() {
    if (hidden === "hidden") {
      setHidden("active");
      setHidden2("hidden");
      setHidden3("hidden");
      setHidden4("hidden");
      setHidden5("hidden");
    } else if (hidden === "active") {
      setHidden("hidden");
      setHidden5("active");
    }
  }

  function handleClick2() {
    if (hidden2 === "hidden") {
      setHidden("hidden");
      setHidden2("active");
      setHidden3("hidden");
      setHidden4("hidden");
      setHidden5("hidden");
    } else if (hidden2 === "active") {
      setHidden2("hidden");
      setHidden5("active");
    }
  }

  function handleClick3() {
    if (hidden3 === "hidden") {
      setHidden("hidden");
      setHidden2("hidden");
      setHidden3("active");
      setHidden4("hidden");
      setHidden5("hidden");
    } else if (hidden3 === "active") {
      setHidden3("hidden");
      setHidden5("active");
    }
  }

  function handleClick4() {
    if (hidden4 === "hidden") {
      setHidden("hidden");
      setHidden2("hidden");
      setHidden3("hidden");
      setHidden4("active");
      setHidden5("hidden");
    } else if (hidden4 === "active") {
      setHidden4("hidden");
      setHidden5("active");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Details>
          <div className={hidden5}>
            <h1>About Me</h1>
          </div>
          <div className={hidden}></div>
          <div className={hidden2}></div>
          <div className={hidden3}></div>
          <div className={hidden4}></div>
        </Details>
        <Wrap>
          <span onClick={handleClick} className={hidden}>
            <Code className='icon-1' />
            Coding
          </span>
          <span onClick={handleClick2} className={hidden2}>
            <School className='icon-2' />
            Academics
          </span>
          <span onClick={handleClick3} className={hidden3}>
            <Build className='icon-3' />
            Skills
          </span>
          <span onClick={handleClick4} className={hidden4}>
            <FitnessCenter className='icon-4' />
            Hobbies
          </span>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #18181b;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Wrap = styled.div`
  display: flex;
  color: white;
  z-index: 2;

  span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    letter-spacing: 1.5px;
    height: 40px;
    width: 220px;
    border: 1px solid #ed6a61;
    background-color: #29292c;
    margin: 15px;
    cursor: pointer;
    transition: 0.1s ease-in;

    :hover {
      color: #ed6a61;
    }
  }

  .active {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding-bottom: 14px;
    letter-spacing: 1.5px;
    border-bottom: 1px solid transparent;
    background-color: #29292c;
    cursor: pointer;
    color: #ed6a61;
  }

  .icon-1 {
    font-size: 28px;
    margin-right: 8px;
    margin-bottom: -3px;
  }

  .icon-2 {
    font-size: 22px;
    margin-right: 8px;
    margin-bottom: -3px;
  }

  .icon-3 {
    font-size: 18px;
    margin-right: 8px;
    margin-bottom: -3px;
  }

  .icon-4 {
    font-size: 20px;
    margin-right: 8px;
    margin-bottom: -3px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin-top: 70px;
  margin-left: 15px;
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
    height: 0px;
    width: 976px;
    transition: 0.1s;

    h1 {
      display: flex;
      align-self: center;
      margin-top: 50px;
      font-size: 250px;
      font-family: "Lobster", cursive;
      color: gray;
    }
  }

  .active {
    border: 1px solid #ed6a61;
    background-color: #29292c;
    height: 600px;
    width: 976px;

    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }
`;

export default About;
