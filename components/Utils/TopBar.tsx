import { FC, memo, useCallback, useContext, useMemo } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useGlobalSearchParams, usePathname, useRouter } from 'expo-router';

import Icon, { EIcon } from "./Icon";

import Colors, { EColor } from "@/assets/Colors";
import { SettingsContext } from "@/contexts/settings.provider";
import { ThemeContext } from "@/contexts/theme.provider";

const TopBar: FC = memo(() => {
  const { hasFavourite, toggleFavourite, settings } = useContext(SettingsContext);
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    topBar: {
      backgroundColor: theme[100],
      flexBasis: 60,
      flexGrow: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: theme[300],
    },
    topBarLeft: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    topBarRight: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      paddingLeft: 8,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
    },
    topBarIcon: {
      width: 50,
      height: 50,
    },
    topBarText: {
      color: Colors.blue,
      fontSize: 20,
      paddingLeft: 10,
    },
    topBarButton: {
      height: 60,
      width: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  }), [theme]);

  const pathname = usePathname();
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  const showBackButton = useMemo(() => !(['/', '/wallet'].includes(pathname)), [pathname]);
  
  const navigateToSettings = useCallback(() => router.navigate('/settings'), [router]);
  const back = useCallback(() => router.back(), [router]);

  const isFavourite = useMemo(() => hasFavourite(id as string), [id, settings]);

  const toggleFavouriteProxy = useCallback(() => {
    if (!id) {
      return;
    }

    toggleFavourite(id as string);
  }, [isFavourite, id, settings, toggleFavourite]);

  return (
    <View style={styles.topBar}>
      <View style={styles.topBarLeft}>
        {showBackButton ? (
          <Pressable onPress={back} style={styles.topBarButton}>
            <Icon name={EIcon.chevronLeft} color={EColor.gray} />
          </Pressable>
        ) : (
          <View style={styles.iconContainer}>
            <Image style={styles.topBarIcon} source={require('../../assets/icon.png')} />
            <Text style={styles.topBarText}>Crypto Viewer</Text>
          </View>
        )}
      </View>
      <View style={styles.topBarRight}>
        {id ? (
          <Pressable onPress={toggleFavouriteProxy} style={styles.topBarButton}>
            <Icon color={EColor.gray} name={isFavourite ? EIcon.starFull : EIcon.star} width={22} />
          </Pressable>
        ) : null}
        <Pressable onPress={navigateToSettings} style={styles.topBarButton}>
          <Icon color={EColor.gray} name={EIcon.cog} width={22} />
        </Pressable>
      </View>
    </View>
  );
});

export default TopBar;
