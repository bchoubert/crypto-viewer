import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GraphPoint, LineGraph } from "react-native-graph";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AxisLabel from "./AxisLabel";

import ToggleButton from "../Utils/ToggleButton";

import ECrypto from "@/constants/cryptos.enum";
import { SettingsContext } from "@/contexts/settings.provider";
import { fetchCryptoHistoricRates } from "@/services/network.service";
import { CandleEnum, RatesAttributes } from "@/types/candles.types";
import CryptoDetails from "@/constants/cryptodetails.constants";



type GraphPointWithIndex = GraphPoint & { index: number };

interface CryptoGraphProps {
  id: ECrypto;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 8,
  },
  graphContainer: {
    width: '100%',
    height: 300,
    marginBottom: 8,
    position: 'relative',
  },
  graph: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  min: {
    position: 'absolute',
    bottom: 8,
    left: 0,
  },
  max: {
    position: 'absolute',
    top: 8,
    left: 0,
  }
})

const CryptoGraph: FC<CryptoGraphProps> = memo(({
  id,
}) => {
  const { settings } = useContext(SettingsContext);

  const details = useMemo(() => CryptoDetails[id] || { color: '#222222' }, [id]);

  const [candle, setCandle] = useState<CandleEnum>(CandleEnum["3m"]);
  const setCandleProxy = useCallback((c: string) => setCandle(c as CandleEnum), []);

  const [rates, setRates] = useState<GraphPointWithIndex[]>([]);
  const [selectedRateIndex, setSelectedRateIndex] = useState<number>(0);

  const selectedRate: GraphPointWithIndex = useMemo(() => {
    const rate = rates[selectedRateIndex];

    if (!rate) {
      return { value: 0, date: new Date(), index: 0 };
    }

    return ({
      value: rate.value,
      date: rate.date,
      index: selectedRateIndex,
    });
  }, [rates, selectedRateIndex]);

  const ratesAttributes: RatesAttributes = useMemo(() => {
    if (!rates) {
      return { minValue: 0, maxValue: 0, length: 0 };
    }

    return ({
      minValue: Math.min(...rates.map(r => r.value)),
      maxValue: Math.max(...rates.map(r => r.value)),
      length: rates.length,
    });
  }, [rates, candle]);

  const resetSelectedRate = useCallback(() => setSelectedRateIndex(rates.length - 1), [rates]);
  const onPointSelected = useCallback((p: GraphPoint) => setSelectedRateIndex((p as GraphPointWithIndex).index), []);
  
  const fetchRates = useCallback(() => {
    if (!settings.quote) { return; }

    fetchCryptoHistoricRates(id, settings.quote, candle).then((resp) => {
      const rates = resp.reverse().map((rate, i) => ({
        value: rate[4],
        date: new Date(rate[0] * 1000),
        index: i,
      }));

      setRates(rates);
      resetSelectedRate();
    });
  }, [id, candle, settings]);

  useEffect(fetchRates, [id, candle, settings]);

  const candleItems = useMemo(() => Object.values(CandleEnum).map(c => ({ id: c, label: c })), []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.graphContainer}>
        <LineGraph
          style={styles.graph}
          points={rates}
          animated={true}
          color={details.color}
          horizontalPadding={20}
          enablePanGesture
          panGestureDelay={0}
          enableIndicator
          TopAxisLabel={() => (
            <AxisLabel
              value={selectedRate?.value}
              index={selectedRate?.index}
              ratesAttributes={ratesAttributes}
              color={details.color}
            />
          )}
          onPointSelected={onPointSelected}
          onGestureEnd={resetSelectedRate}
        />
        <Text style={styles.min}>{ratesAttributes.minValue}</Text>
        <Text style={styles.max}>{ratesAttributes.maxValue}</Text>
      </View>
      <ToggleButton
        items={candleItems}
        selectedItem={candle}
        setSelectedItem={setCandleProxy}
        fullWidth
        color={details.color}
      />
    </GestureHandlerRootView>
  );
});

export default CryptoGraph;
