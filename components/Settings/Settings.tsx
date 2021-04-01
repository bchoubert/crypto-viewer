import React, { FC, memo } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { dateFormatType } from '../../models/DateFormat';
import { graphModeType } from '../../models/GraphMode';


import quoteType from '../../models/QuoteType';
import SettingItem from './SettingItem';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export type settingType = 'currency' | 'dateFormat' | 'graphMode' | 'credits';

interface SettingsProps {
  // Quote as selected
  quote: quoteType;
  // Callback function to change the quote
  changeQuote: (newQuote: quoteType) => any;

  // Date format as selected
  dateFormat: dateFormatType;
  // Callback function to change the date format
  changeDateFormat: (newDateFormat: dateFormatType) => any;

  // Graph mode as selected
  graphMode: graphModeType;
  // Callback function to change the graph mode
  changeGraphMode: (newGraphMode: graphModeType) => any;
};

// Settings view
// Render a list with all settings key in the correct order
const Settings: FC<SettingsProps> = ({
  quote,
  changeQuote,
  dateFormat,
  changeDateFormat,
  graphMode,
  changeGraphMode,
}) => (
  <FlatList
    style={styles.container}
    data={[
      { key: 'currency' },
      { key: 'dateFormat' },
      { key: 'graphMode' },
      { key: 'credits' }
    ]}
    renderItem={({ item }) => (
      <SettingItem
        settingKey={item.key as settingType}
        quote={quote}
        changeQuote={changeQuote}
        dateFormat={dateFormat}
        changeDateFormat={changeDateFormat}
        graphMode={graphMode}
        changeGraphMode={changeGraphMode}
      />
    )}
  />
);

export default memo(Settings);
