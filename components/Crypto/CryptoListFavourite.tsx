import { ICryptoFavourite } from "@/types/crypto.types";
import { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import CryptoListFavouriteItem from "./CryptoListFavouriteItem";
import Colors from "@/assets/Colors";

interface CryptoListFavouriteProps {
  item: ICryptoFavourite;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
  }
});

const CryptoListFavourite: FC<CryptoListFavouriteProps> = memo(({
  item
}) => (
  <View style={styles.container}>
    {item.cryptos.map(i => (
      <CryptoListFavouriteItem key={i.id} item={i} />
    ))}
  </View>
));

export default CryptoListFavourite;