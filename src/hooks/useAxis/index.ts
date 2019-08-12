import {AxisAlign, Scale, Dimension, Margin} from "../../store";

export function useAxis(align: AxisAlign, scale: Scale, dimension: Dimension, margin: Margin) {
  let transform = "";
  let currentScale: any;

  switch (align) {
    case "axisLeft":
      transform = `translate(${margin.left}, ${0})`;
      currentScale = scale.y;
      break;
    case "axisBottom":
      transform = `translate(${margin.left}, ${dimension.height - margin.bottom})`;
      currentScale = scale.x;
      break;
    case "axisRight":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      currentScale = scale.y;
      break;
    case "axisTop":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      currentScale = scale.x;
      break;
    default:
      break;
  }
  return [transform, currentScale];
}
