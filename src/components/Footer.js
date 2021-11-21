import React from "react";
import styled from "styled-components";

function Footer() {
  const time = new Date().getFullYear();

  return (
    <Container>
      <Wrapper>
        <h2>Doing my best to keep improving :3</h2>
        <p>Created by Duy Kim © {time}</p>
        <p>Made with ReactJS</p>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 30vh;
  background-color: #29292c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
  }

  p {
    color: white;
  }
`;

export default Footer;
