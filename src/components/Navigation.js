import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  padding: 1em;
  background-color: #f5f4f0;

  @media (max-width: 700px) {
    padding: 6.4rem;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% -6.4rem);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const listItemContainer = {
  display: "grid",
  gridTemplateColumns: "2rem auto",
};

const iconStyle = {
  margin: "0 auto",
};

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/" style={listItemContainer}>
            <span aria-hidden="true" role="img" style={iconStyle}>
              &#127968; &nbsp;
            </span>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/mynotes" style={listItemContainer}>
            {" "}
            <span aria-hidden="true" role="img" style={iconStyle}>
              &#128466; &nbsp;
            </span>
            My Notes
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/favorites" style={listItemContainer}>
            {" "}
            <span aria-hidden="true" role="img" style={iconStyle}>
              &#128155; &nbsp;
            </span>
            Favorites
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navigation;
