import React, { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { renderNode } from '../../components/testUtils/bootstrap';
import { SettingsContext } from '../../contexts/SettingsProvider';
import ThemeProvider, {
  adjustColorIfTooDarkOrLightImpl, lightenColorImpl, ThemeContext, themes,
} from '../../contexts/ThemeProvider';
import { DarkModeType } from '../../models/DarkMode';
import SettingsType from '../../models/SettingsType';

const darkColorToTest = '#151515';
const lightColorToTest = '#E5E5E5';
const otherColorToTest = '#777';

const darkColorCoeff = 1.2;

const ThemeTestComponent: FC = () => {
  const theme = useContext(ThemeContext);

  const [lightLightenedColor, darkLightenedColor, otherLightenedColor] = [
    theme.lightenColor?.(darkColorToTest, darkColorCoeff),
    theme.lightenColor?.(lightColorToTest),
    theme.lightenColor?.(otherColorToTest),
  ];
  const [lightAdjustedColor, darkAdjustedColor, otherAdjustedColor] = [
    theme.adjustColorIfTooDarkOrLight?.(darkColorToTest),
    theme.adjustColorIfTooDarkOrLight?.(lightColorToTest),
    theme.adjustColorIfTooDarkOrLight?.(otherColorToTest),
  ];

  return (
    <View>
      <Text>{theme.name}</Text>

      <Text>{lightLightenedColor}</Text>
      <Text>{darkLightenedColor}</Text>
      <Text>{otherLightenedColor}</Text>

      <Text>{lightAdjustedColor}</Text>
      <Text>{darkAdjustedColor}</Text>
      <Text>{otherAdjustedColor}</Text>
    </View>
  );
};

describe('ThemeProvider', () => {
  it('Light', () => {
    const lightThemeContext = themes['light' as DarkModeType];

    const node = renderNode(
      <ThemeContext.Provider value={lightThemeContext}>
        <ThemeTestComponent />
      </ThemeContext.Provider>,
    );

    node.getByText(lightThemeContext.name);
  });

  it('Dark', () => {
    const darkThemeContext = themes['dark' as DarkModeType];

    const node = renderNode(
      <ThemeContext.Provider value={darkThemeContext}>
        <ThemeTestComponent />
      </ThemeContext.Provider>,
    );

    node.getByText(darkThemeContext.name);
  });

  it('Provider - light', () => {
    const node = renderNode(
      <SettingsContext.Provider
        value={{
          settings: {
            DARK_MODE_KEY: 'light',
          } as SettingsType,
          changeSettings: () => {},
        }}
      >
        <ThemeProvider>
          <ThemeTestComponent />
        </ThemeProvider>
      </SettingsContext.Provider>,
    );

    node.getByText('light');

    node.getByText(lightenColorImpl(lightColorToTest, 1, 'light'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(lightColorToTest, 'light'));

    node.getByText(lightenColorImpl(otherColorToTest, 1, 'light'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(otherColorToTest, 'light'));

    node.getByText(lightenColorImpl(darkColorToTest, darkColorCoeff, 'light'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(darkColorToTest, 'light'));
  });

  it('Provider - dark', () => {
    const node = renderNode(
      <SettingsContext.Provider
        value={{
          settings: {
            DARK_MODE_KEY: 'dark',
          } as SettingsType,
          changeSettings: () => {},
        }}
      >
        <ThemeProvider>
          <ThemeTestComponent />
        </ThemeProvider>
      </SettingsContext.Provider>,
    );

    node.getByText('dark');

    node.getByText(lightenColorImpl(lightColorToTest, 1, 'dark'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(lightColorToTest, 'dark'));

    node.getByText(lightenColorImpl(otherColorToTest, 1, 'dark'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(otherColorToTest, 'dark'));

    node.getByText(lightenColorImpl(darkColorToTest, darkColorCoeff, 'dark'));
    node.getByText(adjustColorIfTooDarkOrLightImpl(darkColorToTest, 'dark'));
  });
});
