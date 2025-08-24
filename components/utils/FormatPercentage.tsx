import { FC, memo } from "react";
import { Text, TextStyle } from "react-native";

interface FormatPercentageProps {
  amount: number;
  style?: TextStyle;
}

export const formatPercentageFn = (amount: number, maximumSignificantDigits?: number) => {
  const isPositive = amount > 0;
  const isNegative = amount < 0;

  const sign = (isPositive ? '+' : (isNegative ? '-' : ''));

  const absoluteAmount = Math.abs(amount);
  const formattedAmount = new Intl.NumberFormat(undefined, { maximumSignificantDigits }).format(absoluteAmount);

  return `${sign} ${formattedAmount}%`;
};

const FormatPercentage: FC<FormatPercentageProps> = memo(({
  amount,
  style,
}) => (
  <Text style={[style]} numberOfLines={1}>{formatPercentageFn(amount)}</Text>
));

export default FormatPercentage;
