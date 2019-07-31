import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Data, SharedProps } from "../types";

interface Props extends SharedProps, SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export type ValuesProps = Props;

export const Values: FC<ValuesProps> = ({ data, scales, dim, className }) => {
  if (!scales || !dim || !data) {
    return null;
  }

  return (
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
};
