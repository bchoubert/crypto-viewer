import { createContext, FC, memo, ReactNode, useContext, useMemo } from 'react';
import { translationEn } from '../types/lang/en';
import { SettingsContext } from '../contexts/settings.provider';
import { translationFr } from '../types/lang/fr';
import { Translation, TranslationLanguage } from '../types/translation';

interface TranslationContextInterface {
  language: TranslationLanguage;
  translation: Translation;
}

export const TranslationContext = createContext<TranslationContextInterface>({
  language: TranslationLanguage.EN,
  translation: translationEn,
});

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider: FC<TranslationProviderProps> = memo(({
  children,
}) => {
  const { settings } = useContext(SettingsContext);
  
  const activeTranslation = useMemo(() => {
    const translation = settings.language;

    const translationsMapping: Record<TranslationLanguage, Translation> = {
      [TranslationLanguage.EN]: translationEn,
      [TranslationLanguage.FR]: translationFr,
    };

    return translationsMapping[translation];
  }, [settings]);

  const contextValues: TranslationContextInterface = useMemo(() => ({
    language: settings.language,
    translation: activeTranslation,
  }), [activeTranslation, settings]);

  return (
    <TranslationContext.Provider value={contextValues}>
      {children}
    </TranslationContext.Provider>
  );
});

export default TranslationProvider;
