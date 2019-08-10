import styled from "styled-components";

export interface StyleProps {}

export const StyledDiv = styled.div<StyleProps>`
  display: flex;
  flex-direction: column; /* column when vertical otherwise default */
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 100%;
`;
