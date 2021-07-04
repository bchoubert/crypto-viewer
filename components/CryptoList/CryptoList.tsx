import React, {
  FC, memo, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import {
  Text, StyleSheet, ToastAndroid, SectionList,
} from 'react-native';

import Colors from '../../assets/Colors';

import NetworkService from '../../services/Network.service';
import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import QuoteType from '../../models/QuoteType';
import ExchangeRates from '../../models/ExhangeRates';
import CryptoListItem from './CryptoListItem';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { TranslationContext } from '../../contexts/TranslationProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.white,
  },
});

interface CryptoListProps {}

/* Render the crypto list */
const CryptoList: FC<CryptoListProps> = () => {
  const {
    settings,
  } = useContext(SettingsContext);

  const t = useContext(TranslationContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);
  const favouritesList = useMemo(() => settings.FAVOURITES_KEY as string[], [settings]);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [mainAssets, setMainAssets] = useState<Crypto[]>([]);
  const [otherAssets, setOtherAssets] = useState<Crypto[]>([]);

  // Get all currencies
  const fetchCryptos = useCallback(async () => {
    setLoading(true);

    const fetchedCryptos = await NetworkService.fetchCryptos()
      .catch((error) => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    const unsortedCryptos = (fetchedCryptos || []).filter((currency) => (currency as Crypto).details.type === 'crypto') as Crypto[];

    // Take currencies, then fetch all exchange rates and sort assets
    const exchangeRates = await NetworkService.fetchCryptoExchangeRates(quote.code)
      .catch((error) => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    const newMainAssets = [];
    const newOtherAssets = [];

    unsortedCryptos.forEach((currency) => {
      if ((exchangeRates as ExchangeRates).data.rates[currency.id]) {
        newMainAssets.push({
          price: 1 / parseFloat((exchangeRates as ExchangeRates).data.rates[currency.id]),
          ...currency,
        });
      } else {
        newOtherAssets.push(currency);
      }
    });

    setMainAssets(newMainAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')));
    setOtherAssets(newOtherAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')));
    setLoading(false);
  }, [setMainAssets, setOtherAssets, setLoading]);

  useEffect(() => {
    const asyncFetchCryptos = async () => fetchCryptos();
    asyncFetchCryptos();
  }, []);

  const sections = useMemo(
    () => {
      const baseSections = [
        { title: t.list.main, id: 'main', data: mainAssets },
        { title: t.list.other, id: 'other', data: otherAssets },
      ];
      if ((favouritesList || []).length > 0) {
        const items = mainAssets.filter((asset) => (favouritesList || []).includes(asset.id));
        const finalItems = [];

        for (let i = 0; i < Math.ceil(items.length / 2); i += 1) {
          if (i < items.length) {
            const newItems = [items[i * 2]];
            if (items[i * 2 + 1]) {
              newItems.push(items[i * 2 + 1]);
            }
            finalItems.push(newItems);
          }
        }

        baseSections.unshift({ title: t.list.favourites, id: 'favourites', data: finalItems });
      }
      return baseSections;
    },
    [mainAssets, otherAssets, favouritesList, t],
  );

  const handleRenderItem = useCallback(
    ({ item, section }) => {
      const itemKey = `${section.title}_${(item[0] || item).id}`;
      return (
        <CryptoListItem
          key={itemKey}
          crypto={item}
          section={section}
        />
      );
    },
    [],
  );

  const handleRenderSectionHeader = useCallback(
    ({ section }) => (
      <Text
        style={styles.sectionHeader}
        key={section.title}
      >
        {section.title}
      </Text>
    ),
    [styles],
  );

  // Render the view with sorted assets
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      stickySectionHeadersEnabled
      onRefresh={fetchCryptos}
      refreshing={isLoading}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
      keyExtractor={(item) => item.id}
    />
  );
};

export default memo(CryptoList);
