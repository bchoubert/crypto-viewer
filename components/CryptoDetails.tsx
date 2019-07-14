import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryVoronoiContainer } from 'victory-native';

import Colors from '../assets/Colors';

import CryptoCurrencyIconsMap from '../assets/fonts/CryptoCurrencyIconsMap';
import CryptoViewerIconsMap from '../assets/fonts/CryptoViewerIconsMap';

import UtilsService from '../services/Utils.service';

import Currency from '../models/Currency';
import NetworkService from '../services/Network.service';
import quoteType from '../models/QuoteType';
import Stats from '../models/Stats';

export interface Props {
  crypto: Currency,
  quote: quoteType
}

interface State {
  buyPrice: number,
  sellPrice: number,
  historicRates: any[],
  stats: Stats
}

class CryptoDetails extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      buyPrice: null,
      sellPrice: null,
      historicRates: [],
      stats: null
    };
  }

  componentWillMount() {
    NetworkService.getBuyPrice(this.props.crypto.id, this.props.quote.code)
      .then(price => {
        this.setState({ buyPrice: parseFloat(price.data.amount) });
      })
      .catch(console.log);

    NetworkService.getSellPrice(this.props.crypto.id, this.props.quote.code)
      .then(price => {
        this.setState({ sellPrice: parseFloat(price.data.amount) });
      })
      .catch(console.log);

    NetworkService.fetchHistoricRates(this.props.crypto.id, this.props.quote.code)
      .then(historicRates => {
        let result = [];
        historicRates.forEach(historicRate => {
          result.unshift({ x: new Date(historicRate[0] * 1000).toISOString(), y: historicRate[4] });
        });
        this.setState({ historicRates: result });
      })
      .catch(console.log);

    NetworkService.get24htStats(this.props.crypto.id, this.props.quote.code)
      .then(stats => {
        stats.rate = (parseFloat(stats.last) / parseFloat(stats.open) - 1) * 100;
        this.setState({ stats: stats });
      })
      .catch(console.log);
  }

  renderPrices() {
    if(!this.state.sellPrice && !this.state.buyPrice) {
      return null;
    }
    return <View style={styles.crypto_prices}>
      {(!!this.state.buyPrice) ? 
        <View style={styles.crypto_price}>
          <Text>Buy</Text>
          <Text style={{ ...styles.crypto_price_number, color: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
            {UtilsService.truncateNumber(this.state.buyPrice) + ' ' + this.props.quote.symbol}
          </Text>
        </View> : null
      }
      {(!!this.state.sellPrice) ? 
        <View style={styles.crypto_price}>
          <Text>Sell</Text>
          <Text style={{ ...styles.crypto_price_number, color: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
            {UtilsService.truncateNumber(this.state.sellPrice) + ' ' + this.props.quote.symbol}
          </Text>
        </View> : null
      }
    </View>;
  }

  renderStats() {
    if(!this.state.stats) {
      return null;
    }
    return <View style={styles.stats}>
      {(!!this.state.stats.high) ? 
        <View style={styles.stat}>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.high.unicode }</Text>
          <Text style={{ ...styles.stat_number, color: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
            {UtilsService.truncateNumber(this.state.stats.high, 1) + ' ' + this.props.quote.symbol}
          </Text>
        </View> : null
      }
      {(!!this.state.stats.low) ? 
        <View style={styles.stat}>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.low.unicode }</Text>
          <Text style={{ ...styles.stat_number, color: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
            {UtilsService.truncateNumber(this.state.stats.low, 1) + ' ' + this.props.quote.symbol}
          </Text>
        </View> : null
      }
      {(!!this.state.stats.volume) ? 
        <View style={styles.stat}>
          <Text style={{ ...styles.cryptoViewerIcon, ...styles.stat_icon }}>{ CryptoViewerIconsMap.volume.unicode }</Text>
          <Text style={{ ...styles.stat_number, color: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
            {UtilsService.truncateNumber(this.state.stats.volume, 1)}
          </Text>
        </View> : null
      }
    </View>;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{ ...styles.crypto_details, backgroundColor: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color }}>
          <Text style={styles.crypto_icon}>{ CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].unicode }</Text>
          <Text style={styles.crypto_name}>{ this.props.crypto.name + ' - ' + this.props.crypto.id }</Text>
        </View>
        <View style={styles.crypto_graph}>
          {(!!this.state.historicRates.length) ? 
            <VictoryChart style={{ marginLeft: 10, marginRight: 10 }} theme={VictoryTheme.material} scale={{ x: 'time' }}
              containerComponent={ <VictoryVoronoiContainer style={{ borderWidth: 0 }} labels={d => "(x=" + d.x + ";y=" + d.y + ")"} /> }>

              <VictoryLine style={{ data: { stroke: CryptoCurrencyIconsMap[this.props.crypto.id.toLowerCase()].color } }} data={ this.state.historicRates } />
              <VictoryAxis fixLabelOverlap={true} />
              <VictoryAxis dependentAxis style={{ axis: { verticalAnchor: 'middle' } }} fixLabelOverlap={true} />
            </VictoryChart> : null
          }
        </View>
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
    justifyContent: 'center'
  },
  crypto_prices: {
    flexBasis: 70,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    flexDirection: 'row'
  },
  crypto_price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  crypto_price_number: {
    fontSize: 25
  },

  stats: {
    flexBasis: 70,
    flexGrow: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    flexDirection: 'row'
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stat_number: {
    fontSize: 25
  },
  stat_icon: {
    fontSize: 14,
    paddingRight: 5
  },

  rate_container: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
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
