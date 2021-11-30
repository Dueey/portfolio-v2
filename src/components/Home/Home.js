import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Header";

function Home() {
  const [fun, setFun] = useState("hideFun");
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const [info4, setInfo4] = useState(false);
  const [details1, setDetails1] = useState(false);
  const [details2, setDetails2] = useState(false);
  const [details3, setDetails3] = useState(false);
  const [details4, setDetails4] = useState(false);

  function handleFunClick() {
    if (fun === "hideFun") {
      setFun("showFun");
    } else {
      setFun("hideFun");
    }
  }

  function handleInfo1Click() {
    if (info1 === "hideInfo") {
      setInfo1("showInfo");
      setDetails1("showDetails");
    } else {
      setInfo1("hideInfo");
      setDetails1("hideDetails");
    }
  }

  function handleInfo2Click() {
    if (info2 === "hideInfo") {
      setInfo2("showInfo");
      setDetails2("showDetails");
    } else {
      setInfo2("hideInfo");
      setDetails2("hideDetails");
    }
  }

  function handleInfo3Click() {
    if (info3 === "hideInfo") {
      setInfo3("showInfo");
      setDetails3("showDetails");
    } else {
      setInfo3("hideInfo");
      setDetails3("hideDetails");
    }
  }

  function handleInfo4Click() {
    if (info4 === "hideInfo") {
      setInfo4("showInfo");
      setDetails4("showDetails");
    } else {
      setInfo4("hideInfo");
      setDetails4("hideDetails");
    }
  }

  const showDetail = () => {
    if (window.scrollY >= 150) {
      setDetails1(true);
      setDetails2(true);
      setDetails3(true);
      setDetails4(true);
      setInfo1(true);
      setInfo2(true);
      setInfo3(true);
      setInfo4(true);
    } else {
      // setDetails1(false);
      // setDetails2(false);
      // setDetails3(false);
      // setDetails4(false);
    }
  };

  window.addEventListener("scroll", showDetail);

  return (
    <Container>
      {/* <Header /> */}
      <Wrapper>
        <Wrap>
          <h1>Hello! I'm Duy :D</h1>
          <p>
            I like pressing buttons and seeing errors...{" "}
            <b className='fun' onClick={handleFunClick}>
              because that's where all the fun begins.
            </b>
          </p>
          <img className={fun} src='images/begins.gif' alt='' />
        </Wrap>
        <Wrap>
          <div>
            <div className={info1 ? "info1 active" : "info1"}>
              <div className='circle' onClick={handleInfo1Click}>
                <h2>Skills</h2>
              </div>
              <p className={details1 ? "details1 active" : "details1"}>
                I have coded with several projects with ReactJS being the main
                framework. I enjoy learning new languages because coding
                languages are not that different from each other. I find it very
                fun seeing how each languages' syntax differs from one another.
              </p>
            </div>
            <div className={info2 ? "info2 active" : "info2"}>
              <div className='triangle' onClick={handleInfo2Click}>
                <h2>Eager</h2>
              </div>
              <p className={details2 ? "details2 active" : "details2"}>
                When it comes to finishing a project, I am very eager to impress
                others. Being able to see something on the internet and managing
                to replicate it from scratch brings me a lot of joy and
                confidence in myself.
              </p>
            </div>
            <div className={info3 ? "info3 active" : "info3"}>
              <div className='square' onClick={handleInfo3Click}>
                <h2>Chill</h2>
              </div>
              <p className={details3 ? "details3 active" : "details3"}>
                Overall, I'd say I'm pretty chill. Give me a task and I will
                complete it, no questions asked. I like to focus on my code and
                when I come across a frustrating issue, I like to walk away and
                come back with a fresh mindset, ready to tackle it again.
              </p>
            </div>
            <div className={info4 ? "info4 active" : "info4"}>
              <div className='pentagon' onClick={handleInfo4Click}>
                <h2>Goofy</h2>
              </div>
              <p className={details4 ? "details4 active" : "details4"}>
                Once I'm really comfortable and know others well, I sometimes
                act a bit silly. I find that my method of breaking the ice and
                getting along with others. Sometimes when I finish a part of my
                code, I take a step back to take it all in and then I give
                myself a pat on the back.
              </p>
            </div>
          </div>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  background-color: #dbdbdb;
  /* justify-content: center; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 70px;
    z-index: 2;
  }

  p {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-size: 20px;
    z-index: 2;

    .fun {
      cursor: pointer;

      :hover {
        color: coral;
      }
    }
  }

  .hideFun {
    display: none;
  }

  .showFun {
    z-index: 2;
    display: flex;
    position: absolute;
    right: 300px;
    top: 230px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    .hideFun,
    .showFun {
      display: none;
    }

    h1 {
      width: 80%;
    }

    p {
      color: black;
      width: 80%;

      .fun {
        :hover {
          color: black;
        }
      }
    }
  }

  div {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      position: relative;
      left: 8vw;

      div {
        height: 150px;
        width: 150px;
        margin: 10px;
        cursor: pointer;
        border: 4px solid transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        :hover {
          border: 4px solid #29292c;
        }
      }

      .circle {
        border-radius: 50%;
        background-color: #ed6a61;
      }

      .triangle {
        border-radius: 50%;
        background-color: #51d0f0;
      }

      .square {
        border-radius: 50%;
        background-color: #30e389;
      }

      .pentagon {
        border-radius: 50%;
        background-color: #f0b851;
      }

      p {
        width: 600px;
        position: relative;
        left: 10vw;
        margin-top: 50px;
        justify-self: center;
        text-align: center;
      }

      .details1,
      .details2,
      .details3,
      .details4 {
        color: #dbdbdb;
      }

      .details1.active,
      .details2.active,
      .details3.active,
      .details4.active {
        display: flex;
        color: black;
      }

      .details1.active {
        transition: 0.6s ease-in;
        transition-delay: 0.25s;
      }

      .details2.active {
        transition: 0.6s ease-in;
        transition-delay: 0.5s;
      }

      .details3.active {
        transition: 0.6s ease-in;
        transition-delay: 0.75s;
      }

      .details4.active {
        transition: 0.6s ease-in;
        transition-delay: 1s;
      }

      @media (max-width: 768px) and (min-width: 425px) {
        align-items: center;

        div {
          display: flex;
          left: 20vw;
          top: 2vh;
        }

        p {
          width: 60%;
          color: black;
          font-size: 24px;
          left: 20vw;
        }
      }

      @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        color: black;
        left: 0;

        div {
          display: flex;
          flex-direction: column;
          left: 0;
        }

        p {
          width: 80%;
          left: 0;
          color: black;
          font-size: 24px;
        }
      }
    }

    @media (min-width: 426px) {
      .info1,
      .info2,
      .info3,
      .info4 {
        display: flex;
        margin-right: 0vh;
        transition: 0.2s ease-in;
        background-color: #dbdbdb;
      }

      .info1.active {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        left: -15vw;
        transition: 0.4s ease-in;
        transition-delay: 0s;
      }

      .info2.active {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        left: -15vw;
        transition: 0.4s ease-in;
        transition-delay: 0.2s;
      }

      .info3.active {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        left: -15vw;
        transition: 0.4s ease-in;
        transition-delay: 0.4s;
      }

      .info4.active {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        left: -15vw;
        transition: 0.4s ease-in;
        transition-delay: 0.6s;
      }
    }
  }
`;

export default Home;
