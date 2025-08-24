import { FC, memo, useCallback, useContext, useEffect, useMemo } from "react";

import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react-native';
import { Animated, Dimensions, StyleSheet, useAnimatedValue, View } from "react-native";
import { MarketItem } from "../../../types/marketItem";
import FormatPrice from "../../utils/FormatPrice";
import { ThemeContext } from "../../../contexts/theme.provider";

interface DetailsChangeProps {
  crypto: MarketItem;
}

const DetailsChange: FC<DetailsChangeProps> = memo(({
  crypto,
}) => {
  const { theme } = useContext(ThemeContext);

  const screenWidth = Dimensions.get('window').width;
  
  const fadeAnim = useAnimatedValue(0.001);

  const grow = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const direction = useMemo(() => {
    if (crypto.price_change_percentage_24h > 0) {
      return 'UP';
    }
    if (crypto.price_change_percentage_24h < 0) {
      return 'DOWN';
    }
    return 'STABLE';
  }, [crypto]);

  const details = useMemo(() => {
    if (direction === 'UP') {
      return { icon: ArrowUpRight, background: '#b5ffc0', color: '#264021' };
    }
    if (direction === 'DOWN') {
      return { icon: ArrowDownRight, background: '#ffb5b5', color: '#402121' };
    }
    return { icon: ArrowRight, background: 'black', color: 'white' };
  }, [direction]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      width: screenWidth - 16,
      margin: 8,
      height: 150,
      backgroundColor: details.background,
      borderRadius: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    topCircle: {
      position: 'absolute',
      top: -980,
      width: 1000,
      height: 1000,
      backgroundColor: theme.colors.background,
      borderRadius: 500,
    },
    icon: {
      color: details.color,
      fontSize: 100,
      backgroundColor: 'transparent',
    },
    element: {
      flex: 1,
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'row',
      height: 100,
      justifyContent: 'center',
    },
    low: { alignItems: 'flex-end' },
    high: { alignItems: 'flex-start' },
    stable: { alignItems: 'center' },
    price: {
      color: details.color,
      fontWeight: 'bold',
      fontSize: 20,
    },
  }), [details, theme, screenWidth]);

  const pricePositions = useMemo(() => {
    if (direction === 'UP') {
      return { start: styles.low, end: styles.high };
    }
    if (direction === 'DOWN') {
      return { start: styles.high, end: styles.low };
    }
    return { start: styles.stable, end: styles.stable };
  }, [styles, direction]);
  
  useEffect(() => {
    setTimeout(grow, 200);
  }, [grow]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.topCircle, { transform: [{ scale: fadeAnim }] }]} />

      <View style={[styles.element, pricePositions.start]}>
        <FormatPrice style={styles.price} amount={crypto.current_price - crypto.price_change_24h} />
      </View>

      <details.icon height={125} width={125} style={styles.icon} />

      <View style={[styles.element, pricePositions.end]}>
        <FormatPrice style={styles.price} amount={crypto.current_price} />
      </View>
    </View>
  );
});

export default DetailsChange;
