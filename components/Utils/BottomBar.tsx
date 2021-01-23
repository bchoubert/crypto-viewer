import React, { FC, memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/CryptoViewerIconsMap';

import Colors from '../../assets/Colors';

import { tabType } from '../../App';

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

interface BottomBarProps {
  activeTab: tabType;
  changeTab: (newTabType: tabType) => any;
}

const BottomBar: FC<BottomBarProps> = ({
  activeTab,
  changeTab,
}) => {
  const handleListAction = useCallback(() => changeTab('list'), [changeTab]);
  const handleWalletAction = useCallback(() => changeTab('wallet'), [changeTab]);

  if (['list', 'wallet'].includes(activeTab)) {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={handleListAction} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (activeTab === 'list') ? Colors.blue : 'black' }}>
            {CryptoViewerIconsMap.prices.unicode}
          </Text>
          {activeTab === 'list' ?
            (
              <Text style={{ color: 'blue' }}>
                Prices
              </Text>
            ) : null
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWalletAction} style={styles.bottomBarButtonContainer}>
          <Text style={{ ...styles.cryptoViewerIcon, color: (activeTab === 'wallet') ? Colors.blue : 'black' }}>
            {CryptoViewerIconsMap.wallet.unicode}
          </Text>
          {activeTab === 'wallet' ?
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

  const handleBackAction = useCallback(() => changeTab('list'), [changeTab]);

  // If not on the list or wallet view, show a back button to get back to the list interface
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={handleBackAction} style={styles.bottomBarButtonContainer}>
        <Text style={styles.cryptoViewerIcon}>
          {CryptoViewerIconsMap.back.unicode}
        </Text>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(BottomBar);
