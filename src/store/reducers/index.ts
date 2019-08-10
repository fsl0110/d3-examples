import {Reducer} from "react";
import produce from "immer";
import {initialState, AppState} from "..";
import {
  ActionTypes,
  SET_LOADING,
  SET_ERROR,
  SET_DATA,
  SET_SCALE,
  SET_DIMENSION,
  SET_MARGIN,
  SET_TOOLTIP,
} from "../actions";

export const chartReducer: Reducer<AppState, ActionTypes> = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case SET_LOADING:
        draft.isLoading = action.isLoading;
        return draft;
      case SET_ERROR:
        draft.hasError = action.hasError;
        return draft;
      case SET_DATA:
        draft.data = action.payload;
        return draft;
      case SET_SCALE:
        draft.scale = action.scale;
        return draft;
      case SET_DIMENSION:
        draft.dimension = action.dimension;
        return draft;
      case SET_MARGIN:
        draft.margin = action.margin;
        return draft;
      case SET_TOOLTIP:
        draft.tooltip = action.value;
        return draft;
      default:
        return draft;
    }
  },
);
