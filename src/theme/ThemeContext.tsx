import React, { useState, useCallback } from "react";
import { themes } from "./themes";

type ColorMode = keyof typeof themes;

interface ThemeCtx {
  colorMode?: ColorMode;
  setColorMode(mode: ColorMode): void;
  toggleColorMode(): void;
}

export const ThemeContext = React.createContext<Partial<ThemeCtx>>({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setCurrentColorMode] = useState<ColorMode>();

  const setColorMode = useCallback(
    (mode: ColorMode) => {
      setCurrentColorMode(mode);
      localStorage.setItem("color-mode", mode);
      const root = document.documentElement;
      Object.entries(themes[mode]).forEach(([name, value]) => {
        root.style.setProperty(`--${name}`, value);
      });
    },
    [setCurrentColorMode]
  );

  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  }, [colorMode]);

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode,
        toggleColorMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};