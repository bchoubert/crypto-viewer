import React from 'react';
import CryptoDescription from '../../../components/CryptoDetails/CryptoDescription';
import { renderNode } from '../../../components/testUtils/bootstrap';
import CryptoCurrenciesIconMap from '../../../components/Utils/CryptoCurrencyIconsMap';
import { NavigationContext, NavigationContextInterface } from '../../../contexts/NavigationProvider';

describe('<CryptoDescription />', () => {
  const navigationContextValue: NavigationContextInterface = {
    statusBarColor: '#334455',
    statusBarMode: 'default',
    activeTab: 'details',
    changeTab: () => null,
    handleBackAction: () => null,
    details: {
      price: 2,
      id: 'btc',
      name: 'Bitcoin',
      status: 'online',
      details: {
        type: '',
        symbol: 'B',
      },
    },
  };

  const cryptoDetails = CryptoCurrenciesIconMap.btc;

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <NavigationContext.Provider value={navigationContextValue}>
        <CryptoDescription />
      </NavigationContext.Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Basic behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider value={navigationContextValue}>
        <CryptoDescription />
      </NavigationContext.Provider>,
    );

    node.getByText(cryptoDetails.description);

    expect(node.getByTestId('website-text').props.accessibilityLabel).toContain(cryptoDetails.website);
  });
});
