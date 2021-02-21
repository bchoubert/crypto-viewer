import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
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
    paddingBottom: 50,
    marginTop: 60
  },
  crypto_details: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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

export interface CryptoDetailsProps {
  // The crypto to load
  crypto: Crypto;
  // The quote selected
  quote: quoteType;
  // The date format selected
  dateFormat: dateFormatType;
}

// Details for a crypto
const CryptoDetails: FC<CryptoDetailsProps> = ({
  crypto,
  quote,
  dateFormat,
}) => {
  const [buyPrice, setBuyPrice] = useState<number | null>(null);
  const [sellPrice, setSellPrice] = useState<number | null>(null);
  const [historicRates, setHistoricRates] = useState<any[] | null>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeCandle, setActiveCandle] = useState<candleType>('1W');

  const fetchHistoricRates = useCallback(() => {
    NetworkService.fetchCryptoHistoricRates(crypto.id, quote.code, activeCandle)
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
    NetworkService.fetchCryptoBuyPrice(crypto.id, quote.code)
      .then(price => {
        if (price?.data) {
          setBuyPrice(parseFloat(price.data.amount));
        }
      })
      .catch(console.error);

    // Get the Sell Price of the crypto
    NetworkService.fetchCryptoSellPrice(crypto.id, quote.code)
      .then(price => {
        if (price?.data) {
          setSellPrice(parseFloat(price.data.amount));
        }
      })
      .catch(console.error);

    // Get the 24hr Stats for the crypto
    NetworkService.fetchCrypto24hrStats(crypto.id, quote.code)
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
        <CryptoIcon code={crypto.id.toLowerCase()} />
        <Text style={styles.crypto_name}>
          {`${crypto.name} - ${crypto.id}`}
        </Text>
        {/* Show the current rate compared to the open market (or midnight if 24h/24h) */}
        <CryptoDailyRate rate={stats?.rate} />
        <FadeInView style={{ ...styles.crypto_details_bottom_circle, backgroundColor: UtilsService.getColorFromCrypto(crypto.id) }} />
      </View>
      <ScrollView style={styles.container}>
        <CryptoDescription
          crypto={crypto}
        />
        <CryptoDetailGraph
          historicRates={historicRates}
          quote={quote}
          crypto={crypto}
          dateFormat={dateFormat}
          activeCandle={activeCandle}
          changeActiveCandle={setActiveCandle}
        />
        
        <CryptoDetailStats
          quote={quote}
          crypto={crypto}
          stats={stats}
          buyPrice={buyPrice}
          sellPrice={sellPrice}
        />
      </ScrollView>
    </>
  );
}

export default memo(CryptoDetails);