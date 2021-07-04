import EnTranslation from './en';
import FrTranslation from './fr';

export enum AvailableTranslations {
  fr = 'fr',
  en = 'en',
}

export const TranslationObject = {
  [AvailableTranslations.fr]: FrTranslation,
  [AvailableTranslations.en]: EnTranslation,
};
