import React, { useState } from "react";
import styled from "styled-components";

function Cards(props) {
  // const [hidden, setHidden] = useState(state);

  return (
    <Container>
      <Wrap href={props.link1} target='_blank' rel='noopener noreferrer'>
        <img className={props.class1} src={props.image1} alt='' />
        <span>{props.class1}</span>
      </Wrap>
      <Wrap
        href={props.link2}
        target='_blank'
        rel='noopener noreferrer'
        className={props.class3}
      >
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

  .na {
    display: none;
  }
`;

const Wrap = styled.a`
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
  text-decoration: none;

  img {
    object-fit: contain;
    width: 200px;
  }

  /* Clones */
  .Amazon {
    transform: scale(1.1);
    margin-top: 7px;
    margin-bottom: 8px;
  }

  .Disney {
    transform: scale(1.15);
    margin-top: 10px;
    margin-bottom: 11px;
  }

  .Netflix {
    transform: scale(1.3);
    margin-top: 15px;
    margin-bottom: 22px;
  }

  .Yelp-WIP {
    transform: scale(1.3);
    margin-top: 13px;
    margin-bottom: 22px;
  }

  /* Games */
  .Pacman {
    object-fit: contain;
    width: 200px;
    transform: scale(1.01);
    margin-top: -84px;
  }

  .Chess {
    transform: scale(1.05);
    margin-bottom: 3px;
  }

  .Tic-Tac-Toe {
    object-fit: contain;
    width: 200px;
    max-height: 180px;
    transform: scale(1.11);
    margin-top: -8px;
    margin-bottom: 12px;
  }

  .Speed-Typing {
    transform: scale(1.11);
    margin-bottom: 10px;
  }

  /* E-Commerce */
  .E-Commerce {
    transform: scale(1.35);
    margin-top: 21px;
    margin-bottom: 24px;
  }

  /* Misc */
  .Travel {
    transform: scale(1.3);
    margin-top: 21px;
    margin-bottom: 20px;
  }

  .Discord-Music-Bot {
    transform: scale(1.38);
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .Chat-App {
    transform: scale(1);
    margin-top: -35px;
    margin-bottom: 0px;
  }

  .Python-Music {
    transform: scale(1.16);
    margin-top: 12px;
    margin-bottom: 15px;
  }

  .Calculator {
    transform: scale(1.3);
    margin-top: 20px;
    margin-bottom: 22px;
  }

  .Task-Tracker {
    transform: scale(1.2);
    margin-top: 15px;
    margin-bottom: 20px;
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
