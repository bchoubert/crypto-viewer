import TranslationType from '../../models/TranslationType';

const FrTranslation: TranslationType = {
  common: {
    cancel: 'Annuler',
    save: 'Sauvegarder',
    edit: 'Editer',
    delete: 'Enlever',
    select_option: 'Sélectionnez une option...',
  },
  list: {
    favourites: 'Favoris',
    main: 'Principaux actifs',
    other: 'Autres actifs',
  },
  details: {
    details: 'Détails',
    website: 'Site Web',
    stats_24h: 'Stats sur 24h',
    high: 'Maxi',
    low: 'Mini',
    volume: 'Volume',
    current_price: 'Prix actuel',
    buy: 'Achat',
    price: 'Prix',
    sell: 'Vente',
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
    preferred_currency: 'Devise préférée',
    preferred_date_format: 'Format de date préféré',
    graph_mode: 'Affichage du graphique',
    language: 'Langue',
    credits: {
      product: 'Crypto-Viewer est une app conçue, developée et maintenue par Bertrand Choubert',
      website: 'Son portfolio ici !',
      apis: 'Dévelopé avec React-Native Expo, basé sur les APIs basique et professionelle de CoinBase',
      libraries: 'Utilisation de cryptocurrency-icon-font, icons de Font-Awesome Pro, utilisation de ressources CoinBase',
    },
    values: {
      graph_mode: {
        simple: 'Simple',
        advanced: 'Avancé',
      },
    },
  },
};

export default FrTranslation;
