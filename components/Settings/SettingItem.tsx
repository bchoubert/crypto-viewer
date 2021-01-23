import React, { memo, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';

import dateFormats, { dateFormatType } from '../../models/DateFormat';
import quoteType from '../../models/QuoteType';

const styles = StyleSheet.create({
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

interface SettingItemProps {
  settingKey: 'currency' | 'dateFormat' | 'credits';
  quote: quoteType;
  changeQuote: (newQuote: quoteType) => any;
  dateFormat: dateFormatType;
  changeDateFormat: (newDateFormat: dateFormatType) => any;
}

const SettingItem: FC<SettingItemProps> = ({
  settingKey,
  quote,
  changeQuote,
  dateFormat,
  changeDateFormat,
}) => {
  switch (settingKey) {
    case 'currency':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Preferred currency</Text>
          <View style={styles.quoteChanger}>
            <TouchableOpacity onPress={() => changeQuote({ code: 'USD', symbol: '$' })}
              style={{ ...styles.quoteChangerPart, ...(quote.code === 'USD' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(quote.code === 'USD' ? styles.quoteChangerPartTextActive : []) }}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeQuote({ code: 'EUR', symbol: '€' })}
              style={{ ...styles.quoteChangerPart, ...(quote.code === 'EUR' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(quote.code === 'EUR' ? styles.quoteChangerPartTextActive : []) }}>EUR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeQuote({ code: 'BTC', symbol: '₿' })}
              style={{ ...styles.quoteChangerPart, ...(quote.code === 'BTC' ? styles.quoteChangerPartActive : []) }}>

              <Text style={{ ...(quote.code === 'BTC' ? styles.quoteChangerPartTextActive : []) }}>BTC</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    case 'dateFormat':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Preferred date</Text>
          <View style={styles.dateChanger}>
            <TouchableOpacity onPress={() => changeDateFormat(dateFormats.american)}
              style={{ ...styles.dateChangerPart, ...(dateFormat === dateFormats.american ? styles.dateChangerPartActive : []) }}>

              <Text style={{ ...(dateFormat === dateFormats.american ? styles.dateChangerPartTextActive : []) }}>
                {dateFormats.american}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeDateFormat(dateFormats.european)}
              style={{ ...styles.dateChangerPart, ...(dateFormat === dateFormats.european ? styles.dateChangerPartActive : []) }}>

              <Text style={{ ...(dateFormat === dateFormats.european ? styles.dateChangerPartTextActive : []) }}>
                {dateFormats.european}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    case 'credits':
      return (
        <View style={{ ...styles.settings, ...styles.credits }}>
          <Text style={styles.creditsText}>Designed and developed by Bertrand Choubert</Text>
          <Text style={styles.creditsText}>Developed with React-Native Expo</Text>
          <Text style={styles.creditsText}>Based on Coinbase Basic &amp; Pro APIs</Text>
          <Text style={styles.creditsText}>Use of cryptocurrency-icons-font and Font-Awesome Pro Icons</Text>
        </View>
      );
  }
};

export default memo(SettingItem);
