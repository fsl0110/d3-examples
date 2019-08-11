import {createContext, Dispatch} from "react";
import {initialState, ActionTypes} from ".";

const Context = createContext({
  state: initialState,
  dispatch: (() => null) as Dispatch<ActionTypes>,
});

export default Context;
