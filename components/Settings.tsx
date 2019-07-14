import React, { Component, ReactElement } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import Colors from '../assets/Colors';

import quoteType from '../models/QuoteType';

export interface Props {
  quote: quoteType,
  changeQuote: Function
};

interface State {
  //
};

class Settings extends Component<Props, State> {
  
  renderSettings = (settingKey): ReactElement<any> => {
    switch(settingKey) {
      case 'currency':
        return <View style={styles.settings}>
          <Text style={styles.settingsText}>Preferred currency</Text>
          <View style={styles.quoteChanger}>
            <TouchableOpacity onPress={() => this.props.changeQuote({ code: 'USD', symbol: '$' })} 
                              style={{ ...styles.quoteChangerPart, ...(this.props.quote.code === 'USD' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(this.props.quote.code === 'USD'? styles.quoteChangerPartTextActive : []) }}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.changeQuote({ code: 'EUR', symbol: '€' }) } 
                              style={{ ...styles.quoteChangerPart, ...(this.props.quote.code === 'EUR' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(this.props.quote.code === 'EUR'? styles.quoteChangerPartTextActive : []) }}>EUR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.changeQuote({ code: 'BTC', symbol: '₿' })} 
                              style={{ ...styles.quoteChangerPart, ...(this.props.quote.code === 'BTC' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(this.props.quote.code === 'BTC'? styles.quoteChangerPartTextActive : []) }}>BTC</Text>
            </TouchableOpacity>
          </View>
        </View>;
      case 'credits':
        return <View style={{ ...styles.settings, ...styles.credits }}>
          <Text style={styles.creditsText}>Designed and developed by Bertrand Choubert</Text>
          <Text style={styles.creditsText}>Developed with React-Native Expo</Text>
          <Text style={styles.creditsText}>Based on Coinbase Basic &amp; Pro APIs</Text>
          <Text style={styles.creditsText}>Use of cryptocurrency-icons-font and Font-Awesome Pro Icons</Text>
        </View>
      default:
          <View style={styles.settings}></View>
    }
  }

  render() {
    return (
      <FlatList 
        style={styles.container}
        data={[
          {key: 'currency'},
          {key: 'credits'}
        ]}
        renderItem={ ({ item }) => this.renderSettings(item.key) }
        />
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settings: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray
  },
  settingsText: {
    fontSize: 17
  },

  quoteChanger: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center'
  },
  quoteChangerPart: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    borderRadius: 30
  },
  quoteChangerPartActive: {
    backgroundColor: Colors.gray
  },
  quoteChangerPartTextActive: {
    color: 'white'
  },

  credits: {
    flexDirection: 'column',
    marginTop: 15,
    paddingBottom: 15,
    height: 130
  },
  creditsText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: Colors.gray
  }
});
