import { AvailableTranslations } from "@/assets/translations/TranslationUtils";
import { loadSettings, saveSettings } from "@/services/settings.service";
import { Quote, SortAssetsType } from "@/types/crypto.types";
import { DarkModeType } from "@/types/darkMode.types";
import { DateFormatType } from "@/types/date.types";
import { GraphModeType } from "@/types/graph.types";
import { SettingsEnum, SettingsType, defaultSettings, settingsDetails } from "@/types/settings.types";
import { TranslationPossibility, TranslationType } from "@/types/translation.types";
import { WalletItem } from "@/types/wallet.types";
import { FC, ReactNode, createContext, memo, useCallback, useEffect, useMemo, useState } from "react";

interface SettingsContextInterface {
  settings: SettingsType;
  favourites: string[];
  wallet: WalletItem[];

  changeSetting: (settingKey: SettingsEnum, value: string, translation: TranslationType) => void;
  
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

  const changeSettingWithValue = useCallback((settingKey: keyof SettingsType, value: any) => {
    const newValues = {
      ...values,
      [settingKey]: value
    };

    setValues(newValues);
    saveSettings(newValues);
  }, [values, setValues]);

  const changeSettingViaAccessor = useCallback((settingKey: SettingsEnum, value: any, translation: TranslationType) => {
    const accessor = settingsDetails[settingKey](translation).accessor;

    changeSettingWithValue(accessor, value);
  }, [changeSettingWithValue]);
  
  const hasFavourite = useCallback((id: string) => values.favourites.includes(id), [values]);
  const toggleFavourite = useCallback((id: string) => {
    const isNotFavourite = !hasFavourite(id);
    const newFav = [...values.favourites].filter(i => i !== id);

    if (isNotFavourite) {
      changeSettingWithValue('favourites', [...newFav, id]);
    } else {
      changeSettingWithValue('favourites', newFav);
    }
  }, [changeSettingWithValue, values]);


  const addWalletItem = useCallback((item: WalletItem) => {
    const newWallet = [...values.wallet].filter(w => w.id !== item.id);
    changeSettingWithValue('wallet', [...newWallet, item]);
  }, [changeSettingWithValue, values]);

  const removeWalletItem = useCallback((id: string) => {
    const newWallet = [...values.wallet].filter(w => w.id !== id);
    changeSettingWithValue('wallet', newWallet);
  }, [changeSettingWithValue, values]);

  const contextValues = useMemo(
    () => {
      const context: SettingsContextInterface = {
        settings: values,
        favourites: values.favourites,
        wallet: values.wallet,

        changeSetting: changeSettingViaAccessor,

        toggleFavourite,
        hasFavourite,

        addWalletItem,
        removeWalletItem,
      };
      
      return context;
    },
    [ values, changeSettingViaAccessor, toggleFavourite, hasFavourite, addWalletItem, removeWalletItem],
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
