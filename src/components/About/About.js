import React, { useState } from "react";
import styled from "styled-components";
import { Code, School, Build, FitnessCenter, Close } from "@material-ui/icons";

function About() {
  const [hidden, setHidden] = useState("hidden");
  const [hidden2, setHidden2] = useState("hidden");
  const [hidden3, setHidden3] = useState("hidden");
  const [hidden4, setHidden4] = useState("hidden");
  const [hidden5, setHidden5] = useState("active");
  const [hideImage1, setHideImage1] = useState("hide");
  const [hideImage2, setHideImage2] = useState("hide");
  const [close, setClose] = useState("closeHide");

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

  function handleShowImage1() {
    if (hideImage1 === "hide") {
      setHideImage1("show");
      setHideImage2("hide");
      setClose("closeShow");
    } else if (hideImage1 === "show") {
      setHideImage1("hide");
    }
  }

  function handleShowImage2() {
    if (hideImage2 === "hide") {
      setHideImage2("show");
      setHideImage1("hide");
      setClose("closeShow");
    } else if (hideImage2 === "show") {
      setHideImage2("hide");
    }
  }

  function handleClose() {
    if (hideImage1 || hideImage2 === "show") {
      setHideImage1("hide");
      setHideImage2("hide");
      setClose("closeHide");
    }
  }

  return (
    <Container>
      <img src='images/Resume1.jpg' alt='' className={hideImage1} />
      <img src='images/Resume2.jpg' alt='' className={hideImage2} />
      <Close className={close} onClick={handleClose} />
      <Wrapper>
        <Details>
          <div className={hidden5}>
            <h1>About Me</h1>
          </div>
          <div className={hidden}>
            <div>
              <h2>University</h2>
              <p>
                I studied Chemical Engineering at California State University,
                Long Beach from 2015 to 2019. The focus of these stuides mostly
                pertained to chemical processes in factories. Being able to
                calculate input and output flowrates, heat and mass balances,
                and developing controllers to operate and control the processes
                depending on required specifications were abilities needed in
                this field. The field also branches outwards towards material
                sciences, such as being able to test the properties of
                materials, as well as producing them.
              </p>

              <h2>Online Courses</h2>
              <p>
                I first learned how to code through a web development course on
                Udemy. In that course, I learned the basics of web dev from
                JavaScript and front-end, to SQL and back-end, and to ReactJS.
                From there, I took a course on how to develop an E-Commerce
                website using PHP. After that, I went to YouTube and followed
                tutorials on how to build and deploy projects, such as games and
                website clones.
              </p>
            </div>
          </div>
          <div className={hidden2}>
            <div>
              <h2>University</h2>
              <p>
                I studied Chemical Engineering at California State University,
                Long Beach from 2015 to 2019. The focus of these stuides mostly
                pertained to chemical processes in factories. Being able to
                calculate input and output flowrates, heat and mass balances,
                and developing controllers to operate and control the processes
                depending on required specifications were abilities needed in
                this field. The field also branches outwards towards material
                sciences, such as being able to test the properties of
                materials, as well as producing them.
              </p>
              <p className='resume' onClick={handleShowImage1}>
                Chemical Engineering Resume
              </p>
              <h2>Online Courses</h2>
              <p>
                I first learned how to code through a web development course on
                Udemy. In that course, I learned the basics of web dev from
                JavaScript and front-end, to SQL and back-end, and to ReactJS.
                From there, I took a course on how to develop an E-Commerce
                website using PHP. After that, I went to YouTube and followed
                tutorials on how to build and deploy projects, such as games and
                website clones.
              </p>
              <p className='resume' onClick={handleShowImage2}>
                Web Development Resume
              </p>
            </div>
          </div>
          <div className={hidden3}>
            <div>
              <h2>Languages</h2>
              <p>HTML, CSS, JavaScript, ReactJS, Python, PHP, MATLAB</p>
              <div className='icon-container'>
                <img src='/images/html.png' alt='' />
                <img src='/images/css.png' alt='' />
                <img src='/images/javascript.png' alt='' />
                <img src='/images/react.png' alt='' />
                <img src='/images/python.png' alt='' />
                <img src='/images/php.png' alt='' />
                <img src='/images/matlab.png' alt='' />
              </div>
              <h2>Data Bases</h2>
              <p>SQL, Firebase, MongoDB, Mongoose, phpMyAdmin</p>
              <div className='icon-container'>
                <img src='/images/sql.png' alt='' />
                <img src='/images/firebase.png' alt='' />
                <img src='/images/mongodb.png' alt='' />
                <img src='/images/mongoose.png' alt='' />
                <img src='/images/phpmyadmin.png' alt='' />
              </div>
              <h2>Environments</h2>
              <p>Github, Visual Studio Code, NodeJS, Netlify, XAMPP</p>
              <div className='icon-container'>
                <img src='/images/github.png' alt='' className='github' />
                <img src='/images/vscode.png' alt='' />
                <img src='/images/node.png' alt='' />
                <img src='/images/netlify.png' alt='' />
                <img src='/images/xampp.png' alt='' />
              </div>
              <h2>Other Skills</h2>
              <p>Video Editing, Microsoft Office, Chemical Engineering</p>
              <div className='icon-container'>
                <img src='/images/videoediting.png' alt='' />
                <img src='/images/microsoft.png' alt='' />
                <img src='/images/chemical.png' alt='' className='chemical' />
              </div>
            </div>
          </div>
          <div className={hidden4}>
            <div>
              <h2>Powerlifting</h2>
              <p>
                Whenever I go to the gym or workout at home, I mainly powerlift.
                Powerlifting is a sport in which you try to lift as much weight
                as you can for the 3 main compound lifts: Squat, Bench, and
                Deadlift. My training involves me following programs that
                dictate me to perform specific exercises throughout the week.
              </p>
              <h2>Video Games</h2>
              <p>
                I enjoy playing and watching others play games. I mainly play
                casual PC games, such as Monster Hunter, Risk of Rain 2,
                Battlefront 2, Icarus, GTFO, etc. I tend to stay away from very
                competitive games, but I enjoy watching the competitive scene
                for games like League of Legends of Legends, CSGO, and Valorant.
              </p>
              <h2>Popular Culture</h2>
              <p>
                I would say I'm a big fan of popular culture, so things such as
                Marvel, Star Wars, and new TV Shows/Movies. I used to really be
                into anime and K-pop, but I'm not in those phases at the moment.
                I enjoy listening to several genres of music with EDM currently
                being my most listened genre.
              </p>
              <h2>Sports</h2>
              <p>
                While I don't play many sports, I enjoy watching football,
                basketball, soccer, golf, etc. For football, I'm a huge New
                Orleans Saints fan and for basketball, I like the Los Angeles
                Lakers and Golden State Warriors.
              </p>
            </div>
          </div>
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
  height: 105vh;
  background-color: #18181b;

  img {
    position: absolute;
    z-index: 3;
    height: 900px;
  }

  .hide {
    display: none;
  }

  .show {
    display: flex;
  }

  .closeHide {
    display: none;
  }

  .closeShow {
    z-index: 4;
    font-size: 35px;
    position: absolute;
    margin-left: -320px;
    margin-top: 5px;
    cursor: pointer;

    :hover {
      color: #ed6a61;
    }
  }
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
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      display: flex;
      align-self: center;
      margin-top: 50px;
      font-size: 200px;

      font-family: "Lobster", cursive;
      color: gray;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #e0e0e0;
      margin-top: 260px;

      h2 {
        margin-bottom: 10px;
      }

      p {
        padding: 0px 40px 20px 40px;
        margin-top: -5px;
      }

      .icon-container {
        margin: 0;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;

        img {
          height: 40px;
          position: relative;
          margin: 0 6px;
        }

        .github {
          filter: brightness(2);
        }

        .chemical {
          height: 60px;
          filter: invert();
        }
      }

      .resume {
        text-decoration: none;
        color: lightblue;
        cursor: pointer;

        :hover {
          text-decoration: underline;
          color: #ed6a61;
        }
      }
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
