import { FC, memo, useContext, useMemo } from "react";
import { Dimensions, Text, View } from "react-native";

import Colors from "@/assets/Colors";
import { printNumber } from "@/services/print.service";
import { RatesAttributes } from "@/types/candles.types";
import { SettingsContext } from "@/contexts/settings.provider";
import { quoteDetails } from "@/types/crypto.types";

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

  if (!index || !value) {
    return null;
  }

  const { length, minValue, maxValue } = ratesAttributes;

  const locationX = useMemo(() => (index / length) * (Dimensions.get("window").width - 40) + 20 || 0, [index, length]);
  const locationY = useMemo(() => ((((maxValue - value)) / (maxValue - minValue)) * 260) - 20, [maxValue, value, minValue]);

  return (
    <View style={{ width: 50, zIndex: 20, backgroundColor: Colors.lightGray, transform: [{ translateX: Math.max(locationX - 40, 5) }, { translateY: locationY }] }}>
      <Text style={{ color }}>{printNumber(value, quoteSymbol)}</Text>
    </View>
  );
});

export default AxisLabel;