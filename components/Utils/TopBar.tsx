import React, {
  FC, useCallback, useContext, useMemo, memo,
} from 'react';
import {
  TouchableOpacity, View, Image, StyleSheet, Text, ToastAndroid,
} from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';
import Colors from '../../assets/Colors';
import Tabs from '../../models/Tabs';
import Crypto from '../../models/Crypto';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { NavigationContext } from '../../contexts/NavigationProvider';
import UtilsService from '../../services/Utils.service';
import { TranslationContext } from '../../contexts/TranslationProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const {
    settings, changeSettings,
  } = useContext(SettingsContext);

  const t = useContext(TranslationContext);

  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    topBar: {
      flexBasis: 60,
      flexGrow: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 8,
      paddingRight: 8,
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
      color: theme.actionText,
    },
    topBarInsideContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    cryptoViewerIcon: {
      fontSize: 20,
      padding: 10,
      fontFamily: 'crypto-viewer',
    },
  }), [theme]);

  const favouritesList = useMemo(() => settings.FAVOURITES_KEY as string[], [settings]);

  const {
    details, activeTab, changeTab,
  } = useContext(NavigationContext);

  const handleChangeTabToList = useCallback(() => changeTab(Tabs.list), [changeTab]);
  const handleChangeTabToSettings = useCallback(() => changeTab(Tabs.settings), [changeTab]);

  const handleChangeTabBack = useCallback(() => changeTab(Tabs.list), [changeTab]);

  const handleChangeFavourites = useCallback(() => {
    if (!details) { return; }

    const activeCurrency = details as Crypto;

    let newList = [...(favouritesList || [])];

    // If already in favourites, remove it. Otherwise, add it
    if (newList.includes(activeCurrency.id)) {
      newList = newList.filter((i) => i !== activeCurrency.id);
      ToastAndroid.show(t.details.favourite_removed, ToastAndroid.BOTTOM);
    } else {
      newList.push(activeCurrency.id);
      ToastAndroid.show(t.details.favourite_added, ToastAndroid.BOTTOM);
    }

    changeSettings('FAVOURITES_KEY', newList.filter(UtilsService.onlyUnique));
  }, [details]);

  const isInsideCrypto = useMemo(
    () => activeTab === Tabs.details && !!details,
    [activeTab, details],
  );

  const isFavourite = useMemo(
    () => (favouritesList || []).includes(details?.id),
    [favouritesList, details],
  );

  const innerLeft = useMemo(
    () => {
      if (isInsideCrypto) {
        return (
          <TouchableOpacity onPress={handleChangeTabBack}>
            <Text
              style={{
                ...styles.cryptoViewerIcon,
                color: Colors.white,
              }}
            >
              {CryptoViewerIconsMap.back.unicode}
            </Text>
          </TouchableOpacity>
        );
      } if (activeTab === Tabs.settings) {
        return (
          <TouchableOpacity onPress={handleChangeTabBack}>
            <Text
              style={{
                ...styles.cryptoViewerIcon,
                color: theme.textColor,
              }}
            >
              {CryptoViewerIconsMap.back.unicode}
            </Text>
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity onPress={handleChangeTabToList} style={styles.topBarIconContainer}>
          {/* eslint-disable-next-line global-require */}
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/icon.png')} />
          <Text style={styles.topBarText}>Crypto Viewer</Text>
        </TouchableOpacity>
      );
    },
    [activeTab, isInsideCrypto, handleChangeTabBack, handleChangeTabToList, theme],
  );

  const innerRight = useMemo(
    () => {
      if (isInsideCrypto) {
        return (
          <View style={styles.topBarInsideContainer}>
            <TouchableOpacity onPress={handleChangeFavourites}>
              <Text
                style={{
                  ...styles.cryptoViewerIcon,
                  color: Colors.white,
                }}
              >
                {isFavourite
                  ? CryptoViewerIconsMap.star.unicode
                  : CryptoViewerIconsMap.star_empty.unicode}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeTabToSettings}>
              <Text
                style={{
                  ...styles.cryptoViewerIcon,
                  color: Colors.white,
                }}
              >
                {CryptoViewerIconsMap.settings.unicode}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <TouchableOpacity onPress={handleChangeTabToSettings}>
          <Text
            style={{
              ...styles.cryptoViewerIcon,
              color: theme.textColor,
            }}
          >
            {CryptoViewerIconsMap.settings.unicode}
          </Text>
        </TouchableOpacity>
      );
    },
    [isInsideCrypto, isFavourite, handleChangeFavourites, theme],
  );

  return (
    <View
      style={{
        ...styles.topBar,
        backgroundColor: isInsideCrypto ? 'transparent' : theme.backgroundColor,
      }}
    >
      {innerLeft}
      {innerRight}
    </View>
  );
};

export default memo(TopBar);
