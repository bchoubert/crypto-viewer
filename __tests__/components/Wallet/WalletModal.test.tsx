import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderNode } from '../../../components/testUtils/bootstrap';
import WalletModal from '../../../components/Wallet/WalletModal';
import Crypto from '../../../models/Crypto';

describe('<WalletModal />', () => {
  const closeModalFn = jest.fn();
  const saveWalletFn = jest.fn();
  const onSelectedCryptoKeyChangeFn = jest.fn();
  const onSelectedAmountChangeFn = jest.fn();

  const commonProps = {
    isOpen: true,
    closeModal: closeModalFn,
    selectedAmount: '3',
    selectedCryptoKey: 'btc',
    isFormValid: true,
    saveWallet: saveWalletFn,
    onSelectedCryptoKeyChange: onSelectedCryptoKeyChangeFn,
    onSelectedAmountChange: onSelectedAmountChangeFn,
    cryptos: [
      { id: 'btc', name: 'Bitcoin' } as Crypto,
      { id: 'ltc', name: 'Litecoin' } as Crypto,
    ],
  };

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <WalletModal
        {...commonProps}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Basic behaviour', async () => {
    const node = renderNode(
      <WalletModal
        {...commonProps}
      />,
    );

    expect(node.getByLabelText('amount-input').props.value).toEqual('3');
    expect(node.getByTestId('crypto-selector').props.selectedIndex).toEqual(1);

    expect(closeModalFn).toHaveBeenCalledTimes(0);
    fireEvent.press(node.getByText('Cancel'));
    expect(closeModalFn).toHaveBeenCalledTimes(1);

    expect(saveWalletFn).toHaveBeenCalledTimes(0);
    fireEvent.press(node.getByText('Save'));
    expect(saveWalletFn).toHaveBeenCalledTimes(1);
  });

  it('Form fulfilment', () => {
    const node = renderNode(
      <WalletModal
        {...commonProps}
      />,
    );

    expect(onSelectedAmountChangeFn).toHaveBeenCalledTimes(0);
    fireEvent.changeText(
      node.getByLabelText('amount-input'),
      '123',
    );
    expect(onSelectedAmountChangeFn).toHaveBeenCalledTimes(1);
    expect(onSelectedAmountChangeFn).toHaveBeenCalledWith('123');

    expect(node.getByLabelText('amount-input').props.value).toEqual('3');
  });
});
