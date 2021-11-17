import React, { useState } from "react";
import styled from "styled-components";

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
                <h2>About</h2>
              </div>
              <p className={details1 ? "details1 active" : "details1"}>
                My name is Duy Kim and I am trying to be a web developer! I
                enjoy coding and learning about the inner mechanisms of the
                internet!
              </p>
            </div>
            <div className={info2 ? "info2 active" : "info2"}>
              <div className='triangle' onClick={handleInfo2Click}>
                <h2>Skills</h2>
              </div>
              <center></center>
              <p className={details2 ? "details2 active" : "details2"}>
                My strongest skills would be my familiarity with ReactJS and my
                ability to learn quickly.
              </p>
            </div>
            <div className={info3 ? "info3 active" : "info3"}>
              <div className='square' onClick={handleInfo3Click}>
                <h2>Projects</h2>
              </div>
              <p className={details3 ? "details3 active" : "details3"}>
                Here are some of the bigger projects I have made.
              </p>
            </div>
            <div className={info4 ? "info4 active" : "info4"}>
              <div className='pentagon' onClick={handleInfo4Click}>
                <h2>Contact</h2>
              </div>
              <p className={details4 ? "details4 active" : "details4"}>
                The easiest way to contact me is email: 2103duykim@gmail.com
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
  height: 200vh;
  background-color: #dbdbdb;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 70px;
  }

  p {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-size: 20px;

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
    display: flex;
    position: absolute;
    right: 300px;
    top: 230px;
    border-radius: 20px;
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
      margin-left: 700px;

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
        margin-left: 100px;
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
    }

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
      margin-right: 100vh;
      transition: 0.4s ease-in;
      transition-delay: 0s;
    }

    .info2.active {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-right: 100vh;
      transition: 0.4s ease-in;
      transition-delay: 0.2s;
    }

    .info3.active {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-right: 100vh;
      transition: 0.4s ease-in;
      transition-delay: 0.4s;
    }

    .info4.active {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-right: 100vh;
      transition: 0.4s ease-in;
      transition-delay: 0.6s;
    }
  }
`;

export default Home;
