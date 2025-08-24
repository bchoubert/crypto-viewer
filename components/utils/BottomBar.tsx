import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../../contexts/theme.provider";
import { RouterContext } from "../../contexts/router.provider";
import { RouteEnum } from "../../types/route.enum";

import { Coins, Wallet, ChevronLeft } from 'lucide-react-native';
import TranslationText from "./TranslationText";

const BottomBar: FC = memo(() => {
  const { activeRoute, changeRoute, cryptoColor } = useContext(RouterContext);
  const { theme } = useContext(ThemeContext);

  const isBackActive = useMemo(() => {
    return [RouteEnum.DETAILS, RouteEnum.WALLET_DETAILS].includes(activeRoute);
  }, [activeRoute]);

  const actionColor = useMemo(() => cryptoColor || theme.colors.action, [cryptoColor, theme]);

  const back = useCallback(() => {
    if (activeRoute === RouteEnum.WALLET_DETAILS) {
      changeRoute(RouteEnum.WALLET);
    }
    if (activeRoute === RouteEnum.DETAILS) {
      changeRoute(RouteEnum.LIST);
    }
  }, [activeRoute, changeRoute]);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      height: 60,
      padding: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.elevated,
      borderTopWidth: 1,
      borderTopColor: theme.colors.text,
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: '100%',
    },
    item_text: {
      color: theme.colors.text,
      shadowColor: theme.colors.text,
    },
    item_first: {
      borderRightWidth: 1,
      borderRightColor: theme.colors.muted,
    },
    item_active: {
      borderBottomColor: theme.colors.elevated,
      color: theme.colors.action,
    },
    centerBackAction: {
      position: 'absolute',
      left: (Dimensions.get('window').width / 2) - 50,
      top: -50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      height: 100,
      width: 100,
      backgroundColor: actionColor,
      borderWidth: 5,
      borderColor: theme.colors.background,
      zIndex: 2,
    },
    centerBackActionText: {
      color: theme.colors.actionText,
      fontSize: 15,
      shadowColor: theme.colors.text,
    }
  }), [theme, actionColor]);

  return (
    <View style={styles.container}>
      <Pressable style={[styles.item, styles.item_first]} onPress={() => changeRoute(RouteEnum.LIST)}>
        <Coins size={activeRoute === RouteEnum.LIST ? 18 : 15} style={[activeRoute === RouteEnum.LIST ? styles.item_active : styles.item_text]} />
        <TranslationText id="menu.prices" style={[activeRoute === RouteEnum.LIST ? styles.item_active: styles.item_text]} />
      </Pressable>

      {isBackActive && (
        <Pressable style={styles.centerBackAction} onPress={() => back()}>
          <ChevronLeft size={25} style={styles.centerBackActionText} />
          <TranslationText id="menu.back" style={styles.centerBackActionText} />
        </Pressable>
      )}

      <Pressable style={[styles.item]} onPress={() => changeRoute(RouteEnum.WALLET)}>
        <Wallet size={activeRoute === RouteEnum.WALLET ? 18 : 15} style={[activeRoute === RouteEnum.WALLET ? styles.item_active : styles.item_text]} />
        <TranslationText id="menu.wallet" style={[activeRoute === RouteEnum.WALLET ? styles.item_active : styles.item_text]} />
      </Pressable>
    </View>
  )
});

export default BottomBar;
