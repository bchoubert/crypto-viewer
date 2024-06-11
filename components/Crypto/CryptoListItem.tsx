import { ICrypto } from "@/types/crypto.types";
import { FC, memo, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CryptoIcon from "../CryptoIcon";
import ECrypto from "@/constants/cryptos.enum";
import Colors, { EColor } from "@/assets/Colors";
import CryptoIconCircle from "./CryptoIconCircle";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { lightenColor } from "@/services/color.service";
import { Link } from "expo-router";
import Icon, { EIcon } from "../Icon";

interface CryptoListItemProps {
  item: ICrypto;
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
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

  },
  icon: {
    height: 20,
    width: 20,
    color: Colors.white,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
  },
  subtitle: {
    color: Colors.gray,
  }
})

const CryptoListItem: FC<CryptoListItemProps> = memo(({
  item
}) => {
  const CryptoIconInstance = useMemo(() => CryptoIcon[item.id.toLowerCase() as ECrypto], [item.id]);
  const cryptoDetails = useMemo(() => CryptoDetails[item.id.toLowerCase() as ECrypto], [item.id]);

  const [color] = useMemo(() => {
    const baseColor = cryptoDetails?.color || Colors.darkGray;

    return [
      baseColor,
    ]
  }, [cryptoDetails]);

  
  return (
    <Link href={`/crypto/${item.id}`} style={styles.container} asChild>
      <Pressable style={styles.container}>
        <View style={styles.left}>
          {CryptoIconInstance ? (
            <CryptoIconCircle color={color}>
              <CryptoIconInstance style={styles.icon} fill={Colors.white} />
            </CryptoIconCircle>
          ) : (<View style={styles.iconplaceholder} />)}
          <View style={styles.titles}>
            <Text>{item.name}</Text>  
            <Text style={styles.subtitle}>{item.id}</Text> 
          </View>
        </View>
        <View style={styles.right}>
          <Icon name={EIcon.chevronRight} color={EColor.gray} width={12} />
        </View>
      </Pressable>
    </Link>
  );
});

export default CryptoListItem;