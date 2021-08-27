import React, { useState } from "react";
import styled from "styled-components";

function Cards(state) {
  // const [hidden, setHidden] = useState(state);

  return (
    <Container>
      <Wrap>
        <img src='/images/tetris.png' alt='' />
        <span>Tetris</span>
      </Wrap>
      <Wrap>
        <img src='/images/tetris.png' alt='' />
        <span>Tetris</span>
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

  img {
    object-fit: contain;
    width: 200px;
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
      filter: brightness(1.5);
    }

    background-color: #003d13;
  }
`;

export default Cards;
