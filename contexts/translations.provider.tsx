import EnTranslation from "@/assets/translations/en";
import { TranslationType } from "@/types/translation.types";
import { FC, ReactNode, createContext, memo, useContext, useEffect, useState } from "react";
import { SettingsContext } from "./settings.provider";
import FrTranslation from "@/assets/translations/fr";

export const TranslationsContext = createContext(EnTranslation);

interface TranslationsProviderProps {
  children: ReactNode;
}

const TranslationsProvider: FC<TranslationsProviderProps> = memo(({
  children,
}) => {
  const { settings } = useContext(SettingsContext);

  const [translation, setTranslation] = useState<TranslationType>(EnTranslation);

  useEffect(() => {
    switch(settings.language) {
      case 'EN':
        setTranslation(EnTranslation);
        break;
      case 'FR':
        setTranslation(FrTranslation);
        break;
      default:
        //
    }
  }, [settings?.language]);

  return (
    <TranslationsContext.Provider value={translation}>
      {children}
    </TranslationsContext.Provider>
  );
});

export default TranslationsProvider;
