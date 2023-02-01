import styled from "styled-components";

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding-block: 3rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns:
    minmax(min-content, 3vw) min-content 1fr
    minmax(5rem, min-content) minmax(0, 1vw);

  &.home {
    grid-template-areas: ". sidebar main skills  skills";
  }
  grid-template-areas: ". sidebar main . .";

  column-gap: clamp(1rem, 1vw, 4rem);
  justify-content: space-evenly;

  & .sidebar {
    grid-area: sidebar;
    --gap: clamp(0.5em, 1em, 2em);

    & hr {
      border-color: hsl(var(--clr-secondary), 0.5);
      color: hsl(var(--clr-secondary), 0.5);
      background-color: hsl(var(--clr-secondary), 0.5);
    }
  }
  & main {
    height: 100%;
    grid-area: main;
    align-self: center;
    justify-content: center;
    overflow-y: scroll;
  }
  & .skills {
    align-self: end;
    grid-area: skills;
    --gap: 2rem;
    align-items: center;
  }

  & .contact-mobile,
  & .logo-wrapper-mobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns:
      minmax(min-content, 1vw) min-content 1fr
      min-content minmax(0, 0.5vw);
    &.home {
      grid-template-areas:
        ". sidebar main main  main"
        ". sidebar skills skills .";
    }
    row-gap: 2rem;
    & .skills {
      max-width: 100%;
      --gap: 1rem;
      justify-self: stretch;
    }
  }

  & .mobileNav {
    grid-area: mobile-nav;
    display: none;
  }

  & .btn--back-portfolio {
    border-radius: 8px;
    position: fixed;
    bottom: 1.5rem;
    z-index: 1000;
    left: 3rem;
    opacity: 0.2;
    background-color: red;
    align-items: center;
    padding: 0.5rem 1rem;
    transition: all 0.2s;

    &:hover,
    &:focus {
      opacity: 1;
      box-shadow: 0 2px 15px hsl(var(--clr-white), 0.3);
    }
  }

  @media screen and (max-width: 600px) {
    height: 100%;
    & .mobileNav {
      display: block;
    }
    grid-template-areas:
      ". mobile-nav mobile-nav . . "
      ". main main main  main";
    grid-auto-rows: min-content;
    & main {
      min-height: 85vh;
      /* height: 100%; */
    }
    &.home {
      grid-template-areas:
        ". mobile-nav mobile-nav . . "
        ". main main main  main"
        ". skills skills skills .";
    }
    & .sidebar {
      display: none;
    }

    & .logo-wrapper-mobile {
      display: block;
      position: fixed;
      opacity: 0.03;

      transition: all 0.3s;
      right: 0;
      bottom: 3rem;

      &:hover,
      &:focus {
        opacity: 1;
        background-color: hsla(var(--clr-primary), 1);
      }
    }
    & .contact-mobile {
      display: block;
      position: fixed;
      bottom: 3rem;
      padding: 1rem;
      z-index: 10000;
      opacity: 0.2;
      transform: translateX(-70%);
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: all 0.3s linear;
      &::after {
        content: "";
        display: inline-block;
        position: relative;
        width: 5rem;
        aspect-ratio: 1;
        background-color: red;
        border-radius: 50%;
        margin-left: 3rem;
      }
      &:hover,
      &:focus {
        background-color: hsla(var(--clr-primary));
        opacity: 1;
        transform: translateX(0);

        &::after {
          opacity: 0;
        }
      }
    }
  }
`;

export default LayoutWrapper;
