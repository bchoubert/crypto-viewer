import React, { Component, ReactElement } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import safeSetState from '@axetroy/react-safe-set-state';

import Colors from '../assets/Colors';

import quoteType from '../models/QuoteType';
import dateFormats from '../models/DateFormat';

export interface Props {
  // Quote as selected
  quote: quoteType,
  // Callback function to change the quote
  changeQuote: Function,
  
  // Date format as selected
  dateFormat: string,
  // Callback function to change the date format
  changeDateFormat: Function
};

interface State {
  //
};

// Settings view
@safeSetState()
class Settings extends Component<Props, State> {
  
  // Render each part of the settings depending of the key
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
      case 'dateFormat':
        return <View style={styles.settings}>
        <Text style={styles.settingsText}>Preferred date</Text>
        <View style={styles.dateChanger}>
          <TouchableOpacity onPress={() => this.props.changeDateFormat(dateFormats.american) } 
                            style={{ ...styles.dateChangerPart, ...(this.props.dateFormat === dateFormats.american ? styles.dateChangerPartActive : []) }}>

            <Text style={{ ...(this.props.dateFormat === dateFormats.american ? styles.dateChangerPartTextActive : []) }}>
              {dateFormats.american}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.changeDateFormat(dateFormats.european)} 
                            style={{ ...styles.dateChangerPart, ...(this.props.dateFormat === dateFormats.european ? styles.dateChangerPartActive : []) }}>

            <Text style={{ ...(this.props.dateFormat === dateFormats.european ? styles.dateChangerPartTextActive : []) }}>
              {dateFormats.european}
            </Text>
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

  // Render a list with all settings key in the correct order
  render() {
    return (
      <FlatList 
        style={styles.container}
        data={[
          {key: 'currency'},
          {key: 'dateFormat'},
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

  dateChanger: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateChangerPart: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    borderRadius: 30
  },
  dateChangerPartActive: {
    backgroundColor: Colors.gray
  },
  dateChangerPartTextActive: {
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
