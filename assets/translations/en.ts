import TranslationType from '../../models/TranslationType';

const EnTranslation: TranslationType = {
  common: {
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    select_option: 'Please select an option...',
  },
  list: {
    favourites: 'Favourites',
    main: 'Main Assets',
    other: 'Other Assets',
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
    preferred_currency: 'Preferred Currency',
    preferred_date_format: 'Preferred date format',
    graph_mode: 'Graph Mode',
    language: 'Language',
    credits: {
      product: 'Crytpo-Viewer is a product designed, developed and maintained by Bertrand Choubert.',
      website: 'His website here!',
      apis: 'Developed with React-Native Expo, based on Coinbase Basic & Pro APIs',
      libraries: 'Use of cryptocurrency-icons-font, Font-Awesome Pro Icons and some CoinBase assets',
    },
  },
};

export default EnTranslation;
