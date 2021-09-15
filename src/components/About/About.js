import React, { useState } from "react";
import styled from "styled-components";

function About() {
  const [hidden, setHidden] = useState("hidden");
  const [hidden2, setHidden2] = useState("hidden");
  const [hidden3, setHidden3] = useState("hidden");
  const [hidden4, setHidden4] = useState("hidden");

  function handleClick() {
    if (hidden === "hidden") {
      setHidden("active");
      setHidden2("hidden");
      setHidden3("hidden");
      setHidden4("hidden");
    } else if (hidden === "active") {
      setHidden("hidden");
    }
  }

  function handleClick2() {
    if (hidden2 === "hidden") {
      setHidden("hidden");
      setHidden2("active");
      setHidden3("hidden");
      setHidden4("hidden");
    } else if (hidden2 === "active") {
      setHidden2("hidden");
    }
  }

  function handleClick3() {
    if (hidden3 === "hidden") {
      setHidden("hidden");
      setHidden2("hidden");
      setHidden3("active");
      setHidden4("hidden");
    } else if (hidden3 === "active") {
      setHidden3("hidden");
    }
  }

  function handleClick4() {
    if (hidden4 === "hidden") {
      setHidden("hidden");
      setHidden2("hidden");
      setHidden3("hidden");
      setHidden4("active");
    } else if (hidden4 === "active") {
      setHidden4("hidden");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Details>
          <div className={hidden}></div>
          <div className={hidden2}></div>
          <div className={hidden3}></div>
          <div className={hidden4}></div>
        </Details>
        <Wrap>
          <span onClick={handleClick} className={hidden}>
            Coding
          </span>
          <span onClick={handleClick2} className={hidden2}>
            University
          </span>
          <span onClick={handleClick3} className={hidden3}>
            Skills
          </span>
          <span onClick={handleClick4} className={hidden4}>
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
    margin: 20px;
    cursor: pointer;

    :hover {
      color: #ed6a61;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 90px;
  margin-left: 20px;
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
    height: 0px;
    width: 0px;
    transition: 0.1s;
  }

  .active {
    border: 1px solid #ed6a61;
    background-color: #29292c;
    height: 600px;
    width: 1006px;

    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }
`;

export default About;
