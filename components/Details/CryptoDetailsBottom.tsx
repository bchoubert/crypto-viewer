import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { openURL } from "expo-linking";

import CryptoStats from "./CryptoStats";
import CryptoGraph from "./CryptoGraph";

import Icon, { EIcon } from "../Utils/Icon";

import ECrypto from "@/constants/cryptos.enum";
import CryptoDetails from "@/constants/cryptodetails.constants";
import { ThemeContext } from "@/contexts/theme.provider";
import { TranslationsContext } from "@/contexts/translations.provider";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const circleHeight = 0.5 * windowWidth;

interface CryptoDetailsBottomProps {
  id: ECrypto;
}

const CryptoDetailsBottom: FC<CryptoDetailsBottomProps> = memo(({
  id,
}) => {
  const theme = useContext(ThemeContext);
  const translation = useContext(TranslationsContext);
    
  const styles = useMemo(() => StyleSheet.create({
    bottom: {
      width: '100%',
      flex: 1,
      padding: 10,
      position: 'relative',
      top: -50,
      height: windowHeight - circleHeight - 25,
      maxHeight: windowHeight - circleHeight - 25,
      minHeight: windowHeight - circleHeight - 25,
    },
    scroll: {
      paddingTop: 60,
    },
    description: {
      color: theme[900]
    },
    website: {
      marginTop: 5,
      display: 'flex',
      flexDirection: 'row',
      gap: 3,
      alignItems: 'center',
    },
    title: {
      marginTop: 10,
      fontWeight: 'bold',
      color: theme[900]
    }
  }), [theme]);

  const details = useMemo(() => CryptoDetails[id] || { color: '#222222' }, [id]);

  const openWebsite = useCallback(() => {
    openURL(details.website);
  }, [details]);

  return (
    <View style={styles.bottom}>
      <ScrollView>
        <View style={styles.scroll}>
          <Text style={styles.title}>{translation.details.details}</Text>
          <Text style={styles.description}>{details.description}</Text>
          <Pressable onPress={openWebsite} style={styles.website}>
            <Text style={{ color: details.color }}>{details.website}</Text>
            <Icon name={EIcon.externalLink} width={12} color={details.color} />
          </Pressable>
                
          <Text style={styles.title}>{translation.details.graph}</Text>
          <CryptoGraph id={id} />

          <Text style={styles.title}>{translation.details.stats}</Text>
          <CryptoStats id={id} />
        </View>
      </ScrollView>
    </View>
    
  )
});

export default CryptoDetailsBottom;
