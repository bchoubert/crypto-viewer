import { FC, memo, useCallback, useContext, useMemo } from "react";
import { SectionList } from "react-native";
import ListItem from "../business/list/ListItem";
import { MarketContext } from "../../contexts/market.provider";
import { SettingsContext } from "../../contexts/settings.provider";
import ListSection from "../business/list/ListSection";
import { MarketItem } from "../../types/marketItem";
import ListFavourite, { FavouriteItem } from "../business/list/ListFavourite";
import { TranslationContext } from "../../contexts/translation.provider";
import { getTranslationStringViaId } from "../../types/translation";

const List: FC = memo(() => {
  const { market, refreshMarket, isLoading } = useContext(MarketContext);
  const { settings } = useContext(SettingsContext);
  const { translation } = useContext(TranslationContext);

  const favourites = useMemo(() => {
    const favouriteSymbols = settings.favourites;
    const marketItemsToMatch = market.filter(mi => favouriteSymbols.includes(mi.symbol));

    const result: FavouriteItem[] = [];

    for (let i = 0; i < Math.ceil(marketItemsToMatch.length / 2); i++) {
      const firstItem = marketItemsToMatch[i * 2];
      let secondItem;
      
      if (i < marketItemsToMatch.length - 1) {
        secondItem = marketItemsToMatch[(i * 2) + 1];
      }

      result.push({ id: firstItem.id, firstItem, secondItem });
    }
    
    return result;
  }, [market, settings]);

  const sections = useMemo(() => [
    {
      id: 'favourites',
      title: getTranslationStringViaId('list.favourites', translation),
      data: favourites,
    },
    {
      id: 'market',
      title: getTranslationStringViaId('list.prices', translation),
      data: market,
    },
  ], [market, favourites, translation]);

  const renderItem = useCallback(({ item, section: { id } }: { item: MarketItem | FavouriteItem, section: { id: string } }) => {
    if (id === 'favourites') {
      return <ListFavourite favouriteItem={item as FavouriteItem} />;
    }
    return (<ListItem marketItem={item as MarketItem} />);
  }, []);

  return (
    <SectionList
      onRefresh={refreshMarket}
      refreshing={isLoading}

      sections={sections}

      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => <ListSection title={title} />}
      stickySectionHeadersEnabled

      keyExtractor={item => item.id}
    />
  )
});

List.displayName = '<List />';

export default List;
