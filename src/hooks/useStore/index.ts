import { useContext } from "react";
import Context from "../../store/context";

export const useStore = () => {
  return useContext(Context);
};
