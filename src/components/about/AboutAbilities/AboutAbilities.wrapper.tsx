import styled from "styled-components";

const AboutAbilitiesWrappper = styled.section`
  --gap: 4.5rem;
  & .abilities {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-self: center;
    gap: 1.5em;
  }

  & .image-wrapper {
    align-self: center;
    position: relative;
    max-width: 60%;
    width: 500px;
    aspect-ratio: 1.5;
    background-color: hsla(var(--clr-secondary), 0.4);
    border-radius: 55px;
    overflow: hidden;
    & img {
      mix-blend-mode: exclusion;
    }
  }
`;

export default AboutAbilitiesWrappper;
