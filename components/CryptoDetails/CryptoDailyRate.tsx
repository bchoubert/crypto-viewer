import React, { FC, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import Colors from '../../assets/Colors';

import CryptoViewerIconsMap from '../../assets/fonts/baseIcons/CryptoViewerIconsMap';

import UtilsService from '../../services/Utils.service';

const HeightTransitionView = (props) => {
  const translateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      translateAnim,
      {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }
    ).start();
  }, [translateAnim]);

  const animatedStyle = { transform: [ { scale: translateAnim } ] };

  return (
    <Animated.View style={{ ...props.style, ...animatedStyle }}>
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rate_container: {
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25
  },
  rate_plus: {
    padding: 8,
    borderRadius: 17,
    fontSize: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderBottomColor: Colors.white,
    borderTopColor: Colors.white,
    borderLeftColor: Colors.green,
    borderRightColor: Colors.green
  },
  rate_minus: {
    padding: 8,
    borderRadius: 17,
    fontSize: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderBottomColor: Colors.white,
    borderTopColor: Colors.white,
    borderLeftColor: Colors.red,
    borderRightColor: Colors.red
  },
  rate_icon_plus: {
    fontSize: 15,
    paddingRight: 5,
    color: Colors.green,
  },
  rate_icon_minus: {
    fontSize: 15,
    paddingRight: 5,
    color: Colors.red,
  },
  rate_number_plus: {
    color: Colors.green,
  },
  rate_number_minus: {
    color: Colors.red
  },

  cryptoViewerIcon: {
    fontSize: 20,
    fontFamily: 'crypto-viewer'
  }
});

interface CryptoDailyRateProps {
  rate: number;
}

const CryptoDailyRate: FC<CryptoDailyRateProps> = ({
  rate,
}) => {

  return (
    <View style={styles.rate_container}>
      {rate && (
        (rate < 0) ? (
          <HeightTransitionView style={styles.rate_minus}>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon_minus }}>
              {CryptoViewerIconsMap.minus.unicode}
            </Text>
            <Text style={styles.rate_number_minus}>
              {`${UtilsService.truncateNumber(Math.abs(rate))}%`}
            </Text>
          </HeightTransitionView>
        ) : (
          <HeightTransitionView style={styles.rate_plus}>
            <Text style={{ ...styles.cryptoViewerIcon, ...styles.rate_icon_plus }}>
              {CryptoViewerIconsMap.plus.unicode}
            </Text>
            <Text style={styles.rate_number_plus}>
              {`${UtilsService.truncateNumber(Math.abs(rate))}%`}
            </Text>
          </HeightTransitionView>
        )
      )}
    </View>
  );
}

export default CryptoDailyRate;
