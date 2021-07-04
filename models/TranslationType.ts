type TranslationType = {
  common: {
    cancel: string,
    save: string,
    edit: string,
    delete: string,
    select_option: string,
  },
  list: {
    favourites: string,
    main: string,
    other: string,
  },
  details: {
    details: string,
    website: string,
    stats_24h: string,
    high: string,
    low: string,
    volume: string,
    current_price: string,
    buy: string,
    price: string,
    sell: string,
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
    language: string,
    credits: {
      product: string,
      website: string,
      apis: string,
      libraries: string,
    },
  },
};

export default TranslationType;
