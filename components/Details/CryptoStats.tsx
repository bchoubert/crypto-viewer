import ECrypto from "@/constants/cryptos.enum";
import { SettingsContext } from "@/contexts/settings.provider";
import { fetchCrypto24hrStats, fetchCryptoBuyPrice, fetchCryptoSellPrice } from "@/services/network.service";
import { Stats } from "@/types/stats.types";
import { FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconItem from "../Utils/IconItem";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { TranslationsContext } from "@/contexts/translations.provider";
import { EIcon } from "../Utils/Icon";
import { printNumber } from "@/services/print.service";
import { quoteDetails } from "@/types/crypto.types";

interface CryptoStatsProps {
  id: ECrypto;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    flexBasis: '50%',
  }
});

const CryptoStats: FC<CryptoStatsProps> = memo(({
  id,
}) => {
  const { settings } = useContext(SettingsContext);
  const translation = useContext(TranslationsContext);

  const details = useMemo(() => CryptoDetails[id] || { color: '#222222' }, [id]);
  const quoteSymbol = useMemo(() => quoteDetails[settings.quote]?.symbol, [settings]);

  const [stats, setStats] = useState<Stats>();

  const refreshStats = useCallback(async () => {
    if (!settings) {
      return;
    }

    Promise.all([
      fetchCrypto24hrStats(id, settings.quote),
      fetchCryptoBuyPrice(id, settings.quote),
      fetchCryptoSellPrice(id, settings.quote),
    ]).then(([stats24h, buy, sell]) => {
      setStats({
        high: parseFloat(stats24h.high),
        low: parseFloat(stats24h.low),
        last: parseFloat(stats24h.last),
        open: parseFloat(stats24h.open),

        buy: parseFloat(buy.data.amount),
        sell: parseFloat(sell.data.amount),
      });
      return;
    });
  }, [settings, id]);

  useEffect(() => {
    refreshStats();
  }, [refreshStats]);

  if (!stats) {
    return;
  }

  return (
    <View style={styles.container}>
      {!isNaN(stats.high) && (
        <IconItem
          color={details.color}
          icon={EIcon.arrowUp}
          text={translation.details.high}
          subtext={printNumber(stats.high, quoteSymbol)}
          style={styles.item}
        />
      )} 
      {!isNaN(stats.low) && (
        <IconItem
          color={details.color}
          icon={EIcon.arrowDown}
          text={translation.details.low}
          subtext={printNumber(stats.low, quoteSymbol)}
          style={styles.item}
        />
      )}
      {!isNaN(stats.buy) && (
        <IconItem
          color={details.color}
          icon={EIcon.plus}
          text={translation.details.buy}
          subtext={printNumber(stats.buy, quoteSymbol)}
          style={styles.item}
        />
      )}
      {!isNaN(stats.sell) && (  
        <IconItem
          color={details.color}
          icon={EIcon.minus}
          text={translation.details.sell}
          subtext={printNumber(stats.sell, quoteSymbol)}
          style={styles.item}
        />
      )}
      {!isNaN(stats.open) && (
        <IconItem
          color={details.color}
          icon={EIcon.chevronRight}
          text={translation.details.open}
          subtext={printNumber(stats.open, quoteSymbol)}
          style={styles.item}
        />
      )}
      {!isNaN(stats.last) && (
        <IconItem
          color={details.color}
          icon={EIcon.chevronLeft}
          text={translation.details.last}
          subtext={printNumber(stats.last, quoteSymbol)}
          style={styles.item}
        />
      )}
    </View>
  );
});

export default CryptoStats;