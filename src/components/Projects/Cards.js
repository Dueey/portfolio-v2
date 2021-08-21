import React from "react";
import styled from "styled-components";

function Cards() {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <img src='/images/tetris.png' alt='' />
          <span>Tetris</span>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px;
  z-index: 2;
`;

const Wrapper = styled.div``;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  max-height: 200px;
  min-width: 200px;

  img {
    object-fit: contain;
    width: 200px;
  }

  span {
    padding: 5px;
    color: white;
    letter-spacing: 1.5px;
  }
`;

export default Cards;
