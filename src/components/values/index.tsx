import React, { FC, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { initialState, chartReducer, Data } from "../../store";

interface ValuesProps extends SVGAttributes<SVGGElement> {
  /** No Childrens allowed */
  children?: never;
}

export const Values: FC<ValuesProps> = ({ className }) => {
  const [store] = useReducer(chartReducer, initialState);

  return (
    <g className={classNames("values", className)}>
      {store.data.map((item: Data, i: number) => {
        return (
          <text
            className="value"
            key={i}
            x={store.scale.x(item[0])}
            y={store.scale.y(item[1]) - 15}
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
