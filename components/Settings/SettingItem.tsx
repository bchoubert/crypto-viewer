import React, {
  memo, FC, useCallback, useContext, useMemo,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { openURL } from 'expo-linking';

import Colors from '../../assets/Colors';

import dateFormats, { DateFormatType } from '../../models/DateFormat';
import { graphModes, GraphModeType } from '../../models/GraphMode';
import QuoteType, { possibleQuotes } from '../../models/QuoteType';
import Selector from '../Utils/Selector';
import { AvailableTranslations } from '../../assets/translations/TranslationUtils';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { SettingType } from '../../models/SettingType';

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
    borderBottomColor: Colors.lightGray,
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
  },
});

interface SettingItemProps {
  settingKey: SettingType;
}

const SettingItem: FC<SettingItemProps> = ({
  settingKey,
}) => {
  const openPortfolio = useCallback(
    () => openURL('https://chbe.fr'),
    [],
  );

  const {
    settings, changeSettings,
  } = useContext(SettingsContext);

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);
  const dateFormat = useMemo(() => settings.DATE_FORMAT_KEY as DateFormatType, [settings]);
  const graphMode = useMemo(() => settings.GRAPH_MODE_KEY as GraphModeType, [settings]);
  const language = useMemo(() => settings.LANGUAGE as AvailableTranslations, [settings]);

  switch (settingKey) {
    case 'currency':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Preferred currency</Text>
          <Selector
            items={possibleQuotes.map((qu) => qu.code)}
            activeItem={quote.code}
            setActiveItem={(code) => changeSettings('QUOTE_STORAGE_KEY', possibleQuotes.find((qu) => qu.code === code))}
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
            setActiveItem={(newDateFormat) => changeSettings('DATE_FORMAT_KEY', newDateFormat as DateFormatType)}
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
            setActiveItem={(newGraphMode) => changeSettings('GRAPH_MODE_KEY', newGraphMode as GraphModeType)}
            color={Colors.blue}
          />
        </View>
      );
    case 'language':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>Language</Text>
          <Selector
            items={Object.keys(AvailableTranslations)}
            activeItem={language}
            setActiveItem={((newLanguage) => changeSettings('LANGUAGE', newLanguage as AvailableTranslations))}
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
          <Text style={styles.creditsText}>
            Developed with React-Native Expo, based on Coinbase Basic &amp; Pro APIs
          </Text>
          <Text style={styles.creditsText}>
            Use of cryptocurrency-icons-font, Font-Awesome Pro Icons and some CoinBase assets
          </Text>
        </View>
      );
    default:
      return null;
  }
};

export default memo(SettingItem);
