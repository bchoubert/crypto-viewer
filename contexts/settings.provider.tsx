import { createContext, FC, memo, ReactNode, useCallback, useContext, useMemo } from "react";
import { useMMKVStorage } from 'react-native-mmkv-storage';
import { StorageContext } from "./storage.provider";
import { showToast } from "../services/toast.service";
import { Currency } from "../services/currency.service";
import { TranslationLanguage } from "../types/translation";

type SettingsMode = 'LIGHT' | 'DARK';
type SettingsSortMarketBy = 'SYMBOL' | 'NAME';

interface Settings {
  mode: SettingsMode;
  language: TranslationLanguage;
  sortMarketBy: SettingsSortMarketBy;
  currency: Currency;
  favourites: string[];
}

const defaultSettings: Settings = {
  mode: 'LIGHT',
  language: TranslationLanguage.EN,
  sortMarketBy: 'NAME',
  currency: Currency.eur,
  favourites: [],
};

interface SettingsContextInterface {
  settings: Settings;
  
  setMode: (mode: SettingsMode) => void;
  setSortMarketBy: (sortMarketBy: SettingsSortMarketBy) => void;
  setCurrency: (currency: Currency) => void;
  setLanguage: (language: TranslationLanguage) => void;

  toggleFavourite: (cryptoSymbol: string) => void;
  isFavourite: (cryptoSymbol: string) => boolean;
}

export const SettingsContext = createContext<SettingsContextInterface>({
  settings: defaultSettings,

  setMode: () => {},
  setSortMarketBy: () => {},
  setCurrency: () => {},
  setLanguage: () => {},

  toggleFavourite: () => {},
  isFavourite: () => false,
});

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: FC<SettingsProviderProps> = memo(({
  children,
}) => {
  const { storage } = useContext(StorageContext);
  
  const [currency, setCurrency] = useMMKVStorage('currency', storage, defaultSettings.currency);
  const [mode, setMode] = useMMKVStorage('mode', storage, defaultSettings.mode);
  const [language, setLanguage] = useMMKVStorage('lanugage', storage, defaultSettings.language);
  const [sortMarketBy, setSortMarketBy] = useMMKVStorage('sortMarketBy', storage, defaultSettings.sortMarketBy);
  const [favourites, setFavourites] = useMMKVStorage('favourites', storage, defaultSettings.favourites);

  const addFavourite = useCallback((newFavourite: string) => {
    const newFavourites = [...(favourites || []), newFavourite];    
    setFavourites(newFavourites);
    showToast('Favourite added!');
  }, [setFavourites, favourites]);

  const removeFavourite = useCallback((oldFavourite: string) => {
    const newFavourites = [...(favourites || [])].filter(l => l !== oldFavourite);
    setFavourites(newFavourites);
    showToast('Favourite removed!');
  }, [setFavourites, favourites]);

  const isFavourite = useCallback((cryptoSymbol: string) => {
    return favourites.includes(cryptoSymbol);
  }, [favourites]);

  const toggleFavourite = useCallback((cryptoSymbol: string) => {
    const isCryptoFavourite = isFavourite(cryptoSymbol);
    if (isCryptoFavourite) {
      removeFavourite(cryptoSymbol);
    } else {
      addFavourite(cryptoSymbol);
    }
  }, [isFavourite, addFavourite, removeFavourite]);

  const contextValues: SettingsContextInterface = useMemo(() => ({
    settings: {
      favourites,
      currency,
      mode,
      language,
      sortMarketBy,
    },

    setMode,
    setSortMarketBy,
    setCurrency,
    setLanguage,

    toggleFavourite,
    isFavourite,
  }), [favourites, currency, mode, sortMarketBy, language,
      setMode, setSortMarketBy, setCurrency, setLanguage,
      toggleFavourite, isFavourite]);

    return (
      <SettingsContext.Provider value={contextValues}>
        {children}
      </SettingsContext.Provider>
    );
});

export default SettingsProvider;
