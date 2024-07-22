import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
const [isDarkTheme , setIsDarkTheme] = useState(false);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setIsDarkTheme(!isDarkTheme)
    } else {
      setTheme("dark-theme");
      setIsDarkTheme(!isDarkTheme)

    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDarkTheme,
        setIsDarkTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };