
import { useCallback, useState } from "react";

interface IUseLocalStorageProps<T> {
  storageKey: string;
  initialValue?: T;
}

export const useLocalStorage = <T,>({ storageKey, initialValue }: IUseLocalStorageProps<T>) => {
  const [state, setState] = useState<T>(() => {
    try {
      const storageValue = localStorage.getItem(storageKey);
      return storageValue ? JSON.parse(storageValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setState(value);
        localStorage.setItem(storageKey, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    },
    [storageKey]
  );

  return [state, setValue] as const;
};
