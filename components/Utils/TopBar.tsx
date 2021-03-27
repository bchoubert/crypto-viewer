import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

import CryptoViewerIconsMap from './../../assets/fonts/baseIcons/CryptoViewerIconsMap';
import Colors from './../../assets/Colors';
import Tabs, { tabType } from '../../models/Tabs';
import Crypto from '../../models/Crypto';
import UtilsService from '../../services/Utils.service';

const styles = StyleSheet.create({
  topBar: {
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: Colors.white,
    position: 'relative',
    zIndex: 3,
  },
  topBarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarText: {
    marginLeft: 5,
    fontSize: 20,
    color: Colors.blue,
  },
  topBarInsideContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  cryptoViewerIcon: {
    fontSize: 20,
    padding: 10,
    fontFamily: 'crypto-viewer',
  }
});

interface TopBarProps {
  handleChangeTabList: () => void;
  handleChangeTabSettings: () => void;
  handleBackAction: () => void;
  crypto: Crypto;
  activeTab: tabType;
}

const TopBar: FC<TopBarProps> = ({
  handleChangeTabList,
  handleChangeTabSettings,
  handleBackAction,
  crypto,
  activeTab,
}) => {
  const isInsideCrypto = useMemo(
    () => activeTab === Tabs.details && !!crypto,
    [activeTab, crypto],
  );

  const innerLeft = useMemo(
    () => {
      if (isInsideCrypto) {
        return (
          <TouchableOpacity onPress={handleBackAction}>
            <Text style={{ ...styles.cryptoViewerIcon, color: Colors.white }}>
              {CryptoViewerIconsMap.back.unicode}
            </Text>
          </TouchableOpacity>
        );
      } else if (activeTab === Tabs.settings) {
        return (
          <TouchableOpacity onPress={handleBackAction}>
            <Text style={styles.cryptoViewerIcon}>
              {CryptoViewerIconsMap.back.unicode}
            </Text>
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity onPress={handleChangeTabList} style={styles.topBarIconContainer}>
            <Image style={{ width: 50, height: 50 }} source={require('./../../assets/icon.png')} />
            <Text style={styles.topBarText}>Crypto Viewer</Text>
          </TouchableOpacity>
        );
      }
    },
    [activeTab, isInsideCrypto, handleBackAction, handleChangeTabList],
  );

  const innerRight = useMemo(
    () => {
      if (isInsideCrypto) {
        return (
          <View style={styles.topBarInsideContainer}>
            <TouchableOpacity onPress={handleChangeTabSettings}>
              <Text style={{ ...styles.cryptoViewerIcon, ...({ color: Colors.white }) }}>
                {CryptoViewerIconsMap.star_empty.unicode}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeTabSettings}>
              <Text style={{ ...styles.cryptoViewerIcon, ...({ color: Colors.white }) }}>
                {CryptoViewerIconsMap.settings.unicode}
              </Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <TouchableOpacity onPress={handleChangeTabSettings}>
            <Text style={styles.cryptoViewerIcon}>
              {CryptoViewerIconsMap.settings.unicode}
            </Text>
          </TouchableOpacity>
        );
      }
    },
    [isInsideCrypto],
  );

  return (
    <View style={{ ...styles.topBar, ...(isInsideCrypto ? { backgroundColor: 'transparent' } : {}) }}>
      {innerLeft}
      {innerRight}
    </View>
  );
}


export default TopBar;
