import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import CryptoListFavouriteItem from "./CryptoListFavouriteItem";

import { ICryptoFavourite } from "@/types/crypto.types";
import { ThemeContext } from "@/contexts/theme.provider";

interface CryptoListFavouriteProps {
  item: ICryptoFavourite;
}

const CryptoListFavourite: FC<CryptoListFavouriteProps> = memo(({
  item
}) => {
  const theme = useContext(ThemeContext);  

  const styles = useMemo(() => StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme[100],
    }
  }), [theme]);

  return (
    <View style={styles.container}>
      {item.cryptos.map(i => (
        <CryptoListFavouriteItem key={i.id} item={i} />
      ))}
    </View>
  );
});

export default CryptoListFavourite;