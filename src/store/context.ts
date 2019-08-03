import { createContext, Dispatch } from "react";
import { initialState, ActionTypes } from ".";

const context = createContext({
  state: initialState,
  dispatch: (() => null) as Dispatch<ActionTypes>
});

export default context;
