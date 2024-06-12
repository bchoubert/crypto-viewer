import NetworkService from "@/services/network.service";
import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SectionList, SectionListData, StyleSheet, ToastAndroid } from "react-native";
import CryptoListItem from "./CryptoListItem";
import { ICrypto, ICryptoFavourite } from "@/types/crypto.types";
import CryptoListSection from "./CryptoListSection";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { showError } from "@/services/error.service";
import CryptoListFavourite from "./CryptoListFavourite";

const CryptoList: FC = memo(() => {
  const { settings, hasFavourite } = useContext(SettingsContext);
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

    const favouriteCryptos = cryptosWithRates.filter(c => hasFavourite(c.id));
    const favouriteItems: ICryptoFavourite[] = [];
    favouriteCryptos.forEach((c: ICrypto, i: number) => {
      if (i % 2 === 0) {
        favouriteItems.push({ cryptos: [favouriteCryptos[i], favouriteCryptos[i + 1]].filter(Boolean) })
      }
    });

    console.log(favouriteItems.length)

    return [
      {
        id: 'favourites',
        title: translation.list.favourites,
        data: favouriteItems,
      },
      {
        id: 'main',
        title: translation.list.main,
        data: cryptosWithRates,
      },
      {
        id: 'others',
        title: translation.list.other,
        data: cryptosWithoutRates,
      },
    ];
  }, [cryptosWithRates, cryptosWithoutRates, translation]);

  const handleRenderItem = useCallback(
    (props: { item: ICrypto | ICryptoFavourite, section: { id: string } }) => {

    if (props.section.id === 'favourites') {
      return (<CryptoListFavourite item={props.item as ICryptoFavourite} />);
    }
    
    return (<CryptoListItem item={props.item as ICrypto} />);
  }, []);

  const handleRenderSectionHeader = useCallback(
    (props: { section: { title: string } }) => <CryptoListSection title={props.section.title} />,
    [],
  );

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