import { loadSettings, saveSettings } from "@/services/settings.service";
import { Quote, SortAssetsType } from "@/types/crypto.types";
import { DarkModeType } from "@/types/darkMode.types";
import { DateFormatType } from "@/types/date.types";
import { GraphModeType } from "@/types/graph.types";
import { SettingsType, defaultSettings } from "@/types/settings.types";
import { TranslationPossibility } from "@/types/translation.types";
import { WalletItem } from "@/types/wallet.types";
import { FC, ReactNode, createContext, memo, useCallback, useEffect, useMemo, useState } from "react";

interface SettingsContextInterface {
  settings: SettingsType;

  changeQuote: (quote: Quote) => void;
  changeDateFormat: (foramt: DateFormatType) => void;
  changeGraphMode: (mode: GraphModeType) => void;
  changeLanguage: (language: TranslationPossibility) => void;
  changeDarkMode: (mode: DarkModeType) => void;
  changeShowOtherAssets: (show: boolean) => void;
  changeSortAssets: (sort: SortAssetsType) => void;
  
  toggleFavourite: (id: string) => void;
  hasFavourite: (id: string) => boolean;

  addWalletItem: (item: WalletItem) => void;
  removeWalletItem: (id: string) => void;
}

export const SettingsContext = createContext({
  settings: defaultSettings as SettingsType,
} as SettingsContextInterface);

interface SettingsProviderProps {
  children: ReactNode;
}

const SettingsProvider: FC<SettingsProviderProps> = memo(({
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [values, setValues] = useState<SettingsType>(defaultSettings);

  const load = useCallback(async () => {
    const settings = await loadSettings();
    setValues(settings);
    setLoading(false);
  }, []);

  useEffect(() => { load() }, []);

  const changeSetting = useCallback((settingKey: keyof SettingsType, value: any) => {
    const newValues = {
      ...values,
      [settingKey]: value
    };

    setValues(newValues);
    saveSettings(newValues);
  }, [values, setValues]);

  const changeQuote = useCallback((quote: Quote) => changeSetting('quote', quote), [changeSetting]);
  const changeDateFormat = useCallback((format: DateFormatType) => changeSetting('dateFormat', format), [changeSetting]);
  const changeGraphMode = useCallback((mode: GraphModeType) => changeSetting('graphMode', mode), [changeSetting]);
  const changeLanguage = useCallback((lang: TranslationPossibility) => changeSetting('language', lang), [changeSetting]);
  const changeDarkMode = useCallback((mode: DarkModeType) => changeSetting('darkMode', mode), [changeSetting]);
  const changeShowOtherAssets = useCallback((show: boolean) => changeSetting('showOtherAssets', show), [changeSetting]);
  const changeSortAssets = useCallback((sort: SortAssetsType) => changeSetting('sortAssets', sort), [changeSetting]);
  
  const hasFavourite = useCallback((id: string) => values.favourites.includes(id), [values]);
  const toggleFavourite = useCallback((id: string) => {
    const isNotFavourite = !hasFavourite(id);
    const newFav = [...values.favourites].filter(i => i !== id);

    if (isNotFavourite) {
      changeSetting('favourites', [...newFav, id]);
    } else {
      changeSetting('favourites', newFav);
    }
  }, [changeSetting, values]);


  const addWalletItem = useCallback((item: WalletItem) => {
    const newWallet = [...values.wallet].filter(w => w.id !== item.id);
    changeSetting('wallet', [...newWallet, item]);
  }, [changeSetting, values]);

  const removeWalletItem = useCallback((id: string) => {
    const newWallet = [...values.wallet].filter(w => w.id !== id);
    changeSetting('wallet', newWallet);
  }, [changeSetting, values]);

  const contextValues = useMemo(
    () => {
      const context: SettingsContextInterface = {
        settings: values,

        changeQuote,
        changeDateFormat,
        changeGraphMode,
        changeLanguage,
        changeDarkMode,
        changeShowOtherAssets,
        changeSortAssets,

        toggleFavourite,
        hasFavourite,

        addWalletItem,
        removeWalletItem,
      };
      
      return context;
    },
    [ values, changeQuote, changeDateFormat, changeGraphMode, changeLanguage, changeDarkMode,
    changeShowOtherAssets, changeSortAssets, toggleFavourite, hasFavourite, addWalletItem, removeWalletItem],
  );

  if (isLoading) {
    return null;
  }

  return (
    <SettingsContext.Provider value={contextValues}>
      {children}
    </SettingsContext.Provider>
  )
});

export default SettingsProvider;
