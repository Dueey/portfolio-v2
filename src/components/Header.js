import React from "react";
import styled from "styled-components";
import { Home, Person, Computer, Message } from "@material-ui/icons";

function Header() {
  return (
    <Nav>
      <NavMenu>
        <a href='/'>
          <Home className='icon' />
          <span>HOME</span>
        </a>
        <a href='/about'>
          <Person className='icon' />
          <span>ABOUT ME</span>
        </a>
        <a href='/projects'>
          <Computer className='icon' />
          <span>PROJECTS</span>
        </a>
        <a href='/contact'>
          <Message className='icon' />
          <span>CONTACT</span>
        </a>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #090b13;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

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
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    :hover {
      border-bottom: 2px solid #fff;
    }
  }
`;

export default Header;
