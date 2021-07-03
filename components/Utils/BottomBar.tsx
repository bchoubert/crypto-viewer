import React, { FC, memo, useCallback, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import Colors from '../../assets/Colors';

import Tabs, { tabType } from '../../models/Tabs';
import { NavigationContext } from '../../contexts/NavigationProvider';

const styles = StyleSheet.create({
  bottomBar: {
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: Colors.gray,
    borderTopWidth: 1
  },
  bottomBarButtonContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

interface BottomBarProps {}

const BottomBar: FC<BottomBarProps> = ({}) => {
  const {
    activeTab, changeTab,
  } = useContext(NavigationContext);

  const handleListAction = useCallback(() => changeTab(Tabs.list), [changeTab]);
  const handleWalletAction = useCallback(() => changeTab(Tabs.wallet), [changeTab]);

  if ([Tabs.list, Tabs.wallet].includes(activeTab)) {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={handleListAction} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (activeTab === Tabs.list) ? Colors.blue : 'black' }}>
            {CryptoViewerIconsMap.prices.unicode}
          </Text>
          {activeTab === Tabs.list ?
            (
              <Text style={{ color: 'blue' }}>
                Prices
              </Text>
            ) : null
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWalletAction} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (activeTab === Tabs.wallet) ? Colors.blue : 'black' }}>
            {CryptoViewerIconsMap.wallet.unicode}
          </Text>
          {activeTab === Tabs.wallet ?
            (
              <Text style={{ color: 'blue' }}>
                Wallet
              </Text>
            ) : null
          }
        </TouchableOpacity>
      </View>
    );
  }

  // If not on the list or wallet view, show nothing
  return null;
}

export default memo(BottomBar);
