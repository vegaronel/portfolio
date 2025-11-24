import { createContext, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const storedPreference = window.localStorage.getItem("theme");
  if (storedPreference) {
    return storedPreference === "dark";
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
