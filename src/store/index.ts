export * from "./reducers";
export * from "./actions";

export const initialState: AppState = {
  isLoading: false,
  hasError: false,
  data: [],
  scale: { x: null, y: null },
  margin: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20
  },
  dimension: {
    height: 400,
    width: 600
  },
  tooltip: ""
};

export interface AppState {
  isLoading: boolean;
  hasError: boolean;
  data: Data;
  scale: Scale;
  margin: Margin;
  dimension: Dimension;
  tooltip: string | number | Date;
}

export type Data = any;

export type Scale = { x: any; y: any };

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
