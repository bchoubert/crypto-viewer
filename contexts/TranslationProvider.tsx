import React, {
  createContext, FC, memo, ReactNode, useContext, useMemo,
} from 'react';
import TranslationType, { AvailableTranslations } from '../assets/translations/TranslationType';
import TranslationService from '../services/Translation.service';
import { SettingsContext } from './SettingsProvider';

export const TranslationContext = createContext(null as TranslationType);

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider: FC<TranslationProviderProps> = ({ children }) => {
  const { language } = useContext(SettingsContext);

  const currentTranslation = useMemo(
    () => TranslationService.getTranslationForLanguage(language || AvailableTranslations.en),
    [language],
  );

  return (
    <TranslationContext.Provider value={currentTranslation}>
      {children}
    </TranslationContext.Provider>
  );
};

export default memo(TranslationProvider);
