import { FC, memo, useCallback, useContext, useEffect, useMemo } from "react";
import { MarketItem } from "../../../types/marketItem";
import { Animated, Dimensions, StyleSheet, Text, useAnimatedValue, View } from "react-native";
import { ThemeContext } from "../../../contexts/theme.provider";
import { RouterContext } from "../../../contexts/router.provider";
import Percentage from "../../utils/Percentage";

interface DetailsHeaderProps {
  crypto: MarketItem;
}

const DetailsHeader: FC<DetailsHeaderProps> = memo(({
  crypto,
}) => {
  const { theme } = useContext(ThemeContext);
  const { cryptoColor } = useContext(RouterContext);

  const fadeAnim = useAnimatedValue(0.001);

  const grow = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 200,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    },
    title: {
      color: theme.colors.actionText,
      fontSize: 20,
      fontWeight: 'bold',
    },
    circle: {
      position: 'absolute',
      backgroundColor: cryptoColor,
      height: 1000,
      width: 1000,
      borderRadius: 500,
      bottom: 0,
      left: -250,
    }
  }), [cryptoColor, theme]);

  useEffect(() => {
    setTimeout(grow, 200);
  }, [grow]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale: fadeAnim }] }]}  />
      <Text style={styles.title}>{crypto.name}</Text>
      <Percentage amount={crypto.price_change_percentage_24h} />
    </View>
  );
});

export default DetailsHeader;


