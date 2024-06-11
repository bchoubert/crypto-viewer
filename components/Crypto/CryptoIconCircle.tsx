import Colors, { EColor } from "@/assets/Colors";
import { FC, ReactNode, memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface CryptoIconCircleProps {
  children: ReactNode;
  color: string;
  statusColor?: EColor;
}

const CryptoIconCircle: FC<CryptoIconCircleProps> = memo(({
  children,
  color,
  statusColor,
}) => {
  const styles = useMemo(() => StyleSheet.create({
    container: {
      backgroundColor: color,
      color: Colors.white,
      height: 36,
      width: 36,
      padding: 5,
      borderRadius: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    statusIndicator: {
      position: 'absolute',
      bottom: 1,
      right: 1,
      width: 10,
      height: 10,
      borderColor: Colors.white,
      borderWidth: 2,
      borderRadius: 10,
      marginLeft: 5
    },
  }), [color]);

  return (
    <View style={styles.container}>
      {children}
      {statusColor ? (
        <View style={{ ...styles.statusIndicator, backgroundColor: statusColor }} />
      ) : null}
    </View>
  );
});

export default CryptoIconCircle;
