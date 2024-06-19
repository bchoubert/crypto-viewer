import { FC, memo, useContext, useMemo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CryptoIcon from "../Utils/CryptoIcon";
import ECrypto from "@/constants/cryptos.enum";
import { SettingsContext } from "@/contexts/settings.provider";
import { quoteDetails } from "@/types/crypto.types";
import FadeInView from "./FadeInView";
import Colors from "@/assets/Colors";
import { printNumber } from "@/services/print.service";
import { CryptoContext } from "@/contexts/crypto.provider";
import CryptoDetails from "@/constants/cryptodetails.constants";

const windowWidth = Dimensions.get('window').width;

const circleHeight = 0.5 * windowWidth;

interface CryptoDetailsTopProps {
  id: ECrypto;
}

const CryptoDetailsTop: FC<CryptoDetailsTopProps> = memo(({
  id
}) => {
  const { settings } = useContext(SettingsContext);
  const { cryptos } = useContext(CryptoContext);

  const CryptoIconInstance = useMemo(() => CryptoIcon[id.toLowerCase() as ECrypto], [id]);
  const details = useMemo(() => CryptoDetails[id], [id]);
  const data = useMemo(() => cryptos.find(c => c.id.toLowerCase() === id?.toLowerCase()), [cryptos, id]);
  const quoteSymbol = useMemo(() => quoteDetails[settings.quote]?.symbol, [settings]);

  const styles = useMemo(() => StyleSheet.create({
    top_circle: {
      height: 3 * windowWidth,
      width: 3 * windowWidth,
      position: 'absolute',
      left: -1 * windowWidth,
      top: -2.5 * windowWidth,
      backgroundColor: details.color,
      borderRadius: 3 * windowWidth,
      zIndex: 2,
    },
    top: {
      width: windowWidth,
      height: circleHeight,
      color: Colors.white,
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3,
    },
    crypto_icon: {
      margin: 20,
      height: 30,
      width: 30,
    },
    crypto_name: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    rate: {
      height: 30,
      backgroundColor: Colors.white,
      borderRadius: 15,
      paddingLeft: 10,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5
    }
  }), []);

  return (
    <>
      <FadeInView style={styles.top_circle} />
      <View style={styles.top}>
        {CryptoIconInstance ? (<CryptoIconInstance style={styles.crypto_icon} fill={Colors.white} />) : null}
        <Text style={styles.crypto_name}>{data?.name}</Text>
        {data?.rate && (
          <View style={styles.rate}>
            <Text>{printNumber(data?.rate, quoteSymbol)}</Text>
          </View>)}
      </View>
    </>
  )
});

export default CryptoDetailsTop;
