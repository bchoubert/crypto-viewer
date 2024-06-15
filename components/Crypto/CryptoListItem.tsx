import { ICrypto, quoteDetails } from "@/types/crypto.types";
import { FC, memo, useContext, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CryptoIcon from "../Utils/CryptoIcon";
import ECrypto from "@/constants/cryptos.enum";
import Colors, { EColor } from "@/assets/Colors";
import CryptoIconCircle from "../Utils/CryptoIconCircle";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { printNumber } from '@/services/print.service';
import { Link } from "expo-router";
import Icon, { EIcon } from "../Utils/Icon";
import { SettingsContext } from "@/contexts/settings.provider";

interface CryptoListItemProps {
  item: ICrypto;
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomColor: Colors.lightGray,
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
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
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: Colors.gray,
  }
})

const CryptoListItem: FC<CryptoListItemProps> = memo(({
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
      <Pressable style={styles.container}>
        <View style={styles.left}>
          {CryptoIconInstance ? (
            <CryptoIconCircle color={color} statusColor={statusColor}>
              <CryptoIconInstance style={styles.icon} fill={Colors.white} />
            </CryptoIconCircle>
          ) : (<View style={styles.iconplaceholder} />)}
          <View style={styles.titles}>
            <Text style={styles.title}>{item.name}</Text>  
            <Text style={styles.subtitle}>{item.id}</Text> 
          </View>
        </View>
        <View style={styles.right}>
          {item.rate ? (
            <Text>{printNumber(item.rate, quoteSymbol)}</Text>
          ) : null}
          <Icon name={EIcon.chevronRight} color={EColor.gray} width={12} />
        </View>
      </Pressable>
    </Link>
  );
});

export default CryptoListItem;