import styled from "styled-components";

const SidebarWrapper = styled.nav`
  justify-content: space-between;
  --gap: 1rem;

  & .logo-wrapper,
  & .contact {
    display: block;
  }

  & .logo {
    width: 15vw;
    min-width: 150px;
    max-width: 250px;
    aspect-ratio: 3;
    margin-bottom: 0.5em;
  }

  & .my-info {
    display: flex;
    letter-spacing: 1.3px;
    flex-direction: column;
    gap: 0.7em;
    margin-bottom: 5rem;
    max-width: 25ch;
    margin-top: -1.5rem;
    line-height: 1.7;
    & p {
      letter-spacing: 1.4px;
      text-shadow: 0 2px 10px hsla(var(--clr-gray), 0.3);
    }
  }

  & .nav-list {
    flex-grow: 1;

    & li {
      transition: all 0.3s;
      letter-spacing: 1.2px;
      margin-block: 0.5em;
      &:hover,
      &:focus {
        color: hsl(var(--clr-white));
        font-weight: 500;
      }
      &.active {
        text-shadow: 0 0 20px hsla(var(--clr-white), 0.5);
        color: hsl(var(--clr-white));
        font-weight: 700;
      }
    }
  }
`;

export default SidebarWrapper;
