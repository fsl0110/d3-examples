import { axiosOpenFDA, openFDA } from "../../data/rest/openFDA";
import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios";

export const CHART = "CHART";

export type Keys = typeof CHART;

export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

export type ActionTypes = SetLoading | SetData | SetError;

/* export interface SetData {
  type: typeof SET_DATA;
  payload: Array<(string | number)[]>;
  key: Keys;
} */

export const fetchData = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(setLoading(CHART, true));
  axiosOpenFDA(openFDA.foodEnforcementReports(term))
    .then((res: AxiosResponse) => {
      dispatch(setData(CHART, res.data));
      dispatch(setLoading(CHART, false));
    })
    .catch((err: AxiosError) => {
      if (!err.response || err.response.status !== 404) {
        dispatch(setError(CHART, true));
      } else {
        dispatch(setData(CHART, []));
      }
      dispatch(setLoading(CHART, false));
    });
};

export interface SetLoading {
  type: typeof SET_LOADING;
  key: Keys;
  isLoading: boolean;
}

export const setLoading = (key: Keys, isLoading: boolean): SetLoading => {
  return {
    type: SET_LOADING,
    key,
    isLoading
  };
};

export interface SetData {
  type: typeof SET_DATA;
  key: Keys;
  payload: Array<(string | number)[]>;
}

export const setData = (
  key: Keys,
  payload: Array<(string | number)[]>
): SetData => {
  return {
    type: SET_DATA,
    key,
    payload
  };
};

export interface SetError {
  type: typeof SET_ERROR;
  key: Keys;
  hasError: boolean;
}

export const setError = (key: Keys, hasError: boolean): SetError => {
  return {
    type: SET_ERROR,
    key,
    hasError
  };
};
