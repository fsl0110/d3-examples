import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Text } from "..";
import { StyledLegendsG } from "./styles";
import { Dimensions } from "../types";

export interface LegendProps extends SVGAttributes<SVGGElement> {
  /** Pass Items to show in Legend. */
  items: string[];

  /** Pass Dimensions for calculations. */
  dim: Dimensions;

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

  /** Childrens are not allowed */
  children?: never;
}

export const Legend: FC<LegendProps> = ({ items, className }) => {
  return (
    <StyledLegendsG transform={`translate(${20}, ${250})`}>
      <foreignObject className="foreign">
        <div className="legends">
          {items.map((item: any, i: number) => (
            <div className="legend" key={i}>
              <div className="legend__decorator" />
              <div className="legend__text">{item}</div>
            </div>
          ))}
        </div>
      </foreignObject>

      {/*       {items.map((item: any, i: number) => (
        <g className="legend" key={i} transform={`translate(${0}, ${0})`}>
          <circle radius={5} fill="red" />
          <Text>{item}</Text>
        </g>
      ))} */}
    </StyledLegendsG>
  );
};
