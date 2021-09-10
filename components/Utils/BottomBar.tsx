import React, {
  FC, memo, useCallback, useContext, useMemo,
} from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import Colors from '../../assets/Colors';

import Tabs from '../../models/Tabs';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { TranslationContext } from '../../contexts/TranslationProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

const styles = StyleSheet.create({
  bottomBar: {
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: Colors.gray,
    borderTopWidth: 1,
  },
  bottomBarButtonContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer',
  },
});

const BottomBar: FC = () => {
  const {
    activeTab, changeTab,
  } = useContext(NavigationContext);

  const t = useContext(TranslationContext);

  const theme = useContext(ThemeContext);

  const handleListAction = useCallback(() => changeTab(Tabs.list), [changeTab]);
  const handleWalletAction = useCallback(() => changeTab(Tabs.wallet), [changeTab]);

  const activeTextColor = useMemo(
    () => (theme.isDark ? Colors.white : Colors.blue),
    [theme],
  );

  if ([Tabs.list, Tabs.wallet].includes(activeTab)) {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={handleListAction}
          style={styles.bottomBarButtonContainer}
        >
          <Text
            style={{
              ...styles.cryptoViewerIcon,
              color: (activeTab === Tabs.list) ? activeTextColor : theme.textColor,
            }}
            testID={Tabs.list}
          >
            {CryptoViewerIconsMap.prices.unicode}
          </Text>
          {activeTab === Tabs.list
            ? (
              <Text style={{ color: activeTextColor }}>
                {t.menu.prices}
              </Text>
            ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleWalletAction}
          style={styles.bottomBarButtonContainer}
        >
          <Text
            style={{
              ...styles.cryptoViewerIcon,
              color: (activeTab === Tabs.wallet) ? activeTextColor : theme.textColor,
            }}
            testID={Tabs.wallet}
          >
            {CryptoViewerIconsMap.wallet.unicode}
          </Text>
          {activeTab === Tabs.wallet
            ? (
              <Text style={{ color: activeTextColor }}>
                {t.menu.wallet}
              </Text>
            ) : null}
        </TouchableOpacity>
      </View>
    );
  }

  // If not on the list or wallet view, show nothing
  return null;
};

export default memo(BottomBar);
