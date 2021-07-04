import React, {
  createContext, FC, memo, ReactNode, useContext, useMemo,
} from 'react';
import { AvailableTranslations } from '../assets/translations/TranslationUtils';
import TranslationType from '../models/TranslationType';
import TranslationService from '../services/Translation.service';
import { SettingsContext } from './SettingsProvider';

export const TranslationContext = createContext(null as TranslationType);

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
}) => {
  const { settings } = useContext(SettingsContext);
  const language = useMemo(() => settings.LANGUAGE as AvailableTranslations, [settings]);

  const currentTranslation = useMemo(
    () => TranslationService.getTranslationForLanguage(language),
    [language],
  );

  return (
    <TranslationContext.Provider value={currentTranslation}>
      {children}
    </TranslationContext.Provider>
  );
};

export default memo(TranslationProvider);
