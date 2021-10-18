import React from 'react';
import CryptoDetailStats from '../../../components/CryptoDetails/CryptoDetailStats';
import { renderNode } from '../../../components/testUtils/bootstrap';
import { NavigationContext, NavigationContextInterface } from '../../../contexts/NavigationProvider';
import Tabs from '../../../models/Tabs';

describe('<CryptoDetailsStats />', () => {
  const commonProps = {
    buyPrice: 12.345,
    sellPrice: 43.210,
    stats: {
      open: '1',
      high: '1.34',
      low: '2.45',
      last: '3.56',
      volume: '100000',
      volume_30day: '222222',
    },
  };

  const navigationContextProps: NavigationContextInterface = {
    activeTab: Tabs.details,
    statusBarColor: '#334455',
    statusBarMode: 'default',
    changeTab: () => null,
    handleBackAction: () => null,
    details: {
      id: 'btc',
      name: 'Bitcoin',
      price: 555555,
      status: 'online',
      details: {
        type: 'type',
        symbol: 'B',
      },
    },
  };

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <NavigationContext.Provider value={navigationContextProps}>
        <CryptoDetailStats
          {...commonProps}
        />
      </NavigationContext.Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Basic checks', () => {
    const node = renderNode(
      <NavigationContext.Provider value={navigationContextProps}>
        <CryptoDetailStats
          {...commonProps}
        />
      </NavigationContext.Provider>,
    );

    // Current price
    node.getByText('555555 $');

    // Buy and sell price
    node.getByText('12.35 $');
    node.getByText('43.21 $');

    // Volumes
    node.getByText('100000');

    // Low and high
    node.getByText('2.45 $');
    node.getByText('1.34 $');
  });
});
