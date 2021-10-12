import React, { useState } from "react";
import styled from "styled-components";

function Contact() {
  const [hidden, setHidden] = useState("active");
  const [hidden2, setHidden2] = useState("hidden");

  function handleClick() {
    if (hidden === "hidden") {
      setHidden("active");
      setHidden2("hidden");
      // setHidden3("hidden");
      // setHidden4("hidden");
      // setHidden5("hidden");
    } else if (hidden === "active") {
      setHidden("hidden");
      setHidden2("active");
    }
  }

  function handleClick2() {
    if (hidden === "hidden") {
      setHidden("active");
      setHidden2("hidden");
      // setHidden3("hidden");
      // setHidden4("hidden");
      // setHidden5("hidden");
    } else if (hidden === "active") {
      setHidden("hidden");
      setHidden2("active");
    }
  }

  return (
    <Container>
      <Wrapper>
        <Details>
          <div className={hidden} onClick={handleClick}>
            <h1>Contact Me</h1>
          </div>
          <div className={hidden2}></div>
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
  }

  .active {
    border: 1px solid #ed6a61;
    background-color: #29292c;
    height: 250px;
    width: 800px;

    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }
`;

export default Contact;
