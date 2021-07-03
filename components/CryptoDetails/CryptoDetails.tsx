import React, { FC, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, ScrollView } from 'react-native';

import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import NetworkService from '../../services/Network.service';
import quoteType from '../../models/QuoteType';
import { dateFormatType } from '../../models/DateFormat';
import { candleType } from '../../models/CandleGranularity';

import Stats from '../../models/Stats';

import CryptoDetailGraph from './CryptoDetailGraph';
import CryptoDetailStats from './CryptoDetailStats';
import CryptoDescription from './CryptoDescription';
import CryptoIcon from '../Utils/CryptoIcon';
import CryptoDailyRate from './CryptoDailyRate';
import { graphModeType } from '../../models/GraphMode';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { SettingsContext } from '../../contexts/SettingsProvider';

const screenWidth = Dimensions.get('window').width;

const FadeInView = (props) => {
  const translateAnim = useRef(new Animated.Value(-0.4 * screenWidth)).current;

  useEffect(() => {
    Animated.timing(
      translateAnim,
      {
        toValue: 50,
        duration: 600,
        useNativeDriver: true,
      }
    ).start();
  }, [translateAnim]);

  const animatedStyle = { transform: [ { translateY: translateAnim } ] };

  return (
    <Animated.View style={{ ...props.style, ...animatedStyle }}>
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    overflow: 'scroll',
    marginTop: 60,
    paddingTop: 50,
  },
  container_last: {
    height: 50,
  },
  crypto_details: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    marginBottom: -50,
  },
  crypto_details_bottom_circle: {
    height: screenWidth * 3,
    width: screenWidth * 3,
    borderRadius: screenWidth * 1.5,
    position: 'absolute',
    bottom: 2,
    left: screenWidth * -1,
    zIndex: -1,
  },
  crypto_name: {
    color: 'white',
    paddingTop: 10
  }
});

export interface CryptoDetailsProps {}

// Details for a crypto
const CryptoDetails: FC<CryptoDetailsProps> = ({}) => {
  const {
    details,
  } = useContext(NavigationContext);

  const {
    settings,
  } = useContext(SettingsContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as quoteType, [settings]);

  const [buyPrice, setBuyPrice] = useState<number | null>(null);
  const [sellPrice, setSellPrice] = useState<number | null>(null);
  const [historicRates, setHistoricRates] = useState<any[] | null>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeCandle, setActiveCandle] = useState<candleType>('1W');

  const fetchHistoricRates = useCallback(() => {
    NetworkService.fetchCryptoHistoricRates(details.id, quote.code, activeCandle)
      .then(newHistoricRates => {
        if (!newHistoricRates || !newHistoricRates.length) {
          setHistoricRates(null);
          return;
        }
        let result = [];
        newHistoricRates.forEach(historicRate => {
          // Parse data and reformat to get JS timestamps compatible with Moment
          result.unshift({
            x: new Date(historicRate[0] * 1000).toISOString(),
            y: historicRate[4],
          });
        });
        setHistoricRates(result);
      })
      .catch(console.warn);
  }, [crypto, quote, activeCandle, setHistoricRates])

  useEffect(() => {
    // Get the Buy Price of the crypto
    NetworkService.fetchCryptoBuyPrice(details.id, quote.code)
      .then(price => {
        if (price?.data) {
          setBuyPrice(parseFloat(price.data.amount));
        }
      })
      .catch(console.error);

    // Get the Sell Price of the crypto
    NetworkService.fetchCryptoSellPrice(details.id, quote.code)
      .then(price => {
        if (price?.data) {
          setSellPrice(parseFloat(price.data.amount));
        }
      })
      .catch(console.error);

    // Get the 24hr Stats for the crypto
    NetworkService.fetchCrypto24hrStats(details.id, quote.code)
      .then(stats => {
        // Check id stats are found or not (the API returns no error code when not found)
        if (stats.message === 'NotFound') {
          console.warn('No 24H stats');
        }
        else {
          setStats({
            ...stats,
            rate: (parseFloat(stats.last) / parseFloat(stats.open) - 1) * 100,
          });
        }
      })
      .catch(console.error);

    fetchHistoricRates();
  }, []);

  useEffect(
    () => {
      setHistoricRates([]);
      fetchHistoricRates();
    },
    [activeCandle],
  );

  return (
    <>
      <View style={styles.crypto_details}>
        <CryptoIcon code={details.id.toLowerCase()} />
        <Text style={styles.crypto_name}>
          {`${details.name} - ${details.id}`}
        </Text>
        {/* Show the current rate compared to the open market (or midnight if 24h/24h) */}
        <CryptoDailyRate rate={stats?.rate} />
        <FadeInView style={{ ...styles.crypto_details_bottom_circle, backgroundColor: UtilsService.getColorFromCrypto(details.id) }} />
      </View>
      <ScrollView style={styles.container}>
        <CryptoDescription
          crypto={details}
        />
        <CryptoDetailGraph
          historicRates={historicRates}
          activeCandle={activeCandle}
          changeActiveCandle={setActiveCandle}
        />
        
        <CryptoDetailStats
          stats={stats}
          buyPrice={buyPrice}
          sellPrice={sellPrice}
        />
        <View style={styles.container_last}></View>
      </ScrollView>
    </>
  );
}

export default memo(CryptoDetails);