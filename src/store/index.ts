export * from "./reducers";
export * from "./actions";
import {ScaleTime, ScaleLinear} from "d3";

export const initialState: AppState = {
  isLoading: false,
  hasError: false,
  data: [],
  scale: {x: null, y: null},
  margin: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  },
  dimension: {
    height: 400,
    width: 600,
  },
  tooltip: [],
};

export interface AppState {
  isLoading: boolean;
  hasError: boolean;
  data: Data;
  scale: Scale;
  margin: Margin;
  dimension: Dimension;
  tooltip: Tooltip;
}

export type Tooltip = [];

export type Data = any;

export type Curves =
  | "curveLinear"
  | "curveStep"
  | "curveStepBefore"
  | "curveStepAfter"
  | "curveBasis"
  | "curveCardinal"
  | "curveMonotoneX"
  | "curveCatmullRom";

export type Positions = "top" | "left" | "bottom" | "right";

export type Scale = {x: XScale; y: YScale};

export type XScale = ScaleTime<number, number> | null;

export type YScale = ScaleLinear<number, number> | null;

export type Dimension = {
  width: number;
  height: number;
};

export type Margin = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

export type Item = [(string | number | Date), (string | number | Date)];

export type AxisLabelAlign =
  | "verticalTop"
  | "verticalCenter"
  | "verticalBottom"
  | "horizontalLeft"
  | "horizontalCenter"
  | "horizontalRight";

export type AxisAlign = "axisLeft" | "axisRight" | "axisBottom" | "axisTop";
