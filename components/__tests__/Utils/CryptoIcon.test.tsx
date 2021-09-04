import React from 'react';
import { Image } from '../../PassThroughComponents';
import { renderNode } from '../../testUtils/bootstrap';
import CryptoIcon from '../../Utils/CryptoIcon';

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
