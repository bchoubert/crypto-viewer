import React, { FC, useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { renderNode } from '../../components/testUtils/bootstrap';
import Crypto from '../../models/Crypto';
import { NavigationContext, NavigationContextInterface } from '../../contexts/NavigationProvider';

const NavigationTestComponent: FC = () => {
  const {
    activeTab, changeTab, handleBackAction, details,
  } = useContext(NavigationContext);

  return (
    <View>
      <Text>{activeTab}</Text>
      <Text>{details.name}</Text>
      <Button title="Change tab" onPress={() => changeTab('settings')} />
      <Button title="Handle back action" onPress={() => handleBackAction()} />
    </View>
  );
};

describe('NavigationProvider', () => {
  it('Context', () => {
    const navigationContext: NavigationContextInterface = {
      activeTab: 'list',
      changeTab: jest.fn(),
      handleBackAction: jest.fn(),
      details: {
        name: 'TEST_LABEL',
      } as Crypto,
      statusBarColor: '#000000',
      statusBarMode: 'default',
    };

    const node = renderNode(
      <NavigationContext.Provider value={navigationContext}>
        <NavigationTestComponent />
      </NavigationContext.Provider>,
    );

    const changeTabButton = node.getByText('Change tab');
    const handleBackActionButton = node.getByText('Handle back action');

    node.getByText(navigationContext.activeTab);
    node.getByText(navigationContext.details.name);

    expect(navigationContext.changeTab).toHaveBeenCalledTimes(0);
    expect(navigationContext.handleBackAction).toHaveBeenCalledTimes(0);

    fireEvent.press(changeTabButton);

    expect(navigationContext.changeTab).toHaveBeenCalledTimes(1);
    expect(navigationContext.handleBackAction).toHaveBeenCalledTimes(0);

    fireEvent.press(handleBackActionButton);

    expect(navigationContext.changeTab).toHaveBeenCalledTimes(1);
    expect(navigationContext.handleBackAction).toHaveBeenCalledTimes(1);
  });
});
