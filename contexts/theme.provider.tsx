import { createContext, FC, memo, ReactNode, useContext, useMemo, useState } from "react";
import { SettingsContext } from "./settings.provider";
import { useColorScheme } from "react-native";

interface Theme {
  colors: {
    background: string;
    elevated: string;

    text: string;
    muted: string;

    action: string;
    actionText: string;
  },
}

type ThemeMode = 'LIGHT' | 'DARK';

const themes: Record<ThemeMode, Theme> = {
  'DARK': {
    colors: {
      background: '#010618',
      elevated: '#0f1828',

      text: '#FFFFFF',
      muted: '#9aa3b0',

      action: '#015ae4',
      actionText: '#FFFFFF',
    },
  },
  'LIGHT': {
    colors: {
      background: '#F9F9F9',
      elevated: '#fdfdfe',
      text: '#151515',
      muted: '#989ea8',

      action: '#015ae4',
      actionText: '#FFFFFF',
    },
  },
};


interface ThemeContextInterface {
  theme: Theme;
  mode: ThemeMode;

  statusColor: string;
  setStatusColor: (statusColor: string) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: themes.LIGHT,
  mode: 'LIGHT',

  statusColor: '#015ae4',
  setStatusColor: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = memo(({
  children,
}) => {
  const [statusColor, setStatusColor] = useState<string>('#015ae4');

  const colorScheme = useColorScheme();
  const { settings } = useContext(SettingsContext);

  const mode: ThemeMode = useMemo(() => {
    if (settings.mode) {
      return settings.mode;
    }
    if (colorScheme) {
      return colorScheme.toUpperCase() as ThemeMode;
    }
    return 'LIGHT';
  }, [colorScheme, settings]);

  const theme = useMemo(() => {
    return themes[mode];
  }, [mode]);

  const contextValues = useMemo(() => ({
    theme,
    mode,

    statusColor,
    setStatusColor,
  }), [mode, theme, statusColor]);

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
