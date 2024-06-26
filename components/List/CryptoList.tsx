import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { SectionList, StyleSheet } from "react-native";

import CryptoListItem from "./CryptoListItem";
import CryptoListSection from "./CryptoListSection";
import CryptoListFavourite from "./CryptoListFavourite";

import { ICrypto, ICryptoFavourite } from "@/types/crypto.types";
import { SettingsContext } from "@/contexts/settings.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { CryptoContext } from "@/contexts/crypto.provider";
import { ThemeContext } from "@/contexts/theme.provider";

const CryptoList: FC = memo(() => {
  const { settings, hasFavourite } = useContext(SettingsContext);
  const translation = useContext(TranslationsContext);
  const { cryptos, isLoading, refreshCryptos } = useContext(CryptoContext);
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    list: {
      backgroundColor: theme[100],
    },
  }), [theme]);

  const [cryptosWithRates, setCryptosWithRate] = useState<ICrypto[]>([]);
  const [cryptosWithoutRates, setCryptosWithoutRate] = useState<ICrypto[]>([]);

  useEffect(() => {
    setCryptosWithRate(cryptos.filter(r => !!r.rate));
    setCryptosWithoutRate(cryptos.filter(r => !r.rate));
  }, [cryptos]);

  const sections = useMemo(() => {
    if (!cryptosWithRates) {
      return [];
    }

    const favouriteCryptos = cryptosWithRates.filter(c => hasFavourite(c.id));
    const favouriteItems: ICryptoFavourite[] = [];
    favouriteCryptos.forEach((c: ICrypto, i: number) => {
      if (i % 2 === 0) {
        favouriteItems.push({ cryptos: [favouriteCryptos[i], favouriteCryptos[i + 1]].filter(Boolean) })
      }
    });

    const result = [
      {
        id: 'favourites',
        title: translation.list.favourites,
        data: favouriteItems,
      },
      {
        id: 'main',
        title: translation.list.main,
        data: cryptosWithRates,
      },
    ];

    if (settings.showOtherAssets === 'show') {
      result.push({
        id: 'others',
        title: translation.list.other,
        data: cryptosWithoutRates,
      });
    }

    return result; 
  }, [cryptosWithRates, cryptosWithoutRates, translation, settings]);

  const handleRenderItem = useCallback(
    (props: { item: ICrypto | ICryptoFavourite, section: { id: string } }) => {

    if (props.section.id === 'favourites') {
      const item = props.item as ICryptoFavourite;
      return (<CryptoListFavourite key={item.cryptos[0].id} item={item} />);
    }
    
    const item = props.item as ICrypto;
    return (<CryptoListItem key={item.id} item={item} clickable={props.section.id === 'main'} />);
  }, []);

  const handleRenderSectionHeader = useCallback(
    (props: { section: { title: string } }) => <CryptoListSection title={props.section.title} />,
    [],
  );
  
  return (
    <SectionList
      onRefresh={refreshCryptos}
      refreshing={isLoading}

      sections={sections}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
      stickySectionHeadersEnabled
      style={styles.list}
    />
  );
});

export default CryptoList;