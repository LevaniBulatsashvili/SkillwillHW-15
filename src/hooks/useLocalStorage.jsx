import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );

  useEffect(() => localStorage.setItem(key, JSON.stringify(mode)), [mode, key]);
  return [mode, setMode];
};

export default useLocalStorage;
