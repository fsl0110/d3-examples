import React, { FC, SVGAttributes, useReducer } from "react";
import classNames from "classnames";
import { Item } from "../../store";
import { useStore } from "../../hooks";

export interface CrossProps extends SVGAttributes<SVGGElement> {
  /**
   * Wether to hide Cross-Lines e.g. in order to appear only on mouseover.
   * @default false
   */
  hide?: boolean;

  /**
   *Wether to hide Y-Cross-Line.
   * @default undefined
   */
  hideY?: boolean;

  /**
   *Wether to hide X-Cross-Line.
   * @default undefined
   */
  hideX?: boolean;

  /**
   * Wether the Cross-Lines should have chart height and width.
   * @default false
   */
  full?: boolean; // TODO: solve issue

  /**
   * Wether the X-Cross-Line should have chart width. If not set the height is given by data x-value.
   * @default false
   */
  fullX?: boolean; // TODO: solve issue

  /**
   * Wether the Y-Cross-Line should have chart height. If not set the height is given by data y-value.
   * @default false
   */
  fullY?: boolean; // TODO: solve issue

  /**
   * Define a stroke as color for the Cross-Lines.
   * @default silver
   */
  color?: string;

  /**
   * Define a stroke as color for the X-Cross-Line.
   * @default undefined
   */
  colorX?: string;

  /**
   * Define a stroke as color for the Y-Cross-Line.
   * @default undefined
   * */
  colorY?: string;

  /**
   * Define a stroke-width e.g 3 as width for the Cross-Lines.
   * @default 1
   * */
  width?: number;

  /**
   * Define a stroke-width e.g 3 as width for the X-Cross-Line.
   * @default undefined
   * */
  widthX?: number;

  /**
   * Define a stroke-width e.g 3 as width for the Y-Cross-Line.
   * @default undefined
   * */
  widthY?: number;

  /** Define a stroke-dasharray to style the Cross-Lines.
   * @default 10
   */
  dash?: number;

  /** Define a stroke-dasharray to style the X-Cross-Line.
   * @default undefined
   */
  dashX?: number;

  /** Define a stroke-dasharray to style the Y-Cross-Line.
   * @default undefined
   */
  dashY?: number;

  /** Wether the Cross-Lines should have overlength to appear as a cross.
   * The value e.g. 10 defines the overlength.
   * @default undefined
   */
  cross?: number;

  /** Wether the X-Cross-Line should have overlength.
   * @default undefined
   */
  crossX?: number;

  /** Wether the Y-Cross-Line should have overlength.
   * @default undefined
   */
  crossY?: number;

  /** Pass Classname */
  className?: string;

  /** No Childrens allowed */
  children?: never;
}

export const Cross: FC<CrossProps> = ({
  hide = false,
  hideX,
  hideY,
  full = false,
  fullX = false,
  fullY = false,
  color = "silver",
  colorX,
  colorY,
  width = 1,
  widthX,
  widthY,
  dash = 3,
  dashX,
  dashY,
  cross = 0,
  crossX,
  crossY,
  className,
  ...rest
}) => {
  const {
    state: { data, scale, dimension, margin }
  } = useStore();

  const setXCross = (
    item: Item,
    full: boolean,
    fullX: boolean,
    cross: number,
    crossX: number | undefined
  ) => {
    if (cross || crossX) {
      return scale.y(item[1]) + 1 - (crossX! || cross!);
    }

    if (full || fullX) {
      return -margin.top;
    }

    return scale.y(item[1]) + 1;
  };

  const setYCross = (
    item: Item,
    full: boolean,
    fullY: boolean,
    cross: number,
    crossY: number | undefined
  ) => {
    if (cross || crossY) {
      return scale.x(item[0]) + (crossY || cross);
    }

    if (full || fullY) {
      return dimension.width - margin.right;
    }

    return scale.x(item[0]);
  };

  return (
    <g className={classNames("cross", className)} {...rest}>
      {data.map((item: Item, i: number) => (
        <g className="cross-lines" key={i}>
          {/** The vertical Cross-Line */}
          <line
            className="cross-line-x"
            opacity={hideX || hide ? 0 : 1}
            x1={scale.x(item[0]) + 1}
            x2={scale.x(item[0]) + 1}
            y1={dimension.height - margin.top - margin.bottom}
            y2={setXCross(item, full, fullX, cross, crossX)}
            stroke={colorX || color}
            strokeWidth={widthX || width}
            strokeDasharray={dashX || dash}
          />
          {/** The horizontal Cross-Line */}
          <line
            className="cross-line-y"
            opacity={hideY || hide ? 0 : 1}
            x1={0}
            x2={setYCross(item, full, fullY, cross, crossY)}
            y1={scale.y(item[1])}
            y2={scale.y(item[1])}
            stroke={colorY || color}
            strokeWidth={widthY || width}
            strokeDasharray={dashY || dash}
          />
        </g>
      ))}
    </g>
  );
};
