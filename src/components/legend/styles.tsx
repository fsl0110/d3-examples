import styled from "styled-components";

export interface StyleProps {}

export const StyledDiv = styled.div<StyleProps>`
  .legend {
    display: flex;
    align-items: center;
  }

  /* only when horizontal */
  .legend + .legend {
    margin-left: 1rem;
  }

  .legend__decorator {
    width: 10px;
    height: 10px;
    background-color: red;
    margin-right: 5px;
  }

  .legend__text {
  }
`;
