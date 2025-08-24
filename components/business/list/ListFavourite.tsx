import { FC, memo, useContext, useMemo } from "react";
import { MarketItem } from "../../../types/marketItem";
import { StyleSheet, View } from "react-native";
import ListFavouriteItem from "./ListFavouriteItem";
import { ThemeContext } from "../../../contexts/theme.provider";

export interface FavouriteItem { id: string; firstItem: MarketItem, secondItem?: MarketItem };

interface ListFavouriteProps {
  favouriteItem: FavouriteItem;
}

const ListFavourite: FC<ListFavouriteProps> = memo(({
  favouriteItem,
}) => {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: 56,
      marginBottom: 8,
      backgroundColor: theme.colors.background,
    }
  }), [theme]);

  return (
    <View style={styles.container} key={favouriteItem.firstItem.id}>
      <ListFavouriteItem marketItem={favouriteItem.firstItem} />
      {favouriteItem.secondItem ? (
        <ListFavouriteItem marketItem={favouriteItem.secondItem} />
      ) : null}
    </View>
  )
});

export default ListFavourite;
