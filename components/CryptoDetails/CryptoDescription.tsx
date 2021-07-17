import React, {
  FC, useCallback, useMemo, useContext, memo,
} from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Linking,
} from 'react-native';

import ColorService from '../../services/Color.service';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';
import CryptoCurrenciesIconMap from '../Utils/CryptoCurrencyIconsMap';

import { NavigationContext } from '../../contexts/NavigationProvider';
import { TranslationContext } from '../../contexts/TranslationProvider';
import { ThemeContext } from '../../contexts/ThemeProvider';

interface CryptoDescriptionProps {}

const CryptoDescription: FC<CryptoDescriptionProps> = () => {
  const {
    details,
  } = useContext(NavigationContext);

  const t = useContext(TranslationContext);

  const theme = useContext(ThemeContext);

  const cryptoColor = useMemo(
    () => ColorService.getColorFromCrypto(details?.id),
    [details],
  );

  const adjustedCryptoColor = useMemo(
    () => theme.adjustColorIfTooDarkOrLight(cryptoColor),
    [cryptoColor, theme, theme.isDark],
  );

  const styles = useMemo(
    () => StyleSheet.create({
      description: {
        flexDirection: 'column',
      },
      description_title: {
        paddingLeft: 20,
        paddingRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.textColor,
      },
      description_text: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        lineHeight: 20,
        color: theme.textColor,
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
        width: 10,
        marginLeft: 5,
        fontFamily: 'crypto-viewer',
        color: adjustedCryptoColor,
      },
      description_website_text: {
        fontWeight: 'bold',
        marginLeft: 10,
        width: 100,
        color: adjustedCryptoColor,
      },
    }),
    [cryptoColor, theme],
  );

  const openWebsite = useCallback(
    () => Linking.openURL(CryptoCurrenciesIconMap[details?.id?.toLowerCase()]?.website),
    [details],
  );

  if (!details || !CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.description
  || !CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.website) {
    return null;
  }

  return (
    <View style={styles.description}>
      <Text style={styles.description_title}>
        {t.details.details}
      </Text>
      <Text style={styles.description_text}>
        {CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.description || ''}
      </Text>
      {CryptoCurrenciesIconMap[details.id?.toLowerCase()]?.website ? (
        <TouchableOpacity onPress={openWebsite} style={styles.description_website}>
          <Text style={styles.description_website_icon}>
            {CryptoViewerIconsMap.link.unicode}
          </Text>
          <Text style={styles.description_website_text}>
            {t.details.website}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default memo(CryptoDescription);
