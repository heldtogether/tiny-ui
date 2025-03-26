import { useState, useCallback, useEffect } from "react";

/**
 * A hook to manage the state of the Modal component.
 */
export function useModal(defaultVisible: boolean = false) {
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisible);

  useEffect(() => {
    setIsVisible(defaultVisible);
  }, [defaultVisible]);

  const setVisible = useCallback((visible: boolean) => {
    setIsVisible(visible);
  }, []);

  return {
    isVisible,
    setIsVisible: setVisible,
  };
}
