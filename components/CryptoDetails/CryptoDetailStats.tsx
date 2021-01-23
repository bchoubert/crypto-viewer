import React, { memo, FC, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Stats from '../../models/Stats';
import quoteType from '../../models/QuoteType';
import Crypto from '../../models/Crypto';

const styles = StyleSheet.create({
  stats: {
    flexBasis: 55,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.midGray,
    flexDirection: 'column'
  },
  stats_title: {
    flexBasis: 20,
    color: Colors.gray,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: -11,
    alignSelf: 'center',
    paddingHorizontal: 4
  },
  stats_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stat_number: {
    fontSize: 14
  },
  stat_icon: {
    fontSize: 12,
    paddingRight: 5
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

interface CryptoDetailStatsProps {
  quote: quoteType;
  stats: Stats;
  crypto: Crypto;
}

const CryptoDetailStats: FC<CryptoDetailStatsProps> = ({
  quote,
  stats,
  crypto,
}) => {

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(crypto.id),
    [crypto],
  );
  
  if (!stats) {
    return null;
  }
  return (
    <View style={styles.stats}>
      <Text style={styles.stats_title}>24h Stats</Text>
      <View style={styles.stats_container}>

        {/* Highest 24h value section */}
        {(!!stats.high) ?
          (
            <View style={styles.stat}>
              <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>
                {CryptoViewerIconsMap.high.unicode}
              </Text>
              <Text style={{ ...styles.stat_number, color: cryptoColor }}>
                {`${UtilsService.truncateNumber(stats.high, 1)} ${quote.symbol}`}
              </Text>
            </View>
          ) : null
        }

        {/* Lowest 24h value section */}
        {(!!stats.low) ?
          (
            <View style={styles.stat}>
              <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{CryptoViewerIconsMap.low.unicode}</Text>
              <Text style={{ ...styles.stat_number, color: cryptoColor }}>
                {`${UtilsService.truncateNumber(stats.low, 1)} ${quote.symbol}`}
              </Text>
            </View>
          ) : null
        }

        {/* 24h Volume section */}
        {(!!stats.volume) ?
          (
            <View style={styles.stat}>
              <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{CryptoViewerIconsMap.volume.unicode}</Text>
              <Text style={{ ...styles.stat_number, color: cryptoColor }}>
                {UtilsService.truncateNumber(stats.volume, 1)}
              </Text>
            </View>
          ) : null
        }
      </View>
    </View>
  );
}

export default memo(CryptoDetailStats);
