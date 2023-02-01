import styled from "styled-components";

const AbilityWrapper = styled.article`
  --gap: 2rem;
  align-items: flex-start;
  padding-inline: 3em;

  & .box__header {
    flex-grow: 0.4;
    & .section-title {
      text-align: left;
    }
  }
  &:not(:last-child) {
    border-right: 3px solid hsla(var(--clr-primary-light), 0.3);
  }
  & .icon-wrapper {
    padding: 1rem 1.5rem;
    display: inline-block;
    background-color: hsla(var(--clr-white), 0.85);
    border-radius: 50%;
    border: 3px solid hsl(var(--clr-primary-light));
    mix-blend-mode: lighten;
  }

  & .languages {
    & li {
      margin-block: 1rem;
    }
  }
  @media screen and (max-width: 1224px) {
    &:nth-child(2) {
      border-right: 0;
    }
  }
  @media screen and (max-width: 910px) {
    &:nth-child(1) {
      border-right: 0;
    }
    padding: 0;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 3px solid hsl(var(--clr-primary-light));
    &:nth-child(3) {
      border: 0;
    }
  }
`;

export default AbilityWrapper;
