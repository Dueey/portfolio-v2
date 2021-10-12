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
      <ImgSlider />
      <Wrapper>
        <Details>
          <div className={hidden5}>
            <h1>Projects</h1>
          </div>
          <div className={hidden}>
            <Card
              state={hidden}
              image1='/images/amazon-clone.png'
              class1='Amazon'
              image2=''
              class2=''
              class3='na'
              link1='https://react--clone-8f180.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/disney+.png'
              class1='Disney'
              image2=''
              class2=''
              class3='na'
              link1='https://react-disney-clone-d5025.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/netflix-clone.png'
              class1='Netflix'
              image2=''
              class2=''
              class3='na'
              link1='https://react-netflix-clone-e098d.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/yelp-clone.png'
              class1='Yelp-WIP'
              image2=''
              class2=''
              class3='na'
              link1=''
            />
          </div>
          <div className={hidden2}>
            <Card
              state={hidden}
              image1='/images/tetris.png'
              class1='Tetris'
              image2='/images/speedtyping.png'
              class2='Speed-Typing'
              link1='https://tetris-react-javascript.netlify.app/'
              link2='https://speed-typing-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/pacman.jpg'
              class1='Pacman'
              image2=''
              class2=''
              class3='na'
              link1='https://pacman-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/chess1.png'
              class1='Chess'
              image2=''
              class2=''
              class3='na'
              link1='https://chess-react-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/tic_tac_toe.png'
              class1='Tic-Tac-Toe'
              image2=''
              class2=''
              class3='na'
              link1='https://tic-tac-toe-javascript-basic.netlify.app/'
            />
          </div>
          <div className={hidden3}>
            <Card
              state={hidden}
              image1='/images/amazon-clone.png'
              class1='Amazon'
              image2=''
              class2=''
              class3='na'
              link1='https://react--clone-8f180.web.app/'
            />
            <Card
              state={hidden3}
              image1='/images/store.png'
              class1='E-Commerce'
              image2=''
              class2=''
              class3='na'
              link1='https://e-commerce-react-javascript.netlify.app/'
            />
          </div>
          <div className={hidden4}>
            <Card
              state={hidden4}
              image1='/images/travel1.png'
              class1='Travel'
              image2='/images/calculator.png'
              class2='Calculator'
              link1='https://travel-website-react-javascript.netlify.app/'
              link2='https://calculator-javascript-basic.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/discord-bot.png'
              class1='Discord-Music-Bot'
              image2='/images/task-tracker.png'
              class2='Task-Tracker'
              link1='https://discord.com/oauth2/authorize?client_id=827787615948242985&scope=bot&permissions=0'
              link2='https://task-tracker-react-javascript.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/chat.png'
              class1='Chat-App'
              image2=''
              class2=''
              class3='na'
              link1='https://sleepy-raman-c33727.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/python-music.png'
              class1='Python-Music'
              image2=''
              class2=''
              class3='na'
              link1='https://react-disney-clone-d5025.web.app/'
            />
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

    h1 {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      display: flex;
      align-self: center;
      margin-top: 50px;
      margin-left: 200px;
      font-size: 250px;
      font-family: "Lobster", cursive;
      color: gray;
    }
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
