import { FC, memo, useContext, useMemo } from "react";
import { MarketItem } from "../../../types/marketItem";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { cryptoColors } from "../../../assets/CryptoColors";
import { RouterContext } from "../../../contexts/router.provider";
import { RouteEnum } from "../../../types/route.enum";
import Percentage from "../../utils/Percentage";
import { ThemeContext } from "../../../contexts/theme.provider";
import FormatPrice from "../../utils/FormatPrice";
import { ChevronRight } from "lucide-react-native";

interface ListFavouriteItemProps {
  marketItem: MarketItem;
}

const ListFavouriteItem: FC<ListFavouriteItemProps> = memo(({
  marketItem,
}) => {
  const { changeRoute } = useContext(RouterContext);
  const { theme } = useContext(ThemeContext);

  const cryptoColor = useMemo(() => {
    const analyzedCryptoColor = cryptoColors[marketItem.symbol];
    return analyzedCryptoColor || '#000000';
  }, [marketItem]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      width: Dimensions.get('window').width / 2 - 8,
      padding: 8,
      margin: 4,
      borderRadius: 10,
      height: 56,
      backgroundColor: cryptoColor,
    },
    imageContainer: {
      backgroundColor: 'white',
      width: 40,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    image: {
      backgroundColor: 'white',
      height: 35,
      width: 35,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    stat: {
      position: 'absolute',
      top: -15,
      right: 5,
      justifyContent: 'flex-end',
    },
    top: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    titles: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    mainTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.actionText,
    },
    secondTitle: {
      fontSize: 12,
      color: theme.colors.actionText,
    },
    priceContainer: {
      position: 'absolute',
      bottom: 5,
      right: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      color: theme.colors.actionText,
    }
  }), [cryptoColor, theme]);

  return (
    <Pressable style={styles.container} onPress={() => changeRoute(RouteEnum.DETAILS, marketItem.symbol)}>
      <View style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            src={marketItem.image}
          />
        </View>
        <View style={styles.titles}>
          <Text style={styles.mainTitle}>{marketItem.name}</Text>
          <Text style={styles.secondTitle}>{marketItem.symbol}</Text>
        </View>
      </View>
      <Percentage style={styles.stat} amount={marketItem.price_change_percentage_24h} />
      <View style={styles.priceContainer}>
        <FormatPrice style={styles.price} amount={marketItem.current_price} />
        <ChevronRight size="15" color={theme.colors.actionText} />
      </View>
    </Pressable>
  )
});

export default ListFavouriteItem;
