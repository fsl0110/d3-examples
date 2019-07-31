export type Dimensions = {
  width: number;
  height: number;
  margin: Margin;
};

export type Margin = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

export type Data = [(Date | number | string), (Date | number | string)];

export interface SharedProps {
  /** Pass Data for calculations. */
  data?: any; // TODO: Replace by generic

  /** Pass Scales for calculations. */
  scales?: any; // TODO: Replace by generic

  /** Pass Dimesions for calculations */
  dim?: Dimensions;
}
