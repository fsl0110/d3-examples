import React, { FC, SVGAttributes, ReactNode } from "react";

export interface DrawZoneProps extends SVGAttributes<SVGGElement> {
  children: ReactNode | ReactNode[];
}

export const DrawZone: FC<DrawZoneProps> = ({ children, ...rest }) => {
  return (
    <g className="drawzone" transform={`translate(20,20)`} {...rest}>
      {children}
    </g>
  );
};
