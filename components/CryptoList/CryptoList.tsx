import React, { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Text, StyleSheet, ToastAndroid, SectionList } from 'react-native';

import Colors from '../../assets/Colors';

import NetworkService from '../../services/Network.service';
import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import quoteType from '../../models/QuoteType';
import ExchangeRates from '../../models/ExhangeRates';
import CryptoListItem from './CryptoListItem';
import { tabType } from '../../models/Tabs';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { SettingsContext } from '../../contexts/SettingsProvider';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: Colors.white,
  }
});

interface CryptoListProps {}

/* Render the crypto list */
const CryptoList: FC<CryptoListProps> = ({}) => {
  const {
    settings,
  } = useContext(SettingsContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as quoteType, [settings]);
  const favouritesList = useMemo(() => settings.FAVOURITES_KEY as string[], [settings]);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [mainAssets, setMainAssets] = useState<Crypto[]>([]);
  const [otherAssets, setOtherAssets] = useState<Crypto[]>([]);

  // Get all currencies
  const fetchCryptos = useCallback(async () => {
    setLoading(true);

    const fetchedCryptos = await NetworkService.fetchCryptos()
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    const unsortedCryptos = (fetchedCryptos || []).filter(currency => (currency as Crypto).details.type === 'crypto') as Crypto[];


    // Take currencies, then fetch all exchange rates and sort assets
    const exchangeRates = await NetworkService.fetchCryptoExchangeRates(quote.code)
      .catch(error => ToastAndroid.show(error, ToastAndroid.BOTTOM));

    let mainAssets = [], otherAssets = [];

    unsortedCryptos.forEach(currency => {
      if (!!(exchangeRates as ExchangeRates).data.rates[currency.id]) {
        mainAssets.push(Object.assign({ price: 1 / parseFloat((exchangeRates as ExchangeRates).data.rates[currency.id]) }, currency));
      } else {
        otherAssets.push(currency);
      }
    });

    setMainAssets(mainAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')));
    setOtherAssets(otherAssets.sort((cur1, cur2) => UtilsService.sortFnOnStringProperty(cur1, cur2, 'name')));
    setLoading(false);
  }, [setMainAssets, setOtherAssets, setLoading]);

  useEffect(() => {
    const asyncFetchCryptos = async () => fetchCryptos();
    asyncFetchCryptos();
  }, []);

  const sections = useMemo(
    () => {
      let sections = [
        { title: 'Main assets', id: 'main', data: mainAssets },
        { title: 'Other assets', id: 'other', data: otherAssets }
      ];
      if ((favouritesList || []).length > 0) {
        const items = mainAssets.filter(asset => (favouritesList || []).includes(asset.id));
        const finalItems = [];

        for (let i = 0; i < Math.ceil(items.length / 2); i++) {
          if (i < items.length) {
            const newItems = [items[i * 2]];
            if (items[i * 2 + 1]) {
              newItems.push(items[i * 2 + 1]);
            }
            finalItems.push(newItems);
          }
        }       

        sections.unshift({ title: 'Favourites', id: 'favourites', data: finalItems });
      }
      return sections;
    },
    [mainAssets, otherAssets, favouritesList],
  );

  const handleRenderItem = useCallback(
    ({ item, section }) => (
      <CryptoListItem
        crypto={item}
        section={section}
      />
    ),
    [],
  );

  const handleRenderSectionHeader = useCallback(
    ({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>,
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
      keyExtractor={item => item.id} />
  );
}

export default memo(CryptoList);
