import { createContext, useState } from "react";

const defaultTheme = "light";
export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
