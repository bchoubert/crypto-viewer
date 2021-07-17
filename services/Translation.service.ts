import EnTranslation from '../assets/translations/en';
import FrTranslation from '../assets/translations/fr';
import TranslationType, { AvailableTranslations } from '../assets/translations/TranslationUtils';

const translationsForLanguage: Record<AvailableTranslations, TranslationType> = {
  [AvailableTranslations.en]: EnTranslation,
  [AvailableTranslations.fr]: FrTranslation,
};

const TranslationService = {
  getTranslationForLanguage: (language: AvailableTranslations) => translationsForLanguage[language],
};

export default TranslationService;
