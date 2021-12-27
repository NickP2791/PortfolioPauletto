import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 100%; */
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export default Layout;
