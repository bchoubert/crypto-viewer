import { quoteDetails } from "@/types/crypto.types";
import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors, { EColor } from "@/assets/Colors";
import { printNumber } from '@/services/print.service';
import Icon, { EIcon } from "../Utils/Icon";
import { SettingsContext } from "@/contexts/settings.provider";
import { WalletItem } from "@/types/wallet.types";
import { CryptoContext } from "@/contexts/crypto.provider";
import { TranslationsContext } from "@/contexts/translations.provider";

interface WalletTotalItemProps {
  item: WalletItem;
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
    width: 70,
  },
  quantity: {
    color: Colors.gray,
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: '500',
  }
})

const WalletTotalItem: FC<WalletTotalItemProps> = memo(({
  item,
}) => {
  const { wallet } = useContext(SettingsContext);
  const { settings } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);
  const translation = useContext(TranslationsContext);

  const [quoteSymbol] = useMemo(() => {
    const quoteSymbol = quoteDetails[settings.quote]?.symbol;

    return [
      quoteSymbol,
    ]
  }, [settings]);

  const [quantity, amount] = useMemo(() => {
    let totalPrice = 0;
  
    wallet.forEach((w: WalletItem) => {
      const c = cryptos.find(c => c.id === w.id);

      if (c?.rate) {
        totalPrice += w.quantity * c.rate;
      }
    });

    return [
      item.quantity,
      totalPrice,
    ];
  }, [item, wallet]);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.titles}>
          <Text style={styles.title}>{translation.wallet.total}</Text>  
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.numbers}>
          <Text style={styles.quantity}>{printNumber(quantity, 'tokens')}</Text>
          {amount ? (
            <Text>{printNumber(amount, quoteSymbol)}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
});

export default WalletTotalItem;