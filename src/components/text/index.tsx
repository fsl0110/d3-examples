import React, {FC, SVGAttributes} from "react";
import classNames from "classnames";
import {StyledDiv, StyleProps} from "./styles";

interface Props extends StyleProps {
  children?: string;
}

export type TextProps = Props & SVGAttributes<SVGTextElement>;

export const Text: FC<TextProps> = ({color = "#555", family, size, weight, letterSpacing, className, children}) => {
  return (
    <foreignObject>
      <StyledDiv
        className={classNames("text", className)}
        color={color}
        family={family}
        size={size}
        weight={weight}
        letterSpacing={letterSpacing}
      >
        {children}
      </StyledDiv>
    </foreignObject>
  );
};
