import React, { memo, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';

import dateFormats, { dateFormatType } from '../../models/DateFormat';
import quoteType, { possibleQuotes } from '../../models/QuoteType';
import Selector from '../Utils/Selector';

const styles = StyleSheet.create({
  settings: {
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray
  },
  settingsText: {
    fontSize: 17,
    width: '100%',
    marginBottom: 8,
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
          <Selector
            items={possibleQuotes.map(qu => qu.code)}
            activeItem={quote.code}
            setActiveItem={(code) => changeQuote(possibleQuotes.find(qu => qu.code === code))}
            color={Colors.blue}
          />
        </View>
      );
    case 'dateFormat':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Preferred date</Text>
          <Selector
            items={Object.values(dateFormats)}
            activeItem={dateFormat}
            setActiveItem={changeDateFormat}
            color={Colors.blue}
          />
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
