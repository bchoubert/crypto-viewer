import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderNode } from '../../../components/testUtils/bootstrap';
import WalletListItem from '../../../components/Wallet/WalletListItem';
import { NavigationContext } from '../../../contexts/NavigationProvider';

import Crypto from '../../../models/Crypto';
import Tabs from '../../../models/Tabs';

describe('<WalletListItem />', () => {
  const editFromWalletFn = jest.fn();
  const deleteFromWalletFn = jest.fn();

  const changeTabFn = jest.fn();

  const commonProps = {
    cryptos: [
      {
        id: 'BTC',
        name: 'Bitcoin',
        price: 2,
        details: {
          symbol: 'B',
        },
      } as Crypto,
    ],
    walletItem: {
      crypto: 'BTC',
      amount: 3.5,
    },
    editFromWallet: editFromWalletFn,
    deleteFromWallet: deleteFromWalletFn,
  };

  beforeAll(() => {
    // eslint-disable-next-line no-console -- we don't need warn message from animate
    console.warn = () => null;
  });

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <WalletListItem
        {...commonProps}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Basic behaviour', () => {
    const node = renderNode(
      <NavigationContext.Provider
        value={{
          activeTab: 'wallet',
          changeTab: changeTabFn,
          details: null,
          statusBarColor: '',
          statusBarMode: 'default',
          handleBackAction: () => null,
        }}
      >
        <WalletListItem
          {...commonProps}
        />
      </NavigationContext.Provider>,
    );

    // Unit price
    node.getByText('3.50 B');
    // Item total
    node.getByText('7.00 $');

    node.getByTestId('Edit item Bitcoin');
    node.getByTestId('Delete item Bitcoin');

    expect(editFromWalletFn).toHaveBeenCalledTimes(0);
    expect(deleteFromWalletFn).toHaveBeenCalledTimes(0);

    fireEvent.press(node.getByTestId('Edit item Bitcoin'));
    expect(editFromWalletFn).toHaveBeenCalledTimes(1);
    expect(editFromWalletFn).toHaveBeenCalledWith('BTC');

    fireEvent.press(node.getByTestId('Delete item Bitcoin'));
    expect(deleteFromWalletFn).toHaveBeenCalledTimes(1);
    expect(deleteFromWalletFn).toHaveBeenCalledWith('BTC');

    // Open crypto
    expect(changeTabFn).toHaveBeenCalledTimes(0);
    fireEvent.press(node.getByText('Bitcoin'));
    expect(changeTabFn).toHaveBeenCalledTimes(1);
    expect(changeTabFn).toHaveBeenCalledWith(Tabs.details, commonProps.cryptos[0]);
  });

  it('Total', () => {
    const node = renderNode(
      <WalletListItem
        {...commonProps}
        walletItem={{
          crypto: 'total',
          amount: 56.23,
        }}
      />,
    );

    node.getByText('Total');
    node.getByText('56.23 $');
  });

  it('No crypto', () => {
    renderNode(
      <WalletListItem
        {...commonProps}
        walletItem={{
          crypto: 'NON_EXISTING_CRYPTO',
          amount: 2.5,
        }}
      />,
    );
  });

  it('Crpyto color', () => {
    const specificProps = {
      cryptos: [
        {
          id: 'btc',
          name: 'Bitcoin',
          price: 2,
          details: {
            symbol: 'B',
          },
        } as Crypto,
      ],
      walletItem: {
        crypto: 'btc',
        amount: 3.5,
      },
      editFromWallet: editFromWalletFn,
      deleteFromWallet: deleteFromWalletFn,
    };

    renderNode(
      <WalletListItem
        {...specificProps}
      />,
    );
  });
});
