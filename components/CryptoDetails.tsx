import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import safeSetState from '@axetroy/react-safe-set-state';
import { Line, G, Text as TextSVG, TextAnchor, Rect } from 'react-native-svg';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory-native';

import Colors from '../assets/Colors';

import CryptoCurrencyIconsMap from '../assets/fonts/CryptoCurrencyIconsMap';
import CryptoViewerIconsMap from '../assets/fonts/CryptoViewerIconsMap';

import UtilsService from '../services/Utils.service';

import Currency from '../models/Crypto';
import NetworkService from '../services/Network.service';
import quoteType from '../models/QuoteType';
import { dateFormatType } from '../models/DateFormat';
import candleGranularity, { candleType } from '../models/CandleGranularity';

import Stats from '../models/Stats';

export interface Props {
  // The crypto to load
  crypto: Currency,
  // The quote selected
  quote: quoteType,
  // The date format selected
  dateFormat: dateFormatType
}

interface State {
  // Stats for this crypto
  buyPrice: number,
  sellPrice: number,
  historicRates: any[],
  stats: Stats,
  // Candle selected by the user
  activeCandle: candleType
}

class MultilineTooltip extends Component<any, any> {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    orientation: PropTypes.string,
    datum: PropTypes.object,
    quotesymbol: PropTypes.string,
    dateFormat: PropTypes.string
  };

  render() {
    // Array destructuring to get the interesting data
    const { datum, x, y, quotesymbol } = this.props;
    // Position tooltip calculation
    const showPosition = (x > ((Dimensions.get('window').width - 20) / 2)) ? 'left' : 'right';
    const relativePosition: number = (showPosition === 'right') ? 50 : -50;
    const relativeTextPosition: number = (showPosition === 'right') ? 52 : -52;
    const textAnchor: TextAnchor = (showPosition === 'right') ? 'start' : 'end';

    // Render a tooltip for a specific X
    return (
      <G>
        <Rect
          x={(showPosition === 'left') ? x - 118 : x + 50}
          y={y - 41}
          width={68}
          height={30} 
          fill={'#FFFFFF'}
          stroke={'#000000'}></Rect>
        <Line x1={x} x2={x + relativePosition} y1={y} y2={y - 30} stroke={'#000000'}></Line>
        <TextSVG x={x + relativeTextPosition} y={y - 30} textAnchor={textAnchor}>
          { UtilsService.printDate(datum.x, this.props.dateFormat) + ' ' + UtilsService.printTime(datum.x) }
        </TextSVG>
        <TextSVG x={x + relativeTextPosition} y={y - 15} textAnchor={textAnchor}>
          { quotesymbol + ' ' + datum.y }
        </TextSVG>
      </G>
    );
  }
}

