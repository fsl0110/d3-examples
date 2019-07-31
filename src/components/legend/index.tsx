import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { StyledLegendsG } from "./styles";
import { SharedProps } from "../types";

export interface LegendProps extends SharedProps, SVGAttributes<SVGGElement> {
  /** Pass Items to show in Legend. */
  items: string[];

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
        <div className={classNames("legends", className)}>
          {items.map((item: any, i: number) => (
            <div className="legend" key={i}>
              <div className="legend__decorator" />
              <div className="legend__text">{item}</div>
            </div>
          ))}
        </div>
      </foreignObject>
    </StyledLegendsG>
  );
};
