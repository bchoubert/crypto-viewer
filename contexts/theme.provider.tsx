import { FC, ReactNode, createContext, memo, useContext, useEffect, useState } from "react";

import { SettingsContext } from "./settings.provider";

import Colors from "@/assets/Colors";
import { DarkModeType } from "@/types/darkMode.types";

interface ColorTheme {
  type: DarkModeType;
  statusBar: DarkModeType;

  100: string;
  300: string;
  500: string;
  700: string;
  900: string;
}

const themes: Record<DarkModeType, ColorTheme> = {
  'dark': {
    type: 'dark',
    statusBar: 'light',

    100: Colors.darkGray,
    300: Colors.gray,
    500: Colors.midGray,
    700: Colors.lightGray,
    900: Colors.white,
  },
  'light': {
    type: 'light',
    statusBar: 'dark',

    100: Colors.white,
    300: Colors.lightGray,
    500: Colors.midGray,
    700: Colors.gray,
    900: Colors.darkGray,
  }
};

export const ThemeContext = createContext(themes.light);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = memo(({
  children,
}) => {
  const { settings } = useContext(SettingsContext);

  const [theme, setTheme] = useState<ColorTheme>(themes.light);

  useEffect(() => {
    setTheme(themes[settings?.darkMode || 'light']);
  }, [settings?.darkMode]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;