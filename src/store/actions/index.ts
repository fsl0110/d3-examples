/* import { axiosOpenFDA, openFDA } from "../../data/rest/openFDA";
import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios"; */
import {Dimension, Margin, Scale, Tooltip} from "..";

export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_DATA = "SET_DATA";
export const SET_SCALE = "SET_SCALE";
export const SET_DIMENSION = "SET_DIMENSION";
export const SET_MARGIN = "SET_MARGIN";
export const SET_TOOLTIP = "SET_TOOLTIP";

export type ActionTypes = SetLoading | SetError | SetData | SetScale | SetDimension | SetMargin | SetTooltip;

export interface SetDimension {
  type: typeof SET_DIMENSION;
  dimension: Dimension;
}

export const setDimension = (dimension: Dimension): SetDimension => {
  return {
    type: SET_DIMENSION,
    dimension,
  };
};

export interface SetScale {
  type: typeof SET_SCALE;
  scale: Scale;
}

export const setScale = (scale: Scale): SetScale => {
  return {
    type: SET_SCALE,
    scale,
  };
};

export interface SetMargin {
  type: typeof SET_MARGIN;
  margin: Margin;
}

export const setMargin = (margin: Margin): SetMargin => {
  return {
    type: SET_MARGIN,
    margin,
  };
};

export interface SetTooltip {
  type: typeof SET_TOOLTIP;
  value: Tooltip;
}

export const setTooltip = (value: Tooltip): SetTooltip => {
  return {
    type: SET_TOOLTIP,
    value,
  };
};

export interface SetData {
  type: typeof SET_DATA;
  payload: Array<(string | number)[]>;
}

export const setData = (payload: Array<(string | number)[]>): SetData => {
  return {
    type: SET_DATA,
    payload,
  };
};

export interface SetLoading {
  type: typeof SET_LOADING;
  isLoading: boolean;
}

export const setLoading = (isLoading: boolean): SetLoading => {
  return {
    type: SET_LOADING,
    isLoading,
  };
};

export interface SetError {
  type: typeof SET_ERROR;
  hasError: boolean;
}

export const setError = (hasError: boolean): SetError => {
  return {
    type: SET_ERROR,
    hasError,
  };
};

/* export const fetchData = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  axiosOpenFDA(openFDA.foodEnforcementReports(term))
    .then((res: AxiosResponse) => {
      dispatch(setData(res.data));
      dispatch(setLoading(false));
    })
    .catch((err: AxiosError) => {
      if (!err.response || err.response.status !== 404) {
        dispatch(setError(true));
      } else {
        dispatch(setData([]));
      }
      dispatch(setLoading(false));
    });
};
 */
