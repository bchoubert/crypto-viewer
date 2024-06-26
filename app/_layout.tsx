import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import StatusBar from '@/components/Utils/StatusBar';
import TopBar from '@/components/Utils/TopBar';
import CryptoProvider from '@/contexts/crypto.provider';
import CVThemeProvider from '@/contexts/theme.provider';
import SettingsProvider from '@/contexts/settings.provider';
import TranslationsProvider from '@/contexts/translations.provider';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <SettingsProvider>
        <TranslationsProvider>
          <CVThemeProvider>
            <CryptoProvider>
              <StatusBar />
              <TopBar />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
            </CryptoProvider>
          </CVThemeProvider>
        </TranslationsProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}
