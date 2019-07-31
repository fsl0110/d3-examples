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
