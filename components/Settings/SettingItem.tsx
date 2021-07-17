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
import { AvailableTranslationDetails, AvailableTranslations } from '../../assets/translations/TranslationUtils';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { SettingType } from '../../models/SettingType';
import { TranslationContext } from '../../contexts/TranslationProvider';
import { darkModes, DarkModeType } from '../../models/DarkMode';
import { ThemeContext } from '../../contexts/ThemeProvider';

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

  const theme = useContext(ThemeContext);

  const {
    settings, changeSettings,
  } = useContext(SettingsContext);

  const t = useContext(TranslationContext);

  const styles = useMemo(
    () => StyleSheet.create({
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
        color: theme.textColor,
      },
      credits: {
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        marginTop: 15,
        height: 130,
      },
      credits_first: {
        paddingTop: 5,
        color: Colors.gray,
        textAlign: 'center',
        width: '100%',
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
    }),
    [theme],
  );

  const quote = useMemo(() => settings.QUOTE_STORAGE_KEY as QuoteType, [settings]);
  const dateFormat = useMemo(() => settings.DATE_FORMAT_KEY as DateFormatType, [settings]);
  const graphMode = useMemo(() => settings.GRAPH_MODE_KEY as GraphModeType, [settings]);
  const darkMode = useMemo(() => settings.DARK_MODE_KEY as DarkModeType, [settings]);
  const language = useMemo(() => settings.LANGUAGE as AvailableTranslations, [settings]);

  const renderGraphModeSetting = useCallback(
    (item: GraphModeType) => t.settings.values.graph_mode[item],
    [t],
  );

  const renderDarkModeSetting = useCallback(
    (item: DarkModeType) => t.settings.values.dark_mode[item],
    [t],
  );

  const renderLanguageSetting = useCallback(
    (item: AvailableTranslations) => AvailableTranslationDetails[item].name,
    [],
  );

  switch (settingKey) {
    case 'currency':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>
            {t.settings.preferred_currency}
          </Text>
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
          <Text style={styles.settingsText}>
            {t.settings.preferred_date_format}
          </Text>
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
          <Text style={styles.settingsText}>
            {t.settings.graph_mode}
          </Text>
          <Selector
            items={graphModes}
            activeItem={graphMode}
            setActiveItem={(newGraphMode) => changeSettings('GRAPH_MODE_KEY', newGraphMode as GraphModeType)}
            color={Colors.blue}
            renderItem={renderGraphModeSetting}
          />
        </View>
      );
    case 'language':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>
            {t.settings.language}
          </Text>
          <Selector
            items={Object.keys(AvailableTranslations)}
            activeItem={language}
            setActiveItem={((newLanguage) => changeSettings('LANGUAGE', newLanguage as AvailableTranslations))}
            color={Colors.blue}
            renderItem={renderLanguageSetting}
          />
        </View>
      );
    case 'darkMode':
      return (
        <View style={styles.settings}>
          <Text style={styles.settingsText}>
            {t.settings.dark_mode}
          </Text>
          <Selector
            items={darkModes}
            activeItem={darkMode}
            setActiveItem={(newDarkMode) => changeSettings('DARK_MODE_KEY', newDarkMode as DarkModeType)}
            color={Colors.blue}
            renderItem={renderDarkModeSetting}
          />
        </View>
      );
    case 'credits':
      return (
        <View style={styles.credits}>
          <Text style={styles.credits_first}>
            {t.settings.credits.product}
            <Text style={styles.portfolioLink} onPress={openPortfolio}>
              {t.settings.credits.website}
            </Text>
          </Text>
          <Text style={styles.creditsText}>
            {t.settings.credits.apis}
            {' '}
          </Text>
          <Text style={styles.creditsText}>
            {t.settings.credits.libraries}
          </Text>
        </View>
      );
    default:
      return null;
  }
};

export default memo(SettingItem);
