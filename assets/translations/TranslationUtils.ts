import EnTranslation from './en';
import FrTranslation from './fr';

export enum AvailableTranslations {
  fr = 'fr',
  en = 'en',
}

export const AvailableTranslationDetails: Record<AvailableTranslations, { name: string }> = {
  [AvailableTranslations.fr]: {
    name: 'Français',
  },
  [AvailableTranslations.en]: {
    name: 'English',
  },
};

export const TranslationObject = {
  [AvailableTranslations.fr]: FrTranslation,
  [AvailableTranslations.en]: EnTranslation,
};
