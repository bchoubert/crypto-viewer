import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GraphPoint } from "react-native-graph";

import { ThemeContext } from "@/contexts/theme.provider";
import Colors from "@/assets/Colors";

interface CryptoGraphIndicatorProps {
  rates: GraphPoint[];
}

const CryptoGraphIndicator: FC<CryptoGraphIndicatorProps> = memo(({
  rates
}) => {
  const theme = useContext(ThemeContext);

  const { start, end } = useMemo(() => {
    if (!rates || rates.length < 1) {
      return { start: 1, end: 1 };
    }

    return ({
      start: rates[0].value,
      end: rates[rates.length - 1].value,
    });
  }, [rates]);

  const { percent, isNegative } = useMemo(() => {
    const neg = end < start;

    const rate = Math.abs(Math.floor(((end - start) / start) * 10000) / 100);

    return ({
      percent: `${neg ? '-' : '+'} ${rate} %`,
      isNegative: neg,
    })
  }, [start, end]);
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: isNegative ? Colors.red : Colors.green,
      borderRadius: 10,
      padding: 3,
      paddingLeft: 6,
      paddingRight: 6,
    },
    text: {
      color: Colors.white,
    }
  }), [theme, isNegative]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{percent}</Text>
    </View>
  )
});

export default CryptoGraphIndicator;