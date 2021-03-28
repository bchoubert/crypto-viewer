import React, { memo, FC, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Stats from '../../models/Stats';
import quoteType from '../../models/QuoteType';
import Crypto from '../../models/Crypto';
import Tile, { TileMode } from '../Utils/Tile';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'column'
  },
  stats_title: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold'
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
  },
  stat_label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  buyPrice: number | null;
  sellPrice: number | null;
}

const CryptoDetailStats: FC<CryptoDetailStatsProps> = ({
  quote,
  stats,
  crypto,
  buyPrice,
  sellPrice,
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
        {!!stats.high && (
          <Tile
            mode={TileMode.LIGHT}
            label={
              <View style={styles.stat_label}>
                <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>
                  {CryptoViewerIconsMap.high.unicode}
                </Text>
                <Text> High</Text>
              </View>
            }
            number={`${UtilsService.truncateNumber(stats.high, 1)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Lowest 24h value section */}
        {!!stats.low && (
          <Tile
            mode={TileMode.CLEAR}
            label={
              <View style={styles.stat_label}>
                <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>
                  {CryptoViewerIconsMap.low.unicode}
                </Text>
                <Text> Low</Text>
              </View>
            }
            number={`${UtilsService.truncateNumber(stats.low, 1)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* 24h Volume section */}
        {!!stats.volume && (
          <Tile
            mode={TileMode.FULL}
            isLongNumber
            label={
              <View style={styles.stat_label}>
                <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon, color: Colors.white }}>
                  {CryptoViewerIconsMap.volume.unicode}
                </Text>
                <Text style={{ color: Colors.white }}> Volume</Text>
              </View>
            }
            number={`${UtilsService.truncateNumber(stats.volume, 0)}`}
            color={cryptoColor}
          />
        )}
      </View>
      <Text style={styles.stats_title}>
        Current Price
      </Text>
      <View style={styles.stats_container}>

        {/* Buy Price Section */}
        {!!buyPrice && (
          <Tile
            mode={TileMode.CLEAR}
            label="Buy"
            number={`${UtilsService.truncateNumber(buyPrice)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Current Price Section */}
        {!!crypto.price && (
          <Tile
            mode={TileMode.FULL}
            label="Price"
            number={`${UtilsService.truncateNumber(crypto.price)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Sell Price Section */}
        {!!sellPrice && (
          <Tile
            mode={TileMode.LIGHT}
            label="Sell"
            number={`${UtilsService.truncateNumber(sellPrice)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}
      </View>
    </View>
  );
}

export default memo(CryptoDetailStats);
