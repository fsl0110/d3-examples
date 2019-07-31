import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";

export interface MarkerProps extends SVGAttributes<SVGGElement> {
  /** Pass Data for calculations. */
  data?: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales?: any; // TODO: Replace by generic

  dim?: any;

  /** Define a radius for the circle.
   * If 0 no circle will be shown.
   * @default 5
   */
  radius?: number; // TODO: implement

  /** Define a stroke as color for the circle.
   * @default red
   */
  color?: string; // TODO: implement

  /**
   * Define a stroke-width as width for the circle.
   * To get a filled circle define a width eaqual the circle radius.
   * @default 2
   */
  width?: number; // TODO: implement

  /** No Childrens allowed */
  children?: never;
}

export const Marker: FC<MarkerProps> = ({
  data,
  scales,
  radius = 5,
  color = "red",
  width = 2,
  className
}) => {
  return (
    <g className={classNames("marker", className)}>
      {data.map((item: any, i: number) => (
        <circle
          className="marker-circle"
          key={i}
          cx={scales.x(item[0])}
          cy={scales.y(item[1])}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={width}
        />
      ))}
    </g>
  );
};
