import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Text, StyleSheet, ToastAndroid, SectionList } from 'react-native';

import Colors from '../../assets/Colors';

import NetworkService from '../../services/Network.service';
import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import quoteType from '../../models/QuoteType';
import ExchangeRates from '../../models/ExhangeRates';
import CryptoListItem from './CryptoListItem';
import { tabType } from '../../models/Tabs';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: Colors.white,
  }
});

interface CryptoListProps {
  // Quote as selected
  quote: quoteType;
  // Change tab callback function to load details of a crypto
  changeTab: (tabName: tabType, newDetails: Object) => any;
}

/* Render the crypto list */
const CryptoList: FC<CryptoListProps> = ({
  quote,
  changeTab,
}) => {

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
    () => [
      { title: 'Main assets', id: 'main', data: mainAssets },
      { title: 'Other assets', id: 'other', data: otherAssets }
    ],
    [mainAssets, otherAssets],
  );

  const handleRenderItem = useCallback(
    ({ item, section }) => (
      <CryptoListItem
        crypto={item}
        section={section}
        quote={quote}
        changeTab={changeTab}
      />
    ),
    [quote, changeTab],
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
