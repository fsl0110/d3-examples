import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";

export interface Props extends SVGAttributes<SVGGElement> {
  /** Pass Data for calculations. */
  data: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales: any; // TODO: Replace by generic

  /** No Childrens allowed */
  children?: never;
}

export type ValuesProps = Props;

export const Values: FC<ValuesProps> = ({ data, scales, className }) => {
  return (
    <g className={classNames("values", className)}>
      {data.map((item: any, i: number) => (
        <text
          className="value"
          key={i}
          x={scales.x(item[0])}
          y={scales.y(item[1]) - 15}
          text-anchor="middle"
        >
          {item[1]}
        </text>
      ))}
    </g>
  );
};
