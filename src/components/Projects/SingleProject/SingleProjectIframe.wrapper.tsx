import styled from "styled-components";

const SingleProjectIframeWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;

  & .site-iframe {
    z-index: 10;
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: white;
  }

  & .logo-wrapper {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    justify-self: end;
    margin-right: 3rem;
    z-index: 20;
  }
`;

export default SingleProjectIframeWrapper;
