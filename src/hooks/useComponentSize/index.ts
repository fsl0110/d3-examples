import {useState, useLayoutEffect, useCallback} from "react";

export function useComponentSize() {
  const [componentSize, setComponentSize] = useState();
  const [node, setNode] = useState();
  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      // handle resize on load
      window.requestAnimationFrame(() => setComponentSize(node.getBoundingClientRect()));
      // handle resize on window resize
      const handleResize = () => {
        setComponentSize(node.getBoundingClientRect());
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [node]);

  return [ref, componentSize, node];
}