// Details for a crypto
@safeSetState()
class CryptoDetails extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      // Set default values
      buyPrice: null,
      sellPrice: null,
      historicRates: [],
      stats: null,
      activeCandle: '1W'
    };
  }

  componentWillMount() {
    // Get the Buy Price of the crypto
    NetworkService.fetchCryptoBuyPrice(this.props.crypto.id, this.props.quote.code)
      .then(price => {
        if(!price || !price.data) {return;}
        this.setState({ buyPrice: parseFloat(price.data.amount) });
      })
      .catch(console.error);

    // Get the Sell Price of the crypto
    NetworkService.fetchCryptoSellPrice(this.props.crypto.id, this.props.quote.code)
      .then(price => {
        if(!price || !price.data) {return;}
        this.setState({ sellPrice: parseFloat(price.data.amount) });
      })
      .catch(console.error);

    // Get the 24hr Stats for the crypto
    NetworkService.fetchCrypto24hrStats(this.props.crypto.id, this.props.quote.code)
      .then(stats => {
        // Check id stats are found or not (the API returns no error code when not found)
        if(!!stats.message && stats.message === 'NotFound') {
          console.warn('No 24H stats');
        } 
        else {
          stats.rate = (parseFloat(stats.last) / parseFloat(stats.open) - 1) * 100;
          this.setState({ stats: stats });
        }
      })
      .catch(console.error);

    this.fetchHistoricRates();
  }

  changeActiveCandle(candle: candleType) {
    // Called on a candle change. Reload the graph data
    this.setState({ activeCandle: candle, historicRates: [] }, this.fetchHistoricRates);
  }

  fetchHistoricRates = () => {
    NetworkService.fetchCryptoHistoricRates(this.props.crypto.id, this.props.quote.code, this.state.activeCandle)
      .then(historicRates => {
        if(!historicRates || !historicRates.length) {
          this.setState({ historicRates: null });
          return;
        }
        let result = [];
        historicRates.forEach(historicRate => {
          // Parse data and reformat to get JS timestamps compatible with Moment
          result.unshift({ x: new Date(historicRate[0] * 1000).toISOString(), y: historicRate[4] });
        });
        this.setState({ historicRates: result });
      })
      .catch(console.log);
  }

  // Render the bottom part of the interface with the different prices
  renderPrices() {
    return <View style={styles.crypto_prices}>
      <Text style={styles.crypto_prices_title}>Current Price</Text>
      <View style={styles.crypto_prices_container}>

        {/* Buy Price Section */}
        {(!!this.state.buyPrice) ? 
          <View style={styles.crypto_price}>
            <Text>Buy</Text>
            <Text style={{ ...styles.crypto_price_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              { UtilsService.truncateNumber(this.state.buyPrice) + ' ' + this.props.quote.symbol }
            </Text>
          </View> : null
        }

        {/* Current Price Section */}
        {(!!this.props.crypto.price) ? 
          <View style={{ ...styles.crypto_price, ...styles.main_crypto_price }}>
            <Text>Price</Text>
            <Text style={{ ...styles.crypto_price_number, ...styles.main_crypto_price_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              {UtilsService.truncateNumber(this.props.crypto.price) + ' ' + this.props.quote.symbol}
            </Text> 
          </View> : null
        }

        {/* Sell Price Section */}
        {(!!this.state.sellPrice) ? 
          <View style={ styles.crypto_price }>
            <Text>Sell</Text>
            <Text style={{ ...styles.crypto_price_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              {UtilsService.truncateNumber(this.state.sellPrice) + ' ' + this.props.quote.symbol}
            </Text>
          </View> : null
        }
      </View>
    </View>;
  }

  // Render the upper part of the bottom stats
  renderStats() {
    if(!this.state.stats) {
      return null;
    }
    return <View style={styles.stats}>
      <Text style={styles.stats_title}>24h Stats</Text>
      <View style={styles.stats_container}>

        {/* Highest 24h value section */}
        {(!!this.state.stats.high) ? 
          <View style={styles.stat}>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.high.unicode }</Text>
            <Text style={{ ...styles.stat_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              { UtilsService.truncateNumber(this.state.stats.high, 1) + ' ' + this.props.quote.symbol }
            </Text>
          </View> : null
        }

        {/* Lowest 24h value section */}
        {(!!this.state.stats.low) ? 
          <View style={styles.stat}>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.low.unicode }</Text>
            <Text style={{ ...styles.stat_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              { UtilsService.truncateNumber(this.state.stats.low, 1) + ' ' + this.props.quote.symbol }
            </Text>
          </View> : null
        }

        {/* 24h Volume section */}
        {(!!this.state.stats.volume) ? 
          <View style={styles.stat}>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.volume.unicode }</Text>
            <Text style={{ ...styles.stat_number, color: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
              { UtilsService.truncateNumber(this.state.stats.volume, 1) }
            </Text>
          </View> : null
        }
      </View>
    </View>;
  }

  // Render graph
  renderGraph() {
    if(this.state.historicRates === null) {
      return <View style={styles.crypto_graph}>
        <Text>No historic rates</Text>
      </View>;
    }
    if(this.state.historicRates.length === 0) {
      return <View style={styles.crypto_graph}>
        <ActivityIndicator size="large" color={UtilsService.getColorFromCrypto(this.props.crypto.id)} />
        <Text>Loading historic rates...</Text>
      </View>;
    }

    return <View style={styles.crypto_graph}>
      {/* Render the graph */}
      {(!!this.state.historicRates.length) ? 
        <VictoryChart 
          width={Dimensions.get('window').width - 20} 
          theme={VictoryTheme.material}
          style={ styles.chart }
          containerComponent = {
            <VictoryVoronoiContainer
              labels={ _ => '' }
              labelComponent={
                <VictoryTooltip flyoutComponent={<MultilineTooltip quotesymbol={this.props.quote.symbol} dateFormat={this.props.dateFormat} />} />
              }/>
          }>

          {/* X axis is time based */}
          <VictoryAxis 
            scale="time"
            tickFormat={
              (date, index, arr) => {
                if (index === 0 || index === arr.length - 1) {
                  return `${ UtilsService.printDate(date, this.props.dateFormat) } ${ UtilsService.printTime(date) }`;
                }
                return '';
              }}
            style={{ ticks: {stroke: 'none'}, grid: {stroke: 'none'} }} />

          {/* Y axis is value linear based */}
          <VictoryAxis dependentAxis tickFormat={(data) => `${this.props.quote.symbol} ${data}`} orientation="left" />

          {/* Draw the line plot graph */}
          <VictoryLine
            scale={{ x: 'time', y: 'linear' }}
            domainPadding={{ x: 10 }}
            standalone={true}
            data={this.state.historicRates}
            style={{
              data: {
                stroke: UtilsService.getColorFromCrypto(this.props.crypto.id),
                strokeWidth: 3
              }
            }}
            />
        </VictoryChart> : null
      }

      {/* Show the candle options */}
      <View style={styles.candle_container}>
        {Object.keys(candleGranularity).map(candle =>
          <TouchableOpacity 
              key={candle} 
              style={{ ...styles.candle, ...((this.state.activeCandle === candle) ? {backgroundColor: UtilsService.getColorFromCrypto(this.props.crypto.id)} : []) }} 
              onPress={() => this.changeActiveCandle(candle as candleType)}>

            <Text style={{ ...styles.candle_text, ...((this.state.activeCandle !== candle) ? {color: UtilsService.getColorFromCrypto(this.props.crypto.id)} : []) }}>
              {candle}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ ...styles.crypto_details, backgroundColor: UtilsService.getColorFromCrypto(this.props.crypto.id) }}>
          {!!CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()] && <Text style={styles.crypto_icon}>
            { CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].unicode }
          </Text>}
          <Text style={styles.crypto_name}>{ this.props.crypto.name + ' - ' + this.props.crypto.id }</Text>
        </View>
        
        {this.renderGraph()}

        {/* Show the current rate compared to the open market (or midnight if 24h/24h) */}
        {(!!this.state.stats && !!this.state.stats.rate) ? 
        <View style={styles.rate_container}>
          <View style={{ ...styles.rate, backgroundColor: (this.state.stats.rate < 0) ? Colors.red : Colors.green }}>
            {(this.state.stats.rate < 0 ) ?
              <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon }}>{ CryptoViewerIconsMap.minus.unicode }</Text> : 
              <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon }}>{ CryptoViewerIconsMap.plus.unicode }</Text>}
            <Text style={styles.rate_number}>
              { UtilsService.truncateNumber(Math.abs(this.state.stats.rate)) }%
            </Text>
          </View>
        </View> : null}
        {this.renderStats()}
        {this.renderPrices()}
      </View>
    );
  }
}

export default CryptoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'column'
  },
  crypto_details: {
    flexBasis: 120,
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  crypto_name: {
    color: 'white',
    paddingTop: 10
  },
  crypto_graph: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  crypto_prices: {
    flexBasis: 70,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.midGray,
    flexDirection: 'column'
  },
  crypto_prices_title: {
    flexBasis: 20,
    color: Colors.gray,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: -11,
    alignSelf: 'center',
    paddingHorizontal: 4
  },
  crypto_prices_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  crypto_price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10
  },
  main_crypto_price: {
    fontSize: 16
  },
  crypto_price_number: {
    fontSize: 16
  },
  main_crypto_price_number: {
    fontSize: 25
  },

  chart: {
    overflow: 'visible'
  },

  candle_container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  candle: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    flexDirection: 'row'
  },
  candle_text: {
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center'
  },

  stats: {
    flexBasis: 55,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.midGray,
    flexDirection: 'column'
  },
  stats_title: {
    flexBasis: 20,
    color: Colors.gray,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginTop: -11,
    alignSelf: 'center',
    paddingHorizontal: 4
  },
  stats_container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stat_number: {
    fontSize: 14
  },
  stat_icon: {
    fontSize: 12,
    paddingRight: 5
  },

  rate_container: {
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  rate: {
    padding: 8,
    borderRadius: 17,
    fontSize: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rate_icon: {
    fontSize: 15,
    paddingRight: 5,
    color: 'white',
  },
  rate_number: {
    color: 'white',
  },

  crypto_icon: {
    fontSize: 60,
    width: 60,
    color: 'white',
    fontFamily: 'cryptocurrencies'
  },
  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});
