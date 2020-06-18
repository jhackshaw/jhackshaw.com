import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "../theme";
import { Footer, Navbar } from ".";

const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 350ms ease 0s;
    padding: 0;
    margin: 0;
    background-color: var(--background-main);
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box !important;
  }
`;

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <StyledLayout>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};
