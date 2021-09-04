import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import EnTranslation from '../../../assets/translations/en';
import {
  NavigationContext,
  NavigationContextInterface,
} from '../../../contexts/NavigationProvider';
import Tabs from '../../../models/Tabs';
import { renderNode } from '../../testUtils/bootstrap';

import BottomBar from '../../Utils/BottomBar';

describe('<BottomBar />', () => {
  it('Prints correctly', () => {
    const { getByText, queryByText, toJSON } = renderNode(<BottomBar />);
    expect(toJSON()).toMatchSnapshot();

    getByText(EnTranslation.menu.prices);
    expect(queryByText(EnTranslation.menu.wallet)).toBeNull();
  });

  describe('Prints correct active tab', () => {
    it('List', () => {
      const contextValues: NavigationContextInterface = {
        activeTab: Tabs.list,
        changeTab: jest.fn(),
        details: null,
        statusBarColor: '',
        statusBarMode: 'dark-content',
        handleBackAction: null,
      };
      const node = renderNode(
        <NavigationContext.Provider value={contextValues}>
          <BottomBar />
        </NavigationContext.Provider>,
      );

      // Prices is printed, wallet is not
      node.getByText(EnTranslation.menu.prices);
      expect(node.queryByText(EnTranslation.menu.wallet)).toBeNull();
    });

    it('Wallet', () => {
      const contextValues: NavigationContextInterface = {
        activeTab: Tabs.wallet,
        changeTab: jest.fn(),
        details: null,
        statusBarColor: '',
        statusBarMode: 'dark-content',
        handleBackAction: null,
      };
      const node = renderNode(
        <NavigationContext.Provider value={contextValues}>
          <BottomBar />
        </NavigationContext.Provider>,
      );

      // Prices is not printed, wallet is
      expect(node.queryByText(EnTranslation.menu.prices)).toBeNull();
      node.getByText(EnTranslation.menu.wallet);
    });
  });

  it('Change tab', () => {
    const contextValues: NavigationContextInterface = {
      activeTab: Tabs.list,
      changeTab: jest.fn(),
      details: null,
      statusBarColor: '',
      statusBarMode: 'dark-content',
      handleBackAction: null,
    };
    const node = renderNode(
      <NavigationContext.Provider value={contextValues}>
        <BottomBar />
      </NavigationContext.Provider>,
    );

    expect(contextValues.changeTab).toHaveBeenCalledTimes(0);

    // Click on active tab text
    fireEvent.press(node.getByText(EnTranslation.menu.prices));
    expect(contextValues.changeTab).toHaveBeenCalledTimes(1);
    expect(contextValues.changeTab).toHaveBeenCalledWith(Tabs.list);

    // Click on active tab via testId
    fireEvent.press(node.getByTestId(Tabs.list));
    expect(contextValues.changeTab).toHaveBeenCalledTimes(2);
    expect(contextValues.changeTab).toHaveBeenCalledWith(Tabs.list);

    // Click on other tab via testId
    fireEvent.press(node.getByTestId(Tabs.wallet));
    expect(contextValues.changeTab).toHaveBeenCalledTimes(3);
    expect(contextValues.changeTab).toHaveBeenCalledWith(Tabs.wallet);
  });
});
