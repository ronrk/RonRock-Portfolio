import styled from "styled-components";

const FeaturedProjectsWrapper = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  align-items: stretch;

  gap: 1rem 3rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export default FeaturedProjectsWrapper;
