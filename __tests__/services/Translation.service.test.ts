import { AvailableTranslations } from '../../assets/translations/TranslationUtils';
import TranslationService from '../../services/Translation.service';

describe('TranslationService', () => {
  it('getTranslationForLanguage', () => {
    expect(TranslationService.getTranslationForLanguage(AvailableTranslations.en).common.save).toEqual('Save');
    expect(TranslationService.getTranslationForLanguage(AvailableTranslations.fr).common.save).toEqual('Sauvegarder');
  });
});
