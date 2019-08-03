import { createContext } from "react";
import { initialState } from ".";

const context = createContext<any>(initialState);

export default context;
