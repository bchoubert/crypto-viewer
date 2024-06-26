import { FC, memo, useContext, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import CryptoIcon from "../Utils/CryptoIcon";
import CryptoIconCircle from "../Utils/CryptoIconCircle";
import Icon, { EIcon } from "../Utils/Icon";

import { ICrypto, quoteDetails } from "@/types/crypto.types";
import ECrypto from "@/constants/cryptos.enum";
import Colors, { EColor } from "@/assets/Colors";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { printNumber } from '@/services/print.service';
import { SettingsContext } from "@/contexts/settings.provider";
import { ThemeContext } from "@/contexts/theme.provider";

interface CryptoListItemProps {
  item: ICrypto;
  clickable?: boolean;
}

const CryptoListItem: FC<CryptoListItemProps> = memo(({
  item,
  clickable,
}) => {
  const { settings } = useContext(SettingsContext);
  const theme = useContext(ThemeContext);
    
  const styles = useMemo(() => StyleSheet.create({
    sub_container: {
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: theme[100],
    },
    container: {
      height: 60,
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme[300],
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
      color: theme[900],
    },
    titles: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: '500',
      color: theme[900],
    },
    subtitle: {
      color: theme[700],
    },
    price: {
      color: theme[900],
    }
  }), [theme]);

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
    <View style={styles.sub_container}>
      <Link href={clickable ? `/crypto/${item.id}` : ''} style={styles.container} asChild>
        <Pressable>
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
              <Text style={styles.price}>{printNumber(item.rate, quoteSymbol)}</Text>
            ) : null}
            {clickable && (<Icon name={EIcon.chevronRight} color={EColor.gray} width={12} />)}
          </View>
        </Pressable>
      </Link>
    </View>
  );
});

export default CryptoListItem;