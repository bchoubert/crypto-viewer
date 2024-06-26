import { FC, memo, useContext, useMemo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import CryptoDetailsTop from "./CryptoDetailsTop";
import CryptoDetailsBottom from "./CryptoDetailsBottom";

import ECrypto from "@/constants/cryptos.enum";
import { ThemeContext } from "@/contexts/theme.provider";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface CryptoDetailsProps {
  id: ECrypto;
}

const CryptoDetails: FC<CryptoDetailsProps> = memo(({
  id,
}) => {
  const theme = useContext(ThemeContext);
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: windowHeight,
      width: windowWidth,
      position: 'relative',
      maxHeight: '100%',
      backgroundColor: theme[100]
    },
  }), [theme]);
    
  return (
    <View style={styles.container}>
      <CryptoDetailsTop id={id} />
      <CryptoDetailsBottom id={id} />
    </View>
  );
});

export default CryptoDetails;