import CryptoDetails from "@/constants/cryptodetails.constants";
import ECrypto from "@/constants/cryptos.enum";
import { FC, memo, useCallback, useMemo } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { openURL } from "expo-linking";
import Icon, { EIcon } from "../Utils/Icon";
import CryptoStats from "./CryptoStats";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const circleHeight = 0.5 * windowWidth;

interface CryptoDetailsBottomProps {
  id: ECrypto;
}

const styles = StyleSheet.create({
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
  }
});

const CryptoDetailsBottom: FC<CryptoDetailsBottomProps> = memo(({
  id,
}) => {
  const details = useMemo(() => CryptoDetails[id], [id]);

  const openWebsite = useCallback(() => {
    openURL(details.website);
  }, [details]);

  return (
    <View style={styles.bottom}>
      <ScrollView>
        <View style={styles.scroll}>
          <Text>{details.description}</Text>
          
          <Pressable onPress={openWebsite} style={styles.website}>
            <Text style={{ color: details.color }}>{details.website}</Text>
            <Icon name={EIcon.externalLink} width={12} color={details.color} />
          </Pressable>
          <Text style={styles.title}>Stats</Text>
          <CryptoStats id={id} />
        </View>
      </ScrollView>
    </View>
    
  )
});

export default CryptoDetailsBottom;
