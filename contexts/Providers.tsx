import { FC, memo, ReactNode } from "react";
import RouterProvider from "./router.provider";
import StorageProvider from "./storage.provider";
import SettingsProvider from "./settings.provider";
import ThemeProvider from "./theme.provider";
import MarketProvider from "./market.provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TranslationProvider from "./translation.provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = memo(({
  children,
}) => (
  <GestureHandlerRootView>
    <RouterProvider>
      <StorageProvider>
        <SettingsProvider>
          <ThemeProvider>
            <TranslationProvider>
              <MarketProvider>
                {children}
              </MarketProvider>
            </TranslationProvider>
          </ThemeProvider>
        </SettingsProvider>
      </StorageProvider>
    </RouterProvider>
  </GestureHandlerRootView>
));

export default Providers;
