import { SparkineTimespanEnum } from "../graph";
import { Translation } from "../translation";

export const translationFr: Translation = {
  menu: {
    prices: 'Prix',
    wallet: 'Portefeuille',
    back: 'Retour',
  },
  settings: {
    sort: {
      title: 'Trier les prix par...',
      name: 'Nom',
      symbol: 'Symbole',
    },
    currency: {
      title: 'Devise de base',
    },
    language: {
      title: 'Langue',
    },
    theme: {
      title: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
    },
  },
  wallet: {
    total: 'Total',
    empty: 'Votre portefeuille est vide...',
    modal: {
      title: 'Ajouter à votre portefeuille...',
      
      inputs: {
        crypto: {
          title: 'Crypto',
          placeholder: 'Sélectionnez une crypto',
          emptyError: 'Crypto est obligatoire',
        },
        amount: {
          title: 'Montant',
          emptyError: 'Montant est obligatoire',
        },
      },

      button: 'Ajouter à votre portefeuille',
    },
    actions: {
      edit: 'Editer',
      delete: 'Supprimer',
    },
  },
  list: {
    prices: 'Prix',
    favourites: 'Favoris',
  },
  details: {
    graph: {
      title: 'Graphique', 
      periods: {
        [SparkineTimespanEnum["7D"]]: '7J',
        [SparkineTimespanEnum["3D"]]: '3J',
        [SparkineTimespanEnum["1D"]]: '1J',
        [SparkineTimespanEnum["12H"]]: '12H',
        [SparkineTimespanEnum["6H"]]: '6H',
      },
    },
    stats: {
      metrics: {
        title: 'Indicateurs du marché',

        currentPrice: 'Prix actuel',
        marketCap: 'Capitalisation',
        fullDilutedValuation: 'Valorisation E-D',
        totalVolume: 'Volume total',
      },
      dynamics: {
        title: 'Dynamique du prix (dernières 24h)',

        low: 'Plus bas',
        high: 'Plus haut',
        price: 'Prix',
        marketCap: 'Capitalisation',
      },
      supply: {
        title: 'Approvisionnement',
        
        circulatingSupply: 'Circulation',
        totalSupply: 'Total',
        maxSupply: 'Max.'
      },
      allTimes: {
        title: 'Historique',

        low: 'Plus bas',
        high: 'Plus haut',
      },
      favourites: {
        added: 'Favori ajouté',
        removed: 'Favori retiré',
      },
    },
    investment: {
      title: 'Confiance sur l\'investissement',
      warning: 'Ceci n\'est qu\'une indication. Veuillez l\'utiliser avec prudence et vous forger votre propre opinion. Cette confiance est calculée à partir de toutes les statistiques, y compris les cours historiques.',
    },
  },
};

