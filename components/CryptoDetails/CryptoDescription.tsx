import React, {
  FC, useCallback, useMemo, useContext,
} from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Linking,
} from 'react-native';

import UtilsService from '../../services/Utils.service';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';
import CryptoCurrenciesIconMap from '../Utils/CryptoCurrencyIconsMap';

import { NavigationContext } from '../../contexts/NavigationProvider';

const styles = StyleSheet.create({
  description: {
    flexDirection: 'column',
  },
  description_title: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description_text: {
    color: Colors.darkGray,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    lineHeight: 20,
  },
  description_website: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description_website_icon: {
    fontSize: 12,
  },
  description_website_text: {
    fontWeight: 'bold',
    width: 95,
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer',
  },
});

interface CryptoDescriptionProps {}

const CryptoDescription: FC<CryptoDescriptionProps> = () => {
  const {
    details,
  } = useContext(NavigationContext);

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(details.id),
    [details],
  );

  const openWebsite = useCallback(
    () => Linking.openURL(CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.website),
    [details],
  );

  return (CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.description
    || CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.website ? (
      <View style={styles.description}>
        <Text style={styles.description_title}>
          Details
        </Text>
        <Text style={styles.description_text}>
          {CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.description || ''}
        </Text>
        {CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.website ? (
          <TouchableOpacity onPress={openWebsite} style={styles.description_website}>
            <Text
              numberOfLines={1}
              style={{ ...styles.description_website_text, color: cryptoColor }}
            >
              Official Website
            </Text>
            <Text
              style={{
                ...styles.cryptoViewerIcon,
                ...styles.description_website_icon,
                color: cryptoColor,
              }}
            >
              {CryptoViewerIconsMap.link.unicode}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    ) : null
  );
};

export default CryptoDescription;
