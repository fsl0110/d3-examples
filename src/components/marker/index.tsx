import React, {FC, SVGAttributes} from "react";
import classNames from "classnames";
import {Item} from "../../store";
import {useStore} from "../../hooks";

export interface MarkerProps extends SVGAttributes<SVGGElement> {
  /**
   * Define a radius for the circle.
   * If 0 no circle will be shown.
   * @default 5
   */
  radius?: number; // TODO: implement

  /**
   * Define a stroke as color for the circle.
   * @default red
   */
  color?: string; // TODO: implement

  /**
   * Define a stroke-width as width for the circle.
   * To get a filled circle define a width eaqual the circle radius.
   * @default 2
   */
  width?: number; // TODO: implement

  /**
   * Map tooltip instead of datas when Tooltip Component is parent of this component.
   * Tooltip values comes automatically from the parent Tooltip Component via cloneElement.
   */
  tooltip?: Item;

  /** No Childrens allowed */
  children?: never;
}

export const Marker: FC<MarkerProps> = ({tooltip, radius = 5, color = "#f00", width = 2, className}) => {
  const {
    state: {data, scale},
  } = useStore();

  const dataToMap = tooltip || data;

  return (
    <g className={classNames("marker", className)}>
      {dataToMap.map((item: Item, i: number) => (
        <circle
          className="marker-circle"
          key={i}
          cx={scale.x(item[0])}
          cy={scale.y(item[1])}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={width}
        />
      ))}
    </g>
  );
};
