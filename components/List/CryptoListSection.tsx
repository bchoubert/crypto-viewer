import Colors from "@/assets/Colors";
import { FC, memo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CryptoListSectionProps {
  title: string;
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.white,
    paddingLeft: 15,
    paddingTop: 2,
    paddingBottom: 2,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

const CryptoListSection: FC<CryptoListSectionProps> = memo(({
  title
}) => (
  <Text style={styles.section}>{title}</Text>
));

export default CryptoListSection;