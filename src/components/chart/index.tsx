import React, { FC, SVGAttributes } from "react";
import { Provider } from "react-redux";
import { StyledDiv, StyleProps } from "./styles";
import store from "../../store";

interface Props extends SVGAttributes<HTMLDivElement> {
  // optional option to pass datafetching mechanism
  // optional option to pass datas directly
  // optional height and with options e.g. to disable responsive by giving a fixed width
  // optional margin options
  // interface for more config from outside
}

export type ChartProps = Props & StyleProps;

export const Chart: FC<ChartProps> = () => {
  return (
    <Provider store={store}>
      <StyledDiv>
        <svg />
      </StyledDiv>
    </Provider>
  );
};
