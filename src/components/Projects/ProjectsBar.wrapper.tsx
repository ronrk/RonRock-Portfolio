import styled from "styled-components";

const ProjectsBarWrapper = styled.nav`
  margin-bottom: 5rem;
  & ul {
    /* --gap: 5rem; */
    justify-content: center;

    & li {
      & button {
        transition: all 0.1s ease-out;
      }

      &.active {
        color: hsl(var(--clr-white));
        & button {
          text-shadow: 0 0px 4px hsla(var(--clr-white), 1);
          letter-spacing: 1.3px;
        }
      }
      &:hover,
      &:focus {
        & button {
          text-shadow: 0px 2px 8px hsla(var(--clr-gray), 1);
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    & ul {
      justify-content: space-evenly;
    }
  }
`;

export default ProjectsBarWrapper;
