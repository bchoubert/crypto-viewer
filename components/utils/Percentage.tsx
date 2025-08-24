import { FC, memo, useMemo } from "react";
import FormatPercentage from "./FormatPercentage";
import { StyleSheet, View, ViewStyle } from "react-native";

interface PercentageProps {
  amount: number;
  style?: ViewStyle;
}

const Percentage: FC<PercentageProps> = memo(({
  amount,
  style,
}) => {
  const color = useMemo(() => {
    const isPositive = amount > 0;
    const isNegative = amount < 0;

    return (isPositive ? 'green' : (isNegative ? '#A06B6B' : '#6EA071'));
  }, [amount]);
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 20,
      padding: 4,
      width: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
    },
    text: {
      color,
      fontSize: 14,
      position: 'absolute',
      overflow: 'visible',
      padding: 4,
      backgroundColor: 'white',
      borderRadius: 15,
      top: 12,
      borderWidth: 1,
      borderColor: color,
      fontWeight: 'bold',
    }
  }), [color]);

  return (
    <View style={[styles.container, style]}>
      <FormatPercentage
        amount={amount}
        style={styles.text}
      />
    </View>
  )
});

export default Percentage;
