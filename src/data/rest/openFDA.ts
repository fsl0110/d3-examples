import Axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import _ from "lodash";

export const axiosOpenFDA = Axios.create({
  baseURL: "https://api.fda.gov/"
});

interface OpenFDAResponse {
  meta: {};
  results: any;
}

export interface FoodEnforcementReportsResponse {
  time: number;
  count: number;
}

export interface FoodEnforcementInitiatorsResponse {
  term: string;
  count: number;
}

export const openFDA = {
  foodEnforcementReports: (term: string): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`,
    transformResponse: (r: OpenFDAResponse) => {
      const groupedByYears = _.groupBy(
        r.results,
        (item: { time: string; count: number }) =>
          moment(item.time, "YYYYMMDD").format("YYYY")
      );

      const countedByYears = Object.entries(groupedByYears).map(
        (entry: any) => {
          return [entry[0], _.sumBy(entry[1], (item: any) => item.count)];
        }
      );

      return countedByYears;
    }
  }),
  foodEnforcementInitiators: (): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?count=voluntary_mandated.exact`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((i: FoodEnforcementInitiatorsResponse) => [i.term, i.count])
  })
};
