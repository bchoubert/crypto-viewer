import { FC, memo, useContext, useMemo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { printNumber } from "@/services/print.service";
import { RatesAttributes } from "@/types/candles.types";
import { SettingsContext } from "@/contexts/settings.provider";
import { quoteDetails } from "@/types/crypto.types";
import { ThemeContext } from "@/contexts/theme.provider";

interface AxisLabelProps {
  value?: number;
  index?: number;
  ratesAttributes: RatesAttributes;
  color: string;
}

const AxisLabel: FC<AxisLabelProps> = memo(({
  value,
  index,
  ratesAttributes,
  color,
}) => {
  const { settings } = useContext(SettingsContext);
  const quoteSymbol = useMemo(() => quoteDetails[settings.quote]?.symbol, [settings]);
  const theme = useContext(ThemeContext);

  if (!index || !value) {
    return null;
  }

  const { length, minValue, maxValue } = ratesAttributes;

  const locationX = useMemo(() => (index / length) * (Dimensions.get("window").width - 40) + 20 || 0, [index, length]);
  const locationY = useMemo(() => ((((maxValue - value)) / (maxValue - minValue)) * 260) - 20, [maxValue, value, minValue]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      width: 50,
      zIndex: 20,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: theme[100],
      transform: [
        { translateX: Math.max(locationX - 40, 5) },
        { translateY: locationY },
      ],
    }
  }), [theme, locationX, locationY]);

  return (
    <View style={styles.container}>
      <Text style={{ color }}>{printNumber(value, quoteSymbol)}</Text>
    </View>
  );
});

export default AxisLabel;