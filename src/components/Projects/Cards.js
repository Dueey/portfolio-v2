import React, { useState } from "react";
import styled from "styled-components";

function Cards(props) {
  // const [hidden, setHidden] = useState(state);

  return (
    <Container>
      <Wrap>
        <img className={props.class1} src={props.image1} alt='' />
        <span>{props.class1}</span>
      </Wrap>
      <Wrap>
        <img className={props.class2} src={props.image2} alt='' />
        <span>{props.class2}</span>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 250px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  max-height: 220px;
  min-width: 200px;
  cursor: pointer;
  background-color: grey;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 200px;
  }

  .Pacman {
    object-fit: contain;
    width: 200px;
    transform: scale(1.01);
    margin-top: -84px;
  }

  .Tic-Tac-Toe {
    object-fit: contain;
    width: 200px;
    max-height: 180px;
    transform: scale(1.11);
    margin-top: -8px;

    margin-bottom: 10px;
  }

  .Speed-Typing {
    transform: scale(1.11);
    margin-bottom: 10px;
  }

  span {
    padding: 5px;
    color: white;
    letter-spacing: 1.5px;
  }

  :hover {
    span {
      color: #30e389;
    }

    img {
      filter: brightness(0.8);
    }

    /* background-color: #003d13; */
  }
`;

export default Cards;
