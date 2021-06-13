import React, { memo, FC, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { openURL } from 'expo-linking';

import Colors from '../../assets/Colors';

import dateFormats, { dateFormatType } from '../../models/DateFormat';
import { graphModes, graphModeType } from '../../models/GraphMode';
import quoteType, { possibleQuotes } from '../../models/QuoteType';
import Selector from '../Utils/Selector';
import { settingType } from './Settings';

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
    height: 130,
  },
  credits_first: {
    paddingBottom: 15,
  },
  portfolioLink: {
    color: Colors.blue,
  },
  creditsText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: Colors.gray,
    textAlign: 'center',
    width: '100%',
  }
});

interface SettingItemProps {
  settingKey: settingType;
  quote: quoteType;
  changeQuote: (newQuote: quoteType) => any;
  dateFormat: dateFormatType;
  changeDateFormat: (newDateFormat: dateFormatType) => any;
  graphMode: graphModeType;
  changeGraphMode: (newGraphMode: graphModeType) => any;
}

const SettingItem: FC<SettingItemProps> = ({
  settingKey,
  quote,
  changeQuote,
  dateFormat,
  changeDateFormat,
  graphMode,
  changeGraphMode,
}) => {
  const openPortfolio = useCallback(
    () => openURL('https://chbe.fr'),
    [],
  );

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
          <Text style={styles.settingsText}>Preferred date format</Text>
          <Selector
            items={Object.values(dateFormats)}
            activeItem={dateFormat}
            setActiveItem={changeDateFormat}
            color={Colors.blue}
          />
        </View>
      );
    case 'graphMode':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Graph mode</Text>
          <Selector
            items={graphModes}
            activeItem={graphMode}
            setActiveItem={changeGraphMode}
            color={Colors.blue}
          />
        </View>
      );
    case 'credits':
      return (
        <View style={{ ...styles.settings, ...styles.credits }}>
          <Text style={{ ...styles.creditsText, ...styles.credits_first }}>
            Crytpo-Viewer is a product designed, developed and maintained by Bertrand Choubert.
            <Text style={styles.portfolioLink} onPress={openPortfolio}> His website here!</Text>
          </Text>
          <Text style={styles.creditsText}>Developed with React-Native Expo, based on Coinbase Basic &amp; Pro APIs</Text>
          <Text style={styles.creditsText}>Use of cryptocurrency-icons-font and Font-Awesome Pro Icons</Text>
        </View>
      );
    default:
      return null;
  }
};

export default memo(SettingItem);
