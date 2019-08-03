import React, { FC, SVGAttributes, ReactNode, useReducer } from "react";
import classNames from "classnames";
import { useStore } from "../../hooks";
import { StyledDiv } from "./styles";

export interface LegendsProps extends SVGAttributes<SVGGElement> {
  /** Define the position of the legend. */
  position?: "top" | "left" | "bottom" | "right";

  /** Wether the legend content should appera inline or vertical.
   * @default undefined
   */
  align?: "horizontal" | "vertical";

  /** Wether the legend width should be limited. E.g in combination with align vertical.
   * @default 100%
   */
  width?: number;

  children: ReactNode | ReactNode[];
}

export const Legends: FC<LegendsProps> = ({ className, children, ...rest }) => {
  const {
    state: { dimension }
  } = useStore();

  return (
    <g transform={`translate(${0}, ${dimension.height})`} {...rest}>
      <foreignObject>
        <StyledDiv className={classNames("legends", className)}>
          {children}
        </StyledDiv>
      </foreignObject>
    </g>
  );
};
