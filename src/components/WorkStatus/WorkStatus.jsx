import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Available = styled.span`
  a {
    color: #85d0a1;

    &:after {
      border-bottom-color: #43ac6a;
    }
    &:hover {
      color: #43ac6a;
    }
    &:hover {
      &:after {
        border-bottom-color: #43ac6a;
      }
    }
  }
`;
const Unavailable = styled.span`
  a {
    color: #f79483;

    &:after {
      border-bottom-color: #f04124;
    }
    &:hover {
      color: #f04124;
    }
    &:hover {
      &:after {
        border-bottom-color: #f04124;
      }
    }
  }
`;

const WorkStatus = ({ availability }) => {
  if (availability === true) {
    return (
      <Available>
        <Link to="/why-me" data-theme-change="home">
          available for freelance opportunities
        </Link>
      </Available>
    );
  }
  return (
    <Unavailable>
      <Link to="/why-me" data-theme-change="home">
        unavailable for freelance opportunities
      </Link>
    </Unavailable>
  );
};

export default WorkStatus;
