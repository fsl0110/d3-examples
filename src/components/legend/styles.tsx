import styled from "styled-components";

export interface StyleProps {}

export const StyledLegendsG = styled.g<StyleProps>`
  .foreign {
    width: 100%;
    height: 100%;
  }

  .legends {
    display: flex;
    flex-direction: column; /* column when vertical otherwise default*/
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
  }

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
