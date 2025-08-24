import { FC, memo, useContext, useMemo } from "react";
import { SettingsContext } from "../../contexts/settings.provider";
import { Text, TextStyle } from "react-native";

export const formatPriceWithCurrency = (
  currency: string, 
  amount: number,
) => {
  let digits = 3;

  if (amount < 0.001 && amount > -0.001) {
    digits = 5;
  }
  
  return new Intl.NumberFormat(undefined, { 
    style: "currency",
    currency: currency.toUpperCase(),
    maximumSignificantDigits: digits,
    minimumFractionDigits: 2,
  }).format(
    amount,
  );
};

export const formatPriceChangeWithCurrency = (
  currency: string, 
  amount: number,
) => {
  const isAmountPositive = (amount > 0);

  return `${isAmountPositive ? '+' : ''}${formatPriceWithCurrency(currency, amount)}`;
}

interface FormatPriceProps {
  amount: number;
  style?: TextStyle;
}

const FormatPrice: FC<FormatPriceProps> = memo(({
  amount,
  style,
}) => {
  const { settings } = useContext(SettingsContext);

  const formatted = useMemo(() => formatPriceWithCurrency(
    settings.currency,
    amount,
  ), [amount, settings]);

  return (
    <Text style={[style]}>{formatted}</Text>
  );
});

export default FormatPrice;
