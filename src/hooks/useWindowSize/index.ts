import {useEffect, useState} from "react";

const getSize = (client: {}) => ({
  width: client ? window.innerWidth : undefined,
  height: client ? window.innerHeight : undefined,
});

export function useWindowSize() {
  // tslint:disable-next-line
  const client = typeof window === "object";
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize(client));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [client]);

  return [windowSize];
}
