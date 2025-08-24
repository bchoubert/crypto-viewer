import { FC, memo, useContext, useMemo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Switch from "../utils/Switch";
import { SettingsContext } from "../../contexts/settings.provider";
import Dropdown from "../utils/Dropdown";
import { getCurrencyNames } from "../../services/currency.service";
import { ThemeContext } from "../../contexts/theme.provider";
import { TranslationLanguage } from "../../types/translation";
import TranslationText from "../utils/TranslationText";

const Settings: FC = memo(() => {
  const { theme } = useContext(ThemeContext);
  const { settings, setSortMarketBy, setCurrency, setLanguage, setMode } = useContext(SettingsContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      paddingTop: 8,
      backgroundColor: theme.colors.background,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    title: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      paddingLeft: 8,
      marginBottom: 8,
      color: theme.colors.text,
    },
    card: {
      backgroundColor: theme.colors.elevated,
      width: Dimensions.get('window').width - 16,
      margin: 8,
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderRadius: 16,
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
    },
  }), [theme]);

  const currencyItems = useMemo(getCurrencyNames, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TranslationText id="settings.sort.title" style={styles.title} />
        <Switch
          items={[
            { value: 'NAME', translationId: 'settings.sort.name' },
            { value: 'SYMBOL', translationId: 'settings.sort.symbol' },
          ]}
          selectedItem={settings.sortMarketBy}
          changeSelectedItem={(newValue) => setSortMarketBy(newValue)}
        />
      </View>
      
      <View style={styles.card}>
        <TranslationText id="settings.currency.title" style={styles.title} />
        <Dropdown
          items={currencyItems}
          selectedItem={settings.currency}
          changeSelectedItem={(newValue) => setCurrency(newValue)}
          placeholder="Select a base currency..."
        />
      </View>
      
      <View style={styles.card}>
        <TranslationText id="settings.language.title" style={styles.title} />
        <Switch
          items={[
            { value: TranslationLanguage.FR, label: 'Français' },
            { value: TranslationLanguage.EN, label: 'English' },
          ]}
          selectedItem={settings.language}
          changeSelectedItem={(newValue) => setLanguage(newValue)}
        />
      </View>
      
      <View style={styles.card}>
        <TranslationText id="settings.theme.title" style={styles.title} />
        <Switch
          items={[
            { value: 'LIGHT', translationId: 'settings.theme.light' },
            { value: 'DARK', translationId: 'settings.theme.dark' },
          ]}
          selectedItem={settings.mode}
          changeSelectedItem={(newValue) => setMode(newValue)}
        />
      </View>
      
    </View>
  );
});

Settings.displayName = '<Settings />';

export default Settings;
