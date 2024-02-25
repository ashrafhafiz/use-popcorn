import { useEffect, useRef } from "react";
import { useKey } from "./hooks/useKey";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });
  // useEffect(
  //   function () {
  //     function cb(e) {
  //       if (e.code === "Enter") {
  //         if (document.activeElement === inputEl.current) return;
  //         inputEl.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", cb);
  //     return () => document.removeEventListener("keydown", cb);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
