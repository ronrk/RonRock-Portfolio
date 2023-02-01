import styled from "styled-components";

const SingleFeaturedWrapper = styled.article`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border: 1px solid hsla(var(--clr-gray), 0.4);
  border-radius: 4px;
  display: grid;
  box-shadow: 0 5px 15px hsla(var(--clr-primary-light), 0.43);
  cursor: pointer;
  max-height: 300px;

  & .img-wrapper {
    position: relative;
    background-color: var(--clr-primary);
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
    & img {
      mix-blend-mode: screen;
      object-fit: cover;
    }
  }
  & .project-details {
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 2;
    transition: all 0.2s;
    & h3 {
      display: inline-block;
      opacity: 0.5;
      border-radius: 5px;
      padding: 0.5em;
    }
  }

  & .project-overlay {
    align-self: center;
    justify-self: center;
    text-align: center;
    --gap: 0.3rem;

    position: relative;
    grid-row: 1/2;
    grid-column: 1/2;
    width: fit-content;
    height: fit-content;
    padding: 1rem;

    opacity: 0;
    z-index: 5;

    transition: all 0.4s linear;
  }

  &:hover,
  &:focus {
    & .project-details {
      opacity: 0;
    }
    & .project-overlay {
      opacity: 1;

      color: hsl(var(--clr-white));
    }
    & .img-wrapper {
      & img {
        mix-blend-mode: overlay;
      }
    }
  }
`;

export default SingleFeaturedWrapper;
