import { useState, useCallback, useEffect } from "react";

/**
 * A hook to manage the state of the ContentSwitcher component.
 */
export function useContentSwitcher(defaultActiveIndex: number = 0) {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  useEffect(() => {
    setActiveIndex(defaultActiveIndex);
  }, [defaultActiveIndex]);

  const setActive = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return {
    activeIndex,
    setActiveIndex: setActive,
    isActiveIndex: (index: number) => activeIndex === index,
  };
}
