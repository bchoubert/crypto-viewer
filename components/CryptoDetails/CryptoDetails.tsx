import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Crypto from '../../models/Crypto';
import NetworkService from '../../services/Network.service';
import quoteType from '../../models/QuoteType';
import { dateFormatType } from '../../models/DateFormat';
import { candleType } from '../../models/CandleGranularity';

import Stats from '../../models/Stats';

import CryptoDetailPrices from './CryptoDetailPrices';
import CryptoDetailGraph from './CryptoDetailGraph';
import CryptoDetailStats from './CryptoDetailStats';
import CryptoIcon from '../Utils/CryptoIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'column'
  },
  crypto_details: {
    flexBasis: 120,
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  crypto_details_bottom: {
    flexBasis: 50,
    flexGrow: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  crypto_details_bottom_circle: {
    height: Dimensions.get('window').width * 3,
    width: Dimensions.get('window').width * 3,
    borderRadius: Dimensions.get('window').width * 1.5,
    position: 'absolute',
    bottom: 2,
    left: Dimensions.get('window').width * -1,
  },
  crypto_name: {
    color: 'white',
    paddingTop: 10
  },

  rate_container: {
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  rate: {
    padding: 8,
    borderRadius: 17,
    fontSize: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rate_icon: {
    fontSize: 15,
    paddingRight: 5,
    color: 'white',
  },
  rate_number: {
    color: 'white',
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
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
    <View style={styles.container}>
      <View style={{ ...styles.crypto_details, backgroundColor: UtilsService.getColorFromCrypto(crypto.id) }}>
        <CryptoIcon code={crypto.id.toLowerCase()} />
        <Text style={styles.crypto_name}>
          {`${crypto.name} - ${crypto.id}`}
        </Text>
      </View>
      <View style={styles.crypto_details_bottom}>
        <Text style={{ ...styles.crypto_details_bottom_circle, backgroundColor: UtilsService.getColorFromCrypto(crypto.id) }} />
      </View>

      <CryptoDetailGraph
        historicRates={historicRates}
        quote={quote}
        crypto={crypto}
        dateFormat={dateFormat}
        activeCandle={activeCandle}
        changeActiveCandle={setActiveCandle}
      />

      {/* Show the current rate compared to the open market (or midnight if 24h/24h) */}
      {(!!stats?.rate) ?
        (
          <View style={styles.rate_container}>
            <View style={{ ...styles.rate, backgroundColor: (stats.rate < 0) ? Colors.red : Colors.green }}>
              {(stats.rate < 0) ?
                (
                  <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon }}>
                    {CryptoViewerIconsMap.minus.unicode}
                  </Text>
                ) : (
                  <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon }}>
                    {CryptoViewerIconsMap.plus.unicode}
                  </Text>
                )
              }
              <Text style={styles.rate_number}>
                {`${UtilsService.truncateNumber(Math.abs(stats.rate))}%`}
              </Text>
            </View>
          </View>
        ) : null
      }
      
      <CryptoDetailStats
        quote={quote}
        crypto={crypto}
        stats={stats}
      />

      <CryptoDetailPrices
        crypto={crypto}
        buyPrice={buyPrice}
        sellPrice={sellPrice}
        quote={quote}
      />
    </View>
  );
}

export default memo(CryptoDetails);