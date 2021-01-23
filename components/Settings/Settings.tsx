import React, { FC, memo } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { dateFormatType } from '../../models/DateFormat';

import quoteType from '../../models/QuoteType';
import SettingItem from './SettingItem';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

interface SettingsProps {
  // Quote as selected
  quote: quoteType;
  // Callback function to change the quote
  changeQuote: (newQuote: quoteType) => any;

  // Date format as selected
  dateFormat: dateFormatType;
  // Callback function to change the date format
  changeDateFormat: (newDateFormat: dateFormatType) => any;
};

// Settings view
// Render a list with all settings key in the correct order
const Settings: FC<SettingsProps> = ({
  quote,
  changeQuote,
  dateFormat,
  changeDateFormat,
}) => (
  <FlatList
    style={styles.container}
    data={[
      { key: 'currency' },
      { key: 'dateFormat' },
      { key: 'credits' }
    ]}
    renderItem={({ item }) => (
      <SettingItem
        settingKey={item.key as 'currency' | 'dateFormat' | 'credits'}
        quote={quote}
        changeQuote={changeQuote}
        dateFormat={dateFormat}
        changeDateFormat={changeDateFormat}
      />
    )}
  />
);

export default memo(Settings);
