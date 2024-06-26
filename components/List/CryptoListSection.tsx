import { FC, memo, useContext, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import { ThemeContext } from "@/contexts/theme.provider";

interface CryptoListSectionProps {
  title: string;
}

const CryptoListSection: FC<CryptoListSectionProps> = memo(({
  title
}) => {
  const theme = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    section: {
      backgroundColor: theme[100],
      paddingLeft: 15,
      paddingTop: 2,
      paddingBottom: 2,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: theme[900],
    }
  }), [theme]);
  
  return (
    <Text style={styles.section}>{title}</Text>
  );
});

export default CryptoListSection;