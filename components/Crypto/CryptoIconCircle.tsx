import Colors from "@/assets/Colors";
import { FC, ReactNode, memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface CryptoIconCircleProps {
  children: ReactNode;
  color: string;
}

const CryptoIconCircle: FC<CryptoIconCircleProps> = memo(({
  children,
  color,
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
      justifyContent: 'center'
    }
  }), [color]);

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
});

export default CryptoIconCircle;
