import NetworkService from "@/services/network.service";
import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SectionList, StyleSheet, ToastAndroid } from "react-native";
import CryptoListItem from "./CryptoListItem";
import { ICrypto } from "@/types/crypto.types";
import CryptoListSection from "./CryptoListSection";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { showError } from "@/services/error.service";

const CryptoList: FC = memo(() => {
  const { settings } = useContext(SettingsContext);
  const translation = useContext(TranslationsContext);

  const [isLoading, setLoading] = useState(true);

  const [cryptosWithRates, setCryptosWithRate] = useState<ICrypto[]>([]);
  const [cryptosWithoutRates, setCryptosWithoutRate] = useState<ICrypto[]>([]);

  const fetchCryptos = useCallback(async () => {
    setLoading(true);

    const [fetchedCurrencies, exchangeRatesResponse] = await Promise.all([
      NetworkService.fetchCryptos().catch(showError),
      NetworkService.fetchCryptoExchangeRates(settings.quote).catch(showError),
    ]);

    if (!fetchedCurrencies) {
      ToastAndroid.show(translation.list.error, ToastAndroid.BOTTOM);
      return [[], []];
    }
    
    const rates = (exchangeRatesResponse?.data?.rates || {});
    const fetchedCurrenciesWithRates: ICrypto[] = fetchedCurrencies.filter(c => c?.details?.type === 'crypto').map(f => ({
      ...f,
      rate: rates[f.id] ? parseFloat(rates[f.id]) : undefined,
    }));
    
    setCryptosWithRate(fetchedCurrenciesWithRates.filter(r => !!r.rate));
    setCryptosWithoutRate(fetchedCurrenciesWithRates.filter(r => !r.rate));
  
    setLoading(false);
  }, [translation]);

  const sections = useMemo(() => {
    if (!cryptosWithRates) {
      return [];
    }

    return [
      {
        title: translation.list.main,
        data: cryptosWithRates,
      },
      {
        title: translation.list.other,
        data: cryptosWithoutRates,
      },
    ];
  }, [cryptosWithRates, cryptosWithoutRates, translation]);

  const handleRenderItem = useCallback((props: { item: ICrypto }) => <CryptoListItem {...props} />, []);
  const handleRenderSectionHeader = useCallback((props: { section: { title: string } }) => <CryptoListSection title={props.section.title} />, []);

  useEffect(() => {
    fetchCryptos();
  }, []);
  
  return (
    <SectionList
      onRefresh={fetchCryptos}
      refreshing={isLoading}

      sections={sections}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
      stickySectionHeadersEnabled
    />
  );
});

export default CryptoList;