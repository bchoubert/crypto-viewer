import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { renderNode } from '../../../components/testUtils/bootstrap';
import Selector from '../../../components/Utils/Selector';

describe('<Selector />', () => {
  const setActiveItem = jest.fn();

  const basicItems = ['item1', 'item2'];

  it('Prints correctly', () => {
    const { toJSON } = renderNode(
      <Selector
        activeItem="item1"
        setActiveItem={setActiveItem}
        items={basicItems}
        color="#335588"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Basic interactions', () => {
    const node = renderNode(
      <Selector
        activeItem="item1"
        setActiveItem={setActiveItem}
        items={basicItems}
        color="#335588"
      />,
    );

    expect(setActiveItem).toHaveBeenCalledTimes(0);

    // Verify items
    basicItems.forEach((item: string) => node.getByText(item));

    // Click on other item
    fireEvent.press(node.getByText('item2'));

    expect(setActiveItem).toHaveBeenCalledTimes(1);
    expect(setActiveItem).toHaveBeenCalledWith('item2');
  });

  it('Custom renderer', () => {
    const node = renderNode(
      <Selector
        activeItem="item1"
        setActiveItem={setActiveItem}
        items={basicItems}
        color="#335588"
        // Replace "item1" by "other1"
        renderItem={(item) => `other${item[item.length - 1]}`}
      />,
    );

    expect(setActiveItem).toHaveBeenCalledTimes(1);

    // Verify items
    node.getByText('other1');
    node.getByText('other2');

    // Click on other item
    fireEvent.press(node.getByText('other2'));

    expect(setActiveItem).toHaveBeenCalledTimes(2);
    expect(setActiveItem).toHaveBeenCalledWith('item2');
  });
});
