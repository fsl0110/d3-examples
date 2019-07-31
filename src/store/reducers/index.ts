import produce from "immer";
import { Reducer } from "redux";
import { initialState, AppState } from "../initialState";
import {
  ActionTypes,
  SET_LOADING,
  SET_DATA,
  SET_ERROR,
  SET_DIMENSION,
  SET_MARGIN,
  SET_TOOLTIP
} from "../actions";

export const reducer: Reducer<AppState, ActionTypes> = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case SET_LOADING:
        draft.isLoading[action.key] = action.isLoading;
        return draft;
      case SET_DATA:
        draft.data[action.key] = action.payload;
        return draft;
      case SET_ERROR:
        draft.hasError[action.key] = action.hasError;
        return draft;
      case SET_DIMENSION:
        draft.dimension[action.key] = action.dimension;
        return draft;
      case SET_MARGIN:
        draft.margin[action.key] = action.margin;
        return draft;
      case SET_TOOLTIP:
        draft.tooltip[action.key] = action.value;
        return draft;
      default:
        return draft;
    }
  }
);
