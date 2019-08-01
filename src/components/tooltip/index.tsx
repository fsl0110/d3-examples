import React, { FC, useState, SVGAttributes, useReducer } from "react";
import * as d3 from "d3";
import { initialState, chartReducer, Data } from "../../store";
import { Text } from "../../components";

interface TooltipProps extends SVGAttributes<SVGGElement> {
  children: string;
}

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  /** CurrentData is one DataSet of the data array. */
  const [currentData, setCurrentData] = useState([]);
  const [store] = useReducer(chartReducer, initialState);

  let bisectMouseValue = d3.bisector((d: Data) => d[0]).left;

  return (
    <g {...rest}>
      <rect
        width={store.dimension.width}
        height={store.dimension.height}
        opacity="0"
        onMouseMove={e => {
          const mouseValue = store.scale.x.invert(e.nativeEvent.offsetX);
          const i = bisectMouseValue(
            store.data,
            mouseValue,
            1,
            store.data.length
          );
          if (store.data[i - 1] !== store.data) {
            setCurrentData(store.data[i - 1]);
          }
        }}
        onMouseOut={() => {
          setCurrentData([]);
        }}
      />
      {currentData.length && <Text>{children}</Text>}
    </g>
  );
};
