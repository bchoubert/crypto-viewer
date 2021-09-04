import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import EnTranslation from '../../../assets/translations/en';
import {
  NavigationContext,
  NavigationContextInterface,
} from '../../../contexts/NavigationProvider';
import Tabs from '../../../models/Tabs';
import { DarkModeType } from '../../../models/DarkMode';
import { renderNode } from '../../testUtils/bootstrap';

import BottomBar from '../../Utils/BottomBar';
import { ThemeContext, themes } from '../../../contexts/ThemeProvider';

describe('<BottomBar />', () => {
  const defaultNavigationContextValues: NavigationContextInterface = {
    activeTab: Tabs.list,
    changeTab: jest.fn(),
    details: null,
    statusBarColor: '',
    statusBarMode: 'dark-content',
    handleBackAction: null,
  };

  it('Prints correctly', () => {
    const { getByText, queryByText, toJSON } = renderNode(<BottomBar />);
    expect(toJSON()).toMatchSnapshot();

    getByText(EnTranslation.menu.prices);
    expect(queryByText(EnTranslation.menu.wallet)).toBeNull();
  });

  describe('Theme', () => {
    it('light', () => {
      const lightTheme = themes['light' as DarkModeType];

      const node = renderNode(
        <ThemeContext.Provider value={lightTheme}>
          <NavigationContext.Provider value={defaultNavigationContextValues}>
            <BottomBar />
          </NavigationContext.Provider>
        </ThemeContext.Provider>,
      );

      expect(node.getByTestId(Tabs.list).props.style.color).toEqual(lightTheme.actionText);
      expect(node.getByTestId(Tabs.wallet).props.style.color).toEqual(lightTheme.textColor);
    });

    it('dark', () => {
      const darkTheme = themes['dark' as DarkModeType];

      const node = renderNode(
        <ThemeContext.Provider value={darkTheme}>
          <NavigationContext.Provider value={defaultNavigationContextValues}>
            <BottomBar />
          </NavigationContext.Provider>
        </ThemeContext.Provider>,
      );

      expect(node.getByTestId(Tabs.list).props.style.color).toEqual(darkTheme.actionText);
      expect(node.getByTestId(Tabs.wallet).props.style.color).toEqual(darkTheme.textColor);
    });
  });

  describe('Prints correct active tab', () => {
    it('List', () => {
      const node = renderNode(
        <NavigationContext.Provider value={defaultNavigationContextValues}>
          <BottomBar />
        </NavigationContext.Provider>,
      );

      // Prices is printed, wallet is not
      node.getByText(EnTranslation.menu.prices);
      expect(node.queryByText(EnTranslation.menu.wallet)).toBeNull();
    });

    it('Wallet', () => {
      const node = renderNode(
        <NavigationContext.Provider
          value={{
            ...defaultNavigationContextValues,
            activeTab: Tabs.wallet,
          }}
        >
          <BottomBar />
        </NavigationContext.Provider>,
      );

      // Prices is not printed, wallet is
      expect(node.queryByText(EnTranslation.menu.prices)).toBeNull();
      node.getByText(EnTranslation.menu.wallet);
    });

    it('Other tab', () => {
      const node = renderNode(
        <NavigationContext.Provider
          value={{
            ...defaultNavigationContextValues,
            activeTab: Tabs.details,
          }}
        >
          <BottomBar />
        </NavigationContext.Provider>,
      );

      // Other tabs should not popup the bottom bar
      expect(node.toJSON()).toEqual(null);
    });
  });

  it('Change tab', () => {
    const node = renderNode(
      <NavigationContext.Provider value={defaultNavigationContextValues}>
        <BottomBar />
      </NavigationContext.Provider>,
    );

    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledTimes(0);

    // Click on active tab text
    fireEvent.press(node.getByText(EnTranslation.menu.prices));
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledTimes(1);
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledWith(Tabs.list);

    // Click on active tab via testId
    fireEvent.press(node.getByTestId(Tabs.list));
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledTimes(2);
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledWith(Tabs.list);

    // Click on other tab via testId
    fireEvent.press(node.getByTestId(Tabs.wallet));
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledTimes(3);
    expect(defaultNavigationContextValues.changeTab).toHaveBeenCalledWith(Tabs.wallet);
  });
});
