import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/theme.provider";
import { RouterContext } from "../../contexts/router.provider";
import { MarketContext } from "../../contexts/market.provider";
import { Bolt, Star } from "lucide-react-native";
import { RouteEnum } from "../../types/route.enum";
import { SettingsContext } from "../../contexts/settings.provider";

const MenuBar: FC = memo(() => {
  const { cryptoColor, cryptoSymbol, activeRoute, changeRoute } = useContext(RouterContext);
  const { getItem } = useContext(MarketContext);
  const { theme } = useContext(ThemeContext);
  const { isFavourite, toggleFavourite } = useContext(SettingsContext);

  const goToSettings = useCallback(() => {
    changeRoute(RouteEnum.SETTINGS);
  }, [changeRoute]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: cryptoColor || theme.colors.background,
      borderBottomColor: cryptoColor || theme.colors.action,
      borderBottomWidth: 1,
    },
    subcontainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      height: 40,
      width: 40,
      marginLeft: 10,
      marginRight: 10,
    },
    title: {
      color: theme.colors.action,
      fontWeight: 'bold',
      fontSize: 20,
    },
    titleCrypto: {
      paddingLeft: 8,
      color: theme.colors.actionText,
      fontWeight: 'bold',
      fontSize: 20,
    },
    rightAction: {
      paddingRight: 8,
    },
    rightIcon: {
      color: theme.colors.action,
      opacity: 1,
    },
    rightIconWhite: {
      color: theme.colors.actionText,
      opacity: 1,
    }
  }), [theme, cryptoColor]);

  const crypto = useMemo(() => {
    if (!cryptoSymbol) {
      return null;
    }
    return getItem(cryptoSymbol);
  }, [cryptoSymbol, getItem]);

  const rightActions = useMemo(() => {
    if (cryptoSymbol) {
      const isCryptoFavourite = isFavourite(cryptoSymbol);

      return (
        <>
          <Pressable style={styles.rightAction} onPress={() => toggleFavourite(cryptoSymbol)}>
            <Star fill={isCryptoFavourite ? 'white' : 'transparent'} style={styles.rightIconWhite} size={25} />
          </Pressable>
          <Pressable style={styles.rightAction} onPress={goToSettings}>
            <Bolt style={styles.rightIconWhite} size={25} />
          </Pressable>
        </>
      );
    }
    
    if (activeRoute !== RouteEnum.SETTINGS) {
      return (
        <Pressable style={styles.rightAction} onPress={goToSettings}>
          <Bolt style={styles.rightIcon} size={25} />
        </Pressable>
      );
    }
  }, [activeRoute, cryptoSymbol, goToSettings, styles,
      isFavourite, toggleFavourite]);

  return (
    <View style={styles.container}>
      {(cryptoSymbol && crypto) ? (
        <View style={styles.subcontainer}>
          <Text style={styles.titleCrypto}>{crypto.name} ● {cryptoSymbol}</Text>
        </View>
      ) : (
        <View style={styles.subcontainer}>
          <Image style={styles.image} source={require('../../assets/icon.png')} />
          <Text style={styles.title}>Crypto Viewer</Text>
        </View>
      )}
  
      <View style={styles.subcontainer}>
        {rightActions}
      </View>
    </View>
  );
});

export default MenuBar;
