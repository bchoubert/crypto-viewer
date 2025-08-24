import { SparkineTimespanEnum } from "./graph";

export enum TranslationLanguage {
  EN = 'EN',
  FR = 'FR',
}

const getSubObject = (id: string, object: any): string => {
  const [firstPartOfId, ...otherParts] = id.split('.');
  const value = object[firstPartOfId];
  if (!value) {
    return '';
  }
  if (otherParts.length > 0) {
    return getSubObject(otherParts.join('.'), value);
  }
  return value;
}

export const getTranslationStringViaId = (id: string, translation: any): string => {
  return getSubObject(id, translation);
};

export interface Translation {
  menu: {
    prices: string;
    wallet: string;
    back: string;
  },
  settings: {
    sort: {
      title: string;
      name: string;
      symbol: string;
    };
    currency: {
      title: string;
    };
    language: {
      title: string;
    };
    theme: {
      title: string;
      light: string;
      dark: string;
    };
  };
  wallet: {
    total: string;
    empty: string;
    modal: {
      title: string;
      
      inputs: {
        crypto: {
          title: string;
          placeholder: string;
          emptyError: string;
        };
        amount: {
          title: string;
          emptyError: string;
        };
      };

      button: string;
    };
    actions: {
      edit: string;
      delete: string;
    };
  };
  list: {
    prices: string;
    favourites: string;
  };
  details: {
    graph: {
      title: string;
      periods: Record<SparkineTimespanEnum, string>;
    };
    stats: {
      metrics: {
        title: string;

        currentPrice: string;
        marketCap: string;
        fullDilutedValuation: string;
        totalVolume: string;
      };
      dynamics: {
        title: string;

        low: string;
        high: string;
        price: string;
        marketCap: string;
      };
      supply: {
        title: string;
        
        circulatingSupply: string;
        totalSupply: string;
        maxSupply: string;
      };
      allTimes: {
        title: string;

        low: string;
        high: string;
      };
      favourites: {
        added: string;
        removed: string;
      };
    };
    investment: {
      title: string;
      warning: string;
    };
  };
}
