import { useEffect, useState } from "react";
import { Dimensions } from "../../components/types";

export function useAxis(align: any, scales: any, dim: Dimensions | undefined) {
  if (!scales || !dim) {
    return ["", []];
  }

  let transform: string = "";
  let scale: any;

  switch (align) {
    case "axisLeft":
      transform = `translate(${dim.margin.left}, ${0})`;
      scale = scales.y;
      break;
    case "axisBottom":
      transform = `translate(${dim.margin.left}, ${dim.height -
        dim.margin.bottom})`;
      scale = scales.x;
    case "axisRight":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      scale = scales.y;
      break;
    case "axisTop":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      scale = scales.x;
      break;
  }
  return [transform, scale];
}
