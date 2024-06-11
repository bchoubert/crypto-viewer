import Colors, { EColor } from "@/assets/Colors";
import { FC, memo, useCallback, useMemo } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import Icon, { EIcon } from "../Icon";
import { usePathname, useRouter } from 'expo-router';

interface TopBarProps {

}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: Colors.white,
    flexBasis: 60,
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarLeft: {
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
})

const TopBar: FC<TopBarProps> = memo(() => {
  const pathname = usePathname();
  const router = useRouter();

  const showBackButton = useMemo(() => !(['/', '/wallet'].includes(pathname)), [pathname]);
  
  const navigateToSettings = useCallback(() => router.navigate('/settings'), [router]);
  const back = useCallback(() => router.back(), [router]);

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
      <View>
        <Pressable onPress={navigateToSettings} style={styles.topBarButton}>
          <Icon color={EColor.gray} name={EIcon.cog} />
        </Pressable>
      </View>
    </View>
  );
});

export default TopBar;
