import { useEffect, useState } from "react";

export function useSidebar(initialState?: boolean) {
  const [isVisible, setIsVisible] = useState(
    initialState !== undefined ? initialState : false
  );

  useEffect(() => {
    if (initialState !== undefined) {
      setIsVisible(initialState);
    }
  }, [initialState]);

  return { isVisible, setIsVisible };
}
