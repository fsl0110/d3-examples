import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Data } from "../types";

export interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Data for calculations. */
  data?: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales?: any; // TODO: Replace by generic

  /** Pass Dimensions for calculations. */
  dim?: any; // TODO: Replace by generic

  /** No Childrens allowed */
  children?: never;
}

export type ValuesProps = Props;

export const Values: FC<ValuesProps> = ({ data, scales, className }) => (
  <g className={classNames("values", className)}>
    {data.map((item: Data, i: number) => {
      return (
        <text
          className="value"
          key={i}
          x={scales.x(item[0])}
          y={scales.y(item[1]) - 15}
          textAnchor="middle"
          fill="blue"
        >
          {item[1]}
        </text>
      );
    })}
  </g>
);
