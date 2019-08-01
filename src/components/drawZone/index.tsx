import React, { FC, SVGAttributes, ReactNode, useReducer } from "react";
import { initialState, chartReducer } from "../../store";

export interface DrawZoneProps extends SVGAttributes<SVGGElement> {
  children: ReactNode | ReactNode[];
}

export const DrawZone: FC<DrawZoneProps> = ({ children, ...rest }) => {
  const [store] = useReducer(chartReducer, initialState);

  return (
    <g
      transform={`translate(${store.margin.left}, ${store.margin.top})`}
      {...rest}
    >
      {children}
    </g>
  );
};
