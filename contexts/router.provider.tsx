import { createContext, FC, memo, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { RouteEnum } from "../types/route.enum";
import { BackHandler } from "react-native";
import { cryptoColors } from "../assets/CryptoColors";

interface RouterContextInterface {
  activeRoute: RouteEnum;

  cryptoSymbol: string;
  cryptoColor?: string;

  changeRoute: (routeToActivate: RouteEnum, detailsToSet?: string) => void;
}

export const RouterContext = createContext<RouterContextInterface>({
  activeRoute: RouteEnum.LIST,
  cryptoSymbol: '',
  changeRoute: () => {},
});

interface RouterProviderProps {
  children: ReactNode;
}

const RouterProvider: FC<RouterProviderProps> = memo(({
  children,
}) => {
  const [activeRoute, setActiveRoute] = useState<RouteEnum>(RouteEnum.LIST);
  const [cryptoSymbol, setCryptoSymbol] = useState<string>('');

  const cryptoColor = useMemo(() => {
    const analyzedCryptoColor = cryptoColors[cryptoSymbol];
    return analyzedCryptoColor;
  }, [cryptoSymbol]);

  const changeRoute = useCallback((routeToActivate: RouteEnum, cryptoSymbolToSet?: string) => {
    setActiveRoute(routeToActivate);
    setCryptoSymbol(cryptoSymbolToSet || '');
  }, []);

  const registerBackHandler = useCallback(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      function () {
        if (activeRoute !== RouteEnum.LIST) {
          if (activeRoute === RouteEnum.WALLET_DETAILS) {
            changeRoute(RouteEnum.WALLET);
          } else {
            changeRoute(RouteEnum.LIST);
          }

          return true;
        }

        // Bubbling up for native back action
        return false;
      },
    );

    // Unsubscribe the listener on unmount
    return () => subscription.remove();
  }, [activeRoute, changeRoute]);

  useEffect(registerBackHandler, [registerBackHandler]);

  const contextValues: RouterContextInterface = useMemo(() => ({
    activeRoute,
    cryptoSymbol,
    cryptoColor,
    changeRoute,
  }), [activeRoute, cryptoSymbol, cryptoColor, changeRoute]);

  return (
    <RouterContext.Provider value={contextValues}>
      {children}
    </RouterContext.Provider>
  );
});

export default RouterProvider;
