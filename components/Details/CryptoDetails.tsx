import { FC, memo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import ECrypto from "@/constants/cryptos.enum";
import CryptoDetailsTop from "./CryptoDetailsTop";
import CryptoDetailsBottom from "./CryptoDetailsBottom";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface CryptoDetailsProps {
  id: ECrypto;
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    position: 'relative',
    maxHeight: '100%',
  },
});

const CryptoDetails: FC<CryptoDetailsProps> = memo(({
  id,
}) => (
  <View style={styles.container}>
    <CryptoDetailsTop id={id} />
    <CryptoDetailsBottom id={id} />
  </View>
));

export default CryptoDetails;