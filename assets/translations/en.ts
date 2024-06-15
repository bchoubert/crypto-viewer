import { TranslationType } from '../../types/translation.types';

const EnTranslation: TranslationType = {
  language: 'English',
  common: {
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    select_option: 'Please select an option...',
  },
  list: {
    favourites: 'Favourites',
    noFavouritesYet: 'You have no favourites yet!',
    main: 'Main Assets',
    other: 'Other Assets',
    assets: 'Assets',
    sort: 'Sort assets',
    error: 'There was an error fetching cryptos',
  },
  details: {
    details: 'Details',
    website: 'Official Website',
    stats_24h: '24h Stats',
    high: 'High',
    low: 'Low',
    volume: 'Volume',
    current_price: 'Current Price',
    buy: 'Buy',
    price: 'Price',
    sell: 'Sell',
    loading_rates: 'Loading historical rates...',
    favourite_added: 'Favourite added !',
    favourite_removed: 'Favourite removed !',
  },
  menu: {
    prices: 'Prices',
    wallet: 'Wallet',
  },
  wallet: {
    total: 'Total',
    amount: 'Amount',
    crypto: 'Crypto',
    add_wallet: 'Add to your Wallet',
    no_item: 'No item in your wallet yet',
  },
  settings: {
    preferred_currency: 'Currency',
    preferred_date_format: 'Date Format',
    graph_mode: 'Graph Mode',
    dark_mode: 'Theme',
    language: 'Language',
    credits: {
      product: 'Crytpo-Viewer is a product designed, developed and maintained by Bertrand Choubert.',
      website: 'His website here!',
      apis: 'Developed with React-Native Expo, based on Coinbase Basic & Pro APIs',
      libraries: 'Use of Font-Awesome Pro Icons and some CoinBase assets',
      policy: 'Privacy & Data Safety Policies',
    },
    values: {
      graph_mode: {
        simple: 'Simple',
        advanced: 'Advanced',
      },
      dark_mode: {
        light: 'Light',
        dark: 'Dark',
      },
      show_other_assets: {
        show: 'Show',
        hide: 'Hide',
      },
      sort_assets: {
        code: 'By code',
        name: 'By name',
      },
    },
  },
};

export default EnTranslation;
