/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderAPI } from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect';
import React, { ReactElement } from 'react';
import * as PassThoughComponents from '../PassThroughComponents';

import NavigationProvider from '../../contexts/NavigationProvider';
import { SettingsContext } from '../../contexts/SettingsProvider';
import ThemeProvider from '../../contexts/ThemeProvider';
import TranslationProvider from '../../contexts/TranslationProvider';

import { defaultSettings } from '../../models/SettingsType';
import consoleMocker from './consoleMocker';

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

beforeAll(() => {
  consoleMocker.mockConsole();
  // eslint-disable-next-line no-extend-native
  Date.prototype.getTimezoneOffset = jest.fn(() => 0);
});

afterAll(() => {
  consoleMocker.restoreConsole();
  jest.resetAllMocks();
});

jest.spyOn(PassThoughComponents, 'Image');
(PassThoughComponents.Image as unknown as jest.Mock).mockImplementation(() => (<div>IMAGE</div>));
