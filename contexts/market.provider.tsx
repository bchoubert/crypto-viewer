import { fetchMarket } from "../services/crypto.service";
import { MarketItem } from "../types/marketItem";
import { createContext, FC, memo, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SettingsContext } from "./settings.provider";

interface MarketContextInterface {
  market: MarketItem[];
  isLoading: boolean;

  getItem: (symbol: string) => MarketItem | null;
  refreshMarket: () => void;
}

export const MarketContext = createContext<MarketContextInterface>({
  market: [],
  isLoading: true,

  getItem: () => null,
  refreshMarket: () => {},
});

interface MarketProviderProps {
  children: ReactNode;
}

const MarketProvider: FC<MarketProviderProps> = memo(({
  children,
}) => {
  const { settings } = useContext(SettingsContext);

  const [market, setMarket] = useState<MarketItem[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const sortMarketItems = useCallback((items: MarketItem[]) => {
    if (settings.sortMarketBy === 'NAME') {
      return items.sort((l1, l2) => l1.name.localeCompare(l2.name));
    }
    return items.sort((l1, l2) => l1.symbol.localeCompare(l2.symbol));
  }, [settings]);

  const refreshMarket = useCallback(async () => {
    setLoading(true);

    const fetchedMarket: MarketItem[] = await fetchMarket(1, settings.currency);
    const sortedMarket = sortMarketItems(fetchedMarket);
    setMarket(sortedMarket);

    setLoading(false);
  }, [sortMarketItems, settings]);

  const getItem = useCallback((symbol: string) => {
    const found = market.find(m => m.symbol === symbol);
    return found ?? null;
  }, [market]);
  
  useEffect(() => {
    refreshMarket();
  }, [refreshMarket]);

  const contextValues: MarketContextInterface = useMemo(() => ({
    market,
    isLoading,
    refreshMarket,
    getItem,
  }), [getItem, market, isLoading, refreshMarket]);

  return (
    <MarketContext.Provider value={contextValues}>
      {children}
    </MarketContext.Provider>
  );
});

export default MarketProvider;
