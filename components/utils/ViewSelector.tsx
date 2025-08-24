import { FC, memo, useCallback, useContext, useEffect, useState } from "react";
import { RouterContext } from "../../contexts/router.provider";
import { Animated, Dimensions, StyleSheet, useAnimatedValue } from "react-native";
import List from "../views/List";
import Details from "../views/Details";
import { RouteEnum } from "../../types/route.enum";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Wallet from "../views/Wallet";
import Settings from "../views/Settings";
import { ThemeContext } from "../../contexts/theme.provider";

const ViewSelector: FC = memo(() => {
  const { activeRoute, cryptoSymbol } = useContext(RouterContext);
  const { theme } = useContext(ThemeContext);

  const statusBarHeight = getStatusBarHeight();
  const screenHeight = Dimensions.get('window').height;

  const [storedComponent, setStoredComponent] = useState(<List />);

  // ANIMATIONS
  const fadeAnim = useAnimatedValue(1);

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const setComponentToShow = useCallback((activeRouteToMatch: string) => {
    let component = <List />;

    switch(activeRouteToMatch) {
      case RouteEnum.SETTINGS:
        component = <Settings />;
        break;
      case RouteEnum.DETAILS:
      case RouteEnum.WALLET_DETAILS:
        component = <Details cryptoSymbol={cryptoSymbol} />;
        break;
      case RouteEnum.WALLET:
        component = <Wallet />;
        break;
      case RouteEnum.LIST:
      default:
        component = <List />;
    }

    setStoredComponent(component);
  }, [cryptoSymbol]);

  useEffect(() => {
    fadeOut();
    setTimeout(() => {
      setComponentToShow(activeRoute);
      setTimeout(() => {
        fadeIn();
      }, 100);
    }, 500);
  }, [activeRoute, fadeOut, fadeIn, setComponentToShow]);

  const styles = StyleSheet.create({
    container: {
      height: screenHeight - (statusBarHeight + 50 + 60),
      overflow: 'scroll',
      maxHeight: screenHeight,
      backgroundColor: theme.colors.background,
    },
  })

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {storedComponent}
    </Animated.View>
  )
});

export default ViewSelector;
