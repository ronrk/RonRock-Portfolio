import styled from "styled-components";

const SingleProjectItemWrapper = styled.article`
  justify-content: center;
  margin-block: 4rem;
  &:nth-child(1) {
    margin: 0;
    margin-bottom: 3rem;
  }
  & .content {
    --gap: 1rem;
    flex-grow: 0;
    & p {
      max-width: 55ch;
      line-height: 1.7;
    }
  }

  &:nth-child(odd) {
    & .content {
      order: 2;
      flex-grow: 0.5;
    }
    & .image-wrapper {
      flex-grow: 0;
      & .links {
        justify-self: start;
      }
    }
  }
  & .image-wrapper {
    box-shadow: 0 10px 15px hsla(var(--clr-primary-light), 0.1);
    position: relative;
    aspect-ratio: 2;
    width: 45%;
    min-width: 550px;
    display: grid;

    & img {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      object-fit: cover;
    }
    & .links {
      --gap: 0rem;
      width: fit-content;
      align-self: end;
      justify-self: end;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      z-index: 100;
      background-color: hsl(var(--clr-secondary));
      border-top: 1px solid hsl(var(--clr-primary-light));
      border-right: 1px solid hsl(var(--clr-primary-light));
      mix-blend-mode: luminosity;

      & hr {
        border-color: hsla(var(--clr-gray), 0.5);
      }
      & li {
        padding: 1rem;
        transition: all 0.2s;
        & a {
          height: 100%;
        }

        &:hover,
        &:focus {
          background-color: hsl(var(--clr-white));
          color: hsl(var(--clr-primary));
          font-weight: 700;
          box-shadow: 0 0 15px hsl(var(--clr-white));
        }
      }
    }
  }

  & .technologies {
    justify-content: center;
    flex-wrap: wrap;

    & .tech__box {
      align-items: center;
      --gap: 0.5rem;

      & .icon {
        max-width: 35px;
        &.next {
          fill: hsl(var(--clr-white));
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid hsl(var(--clr-primary-light));
    padding-bottom: 3rem;

    & .content {
      order: 2;
      flex-grow: 0.5;
    }
    & .image-wrapper {
      min-width: 350px;
      flex-grow: 0;
      & .links {
        justify-self: start;
      }
    }
  }
`;

export default SingleProjectItemWrapper;
