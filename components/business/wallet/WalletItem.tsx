import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../../contexts/theme.provider";
import { ChevronRight, Pen, Trash } from 'lucide-react-native';
import { cryptoColors } from "../../../assets/CryptoColors";
import FormatPrice from "../../utils/FormatPrice";
import { RouterContext } from "../../../contexts/router.provider";
import { RouteEnum } from "../../../types/route.enum";
import { WalletItemType } from "../../../types/wallet";
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import TranslationText from "../../utils/TranslationText";

interface WalletItemProps {
  walletItem: WalletItemType;
  editWalletItem: () => void;
  deleteWalletItem: () => void;
}

const WalletItem: FC<WalletItemProps> = memo(({
  walletItem,
  editWalletItem,
  deleteWalletItem,
}) => {
  const { theme } = useContext(ThemeContext);
  const { changeRoute } = useContext(RouterContext);

  const cryptoColor = useMemo(() => {
    const analyzedCryptoColor = cryptoColors[walletItem.symbol];
    return analyzedCryptoColor || '#000000';
  }, [walletItem]);
  
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
      flexDirection: 'column',
      alignItems: 'center',
    },
    priceText: {
      color: theme.colors.text,
    },
    amount: {
      color: theme.colors.text,
      opacity: 0.8,
    },

    actions: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      margin: 5,
    },
    actionText: {
      color: theme.colors.actionText,
    },
    actionIcon: {
      color: theme.colors.actionText,
      opacity: 1,
    },
    action: {
      paddingHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      borderRadius: 5,
    },
    actionEdit: {
      backgroundColor: theme.colors.action,
    },
    actionDelete: {
      backgroundColor: '#e41a01',
    }
  }), [theme, cryptoColor]);

  const actions = useCallback(() => (
    <View style={styles.actions}>
      <Pressable style={[styles.action, styles.actionEdit]} onPress={editWalletItem}>
        <Pen size={20} style={styles.actionIcon} />
        <TranslationText id="wallet.actions.edit" style={styles.actionText} />
      </Pressable>
      <Pressable style={[styles.action, styles.actionDelete]} onPress={deleteWalletItem}>
        <Trash size={20} style={styles.actionIcon} />
        <TranslationText id="wallet.actions.delete" style={styles.actionText} />
      </Pressable>
    </View>
  ), []);

  return (
    <ReanimatedSwipeable
      friction={2}
      rightThreshold={40}
      renderRightActions={actions}
    >
      <Pressable
        style={styles.container}
        onPress={() => changeRoute(RouteEnum.WALLET_DETAILS, walletItem.symbol)}
        key={walletItem.id}
      >
        <Image
          style={styles.image}
          src={walletItem.image}
        />
        <View style={styles.main}>
          <Text style={styles.title}>{walletItem.name}</Text>
          <View style={styles.symbol}>
            <View style={styles.symbolIndicator} />
            <Text style={styles.symbolText}>{walletItem.symbol}</Text>
          </View>
        </View>
        <View style={styles.price}>
          <FormatPrice style={styles.priceText} amount={walletItem.totalPrice} />
          <Text style={styles.amount}>{walletItem.amount} coins</Text>
        </View>
        <ChevronRight size="15" color={theme.colors.muted} />
      </Pressable>
    </ReanimatedSwipeable>
  )
});

export default WalletItem;
