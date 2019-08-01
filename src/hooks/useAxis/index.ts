import { AppState, AxisAlign } from "../../store";

export function useAxis(align: AxisAlign, store: AppState) {
  let transform: string = "";
  let currentScale: any;

  switch (align) {
    case "axisLeft":
      transform = `translate(${store.margin.left}, ${0})`;
      currentScale = store.scale.y;
      break;
    case "axisBottom":
      transform = `translate(${store.margin.left}, ${store.dimension.height -
        store.margin.bottom})`;
      currentScale = store.scale.x;
      break;
    case "axisRight":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      currentScale = store.scale.y;
      break;
    case "axisTop":
      // TODO: add position
      transform = `translate(${0}, ${0})`;
      currentScale = store.scale.x;
      break;
  }
  return [transform, currentScale];
}
