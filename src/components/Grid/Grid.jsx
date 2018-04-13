import styled from 'styled-components';

const bpSm = '0rem';
const bpMd = '40rem';
const bpLg = '64rem';
const bpXl = '75rem';
const bpXxl = '90rem';

const Container = styled.main`
  display: flex;
  display: grid;
  position: relative;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: ${bpXxl}) {
    .container {
      width: ${bpXxl};
    }
  }
  &:nth-child(1) {
    padding-top: 0;
  }

  &.no-gap {
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
  &.align-top {
    align-items: flex-start;
  }
  &.align-center {
    align-items: center;
  }
  &.align-bottom {
    align-items: flex-end;
  }
  &.align-self-bottom {
    align-self: flex-end;
  }
`;

/**
 * TODO: Must be a way of looping through something to make this much nicer
 */
const Box = styled.div`
  @supports not (display: grid) {
    padding: 10px;
    box-sizing: border-box;
  }

  @media screen and (min-width: ${bpSm}) {
    @supports not (display: grid) {
      width: calc(100% * (${props => (props.sm ? props.sm : 0)} / 12));
    }
    
    @supports (display: grid) {
      grid-column: span ${props => (props.sm ? props.sm : 0)};
    }
  }

  @media screen and (min-width: ${bpMd}) {
    @supports not (display: grid) {
      width: calc(100% * (${props => (props.md ? props.md : 0)} / 12));
    
    @supports (display: grid) {
      grid-column: span ${props => (props.md ? props.md : 0)};
    }
    
  }
  @media screen and (min-width: ${bpLg}) {
    @supports not (display: grid) {
      width: calc(100% * (${props => (props.lg ? props.lg : 0)} / 12));
    }

    @supports (display: grid) {
      grid-column: span ${props => (props.lg ? props.lg : 0)};
    }
    
  }
  @media screen and (min-width: ${bpXl}) {
    @supports not (display: grid) {
      width: calc(100% * (${props => (props.xl ? props.xl : 0)} / 12));
    }
    
    @supports (display: grid) {
      grid-column: span ${props => (props.xl ? props.xl : 0)};
    }
    
  }
  @media screen and (min-width: ${bpXxl}) {
    @supports not (display: grid) {
      width: calc(100% * (${props => (props.xxl ? props.xxl : 0)} / 12));
    }

    @supports (display: grid) {
      grid-column: span ${props => (props.xxl ? props.xxl : 0)};
    }
    
  }
`;

export { Container, Box };
