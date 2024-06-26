import { TranslationType } from '../../types/translation.types';

const FrTranslation: TranslationType = {
  language: 'Français',
  common: {
    cancel: 'Annuler',
    save: 'Sauvegarder',
    edit: 'Editer',
    delete: 'Enlever',
    select_option: 'Sélectionnez une option...',
  },
  list: {
    favourites: 'Favoris',
    noFavouritesYet: 'Aucun favori pour le moment!',
    main: 'Principaux actifs',
    other: 'Autres actifs',
    assets: 'Actifs',
    sort: 'Trier les actifs',
    error: 'Une erreur est survenue lors de l\'obtention des cryptos'
  },
  details: {
    details: 'Détails',
    graph: 'Graphique',
    stats: 'Statistiques',
    website: 'Site Web',
    stats_24h: 'Stats sur 24h',
    high: 'Maxi',
    low: 'Mini',
    volume: 'Volume',
    current_price: 'Prix actuel',
    buy: 'Achat',
    price: 'Prix',
    sell: 'Vente',
    open: 'Ouverture',
    last: 'Dernière valeur',
    loading_rates: 'Chargement de l\'historique...',
    favourite_added: 'Favori ajouté !',
    favourite_removed: 'Favori supprimé !',
  },
  menu: {
    prices: 'Prix',
    wallet: 'Portefeuille',
  },
  wallet: {
    total: 'Total',
    amount: 'Montant',
    crypto: 'Crypto',
    add_wallet: 'Ajoutez à votre portefeuille',
    no_item: 'Pas encore d\'actifs dans votre portefeuille',
  },
  settings: {
    preferred_currency: 'Devise',
    preferred_date_format: 'Format de date',
    graph_mode: 'Affichage du graphique',
    dark_mode: 'Thème',
    language: 'Langue',
    credits: {
      product: 'Crypto-Viewer est une app conçue, developée et maintenue par Bertrand Choubert',
      website: 'Son portfolio ici !',
      apis: 'Dévelopé avec React-Native Expo, basé sur les APIs basique et professionelle de CoinBase',
      libraries: 'Utilisation d\'icones de Font-Awesome Pro, utilisation de ressources CoinBase',
      policy: 'Politique de Confientialité et de Protection des Données',
    },
    values: {
      graph_mode: {
        simple: 'Simple',
        advanced: 'Avancé',
      },
      dark_mode: {
        light: 'Clair',
        dark: 'Sombre',
      },
      show_other_assets: {
        show: 'Montrer',
        hide: 'Cacher',
      },
      sort_assets: {
        code: 'Par code',
        name: 'Par nom',
      },
    },
  },
};

export default FrTranslation;
