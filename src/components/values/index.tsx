import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Data } from "../../store";
import { useStore } from "../../hooks";

interface ValuesProps extends SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export const Values: FC<ValuesProps> = ({ className }) => {
  const {
    state: { data, scale }
  } = useStore();

  return (
    <g className={classNames("values", className)}>
      {data.map((item: Data, i: number) => {
        return (
          <text
            className="value"
            key={i}
            x={scale.x(item[0])}
            y={scale.y(item[1]) - 15}
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
