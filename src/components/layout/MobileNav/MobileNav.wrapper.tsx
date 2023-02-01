import styled from "styled-components";

const MobileNavWrapper = styled.nav`
  & li {
    transition: all 0.3s;
    letter-spacing: 1.2px;
    margin-block: 0.5em;
    &.active {
      text-shadow: 0 0 20px hsla(var(--clr-white), 0.5);
      color: hsl(var(--clr-white));
      font-weight: 700;
    }
  }
`;

export default MobileNavWrapper;
