import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import H3 from "../../components/H3/H3";
import Picture from "../../components/Picture/Picture";
import { Box } from "../../components/Grid/Grid";

const ThumbBox = styled.div`
  position: relative;
  overflow: hidden;
  .overlay {
    position: absolute;
    width: 100%;
    height: 30%;
    background: rgba(25, 133, 161, 0.75);
    color: #dcdcdd;
    padding: 3vh 3vw;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    display: grid;
    align-items: center;
    a {
      color: #dcdcdd;
      &:after {
        border-color: #dcdcdd;
      }
    }
  }
  @media (hover: hover) {
    .overlay {
      opacity: 0;
      height: 100%;
      transform: scale(1.2);
      transition: opacity cubic-bezier(0.68, 0, 0.265, 1) 0.3333333333s,
        -webkit-transform cubic-bezier(0.68, 0, 0.265, 1) 0.3333333333s;
      &:hover {
        opacity: 1;
        transform: scale(1);
        a {
          color: #dcdcdd;
          &:after {
            border-color: #dcdcdd;
          }
        }
      }
    }
  }
`;

const WorkThumb = props => (
  <Box sm="12" md="6" lg="6" xl="6" xxl="6">
    <ThumbBox>
      <Link to={props.link} data-theme-change="work">
        <Picture images={props.images} title={props.name} />
      </Link>
      <section className="overlay align-center sm-text-align-center">
        <Box sm="12">
          <H3 className="mt-0 mb-0">
            <Link to={props.link} data-theme-change="work">
              {props.name}
            </Link>
          </H3>
        </Box>
      </section>
    </ThumbBox>
  </Box>
);

export default WorkThumb;
