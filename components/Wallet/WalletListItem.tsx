import { quoteDetails } from "@/types/crypto.types";
import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CryptoIcon from "../Utils/CryptoIcon";
import ECrypto from "@/constants/cryptos.enum";
import Colors, { EColor } from "@/assets/Colors";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { printNumber } from '@/services/print.service';
import { Link } from "expo-router";
import Icon, { EIcon } from "../Utils/Icon";
import { SettingsContext } from "@/contexts/settings.provider";
import CryptoIconCircle from "../Utils/CryptoIconCircle";
import { WalletItem } from "@/types/wallet.types";
import { CryptoContext } from "@/contexts/crypto.provider";
import { TranslationsContext } from "@/contexts/translations.provider";

interface WalletListItemProps {
  item: WalletItem;
  setSelectedCrypto: (c: string) => void;
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
    position: 'relative',
  },

  swipeActions: {
    position: 'absolute',
    height: 60,
    left: '100%',
    top: 0,
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
    color: Colors.gray,
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

const WalletListItem: FC<WalletListItemProps> = memo(({
  item,
  setSelectedCrypto,
}) => {
  const { settings, removeWalletItem } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);
  const translation = useContext(TranslationsContext);

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
    <>
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
                <Text>{printNumber(amount, quoteSymbol)}</Text>
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
    </>
  );
});

export default WalletListItem;