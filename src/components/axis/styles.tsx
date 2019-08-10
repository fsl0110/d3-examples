import styled from "styled-components";

export interface StyleProps {
  /** Define an axis color.
   * @default undefined
   */
  axisColor?: string;

  /** Define an axis style.
   * @default undefined
   */
  axisStyle?: string;

  /** Define an axis width.
   * @default undefined
   */
  axisWidth?: string;

  /** Define a tick color.
   * @default undefined
   */
  tickColor?: string;

  /** Define a tick style.
   * @default undefined
   */
  tickStyle?: string;

  /** Define a tick width.
   * @default undefined
   */
  tickWidth?: number;

  /** Define a tick text color.
   * @default undefined
   */
  tickTextColor?: string;

  /** Define a tick text size.
   * @default undefined
   */
  tickTextSize?: number;

  /** Define a tick text family.
   * @default undefined
   */
  tickTextFamily?: string;
}

export const StyledAxisG = styled.g<StyleProps>`
  /* axis line */
  .domain {
    stroke: ${(props) => props.axisColor};
    stroke-dasharray: ${(props) => props.axisStyle};
    stroke-width: ${(props) => props.axisWidth};
  }

  .tick {
    /* tick text color */
    text {
      stroke: ${(props) => props.tickTextColor};
      font-size: ${(props) => props.tickTextSize}px;
      font-family: ${(props) => props.tickTextFamily};
    }

    /* tick line color */
    line {
      stroke: ${(props) => props.tickColor};
      stroke-dasharray: ${(props) => props.tickStyle};
      stroke-width: ${(props) => props.tickWidth};
    }
  }
`;
