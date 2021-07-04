import React, {
  memo, FC, useMemo, useContext,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

import Stats from '../../models/Stats';
import QuoteType from '../../models/QuoteType';
import Tile, { TileMode } from '../Utils/Tile';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { NavigationContext } from '../../contexts/NavigationProvider';
import { TranslationContext } from '../../contexts/TranslationProvider';

const styles = StyleSheet.create({
  stats: {
    marginTop: 20,
    flexDirection: 'column',
  },
  stats_title: {
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  stats_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stat_number: {
    fontSize: 14,
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
    fontFamily: 'crypto-viewer',
  },
});

interface CryptoDetailStatsProps {
  stats: Stats;
  buyPrice: number | null;
  sellPrice: number | null;
}

const CryptoDetailStats: FC<CryptoDetailStatsProps> = ({
  stats,
  buyPrice,
  sellPrice,
}) => {
  const {
    settings,
  } = useContext(SettingsContext);

  const t = useContext(TranslationContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);

  const {
    details,
  } = useContext(NavigationContext);

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(details.id),
    [details],
  );

  if (!stats) {
    return null;
  }
  return (
    <View style={styles.stats}>
      <Text style={styles.stats_title}>{t.details.stats_24h}</Text>
      <View style={styles.stats_container}>

        {/* Highest 24h value section */}
        {!!stats.high && (
          <Tile
            mode={TileMode.LIGHT}
            label={(
              <View style={styles.stat_label}>
                <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>
                  {CryptoViewerIconsMap.high.unicode}
                </Text>
                <Text>
                  {t.details.high}
                </Text>
              </View>
            )}
            number={`${UtilsService.truncateIntelligentNumber(stats.high)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Lowest 24h value section */}
        {!!stats.low && (
          <Tile
            mode={TileMode.CLEAR}
            label={(
              <View style={styles.stat_label}>
                <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>
                  {CryptoViewerIconsMap.low.unicode}
                </Text>
                <Text>
                  {t.details.low}
                </Text>
              </View>
            )}
            number={`${UtilsService.truncateIntelligentNumber(stats.low)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* 24h Volume section */}
        {!!stats.volume && (
          <Tile
            mode={TileMode.FULL}
            isLongNumber
            label={(
              <View style={styles.stat_label}>
                <Text
                  style={{
                    ...styles.cryptoViewerIcon,
                    ...styles.stat_icon,
                    color: Colors.white,
                  }}
                >
                  {CryptoViewerIconsMap.volume.unicode}
                </Text>
                <Text style={{ color: Colors.white }}>
                  {t.details.volume}
                </Text>
              </View>
            )}
            number={`${UtilsService.truncateIntelligentNumber(stats.volume, 0)}`}
            color={cryptoColor}
          />
        )}
      </View>
      <Text style={styles.stats_title}>
        {t.details.current_price}
      </Text>
      <View style={styles.stats_container}>

        {/* Buy Price Section */}
        {!!buyPrice && (
          <Tile
            mode={TileMode.CLEAR}
            label={t.details.buy}
            number={`${UtilsService.truncateIntelligentNumber(buyPrice)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Current Price Section */}
        {!!details.price && (
          <Tile
            mode={TileMode.FULL}
            label={t.details.price}
            number={`${UtilsService.truncateIntelligentNumber(details.price)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}

        {/* Sell Price Section */}
        {!!sellPrice && (
          <Tile
            mode={TileMode.LIGHT}
            label={t.details.sell}
            number={`${UtilsService.truncateIntelligentNumber(sellPrice)} ${quote.symbol}`}
            color={cryptoColor}
          />
        )}
      </View>
    </View>
  );
};

export default memo(CryptoDetailStats);
