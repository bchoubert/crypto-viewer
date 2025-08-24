import { FC, memo, useContext, useMemo } from "react";
import { MarketItem } from "../../../types/marketItem";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { RouterContext } from "../../../contexts/router.provider";
import { ThemeContext } from "../../../contexts/theme.provider";
import TranslationText from "../../utils/TranslationText";

interface DetailsInvestmentProps {
  crypto: MarketItem;
}

const DetailsInvestment: FC<DetailsInvestmentProps> = memo(({
  crypto,
}) => {
  const { theme } = useContext(ThemeContext);
  const { cryptoColor } = useContext(RouterContext);

  // Change this accordingly
  const nbCriterias = 7;

  const computedScore = useMemo(() => {
    // These are simple indicators for the health of the crypto;

    // current > 7d ?
    // current > 24h ?

    // current >= ath * 0.8 ?
    // 24h low > current * 0.8 ?
    // current > 24h high * 0.8 ?

    // cap_rank < 50 ?

    // price > 1.5 ?

    let score = 0;

    const price7d = crypto.sparkline_in_7d.price[0];
    const price24h = crypto.current_price - crypto.price_change_24h;
    const current = crypto.current_price;
    const capRank = crypto.market_cap_rank;
    const ath = crypto.ath;
    const low24h = crypto.low_24h;
    const high24h = crypto.high_24h;

    if (current > price7d) { score++; }
    if (current > price24h) { score++; }

    if (current >= (ath * 0.8)) { score++; }
    if (low24h > (current * 0.8)) { score++; }
    if (current > (high24h * 0.8)) { score++; }

    if (capRank < 50) { score++; }

    if (current > 1.5) { score++; }

    return score;
  }, [crypto]);

  const percentage = useMemo(() => {
    return Math.round((computedScore / nbCriterias) * 100) / 100;
  }, [computedScore, nbCriterias]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      margin: 8,
      marginBottom: 25,
      borderRadius: 16,
      paddingBottom: 25,
      position: 'relative',
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      paddingLeft: 8,
      color: theme.colors.text,
    },
    bar: {
      width: '100%',
      backgroundColor: `${cryptoColor}33`,
      height: 6,
      borderRadius: 3,
      marginTop: 8,
      marginBottom: 8,
    },
    dot: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: cryptoColor,
      position: 'absolute',
      top: 17,
      left: (Dimensions.get('window').width - 16) * percentage - 8,
      borderWidth: 2,
      borderColor: 'white',
    },
    percentage: {
      position: 'absolute',
      left: (Dimensions.get('window').width - 16) * percentage - 8,
      top: 36,
      color: theme.colors.text,
    },
    warn: {
      marginTop: 20,
      fontSize: 12,
      color: theme.colors.text,
    }
  }), [cryptoColor, percentage, theme]);

  return (
    <View style={styles.container}>
      <TranslationText id="details.investment.title" style={styles.title} />
      <View style={styles.bar} />
      <View style={styles.dot} />
      <Text style={styles.percentage}>{Math.round(percentage * 100)}%</Text>
      <TranslationText id="details.investment.warning" style={styles.warn} />
    </View>
  );
});

export default DetailsInvestment;
