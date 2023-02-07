import styled from "styled-components";

const AboutHeroWrapper = styled.header`
  align-items: center;

  & .content {
    & .flex {
      align-items: center;
      justify-content: center;
    }
    & p {
      text-align: center;
      line-height: 1.8;
      margin-block: 2rem;
    }
  }

  & .image_wrapper {
    position: relative;
    width: 100%;
    max-width: 125px;
    aspect-ratio: 1;
  }
  @media screen and (max-width: 800px) {
    & .content {
      & h2 {
        color: hsl(var(--clr-white));
      }
      & p {
        /* color: hsl(var(--clr-gray)); */
      }
    }
  }
`;

export default AboutHeroWrapper;
