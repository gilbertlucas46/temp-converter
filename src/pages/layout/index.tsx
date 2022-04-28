import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
    --maxWidth: 1280px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  html, body {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: var(--black);
    &:hover {
      text-decoration: underline;
    }
  }
  main {
    .container {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      margin: auto;

      @media (min-width: 576px) {
        max-width: 540px;
        padding: 0 15px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    }
  }
`

type Props = {
    children: any,
};

const Main = styled.main``;

const Layout = ({ children }: Props) => {
    return (
      <Main>
        <GlobalStyle theme="" />
        {/*Header*/}

        {children}

        {/*Footer*/}
      </Main>
    )
}

export default Layout