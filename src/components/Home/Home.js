import React, { useState } from "react";
import styled from "styled-components";

function Home() {
  const [fun, setFun] = useState("hideFun");

  function handleFunClick() {
    if (fun === "hideFun") {
      setFun("showFun");
    } else {
      setFun("hideFun");
    }
  }

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
            <div className='circle'>
              <h2>Home</h2>
            </div>
            <div className='triangle'>
              <h2>About</h2>
            </div>
            <div className='square'>
              <h2>Projects</h2>
            </div>
            <div className='pentagon'>
              <h2>Contact</h2>
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
  /* background-color: #18181b; */
  background-color: #dbdbdb;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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
    right: 200px;
    top: 230px;
    border-radius: 20px;
  }

  div {
    display: flex;
    flex-direction: column;

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
      background-color: #51d0f0;
    }

    .triangle {
      border-radius: 50%;
      background-color: #ed6a61;
    }

    .square {
      border-radius: 50%;
      background-color: #30e389;
    }

    .pentagon {
      border-radius: 50%;
      background-color: #f0b851;
    }
  }
`;

export default Home;
