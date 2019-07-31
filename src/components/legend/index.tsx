import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { StyledDiv } from "./styles";

export interface LegendProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export const Legend: FC<LegendProps> = ({ className, children }) => {
  return (
    <StyledDiv className={classNames("legend", className)}>
      <div className="legend__decorator" />
      <div className="legend__text">{children}</div>
    </StyledDiv>
  );
};
