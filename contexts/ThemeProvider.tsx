import React, {
  createContext, FC, memo, ReactNode, useContext, useMemo, useCallback,
} from 'react';
import { DarkModeType } from '../models/DarkMode';
import { SettingsContext } from './SettingsProvider';
import Colors from '../assets/Colors';
import ColorService from '../services/Color.service';

type ThemeType = {
  backgroundColor: string;
  backgroundTile: string;
  textColor: string;
  actionText: string;
  isDark: boolean;
  name: string;
};

export const themes: Record<DarkModeType, ThemeType> = {
  dark: {
    backgroundColor: '#222222',
    backgroundTile: '#444444',
    textColor: Colors.white,
    actionText: Colors.white,
    isDark: true,
    name: 'dark',
  },
  light: {
    backgroundColor: Colors.white,
    backgroundTile: Colors.veryLightGray,
    textColor: '#222222',
    actionText: Colors.blue,
    isDark: false,
    name: 'light',
  },
};

export const ThemeContext = createContext(themes.light as ThemeType & {
  lightenColor?: (color: string, coeff?: number) => string,
  adjustColorIfTooDarkOrLight?: (color: string) => string,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const lightenColorImpl = (color: string, coeff: number = 1, themeMode: DarkModeType) => {
  const opacity = (themeMode === 'light' ? 10 : 40) * coeff;
  return `${color}${opacity < 10 ? `0${opacity}` : opacity}`;
};

export const adjustColorIfTooDarkOrLightImpl = (color: string, themeMode: DarkModeType) => {
  const conversionResult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color || '');
  const colorRGB = conversionResult ? [
    parseInt(conversionResult[1], 16),
    parseInt(conversionResult[2], 16),
    parseInt(conversionResult[3], 16),
  ] : null;

  if (!colorRGB) {
    return color;
  }

  const compositeAddition = colorRGB[0] + colorRGB[1] + colorRGB[2];

  // If color is too dark for dark mode
  if (themeMode === 'dark' && compositeAddition < (80 * 3)) {
    return ColorService.lightenDarkenColor(compositeAddition < 180 ? '#808080' : color, 20);
  }

  // If color is too light for light mode
  if (themeMode === 'light' && compositeAddition > (176 * 3)) {
    return ColorService.lightenDarkenColor(compositeAddition > 588 ? '#808080' : color, -20);
  }

  return color;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}) => {
  const { settings } = useContext(SettingsContext);
  const themeMode = useMemo(() => settings.DARK_MODE_KEY as DarkModeType, [settings]);

  const lightenColor = useCallback(
    (color: string, coeff: number = 1) => lightenColorImpl(color, coeff, themeMode),
    [themeMode],
  );

  const adjustColorIfTooDarkOrLight = useCallback(
    (color: string) => adjustColorIfTooDarkOrLightImpl(color, themeMode),
    [themeMode],
  );

  const currentTheme = useMemo(
    () => ({
      ...themes[themeMode],
      lightenColor,
      adjustColorIfTooDarkOrLight,
    }),
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
