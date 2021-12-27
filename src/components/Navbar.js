import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";

import { Link } from "gatsby";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  // to: need to match the ids for each declared in Wrapper for each page component
  const menuitems = [
    { to: "#about", title: "About" },
    { to: "#skills", title: "Skills" },
    { to: "#works", title: "Works" },
    { to: "/#contact", title: "Contact me" },
  ];

  return (
    <Wrapper>
      <Link to='#top'>
        <StaticImage
          className='nav__logo'
          src='../images/NPlogo.png'
          alt='logo'
          height={30}
          placeholder='none'
          backgroundColor='#012446'
          // layout='fixed'
        />
      </Link>

      <button className='nav__btn' onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <GiCancel style={{ fontSize: "2rem" }} />
        ) : (
          <CgMenu style={{ fontSize: "2rem" }} />
        )}
      </button>
      <div className={showMenu ? "nav__menu menu__show" : "nav__menu"}>
        {menuitems.map((item) => {
          return (
            <Link
              key={item.title}
              to={item.to}
              className='menulink'
              activeClassName='activeLink'
              activeStyle={{ color: "red" }}
              title={item.title}
              onClick={() => setShowMenu(false)}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  /* navbar styling */

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background-color: var(--dark);
  top: 0;
  /* left: 0;
  right: 0; */
  width: 100%;
  height: 8vh;
  z-index: 10;
  padding: 0 1rem;

  .activeLink {
    color: red;
    background: var(--light);
  }

  .nav__logo {
    flex: 1 1 50px;
    margin: 1rem;
  }

  .nav__btn {
    display: none;
  }

  .nav__menu {
    display: flex;
    flex-direction: row;
    z-index: 8;
  }

  .menulink {
    font-family: var(--robo);
    font-size: calc(1vw + 0.6rem);
    color: var(--light);
    margin: 0 0.8em;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }

  .menulink:after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0.2rem;
    right: 0.2rem;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    transition: var(--transition);
  }

  .menulink:hover:after {
    transform: scaleX(1);
  }

  @media screen and (max-width: 600px) {
    .nav__menu {
      flex-direction: column;
      justify-content: center;
      position: absolute;
      right: -100%;
      top: 8vh;
      background: var(--light);
      width: min(430px, 100%);
      transition: all 0.6s ease-out;
    }

    .menu__show {
      right: 0;
      height: auto;
    }

    .menulink {
      color: var(--dark);
      border: 2px solid var(--dark);
      border-radius: 3rem;
      font-size: calc(2rem - 1vw);
      line-height: 4rem;
      margin: 0.5rem 0.4rem;
      text-align: center;
    }

    .menulink:after {
      bottom: 0;
      left: 0;
      right: 0;
      height: 4rem;
      border-radius: 3rem;
      background: yellow;
      color: black;
      z-index: -1;
    }

    .nav__btn {
      display: block;
      color: var(--light);
      background: var(--dark);
      border: none;
    }
  }
`;
