import {
  Reducer,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";

import { tap } from "../helpers/global";

export const breakpointNames = ["sm", "md", "lg", "xl"] as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const mediaQuery = <
  BreakPointName extends typeof breakpointNames[number]
>(
  bpName: BreakPointName
) => `@media (min-width: ${breakpoints[bpName]}px)` as const;

export const useScreen = <
  BreakPointName extends typeof breakpointNames[number]
>(
  bpName: BreakPointName
): boolean => {
  const [matches, _setState] = useState<boolean>(false);

  const setMatches = (e: { matches: boolean }) => {
    _setState(e.matches);
  };

  useEffect(() => {
    const list = window.matchMedia(`(min-width: ${breakpoints[bpName]}px)`);
    setMatches(list);
    list.addEventListener("change", setMatches);

    return () => {
      list.removeEventListener("change", setMatches);
    };
  }, [bpName]);

  return Boolean(matches);
};
