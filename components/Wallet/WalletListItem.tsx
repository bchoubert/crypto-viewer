import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import CryptoIcon from "../Utils/CryptoIcon";
import Icon, { EIcon } from "../Utils/Icon";
import CryptoIconCircle from "../Utils/CryptoIconCircle";

import Colors, { EColor } from "@/assets/Colors";
import ECrypto from "@/constants/cryptos.enum";
import { quoteDetails } from "@/types/crypto.types";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { printNumber } from '@/services/print.service';
import { SettingsContext } from "@/contexts/settings.provider";
import { WalletItem } from "@/types/wallet.types";
import { CryptoContext } from "@/contexts/crypto.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { ThemeContext } from "@/contexts/theme.provider";

interface WalletListItemProps {
  item: WalletItem;
  setSelectedCrypto: (c: string) => void;
}

const WalletListItem: FC<WalletListItemProps> = memo(({
  item,
  setSelectedCrypto,
}) => {
  const { settings, removeWalletItem } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);
  const translation = useContext(TranslationsContext);
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
      margin: 0,
      justifyContent: 'space-between',
      backgroundColor: theme[300],
      position: 'relative',
    },

    swipeActions: {
      position: 'absolute',
      height: 60,
      borderRadius: 10,
      left: Dimensions.get('window').width,
      top: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    swipeActionsButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: '100%',
      borderRadius: 10,
    },
    swipeActionsButtonText: {
      color: Colors.white,
    },
    edit: {
      backgroundColor: Colors.blue,
    },
    delete: {
      backgroundColor: Colors.red,
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
    numbers: {
      display: 'flex',
      flexDirection: 'column',
      width: 50,
    },
    quantity: {
      color: theme[500],
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
      color: theme[500],
    },
    price: {
      color: theme[900]
    }
  }), [theme]);

  const crypto = useMemo(() => cryptos.find(c => c.id === item.id)!, [item, cryptos]);

  const CryptoIconInstance = useMemo(() => CryptoIcon[item.id.toLowerCase() as ECrypto], [item.id]);
  const cryptoDetails = useMemo(() => CryptoDetails[item.id.toLowerCase() as ECrypto], [item.id]);

  const [color, quoteSymbol, statusColor] = useMemo(() => {
    const baseColor = cryptoDetails?.color || Colors.darkGray;
    const quoteSymbol = quoteDetails[settings.quote]?.symbol;
    const statusColor = crypto?.status === 'online' ? EColor.green : EColor.red;

    return [
      baseColor,
      quoteSymbol,
      statusColor,
    ]
  }, [cryptoDetails, settings, item]);

  const [quantity, amount] = useMemo(() => [
    item.quantity,
    crypto?.rate ? item.quantity * crypto.rate : 0,
  ], [crypto, item]);

  const deleteProxy = useCallback(() => {
    removeWalletItem(item.id);
  }, [removeWalletItem, item]);

  const setSelectedCryptoProxy = useCallback(() => {
    setSelectedCrypto(item.id);
  }, [item, setSelectedCrypto]);

  return (
    <View style={styles.sub_container}>
      <Link href={`/crypto/${item.id}`} style={styles.container} asChild>
        <Pressable style={styles.container}>
          <View style={styles.left}>
            {CryptoIconInstance ? (
              <CryptoIconCircle color={color} statusColor={statusColor}>
                <CryptoIconInstance style={styles.icon} fill={Colors.white} />
              </CryptoIconCircle>
            ) : (<View style={styles.iconplaceholder} />)}
            <View style={styles.titles}>
              <Text style={styles.title}>{crypto.name}</Text>  
              <Text style={styles.subtitle}>{item.id}</Text> 
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.numbers}>
              <Text style={styles.quantity}>{printNumber(quantity, 'tokens')}</Text>
              {amount ? (
                <Text style={styles.price}>{printNumber(amount, quoteSymbol)}</Text>
              ) : null}
            </View>
            <Icon name={EIcon.chevronRight} color={EColor.gray} width={12} />
          </View>
        </Pressable>
      </Link>
      <View style={styles.swipeActions}>
        <Pressable onPress={setSelectedCryptoProxy} style={{ ...styles.swipeActionsButton, ...styles.edit }}>
          <Text style={styles.swipeActionsButtonText}>{translation.common.edit}</Text>
        </Pressable>
        <Pressable onPress={deleteProxy} style={{ ...styles.swipeActionsButton, ...styles.delete }}>
          <Text style={styles.swipeActionsButtonText}>{translation.common.delete}</Text>
        </Pressable>
      </View>
    </View>
  );
});

export default WalletListItem;