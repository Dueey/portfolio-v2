import React from "react";
import styled from "styled-components";
import {
  CropPortrait,
  Casino,
  Storefront,
  MoreHoriz,
} from "@material-ui/icons";

function Projects() {
  return (
    <Container>
      <Wrapper>
        <Details>
          <div></div>
        </Details>
        <Wrap>
          <span>
            <CropPortrait className='icon-1' />
            <CropPortrait className='icon-2' />
            Clones
          </span>
          <span>
            <Casino className='dice' />
            Games
          </span>
          <span>
            <Storefront className='store' />
            E-Commerce
          </span>
          <span>
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
  /* margin-right: 0px; */
  z-index: 2;

  span {
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
      width: 220px;
      border-right: 1px solid #29292c;
    }

    ::active {
      width: 220px;
      border-right: 1px solid #29292c;
    }
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

  div {
    height: 60vh;
    width: 65vw;
    border: 1px solid #30e389;
    background-color: #29292c;
  }
`;

export default Projects;
