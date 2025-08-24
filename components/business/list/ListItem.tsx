import { MarketItem } from "../../../types/marketItem";
import { FC, memo, useContext, useMemo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../../contexts/theme.provider";

import { ChevronRight } from 'lucide-react-native';
import { cryptoColors } from "../../../assets/CryptoColors";
import FormatPrice from "../../utils/FormatPrice";
import { RouterContext } from "../../../contexts/router.provider";
import { RouteEnum } from "../../../types/route.enum";

interface ListItemProps {
  marketItem: MarketItem;
}

const ListItem: FC<ListItemProps> = memo(({
  marketItem,
}) => {
  const { theme } = useContext(ThemeContext);
  const { changeRoute } = useContext(RouterContext);

  const cryptoColor = useMemo(() => {
    const analyzedCryptoColor = cryptoColors[marketItem.symbol];
    return analyzedCryptoColor || '#000000';
  }, [marketItem]);
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      margin: 5,
      padding: 5,
      height: 45,
      borderRadius: 5,
      backgroundColor: theme.colors.elevated,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      height: 35,
      width: 35,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    symbol: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    symbolText: {
      textTransform: 'uppercase',
      color: theme.colors.muted,
      fontSize: 10,
    },
    symbolIndicator: {
      width: 6,
      height: 6,
      backgroundColor: cryptoColor,
      borderRadius: '50%',
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    main: {
      flex: 1,
    },
    price: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceText: {
      color: theme.colors.text,
    }
  }), [theme, cryptoColor]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => changeRoute(RouteEnum.DETAILS, marketItem.symbol)}
      key={marketItem.id}
    >
      <Image
        style={styles.image}
        src={marketItem.image}
      />
      <View style={styles.main}>
        <Text style={styles.title}>{marketItem.name}</Text>
        <View style={styles.symbol}>
          <View style={styles.symbolIndicator} />
          <Text style={styles.symbolText}>{marketItem.symbol}</Text>
        </View>
      </View>
      <View style={styles.price}>
        <FormatPrice style={styles.priceText} amount={marketItem.current_price} />
      </View>
      <ChevronRight size="15" color={theme.colors.muted} />
    </Pressable>
  )
});

export default ListItem;
