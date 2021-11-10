import React, {
  FC, memo, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  StyleSheet, Text, View, Dimensions, Animated, ScrollView,
} from 'react-native';

import NetworkService from '../../services/Network.service';
import QuoteType from '../../models/QuoteType';
import { CandleType } from '../../models/CandleGranularity';

import Stats from '../../models/Stats';

import CryptoDetailGraph from './CryptoDetailGraph';
import CryptoDetailStats from './CryptoDetailStats';
import CryptoDescription from './CryptoDescription';
import CryptoIcon from '../Utils/CryptoIcon';
import CryptoDailyRate from './CryptoDailyRate';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { SettingsContext } from '../../contexts/SettingsProvider';
import Tabs from '../../models/Tabs';
import LoggerService from '../../services/Logger.service';
import ColorService from '../../services/Color.service';

const screenWidth = Dimensions.get('window').width;

interface FadeInViewProps {
  style: object;
  children?: ReactNode,
}

const FadeInView: FC<FadeInViewProps> = ({ style, children }) => {
  const translateAnim = useRef(new Animated.Value(-0.4 * screenWidth)).current;

  useEffect(() => {
    Animated.timing(
      translateAnim,
      {
        toValue: 50,
        duration: 600,
        useNativeDriver: true,
      },
    ).start();
  }, [translateAnim]);

  const viewStyles = useMemo(
    () => {
      const animatedStyle = { transform: [{ translateY: translateAnim }] };
      return ({
        ...style,
        ...animatedStyle,
      });
    },
    [style],
  );

  return (
    <Animated.View style={viewStyles}>
      {children}
    </Animated.View>
  );
};

export interface CryptoDetailsProps {}

// Details for a crypto
const CryptoDetails: FC<CryptoDetailsProps> = () => {
  const {
    details, changeTab,
  } = useContext(NavigationContext);

  const {
    settings,
  } = useContext(SettingsContext);

  const styles = useMemo(
    () => StyleSheet.create({
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
        paddingTop: 10,
      },
    }),
    [],
  );

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);

  const [buyPrice, setBuyPrice] = useState<number | null>(null);
  const [sellPrice, setSellPrice] = useState<number | null>(null);
  const [historicRates, setHistoricRates] = useState<any[] | null>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeCandle, setActiveCandle] = useState<CandleType>('1W');

  const fetchHistoricRates = useCallback(() => {
    if (!details) {
      return;
    }
    NetworkService.fetchCryptoHistoricRates(details.id, quote.code, activeCandle)
      .then((newHistoricRates) => {
        if (!newHistoricRates || !newHistoricRates.length) {
          setHistoricRates(null);
          return;
        }
        const result = [];
        newHistoricRates.forEach((historicRate) => {
          // Parse data and reformat to get JS timestamps compatible with Moment
          result.unshift({
            x: new Date(historicRate[0] * 1000).toISOString(),
            y: historicRate[4],
          });
        });
        setHistoricRates(result);
      })
      .catch(LoggerService.warn);
  }, [details, quote, activeCandle, setHistoricRates]);

  useEffect(() => {
    if (!details) {
      return;
    }
    // Get the Buy Price of the crypto
    NetworkService.fetchCryptoBuyPrice(details.id, quote.code)
      .then((price) => {
        if (price?.data) {
          setBuyPrice(parseFloat(price.data.amount));
        }
      })
      .catch(LoggerService.error);

    // Get the Sell Price of the crypto
    NetworkService.fetchCryptoSellPrice(details.id, quote.code)
      .then((price) => {
        if (price?.data) {
          setSellPrice(parseFloat(price.data.amount));
        }
      })
      .catch(LoggerService.error);

    // Get the 24hr Stats for the crypto
    NetworkService.fetchCrypto24hrStats(details.id, quote.code)
      .then((stats24h) => {
        // Check id stats are found or not (the API returns no error code when not found)
        if (stats24h.message === 'NotFound') {
          LoggerService.warn('No 24H stats');
        } else {
          setStats({
            ...stats24h,
            rate: (parseFloat(stats24h.last) / parseFloat(stats24h.open) - 1) * 100,
          });
        }
      })
      .catch(LoggerService.error);

    fetchHistoricRates();
  }, [details, quote]);

  useEffect(
    () => {
      setHistoricRates([]);
      fetchHistoricRates();
    },
    [activeCandle],
  );

  if (!details) {
    changeTab(Tabs.list);
    return null;
  }

  return (
    <>
      <View style={styles.crypto_details}>
        <CryptoIcon code={details.id.toLowerCase()} style={{ marginRight: 0 }} />
        <Text style={styles.crypto_name}>
          {`${details.name} - ${details.id}`}
        </Text>
        {/* Show the current rate compared to the open market (or midnight if 24h/24h) */}
        <CryptoDailyRate rate={stats?.rate} />
        <FadeInView
          style={{
            ...styles.crypto_details_bottom_circle,
            backgroundColor: ColorService.getColorFromCrypto(details.id),
          }}
        />
      </View>
      <ScrollView style={styles.container}>
        <CryptoDescription />
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
        <View style={styles.container_last} />
      </ScrollView>
    </>
  );
};

export default memo(CryptoDetails);
