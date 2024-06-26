import { FC, memo, useContext, useMemo } from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import CryptoIcon from "../Utils/CryptoIcon";
import CryptoIconCircle from "../Utils/CryptoIconCircle";

import { SettingsContext } from "@/contexts/settings.provider";
import { ICrypto, quoteDetails } from "@/types/crypto.types";
import ECrypto from "@/constants/cryptos.enum";
import CryptoDetails from "@/constants/cryptodetails.constants";
import Colors, { EColor } from "@/assets/Colors";
import { printNumber } from "@/services/print.service";

interface CryptoListFavouriteItemProps {
  item: ICrypto;
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '46%',
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  iconplaceholder: {
    width: 36,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  icon: {
    height: 20,
    width: 20,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    color: Colors.white,
  },
  title: {
    color: Colors.white,
    fontWeight: '500',
  },
  subtitle: {
    color: Colors.midGray,
  },
  price: {
    fontSize: 25,
    color: Colors.white,
  }
});

const CryptoListFavouriteItem: FC<CryptoListFavouriteItemProps> = memo(({
  item
}) => {
  const { settings } = useContext(SettingsContext);

  const CryptoIconInstance = useMemo(() => CryptoIcon[item.id.toLowerCase() as ECrypto], [item.id]);
  const cryptoDetails = useMemo(() => CryptoDetails[item.id.toLowerCase() as ECrypto], [item.id]);

  const [color, quoteSymbol, statusColor] = useMemo(() => {
    const baseColor = cryptoDetails?.color || Colors.darkGray;
    const quoteSymbol = quoteDetails[settings.quote]?.symbol;
    const statusColor = item.status === 'online' ? EColor.green : EColor.red;

    return [
      baseColor,
      quoteSymbol,
      statusColor,
    ]
  }, [cryptoDetails, item]);

  return (
    <Link href={`/crypto/${item.id}`} style={styles.container} asChild>
      <Pressable style={{ ...styles.container, backgroundColor: color }}>
        <View style={styles.left}>
          {CryptoIconInstance ? (
            <CryptoIconCircle color={Colors.white} statusColor={statusColor}>
              <CryptoIconInstance style={styles.icon} fill={color} />
            </CryptoIconCircle>
          ) : (<View style={styles.iconplaceholder} />)}
          <View style={styles.titles}>
            <Text style={styles.title}>{item.name}</Text>  
            <Text style={styles.subtitle}>{item.id}</Text> 
          </View>
        </View>
        <View style={styles.right}>
          {item.rate ? (
            <Text style={styles.price}>{printNumber(item.rate, quoteSymbol)}</Text>
          ) : null}
        </View>
      </Pressable>
    </Link>
  );
});

export default CryptoListFavouriteItem;