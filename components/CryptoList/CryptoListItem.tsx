import React, {
  FC, memo, useCallback, useContext, useMemo,
} from 'react';
import {
  SectionListData, View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import QuoteType from '../../models/QuoteType';
import Tabs from '../../models/Tabs';
import CryptoIcon from '../Utils/CryptoIcon';
import Tile, { TileMode } from '../Utils/Tile';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { SettingsContext } from '../../contexts/SettingsProvider';

const styles = StyleSheet.create({
  crypto_item: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    padding: 10,
  },
  crypto_item_content: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.veryLightGray,
  },
  crypto_item_properties: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  crypto_item_details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crypto_item_names: {
    fontSize: 25,
    justifyContent: 'flex-start',
    width: 200,
  },
  crypto_item_name: {
    fontSize: 18,
  },
  crypto_item_id: {
    fontSize: 12,
    color: Colors.gray,
  },
  crypto_item_price: {
    paddingRight: 5,
  },
  crypto_item_next_icon: {
    color: Colors.gray,
    fontSize: 14,
  },
  favourite_list_item: {
    display: 'flex',
    flexDirection: 'row',
  },
  favourite_item: {
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer',
  },
});

interface CryptoListItemProps {
  section: SectionListData<Crypto>;
  crypto: Crypto | Crypto[];
}

const CryptoListItem: FC<CryptoListItemProps> = ({
  section,
  crypto,
}) => {
  const {
    changeTab,
  } = useContext(NavigationContext);

  const {
    settings,
  } = useContext(SettingsContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);

  const handleGoToDetails = useCallback(
    (cryptoToOpen) => changeTab(Tabs.details, cryptoToOpen),
    [crypto, changeTab],
  );

  // Render favourites
  if (section.id === 'favourites') {
    const finalCryptos = crypto as Crypto[];

    return (
      <View style={styles.favourite_list_item} key={`view_${finalCryptos[0]?.id}`}>
        {finalCryptos.map((cryptoItem) => {
          const cryptoColor = UtilsService.getColorFromCrypto(cryptoItem.id);
          const price = cryptoItem?.price ? `${UtilsService.truncateIntelligentNumber(cryptoItem.price)} ${quote.symbol}` : '';

          return (
            <Tile
              key={`item_${cryptoItem.id}`}
              mode={TileMode.FULL}
              color={cryptoColor}
              label={(
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <CryptoIcon
                    code={cryptoItem.id.toLowerCase()}
                    style={{ height: 15, width: 15 }}
                    styleForIcon={{ height: 15, width: 15 }}
                  />
                  <Text style={{ color: Colors.white }} numberOfLines={1}>{cryptoItem.name}</Text>
                </View>
              )}
              number={price}
              style={styles.favourite_item}
              onPress={() => handleGoToDetails(cryptoItem)}
            />
          );
        })}
        {finalCryptos.length === 1 ? <View style={{ flex: 1, margin: 10, padding: 10 }} /> : null}
      </View>
    );
  }

  const finalCrypto = crypto as Crypto;

  // Compute the price
  const price = finalCrypto?.price ? `${UtilsService.truncateIntelligentNumber(finalCrypto.price)} ${quote.symbol}` : '';

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(finalCrypto.id),
    [finalCrypto],
  );

  // Render the complete list item with action
  if (section.id === 'other') {
    return (
      <View style={styles.crypto_item} key={`other_${finalCrypto.id}`}>
        <View style={{ ...styles.crypto_item_content, backgroundColor: `${cryptoColor}15` }}>
          <View style={styles.crypto_item_properties}>
            <CryptoIcon code={finalCrypto.id.toLowerCase()} />
            <View style={styles.crypto_item_names}>
              <Text style={styles.crypto_item_name}>{finalCrypto.name}</Text>
              <Text style={styles.crypto_item_id}>{finalCrypto.id}</Text>
            </View>
          </View>
          <View style={styles.crypto_item_details}>
            <Text style={styles.crypto_item_price}>{price}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.crypto_item} onPress={() => handleGoToDetails(finalCrypto)} key={`main_${finalCrypto.id}`}>
      <View style={{ ...styles.crypto_item_content, backgroundColor: `${cryptoColor}15` }}>
        <View style={styles.crypto_item_properties}>
          <CryptoIcon code={finalCrypto.id.toLowerCase()} />
          <View style={styles.crypto_item_names}>
            <Text style={styles.crypto_item_name}>{finalCrypto.name}</Text>
            <Text style={styles.crypto_item_id}>{finalCrypto.id}</Text>
          </View>
        </View>
        <View style={styles.crypto_item_details}>
          <Text style={styles.crypto_item_price}>{price}</Text>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.crypto_item_next_icon }}>
            {CryptoViewerIconsMap.next.unicode}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CryptoListItem);
