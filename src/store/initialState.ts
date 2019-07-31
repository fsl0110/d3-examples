export const initialState: AppState = {
  isLoading: {},
  hasError: {},
  data: {},
  margin: {},
  dimension: {},
  tooltip: {}
};

export interface AppState {
  isLoading: {
    [key: string]: boolean;
  };
  hasError: {
    [key: string]: boolean;
  };
  data: {
    [key: string]: Array<(string | number)[]>;
  };
  margin: {
    [key: string]: Margin;
  };
  dimension: {
    [key: string]: Dimension;
  };
  tooltip: {
    [key: string]: string | number | Date;
  };
}

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
