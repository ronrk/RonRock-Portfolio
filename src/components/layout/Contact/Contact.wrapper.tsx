import styled from "styled-components";

const ContactWrapper = styled.section`
  --gap: 1em;

  & .contact-email {
    & a {
      transition: all 0.2s;
      filter: brightness(150%);
      &:hover,
      &:focus {
        color: hsl(var(--clr-gray));
      }
    }
  }
  & .social__links {
    align-items: center;
    justify-content: center;
    --gap: 2rem;
    margin-top: 1em;

    & a {
      position: relative;

      & .icon {
        z-index: 222;
        position: relative;
        width: 1.8vw;
        aspect-ratio: 1;
        min-width: 25px;

        &.git {
          path {
            fill: hsl(var(--clr-white));
          }
        }
      }
      &::after {
        z-index: 0;
        top: 0;
        left: 0;
        position: absolute;
        display: block;
        content: "";
        opacity: 0;
        width: 150%;
        height: 150%;
        transform: translate(-17%, -18%);
        border-radius: 50%;
        filter: brightness(150%) contrast(750%);
        background-color: hsla(var(--clr-secondary-light), 0.05);
        transition: all 0.2s;
        mix-blend-mode: screen;
      }
      &:hover,
      &:focus {
        &::after {
          opacity: 1;
          box-shadow: 0 3px 15px hsla(var(--clr-white), 0.1);
        }
      }
    }
  }
`;
export default ContactWrapper;
