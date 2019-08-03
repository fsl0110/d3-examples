import React, { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { StyledDiv } from "./styles";

export interface LegendProps extends HTMLAttributes<HTMLDivElement> {
  children: string | ReactNode;
}

export const Legend: FC<LegendProps> = ({ className, children, ...rest }) => {
  return (
    <StyledDiv className={classNames("legend", className)} {...rest}>
      <div className="legend__decorator" />
      <div className="legend__text">{children}</div>
    </StyledDiv>
  );
};
