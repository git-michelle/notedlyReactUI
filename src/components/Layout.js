import React, { Fragment } from "react";
import styled from "styled-components";

import Header from "./Header";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  @media (min-width: 680px) {
    display: flex;
    top: 6.4rem;
    position: relative;
    height: calc(100% -6.4rem);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;
const Main = styled.main`
  position: fixed;
  height: calc(100% - 18.5rem);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 22rem;
    height: calc(100% - 6.4rem);
    width: calc(100% - 22rem);
  }
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </Fragment>
  );
};

export default Layout;
