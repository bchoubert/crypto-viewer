import { MarketItem } from "../types/marketItem";
import { fetchApi } from "./http.service"

export const fetchMarket = async(page: number = 1, currency: string): Promise<MarketItem[]> => {
  return fetchApi<MarketItem[]>(
    '/coins/markets',
    {
      'vs_currency': currency,
      sparkline: 'true',
      'per_page': '250',
      page: page.toString(),
      price_change_percentage: '24h',
      precision: '5',
    });
};
