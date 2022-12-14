import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid grey;
  padding: 10px;
  nav {
    display: flex;
    justify-content: space-between;
  }
`;

const Nav = () => {
  return (
    <HeaderStyle>
      <nav>
        <Link to={"/"}>Gift David</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    </HeaderStyle>
  );
};

export default Nav;
