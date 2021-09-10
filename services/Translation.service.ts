import EnTranslation from '../assets/translations/en';
import FrTranslation from '../assets/translations/fr';
import { AvailableTranslations } from '../assets/translations/TranslationUtils';
import TranslationType from '../models/TranslationType';

const translationsForLanguage: Record<AvailableTranslations, TranslationType> = {
  [AvailableTranslations.en]: EnTranslation,
  [AvailableTranslations.fr]: FrTranslation,
};

const TranslationService = {
  getTranslationForLanguage: (language: AvailableTranslations) => translationsForLanguage[language],
};

export default TranslationService;
