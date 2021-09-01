/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderAPI } from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect';
import React, { ReactElement } from 'react';

import NavigationProvider from '../contexts/NavigationProvider';
import { SettingsContext } from '../contexts/SettingsProvider';
import ThemeProvider from '../contexts/ThemeProvider';
import TranslationProvider from '../contexts/TranslationProvider';

import { defaultSettings } from '../models/SettingsType';

jest.useFakeTimers();

export const enrichProviders = (node: ReactElement): ReactElement => (
  <SettingsContext.Provider
    value={{
      settings: defaultSettings,
      changeSettings: jest.fn(),
    }}
  >
    <TranslationProvider>
      <ThemeProvider>
        <NavigationProvider>
          {node}
        </NavigationProvider>
      </ThemeProvider>
    </TranslationProvider>
  </SettingsContext.Provider>
);

// eslint-disable-next-line max-len
export const renderNode = (node: ReactElement): RenderAPI => render(enrichProviders(node));
