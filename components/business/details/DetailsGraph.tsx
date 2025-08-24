import { FC, memo, useCallback, useContext, useMemo, useState } from "react";
import { MarketItem } from "../../../types/marketItem";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { ThemeContext } from "../../../contexts/theme.provider";
import Switch from "../../utils/Switch";
import TranslationText from "../../utils/TranslationText";
import { getTranslationStringViaId } from "../../../types/translation";
import { ComputedPoint, SparkineTimespanEnum, sparkineTimespanValues } from "../../../types/graph";
import { TranslationContext } from "../../../contexts/translation.provider";

interface DetailsGraphProps {
  crypto: MarketItem;
  color?: string;
}

const DetailsGraph: FC<DetailsGraphProps> = memo(({
  crypto,
  color,
}) => {
  const { theme } = useContext(ThemeContext);
  const { translation } = useContext(TranslationContext);

  const screenWidth = Dimensions.get('window').width;
  const cryptoColor = useMemo(() => color || '#000000', [color]);

  const [sparkineTimespan, setSparkineTimespan] = useState<SparkineTimespanEnum>(SparkineTimespanEnum["7D"]);
  const sparklineData: number[] = useMemo(() => {
    const nbPoints = sparkineTimespanValues[sparkineTimespan];
    const lastItems = crypto.sparkline_in_7d.price.slice(-1 * nbPoints);
    return lastItems;
  }, [crypto, sparkineTimespan]);

  const { min } = useMemo(() => ({
    min: Math.min(...sparklineData),
  }), [sparklineData]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      marginLeft: 10,
      backgroundColor: theme.colors.elevated,
      paddingVertical: 8,
      borderRadius: 16,
      marginTop: 16,
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      paddingLeft: 8,
      marginBottom: 8,
      color: theme.colors.text,
    },
    graphPoint: {
      width: 8,
      height: 8,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: cryptoColor,
    },
    label: {
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: cryptoColor,
      height: 25,
      width: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      overflow: 'hidden',
    },
    labelText: {
      color: 'black',
    },
    axisText: {
      color: theme.colors.text,
    }
  }), [cryptoColor, theme]);
  
  const customLabel = useCallback((point: ComputedPoint) => (
    <View style={styles.label}>
      <Text style={styles.labelText} numberOfLines={1}>{point.dataPointText}</Text>
    </View>
  ), [styles]);

  const prices = useMemo(() => {
    return sparklineData.map(p => ({
      value: p,
      dataPointText: `${p}`,
      dataPointLabelComponent: customLabel,
    }));
  }, [customLabel, sparklineData]);

  const spacing = useMemo(() => {
    const realWidth = screenWidth - 100;

    return (realWidth / (prices.length));
  }, [prices, screenWidth]);

  const customDataPoint = () => (
    <View style={styles.graphPoint} />
  );

  return (
    <View>
      <View style={styles.container}>
        <TranslationText id="details.graph.title" style={styles.title} />
        <LineChart
          yAxisOffset={min}
          color={cryptoColor}
          data={prices}
          width={Dimensions.get('window').width - 80}

          curved

          focusEnabled
          showStripOnFocus
          showTextOnFocus

          delayBeforeUnFocus={2000}

          customDataPoint={customDataPoint}
          dataPointsHeight={8}
          dataPointsWidth={8}

          dataPointLabelWidth={50}

          yAxisTextStyle={styles.axisText}
          xAxisColor={cryptoColor}
          yAxisColor={cryptoColor}
          noOfSections={4}
          spacing={spacing}

          disableScroll
        />
        <Switch
          items={Object.values(SparkineTimespanEnum).map(s => ({
            value: s,
            label: getTranslationStringViaId(`details.graph.periods.${s}`, translation),
          }))}
          selectedItem={sparkineTimespan}
          changeSelectedItem={(newValue) => setSparkineTimespan(newValue)}
          color={cryptoColor}
        />
      </View>
    </View>
  );
});

export default DetailsGraph;
