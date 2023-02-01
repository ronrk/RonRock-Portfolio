import styled from "styled-components";

const MySkillsWrapper = styled.div`
  max-width: 11vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 2rem));
  gap: 1em;
  justify-content: center;

  & .icon {
    height: 2vw;
    min-height: 25px;
    aspect-ratio: 1;

    &.next {
      fill: hsl(var(--clr-white));
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    & .icon {
      margin: 0;
    }
  }
`;

export default MySkillsWrapper;
