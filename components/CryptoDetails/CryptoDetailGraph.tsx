import React, { memo, FC, useMemo } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Dimensions } from 'react-native';
import {
  VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryVoronoiContainer,
  VictoryTooltip,
} from 'victory-native';

import Crypto from '../../models/Crypto';
import { dateFormatType } from '../../models/DateFormat';
import quoteType from '../../models/QuoteType';
import candleGranularity, { candleType } from '../../models/CandleGranularity';

import UtilsService from '../../services/Utils.service';

import MultilineTooltip from '../Utils/MultilineTooltip';
import Selector from '../Utils/Selector';

const styles = StyleSheet.create({
  crypto_graph: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 350,
    marginBottom: 50,
  },
  chart: {
    overflow: 'visible'
  },
});

interface CryptoDetailGraphProps {
  historicRates: any[] | null;
  quote: quoteType;
  crypto: Crypto;
  dateFormat: dateFormatType;
  activeCandle: candleType;
  changeActiveCandle: (newCandle: candleType) => any;
}

const CryptoDetailGraph: FC<CryptoDetailGraphProps> = ({
  historicRates,
  quote,
  crypto,
  dateFormat,
  activeCandle,
  changeActiveCandle,
}) => {

  const cryptoColor = useMemo(
    () => UtilsService.getColorFromCrypto(crypto.id),
    [crypto],
  );

  if (historicRates === null) {
    return (
      <View style={styles.crypto_graph}>
        <Text>No historic rates</Text>
      </View>
    );
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
      {/* Render the graph */}
      {(!!historicRates.length) ?
        (
          <VictoryChart
            width={Dimensions.get('window').width - 20}
            height={350}
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
              tickFormat={
                (date, index, arr) => {
                  if (index === 0 || index === arr.length - 1) {
                    return `${UtilsService.printDate(date, dateFormat)} ${UtilsService.printTime(date)}`;
                  }
                  return '';
                }}
              style={{ ticks: { stroke: 'none' }, grid: { stroke: 'none' } }} />

            {/* Y axis is value linear based */}
            <VictoryAxis dependentAxis tickFormat={(data) => `${quote.symbol} ${data}`} orientation="left" />

            {/* Draw the line plot graph */}
            <VictoryLine
              scale={{ x: 'time', y: 'linear' }}
              domainPadding={{ x: 10 }}
              standalone={true}
              data={historicRates}
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
