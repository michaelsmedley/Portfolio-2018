import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import logoLight from './logoLight.svg';

const LogoBox = styled.div`
  display: inline-grid;

  img {
    width: 51px;
    height: 21px;
  }

  path {
    fill: #46494c;
    animation: colorFill 30s infinite;
    transition: fill cubic-bezier(0.68, 0, 0.265, 1) 0.25s;
  }

  a {
    display: inherit;
    padding: 25px 10px;

    &:after {
      display: none;
    }

    &:hover {
      background: #46494c;
      -webkit-animation: none;
      animation: none;

      path {
        fill: #dcdcdd;
        -webkit-animation: none;
        animation: none;
      }
    }
  }

  @keyframes colorBG {
    0% {
      background: #46494c;
    }
    33% {
      background: #4c5c68;
    }
    66% {
      background: #1985a1;
    }
    100% {
      background: #46494c;
    }
  }
  @keyframes colorFill {
    0% {
      fill: #46494c;
    }
    33% {
      fill: #4c5c68;
    }
    66% {
      fill: #1985a1;
    }
    100% {
      fill: #46494c;
    }
  }
`;

const Logo = (props) => (
  <LogoBox className="logo">
    <Link to="/" data-theme-change="home">
      <img src={props.theme === "dark" ? logoLight : logo} alt="michael-smedley.co.uk" width="51" height="21" />
    </Link>
  </LogoBox>
);

export default Logo;
