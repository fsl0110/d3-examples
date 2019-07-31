import React, { FC, SVGAttributes, ReactNode, ReactElement } from "react";
import { SharedProps } from "../types";

export interface DrawZoneProps extends SharedProps, SVGAttributes<SVGGElement> {
  children: ReactNode | ReactNode[];
}

export const DrawZone: FC<DrawZoneProps> = ({
  data,
  scales,
  dim,
  children
}) => {
  return children && dim ? (
    <g transform={`translate(${dim.margin.left}, ${dim.margin.top})`}>
      {React.Children.map(children, child =>
        React.cloneElement(child as never, { data, scales, dim })
      )}
    </g>
  ) : (
    <g />
  );
};
