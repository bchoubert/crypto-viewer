import { showError } from "@/services/error.service";
import { fetchCryptoExchangeRates, fetchCryptos } from "@/services/network.service";
import { ICrypto } from "@/types/crypto.types";
import { FC, ReactNode, createContext, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ToastAndroid } from "react-native";
import { SettingsContext } from "./settings.provider";
import { TranslationsContext } from "./translations.provider";

interface CryptoContextInterface {
  cryptos: ICrypto[];
  isLoading: boolean;
  refreshCryptos: () => void;
}

export const CryptoContext = createContext<CryptoContextInterface>({
  cryptos: [],
  isLoading: false,
  refreshCryptos: () => {},
});

interface CryptoProviderProps {
  children: ReactNode;
}

const CryptoProvider: FC<CryptoProviderProps> = memo(({
  children
}) => {
  const { settings } = useContext(SettingsContext);
  const translation = useContext(TranslationsContext);

  const [isLoading, setLoading] = useState<boolean>(true);
  const [cryptos, setCryptos] = useState<ICrypto[]>([]);

  const refreshCryptos = useCallback(async () => {
    setLoading(true);

    const [fetchedCurrencies, exchangeRatesResponse] = await Promise.all([
      fetchCryptos().catch(showError),
      fetchCryptoExchangeRates(settings.quote).catch(showError),
    ]);

    if (!fetchedCurrencies) {
      ToastAndroid.show(translation.list.error, ToastAndroid.BOTTOM);
      return;
    }
    
    const rates = (exchangeRatesResponse?.data?.rates || {});
    const fetchedCurrenciesWithRates: ICrypto[] = fetchedCurrencies.filter(c => c?.details?.type === 'crypto').map(f => ({
      ...f,
      rate: rates[f.id] ? (1 / parseFloat(rates[f.id])) : undefined,
    }));

    const settingSortAttribute = settings.sortAssets;

    const sortedCurrenciesWithRates = fetchedCurrenciesWithRates.sort((a, b) => {
      const valueA = a[settingSortAttribute].toLowerCase();
      const valueB = b[settingSortAttribute].toLowerCase();

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });

    setCryptos(sortedCurrenciesWithRates);
    setLoading(false);
  }, [settings]);

  useEffect(() => { refreshCryptos() }, [settings]);

  const contextValues: CryptoContextInterface = useMemo(() => ({
    cryptos,
    isLoading,
    refreshCryptos,
  }), [cryptos, refreshCryptos, isLoading]);

  return (
    <CryptoContext.Provider value={contextValues}>
      {children}
    </CryptoContext.Provider>
  );
})

export default CryptoProvider;
