import React, { memo, FC, useMemo, useContext } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native';
import {
  VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip,
} from 'victory-native';

import Crypto from '../../models/Crypto';
import { dateFormatType } from '../../models/DateFormat';
import quoteType from '../../models/QuoteType';
import candleGranularity, { candleType } from '../../models/CandleGranularity';

import UtilsService from '../../services/Utils.service';

import MultilineTooltip from '../Utils/MultilineTooltip';
import Selector from '../Utils/Selector';
import { graphModeType } from '../../models/GraphMode';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { NavigationContext } from '../../contexts/NavigationProvider';

const styles = StyleSheet.create({
  crypto_graph: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 350,
    marginBottom: 50,
    marginTop: 20,
  },
  chart: {
    overflow: 'visible',
    borderLeftWidth: 0,
  },
  chartSpacer: {
    height: 30,
  }
});

interface CryptoDetailGraphProps {
  historicRates: any[] | null;
  activeCandle: candleType;
  changeActiveCandle: (newCandle: candleType) => any;
}

const CryptoDetailGraph: FC<CryptoDetailGraphProps> = ({
  historicRates,
  activeCandle,
  changeActiveCandle,
}) => {
  const {
    settings,
  } = useContext(SettingsContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as quoteType, [settings]);
  const graphMode = useMemo(() => settings.GRAPH_MODE_KEY as graphModeType, [settings]);
  const dateFormat = useMemo(() => settings.DATE_FORMAT_KEY as dateFormatType, [settings]);

  const {
    details,
  } = useContext(NavigationContext);

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(details.id),
    [details],
  );

  const dateLabel = useMemo(
    () => {
      if (!historicRates || historicRates.length === 0) {
        return '';
      }
      return `${UtilsService.printDate(historicRates[0].x, dateFormat)}  -  ${UtilsService.printDate(historicRates[historicRates.length - 1].x, dateFormat)}`;
    },
    [UtilsService, historicRates]
  );

  const historicRatesToPrint = useMemo(
    () => historicRates && historicRates.filter((_, index) => index % (graphMode === 'Advanced' ? 1 : 5) === 0),
    [historicRates],
  );

  if (historicRates === null) {
    return null;
  }
  if (historicRates.length === 0) {
    return (
      <View style={styles.crypto_graph}>
        <ActivityIndicator size="large" color={cryptoColor} />
        <Text>Loading historic rates...</Text>
      </View>
    );
  }

  return (
    <View style={styles.crypto_graph}>

      <Text style={styles.chartSpacer} />

      {/* Render the graph */}
      {(!!historicRatesToPrint.length) ?
        (
          <VictoryChart
            width={Dimensions.get('window').width}
            height={350}
            padding={{ left: 0, right: 0, top: 0, bottom: 30 }}
            domainPadding={{ x: 0, y: 50 }}
            theme={VictoryTheme.material}
            style={styles.chart}
            containerComponent={
              <VictoryVoronoiContainer
                labels={_ => ''}
                labelComponent={
                  <VictoryTooltip flyoutComponent={<MultilineTooltip quoteSymbol={quote.symbol} dateFormat={dateFormat} />} />
                } />
            }>

            {/* X axis is time based */}
            <VictoryAxis
              scale="time"
              padding={{ top: 0, bottom: 0, left: 100, right: 100 }}
              tickFormat={() => ''}
              label={dateLabel}
              width={200}
              style={{
                ticks: { stroke: 'none', opacity: 0 },
                grid: { stroke: 'none' },
                axis: { stroke: 'none' },
                axisLabel: { fontSize: 15 },
              }} />

            {/* Y axis is value linear based */}
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'none' },
              }}
            />

            {/* Draw the line plot graph */}
            <VictoryLine
              scale={{ x: 'time', y: 'linear' }}
              interpolation="natural"
              standalone={true}
              data={historicRatesToPrint}
              style={{
                data: {
                  stroke: cryptoColor,
                  strokeWidth: 3
                }
              }}
            />
          </VictoryChart>
        ) : null
      }

      <Text style={styles.chartSpacer} />

      {/* Show the candle options */}
      <Selector
        items={Object.keys(candleGranularity)}
        activeItem={activeCandle}
        setActiveItem={changeActiveCandle}
        color={cryptoColor}
      />
    </View>
  );
}

export default memo(CryptoDetailGraph);
