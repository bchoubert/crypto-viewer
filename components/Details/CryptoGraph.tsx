import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GraphPoint, LineGraph } from "react-native-graph";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AxisLabel from "./AxisLabel";
import CryptoGraphIndicator from "./CryptoGraphIndicator";

import ToggleButton from "../Utils/ToggleButton";

import ECrypto from "@/constants/cryptos.enum";
import { SettingsContext } from "@/contexts/settings.provider";
import { fetchCryptoHistoricRates } from "@/services/network.service";
import { CandleEnum, RatesAttributes } from "@/types/candles.types";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { printDate, printNumber } from "@/services/print.service";
import { quoteDetails } from "@/types/crypto.types";
import { ThemeContext } from "@/contexts/theme.provider";

type GraphPointWithIndex = GraphPoint & { index: number };

interface CryptoGraphProps {
  id: ECrypto;
}

const CryptoGraph: FC<CryptoGraphProps> = memo(({
  id,
}) => {
  const { settings } = useContext(SettingsContext);
  const quoteSymbol = useMemo(() => quoteDetails[settings.quote]?.symbol, [settings]);
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 8,
    },
    graphContainer: {
      width: '100%',
      paddingLeft: 8,
      height: 300,
      marginBottom: 45,
      position: 'relative',
    },
    graphContent: {
      borderLeftWidth: 1,
      borderLeftColor: theme[300],
      borderBottomWidth: 1,
      borderBottomColor: theme[300],
    },
    graph: {
      width: '100%',
      height: 300,
      position: 'relative',
    },
    minY: {
      position: 'absolute',
      bottom: 8,
      left: 0,
      color: theme[900],
      backgroundColor: theme[100],
      fontSize: 12,
    },
    maxY: {
      position: 'absolute',
      top: 0,
      left: 0,
      color: theme[900],
      backgroundColor: theme[100],
      fontSize: 12,
    },
    minX: {
      position: 'absolute',
      bottom: -20,
      left: 0,
      color: theme[900],
      backgroundColor: theme[100],
      fontSize: 12,
    },
    maxX: {
      position: 'absolute',
      bottom: -20,
      right: 0,
      color: theme[900],
      backgroundColor: theme[100],
      fontSize: 12,
    }
  }), [theme]);

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

  const [minDate, maxDate] = useMemo(() => {
    if (!rates || rates.length < 1) {
      return [new Date(), new Date()];
    }
    
    return [
      rates[0].date,
      rates[rates.length - 1].date,
    ];
  }, [rates]);

  const resetSelectedRate = useCallback(() => setSelectedRateIndex(rates.length - 1), [rates]);
  const onPointSelected = useCallback((p: GraphPoint) => setSelectedRateIndex((p as GraphPointWithIndex).index), []);
  
  const fetchRates = useCallback(() => {
    if (!settings.quote) { return; }

    fetchCryptoHistoricRates(id, settings.quote, candle).then((resp) => {
      const rates = resp.reverse()
        .filter((_, i) => i % (settings.graphMode === 'simple' ? 5 : 1) === 0)
        .map((rate, i) => ({
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
        <View style={styles.graphContent}>
          <LineGraph
            style={styles.graph}
            points={rates}
            animated={true}
            color={details.color}
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
        </View>
        <Text style={styles.minY}>{printNumber(ratesAttributes.minValue, quoteSymbol)}</Text>
        <Text style={styles.maxY}>{printNumber(ratesAttributes.maxValue, quoteSymbol)}</Text>
        <Text style={styles.minX}>{printDate(minDate, settings.dateFormat)}</Text>
        <Text style={styles.maxX}>{printDate(maxDate, settings.dateFormat)}</Text>
        <CryptoGraphIndicator rates={rates} />
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
