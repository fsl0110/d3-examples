import React, { FC, SVGAttributes } from "react";
import classNames from "classnames";
import { Dimensions } from "../types";

export interface CrossProps extends SVGAttributes<SVGGElement> {
  /** Pass Data for calculations. */
  data?: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales?: any; // TODO: Replace by generic

  /** Pass Dimesions for calculations */
  dim?: Dimensions;

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
  scales,
  data,
  dim,
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
  cross,
  crossX,
  crossY,
  className
}) => {
  const setXCross = (
    item: any,
    full: boolean,
    fullX: boolean,
    cross: number | undefined,
    crossX: number | undefined,
    dim: Dimensions
  ) => {
    if (cross || crossX) {
      return scales.y(item[1]) + 1 - (crossX! || cross!);
    }

    if (full || fullX) {
      return -dim.margin.top;
    }

    return scales.y(item[1]) + 1;
  };

  const setYCross = (
    item: any,
    full: boolean,
    fullY: boolean,
    cross: number | undefined,
    crossY: number | undefined,
    dim: Dimensions
  ) => {
    if (cross || crossY) {
      return scales.x(item[0]) + (crossY || cross);
    }

    if (full || fullY) {
      return dim.width - dim.margin.right;
    }

    return scales.x(item[0]);
  };

  if (!dim) {
    return null;
  }

  return (
    <g className={classNames("cross", className)}>
      {data.map((item: any, i: number) => (
        <g className="cross-lines" key={i}>
          {/** The vertical Cross-Line */}
          <line
            className="x-cross-line"
            opacity={hideX || hide ? 0 : 1}
            x1={scales.x(item[0]) + 1}
            x2={scales.x(item[0]) + 1}
            y1={dim.height - dim.margin.top - dim.margin.bottom}
            y2={setXCross(item, full, fullX, cross, crossX, dim)}
            stroke={colorX || color}
            strokeWidth={widthX || width}
            strokeDasharray={dashX || dash}
          />
          {/** The horizontal Cross-Line */}
          <line
            className="y-cross-line"
            opacity={hideY || hide ? 0 : 1}
            x1={0}
            x2={setYCross(item, full, fullY, cross, crossY, dim)}
            y1={scales.y(item[1])}
            y2={scales.y(item[1])}
            stroke={colorY || color}
            strokeWidth={widthY || width}
            strokeDasharray={dashY || dash}
          />
        </g>
      ))}
    </g>
  );
};
