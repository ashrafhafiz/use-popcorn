import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    return localStorage.getItem("key")
      ? JSON.parse(localStorage.getItem("key"))
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
