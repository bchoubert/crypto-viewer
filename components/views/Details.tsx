import { FC, memo, useContext, useMemo } from "react";
import { Text, ScrollView } from "react-native";
import { MarketContext } from "../../contexts/market.provider";
import DetailsChange from "../business/details/DetailsChange";
import DetailsGraph from "../business/details/DetailsGraph";
import DetailsMarketStats from '../business/details/DetailsMarketStats';
import { RouterContext } from "../../contexts/router.provider";
import DetailsInvestment from "../business/details/DetailsInvestment";
import DetailsHeader from "../business/details/DetailsHeader";

interface DetailsProps {
  cryptoSymbol: string;
}

const Details: FC<DetailsProps> = memo(({
  cryptoSymbol,
}) => {
  const { getItem } = useContext(MarketContext);
  const { cryptoColor } = useContext(RouterContext);

  const crypto = useMemo(() => getItem(cryptoSymbol), [cryptoSymbol, getItem]);

  if (!crypto) {
    return null;
  }

  return (
    <ScrollView>
      <DetailsHeader crypto={crypto} />

      <DetailsChange crypto={crypto} />
      <DetailsGraph crypto={crypto} color={cryptoColor} />

      <DetailsMarketStats crypto={crypto} />

      <DetailsInvestment crypto={crypto} />
    </ScrollView>
  )
});

Details.displayName = '<Details />';

export default Details;
