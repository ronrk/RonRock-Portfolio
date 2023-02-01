import styled from "styled-components";

const AboutTechnologiesWrapper = styled.section`
  padding-bottom: 2rem;

  & .tecnologiesSlider {
    display: flex;
    position: relative;
    overflow-x: hidden;

    & .tecnologiesSlider__innerWrapper {
      padding: 1rem;
      display: flex;
      align-items: stretch;
      max-height: 180px;
      min-height: 100%;
      transition: all 0.66s ease-in-out;
    }
    & .tecnologiesSlider__box {
      border-radius: 100px;
      border: 4px solid hsl(var(--clr-primary), 1);
      background: linear-gradient(
        hsla(var(--clr-white), 0.8),
        hsla(var(--clr-gray), 0.8)
      );
      background-repeat: no-repeat;
      box-shadow: 1px 1px 7px hsla(var(--clr-white), 0.43);

      aspect-ratio: 1;
      padding: 0.5em;
      width: 20vw;
      min-width: 150px;
      max-width: 30%;

      align-items: center;
      justify-content: center;

      & .icon {
        min-width: 50px;
        width: 50%;
        mix-blend-mode: overlay;
      }
    }
  }

  & .slider-btns {
    justify-content: center;

    & button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      &:hover,
      &:focus {
        color: hsl(var(--clr-white));
      }
    }
  }
`;

export default AboutTechnologiesWrapper;
