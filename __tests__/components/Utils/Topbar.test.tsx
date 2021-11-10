import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { renderNode } from '../../../components/testUtils/bootstrap';
import Topbar from '../../../components/Utils/Topbar';
import { SettingsKeysType } from '../../../constants';
import { NavigationContext, NavigationContextInterface } from '../../../contexts/NavigationProvider';
import { SettingsContext } from '../../../contexts/SettingsProvider';
import { defaultSettings, SettingsValue } from '../../../models/SettingsType';
import Tabs from '../../../models/Tabs';

describe('<TopBar />', () => {
  // Remove errors from toast android
  // eslint-disable-next-line no-console
  console.error = () => null;

  const changeTabFn = jest.fn();
  const changeSettingsFn = jest.fn();

  const commonNavigationContextValue: NavigationContextInterface = {
    activeTab: Tabs.list,
    changeTab: changeTabFn,
    handleBackAction: () => null,
    statusBarColor: '#334455',
    statusBarMode: 'default',
    details: null,
  };

  const navigationDetailsValue = {
    id: 'btc',
    name: 'Bitcoin',
    price: 2,
    status: 'online' as 'online',
    details: {
      type: '',
      symbol: 'B',
    },
  };

  const commonSettingsContextValue = {
    changeSettings: changeSettingsFn,
    settings: defaultSettings,
  };

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <NavigationContext.Provider value={commonNavigationContextValue}>
        <Topbar />
      </NavigationContext.Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('List behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider value={commonNavigationContextValue}>
        <Topbar />
      </NavigationContext.Provider>,
    );

    node.getByTestId('logo');
    node.getByTestId('settings');
  });

  it('Settings behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider
        value={{
          ...commonNavigationContextValue,
          activeTab: Tabs.settings,
        }}
      >
        <Topbar />
      </NavigationContext.Provider>,
    );

    node.getByTestId('backFromSettings');
  });

  it('Wallet behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider
        value={{
          ...commonNavigationContextValue,
          activeTab: Tabs.wallet,
        }}
      >
        <Topbar />
      </NavigationContext.Provider>,
    );

    node.getByTestId('logo');
    node.getByTestId('settings');
  });

  it('Details behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider
        value={{
          ...commonNavigationContextValue,
          activeTab: Tabs.details,
          details: navigationDetailsValue,
        }}
      >
        <Topbar />
      </NavigationContext.Provider>,
    );

    node.getByTestId('backFromCrypto');
    node.getByTestId('favourites');
    node.getByTestId('settings');
  });

  it('Add to favourites', () => {
    const node = renderNode(
      <SettingsContext.Provider value={commonSettingsContextValue}>
        <NavigationContext.Provider
          value={{
            ...commonNavigationContextValue,
            activeTab: Tabs.details,
            details: navigationDetailsValue,
          }}
        >
          <Topbar />
        </NavigationContext.Provider>
      </SettingsContext.Provider>,
    );

    node.getByTestId('favourites');
    node.getByTestId('favourites-text');

    expect(node.getByTestId('favourites-text').props.accessibilityLabel).toEqual('Add to favourites');

    expect(changeSettingsFn).toHaveBeenCalledTimes(0);

    fireEvent.press(node.getByTestId('favourites'));

    expect(changeSettingsFn).toHaveBeenCalledTimes(1);
    expect(changeSettingsFn).toHaveBeenCalledWith('FAVOURITES_KEY' as SettingsKeysType, ['btc']);
  });

  it('Remove from favourites', () => {
    const node = renderNode(
      <SettingsContext.Provider
        value={{
          ...commonSettingsContextValue,
          settings: {
            ...commonSettingsContextValue.settings,
            FAVOURITES_KEY: ['btc'] as SettingsValue,
          },
        }}
      >
        <NavigationContext.Provider
          value={{
            ...commonNavigationContextValue,
            activeTab: Tabs.details,
            details: navigationDetailsValue,
          }}
        >
          <Topbar />
        </NavigationContext.Provider>
      </SettingsContext.Provider>,
    );

    node.getByTestId('favourites');
    node.getByTestId('favourites-text');

    expect(node.getByTestId('favourites-text').props.accessibilityLabel).toEqual('Remove from favourites');

    expect(changeSettingsFn).toHaveBeenCalledTimes(1);

    fireEvent.press(node.getByTestId('favourites'));

    expect(changeSettingsFn).toHaveBeenCalledTimes(2);
    expect(changeSettingsFn).toHaveBeenCalledWith('FAVOURITES_KEY' as SettingsKeysType, []);
  });
});
