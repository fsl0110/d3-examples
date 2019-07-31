import React, { FC, SVGAttributes, ReactNode } from "react";
import classNames from "classnames";
import { StyledDiv } from "./styles";
import { SharedProps } from "../types";

export interface LegendsProps extends SharedProps, SVGAttributes<SVGGElement> {
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

  children?: ReactNode | ReactNode[];
}

export const Legends: FC<LegendsProps> = ({ className, children }) => {
  return (
    <g transform={`translate(${20}, ${250})`}>
      <foreignObject>
        <StyledDiv className={classNames("legends", className)}>
          {children}
        </StyledDiv>
      </foreignObject>
    </g>
  );
};
