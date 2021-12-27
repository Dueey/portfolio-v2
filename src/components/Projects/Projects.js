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
      <ImgSlider className='img-slider' />
      <Wrapper>
        <Details>
          <div className={hidden5} id='projects'>
            <h1>Projects</h1>
          </div>
          <h1 className='title'>Clones</h1>

          <div className={hidden}>
            <Card
              state={hidden}
              image1='/images/amazon-clone.jpg'
              class1='Amazon'
              link1='https://react--clone-8f180.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/disney+.jpg'
              class1='Disney'
              link1='https://react-disney-clone-d5025.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/netflix-clone.jpg'
              class1='Netflix'
              link1='https://react-netflix-clone-e098d.web.app/'
            />
            <Card
              state={hidden}
              image1='/images/yelp-clone.jpg'
              class1='Yelp-WIP'
              link1=''
            />
          </div>
          <h1 className='title'>Games</h1>
          <div className={hidden2}>
            <Card
              state={hidden}
              image1='/images/tetris.jpg'
              class1='Tetris'
              link1='https://tetris-react-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/pacman.jpg'
              class1='Pacman'
              link1='https://pacman-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/chess1.jpg'
              class1='Chess'
              link1='https://chess-react-javascript.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/tic_tac_toe.jpg'
              class1='Tic-Tac-Toe'
              link1='https://tic-tac-toe-javascript-basic.netlify.app/'
            />
            <Card
              state={hidden}
              image1='/images/speedtyping.jpg'
              class1='Speed-Typing'
              link1='https://speed-typing-javascript.netlify.app/'
            />
          </div>
          <h1 className='title'>E-Commerce</h1>
          <div className={hidden3}>
            <Card
              state={hidden}
              image1='/images/amazon-clone.jpg'
              class1='Amazon'
              link1='https://react--clone-8f180.web.app/'
            />
            <Card
              state={hidden3}
              image1='/images/store.jpg'
              class1='E-Commerce'
              link1='https://e-commerce-react-javascript.netlify.app/'
            />
          </div>
          <h1 className='title'>Miscellaneous</h1>
          <div className={hidden4}>
            <Card
              state={hidden4}
              image1='/images/travel1.jpg'
              class1='Travel'
              link1='https://travel-website-react-javascript.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/discord-bot.jpg'
              class1='Discord-Music-Bot'
              link1='https://discord.com/oauth2/authorize?client_id=827787615948242985&scope=bot&permissions=0'
            />
            <Card
              state={hidden4}
              image1='/images/chat.jpg'
              class1='Chat-App'
              link1='https://sleepy-raman-c33727.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/python-music.jpg'
              class1='Python-Music'
              link1='https://react-disney-clone-d5025.web.app/'
            />
            <Card
              state={hidden4}
              image1='/images/calculator.jpg'
              class1='Calculator'
              link1='https://calculator-javascript-basic.netlify.app/'
            />
            <Card
              state={hidden4}
              image1='/images/task-tracker.jpg'
              class1='Task-Tracker'
              link1='https://task-tracker-react-javascript.netlify.app/'
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
  height: 150vh;
  background-color: #18181b;

  @media (max-width: 900px) and (min-width: 769px) {
    height: 300vh;
  }

  @media (max-width: 768px) {
    height: 600vh;
  }

  @media (max-width: 425px) {
    height: 600vh;
  }
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

  @media (max-width: 768px) {
    .active,
    .hidden {
      display: none;
    }
  }
`;

const Details = styled.div`
  margin-top: 60px;
  margin-left: 311px;
  position: absolute;
  display: flex;
  justify-content: center;

  .title {
    display: none;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    height: 600px;
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
      margin-left: 10vw;
      font-size: 250px;
      font-family: "Lobster", cursive;
      color: gray;
    }
  }

  .active {
    /* width: 65vw; */
    width: 1250px;
    border: 1px solid #30e389;
    background-color: #29292c;
    transition: 0.3s ease-in;
  }

  .hidden {
    overflow: hidden;
  }

  @media (max-width: 2012px) and (min-width: 1101px) {
    div {
      max-width: 75vw;
      height: 700px;

      h1 {
        margin-left: 9vw;
        font-size: 170px;
      }
    }
  }

  @media (max-width: 1100px) and (min-width: 850px) {
    div {
      max-width: 55vw;
      height: 800px;

      h1 {
        margin-left: 8vw;
        font-size: 130px;
      }
    }
  }

  @media (max-width: 849px) and (min-width: 769px) {
    div {
      max-width: 55vw;
      height: 800px;

      h1 {
        margin-left: 5vw;
        font-size: 120px;
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      display: flex;
      font-size: 40px;
      color: #30e389;
    }

    #projects {
      height: 280px;

      h1 {
        margin-left: 19vw;
        font-size: 100px;
      }
    }

    div {
      max-width: 80vw;
      height: 400px;

      div {
        display: flex;
        margin-right: 150px;
        margin-bottom: -500px;
        flex-direction: column;
        overflow-wrap: break-word;

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 100px;
        }
      }
    }

    .active,
    .hidden {
      max-width: 80vw;
      width: 80vw;
      max-height: 1000px;
      height: 1000px;
      border: 1px solid #30e389;
      background-color: #29292c;
      margin-bottom: 30px;
      transition: 0.3s ease-in;
    }
  }

  @media (max-width: 425px) {
    #projects {
      height: 230px;

      h1 {
        font-size: 80px;
        margin-left: 9vw;
      }
    }
  }

  @media (max-width: 375px) {
    #projects {
      height: 200px;

      h1 {
        font-size: 70px;
        margin-left: 8vw;
      }
    }
  }

  @media (max-width: 320px) {
    #projects {
      height: 200px;

      h1 {
        font-size: 60px;
        margin-left: 8vw;
      }
    }
  }
`;

const Card = styled(Cards)``;

export default Projects;
