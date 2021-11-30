import React, { useState } from "react";
import styled from "styled-components";
import { Home, Person, Computer, Message, Dehaze } from "@material-ui/icons";

function Header() {
  const [dropdown, setDropdown] = useState("hidden");

  function handleClick() {
    if (dropdown === "hidden") {
      setDropdown("show");
    } else {
      setDropdown("hidden");
    }
  }

  return (
    <Nav className='headerHeight'>
      <NavMenu className={dropdown}>
        <a href='/' className='home'>
          <Home className='icon' />
          <span>HOME</span>
        </a>
        <a href='/about' className='about'>
          <Person className='icon' />
          <span>ABOUT ME</span>
        </a>
        <a href='/projects' className='projects'>
          <Computer className='icon' />
          <span>PROJECTS</span>
        </a>
        <a href='/contact' className='contact'>
          <Message className='icon' />
          <span>CONTACT</span>
        </a>
      </NavMenu>
      <Dehaze className='dropdown' onClick={handleClick} />
    </Nav>
  );
}

const Nav = styled.div`
  background: #29292c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;

  .dropdown {
    display: none;
  }

  @media (max-width: 768px) and (min-width: 426px) {
    height: 10vh;

    .dropdown {
      display: flex;
      color: white;
      font-size: 100px;
      position: absolute;
      right: 10vw;
      cursor: pointer;
    }

    .hidden {
      height: 0vw;
      font-size: 60px;
      margin-top: -50vh;

      a {
        display: none;
      }
    }

    .show {
      display: flex;
      font-size: 60px;
      margin-top: 35vh;
      height: 60vw;
      transition: 0.1s ease-in;

      a {
        padding-top: 10px;
        padding-bottom: 40px;
        width: 100vw;
      }

      .icon {
        font-size: 60px;
      }
    }
  }

  @media (max-width: 425px) {
    height: 6vh;

    .dropdown {
      display: flex;
      color: white;
      font-size: 60px;
      position: absolute;
      right: 10vw;
      cursor: pointer;
    }

    .hidden {
      height: 0vw;
      font-size: 25px;
      margin-top: -50vh;

      a {
        display: none;
      }
    }

    .show {
      display: flex;
      font-size: 25px;
      margin-top: 18vh;
      margin-left: -3vw;
      height: 60vw;
      transition: 0.1s ease-in;

      a {
        padding-top: 10px;
        padding-bottom: 40px;
        width: 100vw;
      }

      .icon {
        font-size: 30px;
      }
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  a {
    position: relative;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 15px 10px 15px 0px;
    border: 1px solid transparent;
    width: 180px;
    justify-content: center;
    background: #29292c;
    margin-top: -2px;

    :hover {
      top: 1px;
      z-index: 2;
    }
  }

  .home:hover {
    color: #51d0f0;
    border: 1px solid #51d0f0;
  }

  .about:hover {
    color: #ed6a61;
    border: 1px solid #ed6a61;
  }

  .projects:hover {
    color: #30e389;
    border: 1px solid #30e389;
  }

  .contact:hover {
    color: #f0b851;
    border: 1px solid #f0b851;
  }

  /* a:nth-child(1) {
    border-left: 2px solid white;
  }

  a:nth-child(4) {
    border-right: 2px solid white;
  } */

  .icon {
    margin-bottom: -3px;
    padding: 0 7px;
    font-size: 20px;
  }

  span {
    letter-spacing: 1.5px;
    white-space: nowrap;
    padding-bottom: 6px;
    margin-bottom: -9px;
    border-bottom: 2px solid transparent;
    border-radius: 0px 0px 2px 2px;
    /* transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; */

    :hover {
      /* border-bottom: 2px solid #fff; */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Header;
