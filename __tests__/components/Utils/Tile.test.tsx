import React from 'react';
import { Text } from 'react-native';
import { renderNode } from '../../../components/testUtils/bootstrap';
import Tile, { TileMode } from '../../../components/Utils/Tile';

describe('<Tile />', () => {
  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <Tile
        mode={TileMode.FULL}
        label="Label"
        number="5.52"
        color="#335588"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Tile modes', () => {
    const commonProps = {
      label: 'Label',
      number: '5.52',
      color: '#335588',
    };

    const clearNode = renderNode(
      <Tile
        {...commonProps}
        mode={TileMode.CLEAR}
      />,
    );

    clearNode.getByText(commonProps.number);
    clearNode.getByText(commonProps.label);

    const lightNode = renderNode(
      <Tile
        {...commonProps}
        mode={TileMode.LIGHT}
      />,
    );

    lightNode.getByText(commonProps.number);
    lightNode.getByText(commonProps.label);

    const fullNode = renderNode(
      <Tile
        {...commonProps}
        mode={TileMode.FULL}
      />,
    );

    fullNode.getByText(commonProps.number);
    fullNode.getByText(commonProps.label);

    const tallNode = renderNode(
      <Tile
        {...commonProps}
        mode={TileMode.TALL}
      />,
    );

    tallNode.getByText(commonProps.number);
    tallNode.getByText(commonProps.label);
  });

  it('Label node', () => {
    const labelToTest = 'LABEL_TO_TEST';

    const node = renderNode(
      <Tile
        mode={TileMode.LIGHT}
        number="5.52"
        label={(
          <Text>{labelToTest}</Text>
        )}
        color="#335588"
      />,
    );

    node.getByText(labelToTest);
  });

  it('Long number mode', () => {
    const numberToTest = '5.5264548616768761';

    const node = renderNode(
      <Tile
        label="Label"
        color="#335588"
        mode={TileMode.LIGHT}
        number={numberToTest}
        isLongNumber
      />,
    );

    node.getByText(numberToTest);
  });
});
