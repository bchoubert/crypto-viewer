import { SparkineTimespanEnum } from "../graph";
import { Translation } from "../translation";

export const translationEn: Translation = {
  menu: {
    prices: 'Prices',
    wallet: 'Wallet',
    back: 'Back',
  },
  settings: {
    sort: {
      title: 'Sort market items by...',
      name: 'Name',
      symbol: 'Symbol',
    },
    currency: {
      title: 'Base currency',
    },
    language: {
      title: 'Language',
    },
    theme: {
      title: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
  },
  wallet: {
    total: 'Total',
    empty: 'Your wallet is still empty...',
    modal: {
      title: 'Add to your wallet...',
      
      inputs: {
        crypto: {
          title: 'Crypto',
          placeholder: 'Select a crypto',
          emptyError: 'Crypto is mandatory',
        },
        amount: {
          title: 'Amount',
          emptyError: 'Amount is mandatory',
        },
      },

      button: 'Add to your wallet',
    },
    actions: {
      edit: 'Edit',
      delete: 'Delete',
    },
  },
  list: {
    prices: 'Prices',
    favourites: 'Favourites',
  },
  details: {
    graph: {
      title: 'Graph',
      periods: {
        [SparkineTimespanEnum["7D"]]: '7D',
        [SparkineTimespanEnum["3D"]]: '3D',
        [SparkineTimespanEnum["1D"]]: '1D',
        [SparkineTimespanEnum["12H"]]: '12H',
        [SparkineTimespanEnum["6H"]]: '6H',
      },
    },
    stats: {
      metrics: {
        title: 'Market Metrics',

        currentPrice: 'Current Price',
        marketCap: 'Market Cap',
        fullDilutedValuation: 'F-D Valuation',
        totalVolume: 'Total Volume',
      },
      dynamics: {
        title: 'Price Dynamics (on last 24h)',

        low: 'Low',
        high: 'High',
        price: 'Price',
        marketCap: 'Market Cap',
      },
      supply: {
        title: 'Supply',
        
        circulatingSupply: 'Circulating Supply',
        totalSupply: 'Total Supply',
        maxSupply: 'Max Supply'
      },
      allTimes: {
        title: 'All-Times',

        low: 'Low',
        high: 'High',
      },
      favourites: {
        added: 'Favorite added',
        removed: 'Favorite removed',
      },
    },
    investment: {
      title: 'Investment Confidence',
      warning: 'This is an indication only, please use with care and make your own judgement first. This confidence is computed from all statistics of the coin, including its historic rates.',
    },
  },
};
