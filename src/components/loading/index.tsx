import React, {FC} from "react";

export interface LoadingProps {}

export const Loading: FC<LoadingProps> = () => {
  return (
    <g className="loading">
      <text>Loading</text>
    </g>
  );
};
