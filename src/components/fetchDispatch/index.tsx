import React, { FC } from "react";
import { useFetch } from "../../hooks";
import { AxiosPromise } from "axios";
import { Data } from "../../store";

export interface Props {
  loadingIndicator?: JSX.Element;
  errorIndicator?: JSX.Element;
  fetch: AxiosPromise;
  children: (data: Data) => JSX.Element;
}

export const FetchDispatch: FC<Props> = ({
  children,
  loadingIndicator,
  errorIndicator,
  fetch
}) => {
  const [data, loading, err] = useFetch({}, fetch);

  if (loading) return loadingIndicator || <h1>Loading...</h1>;
  if (err) return errorIndicator || <h1>{err}</h1>;
  if (!data.length) return null;

  return children(data);
};
