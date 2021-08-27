import React, { useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Cards from "./Cards";
import {
  CropPortrait,
  Casino,
  Storefront,
  MoreHoriz,
} from "@material-ui/icons";

function Projects() {
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
      <ImgSlider />
      <Wrapper>
        <Details>
          <div className={hidden}>
            <Card state={hidden} />
            <Card state={hidden} />
            <Card state={hidden} />
            <Card state={hidden} />
          </div>
          <div className={hidden2}>
            <Card state={hidden2} />
            <Card state={hidden2} />
            <Card state={hidden2} />
            <Card state={hidden2} />
          </div>
          <div className={hidden3}>
            <Card state={hidden3} />
            <Card state={hidden3} />
            <Card state={hidden3} />
            <Card state={hidden3} />
          </div>
          <div className={hidden4}>
            <Card state={hidden4} />
            <Card state={hidden4} />
            <Card state={hidden4} />
            <Card state={hidden4} />
          </div>
        </Details>
        <Wrap>
          <span onClick={handleClick} className={hidden}>
            <CropPortrait className='icon-1' />
            <CropPortrait className='icon-2' />
            Clones
          </span>
          <span onClick={handleClick2} className={hidden2}>
            <Casino className='dice' />
            Games
          </span>
          <span onClick={handleClick3} className={hidden3}>
            <Storefront className='store' />
            E-Commerce
          </span>
          <span onClick={handleClick4} className={hidden4}>
            <MoreHoriz className='more' />
            Misc.
          </span>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #18181b;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 50px;
  z-index: 2;

  span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
    width: 190px;
    margin: 10px 0px 0px 20px;
    letter-spacing: 1.5px;
    border: 1px solid #30e389;
    background-color: #29292c;
    cursor: pointer;
    transition: 0.1s ease-in;

    :hover {
      /* width: 220px; */
      /* border-right: 1px solid transparent; */
      color: #30e389;
    }
  }

  .active {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
    width: 220px;
    margin: 10px 0px 0px 20px;
    letter-spacing: 1.5px;
    border-right: 1px solid transparent;
    background-color: #29292c;
    cursor: pointer;
    color: #30e389;
  }

  .icon-1 {
    font-size: 20px;
    margin-top: 0px;
    margin-right: -13px;
  }

  .icon-2 {
    font-size: 20px;
    margin-top: 5px;
    background-color: #29292c;
    padding-right: 4px;
  }

  .dice {
    font-size: 22px;
    margin-top: 4px;
    padding-right: 5px;
  }

  .store {
    font-size: 22px;
    margin-top: 4px;
    padding-right: 5px;
    /* padding-left: 50px; */
  }

  .more {
    font-size: 22px;
    margin-top: 4px;
    padding-right: 5px;
  }
`;

const Details = styled.div`
  margin-top: 60px;
  margin-left: 311px;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;

  div {
    display: flex;
    flex-wrap: wrap;
    height: 60vh;
    width: 0vw;
    transition: 0.1s;
  }

  .active {
    width: 65vw;
    border: 1px solid #30e389;
    background-color: #29292c;
    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }
`;

const Card = styled(Cards)``;

export default Projects;
