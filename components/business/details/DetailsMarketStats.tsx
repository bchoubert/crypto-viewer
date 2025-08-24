import { FC, memo, useContext, useMemo } from "react";
import { MarketItem } from "../../../types/marketItem";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { RouterContext } from "../../../contexts/router.provider";
import { formatPriceChangeWithCurrency, formatPriceWithCurrency } from "../../utils/FormatPrice";
import { Archive, ArrowDownUp, Coins, Expand, Fullscreen, Funnel, Hash, RefreshCw, TrendingDown, TrendingUp } from "lucide-react-native";
import TextScale, { TextScaleInterval } from "../../utils/TextScale";
import { SettingsContext } from "../../../contexts/settings.provider";
import Percentage from "../../utils/Percentage";
import { ThemeContext } from "../../../contexts/theme.provider";
import TranslationText from "../../utils/TranslationText";

interface DetailsStatsProps {
  crypto: MarketItem;
}

export const formatAmountChange = (amount: number) => {
  const isAmountPositive = (amount > 0);
  return `${isAmountPositive ? '+' : ''}${amount}`;
}

const DetailsStats: FC<DetailsStatsProps> = memo(({
  crypto,
}) => {
  const { theme } = useContext(ThemeContext);
  const { cryptoColor } = useContext(RouterContext);
  const { settings } = useContext(SettingsContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      marginTop: 16,
      width: Dimensions.get('window').width,
      marginBottom: 20,
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      paddingLeft: 8,
      color: theme.colors.text,
    },
    scroller: {
      padding: 8,
      display: 'flex',
      flexDirection: 'row',
    },
    card: {
      width: 170,
      maxWidth: 170,
      height: 200,
      backgroundColor: theme.colors.elevated,
      margin: 4,
      borderRadius: 16,
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    stat_title: {
      color: cryptoColor,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 12,
      height: 20,
    },
    stat_value: {
      fontSize: 36,
      flex: 1,
      marginTop: 6,
      color: theme.colors.text,
    },
    stat_second: {
      position: 'absolute',
      top: -5,
      right: 5,
      justifyContent: 'flex-end',
    },
    stat_icon: {
      fontSize: 100,
      color: `${theme.colors.text}33`,
      opacity: 1,
    }
  }), [cryptoColor, theme]);

  const scaleIntervals: TextScaleInterval[] = [{ chars: Infinity, size: 16 }, { chars: 16, size: 20 }, { chars: 12, size: 28 }, { chars: 8, size: 36 }];

  return (
    <View>
      <View style={styles.container}>
        <TranslationText id="details.stats.metrics.title" style={styles.title} />
        <ScrollView style={styles.scroller} horizontal>
          <View style={styles.card}>
            <TranslationText id="details.stats.metrics.currentPrice" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceWithCurrency(settings.currency, crypto.current_price)}
            />
            <Coins height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.metrics.marketCap" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={`${crypto.market_cap.toLocaleString()}`}
            />
            <Hash height={100} width={100} style={styles.stat_icon} />
          </View>
          {crypto.max_supply ? (
            <View style={styles.card}>
              <TranslationText id="details.stats.metrics.fullDilutedValuation" style={styles.stat_title} />
              <TextScale
                intervals={scaleIntervals}
                style={styles.stat_value}
                content={`${crypto.fully_diluted_valuation.toLocaleString()}`}
              />
              <Funnel height={100} width={100} style={styles.stat_icon} />
            </View>
          ): null}
          <View style={styles.card}>
            <TranslationText id="details.stats.metrics.totalVolume" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={`${crypto.total_volume.toLocaleString()}`}
            />
            <Fullscreen height={100} width={100} style={styles.stat_icon} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <TranslationText id="details.stats.dynamics.title" style={styles.title} />
        <ScrollView style={styles.scroller} horizontal>
          <View style={styles.card}>
            <TranslationText id="details.stats.dynamics.low" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceWithCurrency(settings.currency, crypto.low_24h)}
            />
            <TrendingDown height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.dynamics.high" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceWithCurrency(settings.currency, crypto.high_24h)}
            />
            <TrendingUp height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.dynamics.price" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceChangeWithCurrency(settings.currency, crypto.price_change_24h)}
            />
            <Percentage style={styles.stat_second} amount={crypto.price_change_percentage_24h} />
            <ArrowDownUp height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.dynamics.marketCap" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatAmountChange(crypto.market_cap_change_24h)}
            />
            <Percentage style={styles.stat_second} amount={crypto.market_cap_change_percentage_24h} />
            <ArrowDownUp height={100} width={100} style={styles.stat_icon} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <TranslationText id="details.stats.supply.title" style={styles.title} />
        <ScrollView style={styles.scroller} horizontal>
          <View style={styles.card}>
            <TranslationText id="details.stats.supply.circulatingSupply" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={crypto.circulating_supply.toLocaleString()}
            />
            <RefreshCw height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.supply.totalSupply" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={crypto.total_supply.toLocaleString()}
            />
            <Archive height={100} width={100} style={styles.stat_icon} />
          </View>
          {crypto.max_supply ? (
            <View style={styles.card}>
              <TranslationText id="details.stats.supply.maxSupply" style={styles.stat_title} />
              <TextScale
                intervals={scaleIntervals}
                style={styles.stat_value}
                content={crypto.max_supply.toLocaleString()}
              />
              <Expand height={100} width={100} style={styles.stat_icon} />
            </View>
          ) : null}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <TranslationText id="details.stats.allTimes.title" style={styles.title} />
        <ScrollView style={styles.scroller} horizontal>
          <View style={styles.card}>
            <TranslationText id="details.stats.allTimes.low" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceWithCurrency(settings.currency, crypto.atl)}
            />
            <Percentage style={styles.stat_second} amount={crypto.atl_change_percentage} />
            <TrendingDown height={100} width={100} style={styles.stat_icon} />
          </View>
          <View style={styles.card}>
            <TranslationText id="details.stats.allTimes.high" style={styles.stat_title} />
            <TextScale
              intervals={scaleIntervals}
              style={styles.stat_value}
              content={formatPriceWithCurrency(settings.currency, crypto.ath)}
            />
            <Percentage style={styles.stat_second} amount={crypto.ath_change_percentage} />
            <TrendingUp height={100} width={100} style={styles.stat_icon} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
});

export default DetailsStats;
