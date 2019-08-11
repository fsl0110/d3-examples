import {useContext} from "react";
import Context from "../../store/context";

export const useStore = () => useContext(Context);
