import React from "react";
import styled from "styled-components";
import { Home, Person, Computer, Message } from "@material-ui/icons";

function Header() {
  return (
    <Nav>
      <NavMenu>
        <div>
          <a href='/' className='home'>
            <Home className='icon' />
            <span>HOME</span>
          </a>
        </div>
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
    </Nav>
  );
}

const Nav = styled.div`
  background: #29292c;
  /* background-color: #090b13; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
`;

const NavMenu = styled.div`
  display: flex;

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
`;

export default Header;
