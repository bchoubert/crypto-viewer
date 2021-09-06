import React from 'react';
import { Image } from '../../components/PassThroughComponents';
import { renderNode } from '../../components/testUtils/bootstrap';
import CryptoIcon from '../../components/Utils/CryptoIcon';

describe('<CryptoIcon />', () => {
  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <CryptoIcon
        code="btc"
      />,
    );

    expect(toJSON()).toMatchSnapshot();

    expect(Image).toHaveBeenCalledTimes(1);
  });

  it('No error even if crypto code is not existing', () => {
    renderNode(
      <CryptoIcon
        code="non_existing_crypto"
      />,
    );

    expect(Image).toHaveBeenCalledTimes(2);
  });
});
