import Colors from "@/assets/Colors";
import { printNumber } from "@/services/print.service";
import { RatesAttributes } from "@/types/candles.types";
import { FC, memo, useMemo } from "react";
import { Dimensions, Text, View } from "react-native";

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
  if (!index || !value) {
    return null;
  }

  const { length, minValue, maxValue } = ratesAttributes;

  const locationX = useMemo(() => (index / length) * (Dimensions.get("window").width - 40) + 20 || 0, [index, length]);
  const locationY = useMemo(() => ((((maxValue - value)) / (maxValue - minValue)) * 260) - 20, [maxValue, value, minValue]);

  return (
    <View style={{ width: 50, zIndex: 20, backgroundColor: Colors.lightGray, transform: [{ translateX: Math.max(locationX - 40, 5) }, { translateY: locationY }] }}>
      <Text style={{ color }}>{`$${printNumber(value)}`}</Text>
    </View>
  );
});

export default AxisLabel;