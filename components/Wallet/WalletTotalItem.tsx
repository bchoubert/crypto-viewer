import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { quoteDetails } from "@/types/crypto.types";
import { printNumber } from '@/services/print.service';
import { SettingsContext } from "@/contexts/settings.provider";
import { WalletItem } from "@/types/wallet.types";
import { CryptoContext } from "@/contexts/crypto.provider";
import { TranslationsContext } from "@/contexts/translations.provider";
import { ThemeContext } from "@/contexts/theme.provider";

interface WalletTotalItemProps {
  item: WalletItem;
}

const WalletTotalItem: FC<WalletTotalItemProps> = memo(({
  item,
}) => {
  const { wallet } = useContext(SettingsContext);
  const { settings } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);
  const translation = useContext(TranslationsContext);
  const theme = useContext(ThemeContext);
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 60,
      paddingLeft: 15,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 0,
      justifyContent: 'space-between',
      backgroundColor: theme[100],
      position: 'relative',
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
      color: theme[500],
    },
    titles: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: '500',
      color: theme[900]
    },
    price: {
      color: theme[900]
    }
  }), [theme]);

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
            <Text style={styles.price}>{printNumber(amount, quoteSymbol)}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
});

export default WalletTotalItem;