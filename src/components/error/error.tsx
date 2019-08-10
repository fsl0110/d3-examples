import React, {FC} from "react";

export interface ErrorProps {}

export const Error: FC<ErrorProps> = () => {
  return (
    <g className="error">
      <text>Error</text>
    </g>
  );
};
