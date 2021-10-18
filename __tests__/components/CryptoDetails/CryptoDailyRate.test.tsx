import React from 'react';

import CryptoDailyRate from '../../../components/CryptoDetails/CryptoDailyRate';
import { renderNode } from '../../../components/testUtils/bootstrap';

describe('<CryptoDailyRate />', () => {
  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <CryptoDailyRate rate={2.5123} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Positive', () => {
    const node = renderNode(
      <CryptoDailyRate rate={2.5123} />,
    );

    node.getByTestId('sign-plus');
    node.getByText('2.51%');
  });

  it('Negative', () => {
    const node = renderNode(
      <CryptoDailyRate rate={-2.5123} />,
    );

    node.getByTestId('sign-minus');
    node.getByText('2.51%');
  });
});
