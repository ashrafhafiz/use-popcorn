import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function cb(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", cb);

    return function () {
      document.removeEventListener("keydown", cb);
    };
  }, [key, action]);
}
