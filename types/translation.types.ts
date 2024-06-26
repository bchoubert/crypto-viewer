import EnTranslation from "@/assets/translations/en";
import FrTranslation from "@/assets/translations/fr";

export type TranslationPossibility = 'EN' | 'FR';

export const AvailableTranslationDetails: Record<TranslationPossibility, { name: string, translations: TranslationType }> = {
  'FR': {
    name: 'Français',
    translations: FrTranslation,
  },
  'EN': {
    name: 'English',
    translations: EnTranslation,
  },
};

export type TranslationType = {
  language: string,
  common: {
    cancel: string,
    save: string,
    edit: string,
    delete: string,
    select_option: string,
  },
  list: {
    favourites: string,
    noFavouritesYet: string,
    main: string,
    other: string,
    assets: string,
    sort: string,
    error: string,
  },
  details: {
    details: string,
    graph: string,
    stats: string,
    website: string,
    stats_24h: string,
    high: string,
    low: string,
    volume: string,
    current_price: string,
    buy: string,
    price: string,
    sell: string,
    open: string,
    last: string,
    loading_rates: string,
    favourite_added: string,
    favourite_removed: string,
  }
  menu: {
    prices: string,
    wallet: string,
  },
  wallet: {
    total: string,
    amount: string,
    crypto: string,
    add_wallet: string,
    no_item: string,
  },
  settings: {
    preferred_currency: string,
    preferred_date_format: string,
    graph_mode: string,
    dark_mode: string,
    language: string,
    credits: {
      product: string,
      website: string,
      apis: string,
      libraries: string,
      policy: string,
    },
    values: {
      graph_mode: {
        simple: string,
        advanced: string,
      },
      dark_mode: {
        light: string,
        dark: string,
      },
      show_other_assets: {
        show: string,
        hide: string,
      },
      sort_assets: {
        code: string,
        name: string,
      }
    },
  },
};

