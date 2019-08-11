import {useEffect, useState} from "react";

const getSize = (client: boolean) => ({
  width: client ? window.innerWidth : undefined,
  height: client ? window.innerHeight : undefined,
});

export function useWindowSize() {
  const client = typeof window === "object";
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(setWindowSize(getSize(client)));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [client]);

  return [windowSize];
}
