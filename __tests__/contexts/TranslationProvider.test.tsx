import React, { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { AvailableTranslations } from '../../assets/translations/TranslationUtils';
import { renderNode } from '../../components/testUtils/bootstrap';
import { TranslationContext } from '../../contexts/TranslationProvider';
import TranslationService from '../../services/Translation.service';

const TranslationTestComponent: FC = () => {
  const t = useContext(TranslationContext);

  return (
    <View>
      <Text>{t.language}</Text>
    </View>
  );
};

describe('TranslationProvider', () => {
  it('French', () => {
    const frTranslation = TranslationService.getTranslationForLanguage(AvailableTranslations.fr);

    const node = renderNode(
      <TranslationContext.Provider value={frTranslation}>
        <TranslationTestComponent />
      </TranslationContext.Provider>,
    );

    node.getByText(frTranslation.language);
  });

  it('English', () => {
    const enTranslation = TranslationService.getTranslationForLanguage(AvailableTranslations.en);

    const node = renderNode(
      <TranslationContext.Provider value={enTranslation}>
        <TranslationTestComponent />
      </TranslationContext.Provider>,
    );

    node.getByText(enTranslation.language);
  });
});
